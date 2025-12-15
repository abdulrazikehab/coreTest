import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import helmet from 'helmet';
import { json, urlencoded } from 'express';
import { securityConfig } from '../src/config/security.config';

// Load environment variables FIRST
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

let cachedApp: any = null;

async function createApp() {
  if (cachedApp) {
    return cachedApp;
  }

  const logger = new Logger('Bootstrap');
  
  try {
    // Check required environment variables
    const requiredEnvVars = ['JWT_SECRET', 'DATABASE_URL'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      logger.error(`❌ Missing required environment variables: ${missingVars.join(', ')}`);
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
    
    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    
    // Enable cookie parser
    app.use(cookieParser());
    
    // Increase body limit for image uploads
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));

    app.setGlobalPrefix('api');
    
    // Enable CORS with credentials for cookies
    app.enableCors({
      origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        // List of allowed origins
        const allowedOrigins = [
          'http://localhost:4173',
          'http://localhost:3000',
          'http://localhost:8080',
          'http://127.0.0.1:4173',
          'http://127.0.0.1:3000',
          'http://127.0.0.1:8080',
          'http://192.168.0.108:4173',
          'http://192.168.0.108:8080',
          process.env.FRONTEND_URL,
          'https://core-test-zeta.vercel.app',
        ].filter(Boolean);
        
        // Check if origin is in allowed list
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        
        // Allow any subdomain of localhost (e.g., mystore.localhost:8080)
        if (origin.match(/^http:\/\/[\w-]+\.localhost(:\d+)?$/)) {
          return callback(null, true);
        }
        
        // Allow any subdomain of saa'ah.com
        if (origin.match(/^https?:\/\/[\w-]+\.saa'ah\.com$/)) {
          return callback(null, true);
        }
        
        // Allow local network IPs
        if (origin.match(/^http:\/\/192\.168\.\d+\.\d+(:\d+)?$/)) {
          return callback(null, true);
        }
        
        // Allow Vercel preview deployments
        if (origin.match(/^https:\/\/.*\.vercel\.app$/)) {
          return callback(null, true);
        }
        
        callback(new Error('Not allowed by CORS'));
      },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'Accept',
        'Origin',
        'Access-Control-Allow-Headers',
        'Access-Control-Request-Method',
        'Access-Control-Request-Headers',
        'X-Tenant-Id',
        'X-Tenant-Domain',
        'X-Session-ID',
        'X-Admin-API-Key'
      ],
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 204,
    });

    // Security Hardening - use minimal config for serverless
    try {
      app.use(helmet({
        contentSecurityPolicy: false, // Disable CSP for serverless
        crossOriginEmbedderPolicy: false,
      }));
    } catch (e) {
      logger.warn('Helmet configuration failed, continuing without it');
    }
    
    // Enable global validation
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }));
    
    // Add global filter to log validation errors
    try {
      const { ValidationExceptionFilter } = await import('../src/common/filters/validation-exception.filter');
      app.useGlobalFilters(new ValidationExceptionFilter());
    } catch (e) {
      logger.warn('Failed to load ValidationExceptionFilter, continuing without it');
    }
    
    // Initialize the app - this will initialize all modules
    try {
      await app.init();
      cachedApp = expressApp;
      logger.log('✅ Core service initialized for Vercel');
      return expressApp;
    } catch (initError: any) {
      logger.error('Failed during app.init():', initError?.message);
      logger.error('Init error stack:', initError?.stack);
      // Don't cache a failed app
      throw initError;
    }
  } catch (error: any) {
    logger.error('Failed to initialize core service:', error);
    logger.error('Error stack:', error?.stack);
    logger.error('Error details:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
    throw error;
  }
}

export default async function handler(req: express.Request, res: express.Response) {
  try {
    const app = await createApp();
    return app(req, res);
  } catch (error: any) {
    console.error('Error handling request:', error);
    console.error('Error stack:', error?.stack);
    console.error('Error details:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
    
    // Ensure response hasn't been sent
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? error?.message : undefined,
        stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
      });
    }
  }
}

