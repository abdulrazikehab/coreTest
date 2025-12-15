import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './email.processor';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          redis: {
            host: configService.get('REDIS_HOST') || 'localhost',
            port: configService.get('REDIS_PORT') || 6379,
            connectTimeout: process.env.VERCEL ? 1000 : 5000, // Fast timeout for serverless
            maxRetriesPerRequest: 1,
            lazyConnect: true, // Don't connect immediately
            enableReadyCheck: false,
            retryStrategy: (times: number) => {
              // Stop retrying after 2 attempts in serverless
              if (process.env.VERCEL && times > 2) {
                return null; // Stop retrying
              }
              return Math.min(times * 50, 2000);
            },
          },
        };
      },
      inject: [ConfigService],
    }),
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  providers: [EmailProcessor],
  exports: [BullModule],
})
export class JobsModule {}
