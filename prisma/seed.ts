// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  console.log('🔧 Starting demo data seed...');

  // Seed default partners first
  await seedDefaultPartners();
  
  // Seed subscription plans
  await seedSubscriptionPlans();

  // Get ALL existing tenants
  const tenants = await prisma.tenant.findMany();
  
  if (tenants.length === 0) {
    console.error('❌ No tenants found! Please create a tenant first by signing up.');
    process.exit(1);
  }
  
  console.log(`👉 Found ${tenants.length} tenant(s):`);
  tenants.forEach(t => {
    console.log(`   - ${t.id} (${t.name} - ${t.subdomain})`);
  });
  
  // Seed data for each tenant
  for (const tenant of tenants) {
    console.log(`\n🔄 Seeding data for tenant: ${tenant.name} (${tenant.id})...`);
    
    await seedTenantData(tenant.id);
  }

  console.log('\n🎉 Demo data seed complete!');
}

// Seed default partners (ASUS, Smart Line)
async function seedDefaultPartners() {
  console.log('\n🤝 Seeding default partners...');
  
  const defaultPartners = [
    {
      name: 'ASUS',
      nameAr: 'أسس',
      email: 'partners@asus.com',
      phone: '+966501234567',
      commissionType: 'PERCENTAGE' as const,
      commissionValue: 10,
      allowedFeatures: ['products', 'digital_cards', 'gaming'],
      isActive: true,
    },
    {
      name: 'Smart Line',
      nameAr: 'سمارت لاين',
      email: 'partners@smartline.sa',
      phone: '+966507654321',
      commissionType: 'PERCENTAGE' as const,
      commissionValue: 15,
      allowedFeatures: ['marketing', 'social_media', 'advertising'],
      isActive: true,
    },
  ];

  for (const partner of defaultPartners) {
    const existing = await prisma.partner.findUnique({
      where: { email: partner.email },
    });

    if (existing) {
      console.log(`  ⚠️ Partner ${partner.name} already exists – skipping`);
      continue;
    }

    await prisma.partner.create({ data: partner });
    console.log(`  ✅ Created partner: ${partner.name}`);
  }
}

// Seed subscription plans
async function seedSubscriptionPlans() {
  console.log('\n📋 Seeding subscription plans...');
  
  const defaultPlans = [
    {
      code: 'STARTER',
      name: 'Starter',
      nameAr: 'المبتدئ',
      description: 'Perfect for small businesses just getting started',
      descriptionAr: 'مثالية للأعمال الصغيرة التي تبدأ للتو',
      price: 99,
      currency: 'SAR',
      billingCycle: 'MONTHLY',
      features: [
        'Up to 100 products',
        'Basic analytics',
        'Email support',
        'Standard templates',
        'Basic payment integration',
      ],
      featuresAr: [
        'حتى 100 منتج',
        'تحليلات أساسية',
        'دعم بالبريد الإلكتروني',
        'قوالب قياسية',
        'تكامل دفع أساسي',
      ],
      limits: { products: 100, orders: 500, storage: 5, staff: 2, customDomains: 0 },
      isActive: true,
      isPopular: false,
      sortOrder: 1,
    },
    {
      code: 'PROFESSIONAL',
      name: 'Professional',
      nameAr: 'المحترف',
      description: 'For growing businesses that need more power',
      descriptionAr: 'للأعمال النامية التي تحتاج المزيد من القوة',
      price: 299,
      currency: 'SAR',
      billingCycle: 'MONTHLY',
      features: [
        'Unlimited products',
        'Advanced analytics',
        'Priority support',
        'Custom domain',
        'All payment integrations',
        'Page builder',
        'AI assistant',
      ],
      featuresAr: [
        'منتجات غير محدودة',
        'تحليلات متقدمة',
        'دعم أولوية',
        'نطاق مخصص',
        'جميع تكاملات الدفع',
        'منشئ الصفحات',
        'مساعد ذكي',
      ],
      limits: { products: -1, orders: -1, storage: 50, staff: 10, customDomains: 1 },
      isActive: true,
      isPopular: true,
      sortOrder: 2,
    },
    {
      code: 'ENTERPRISE',
      name: 'Enterprise',
      nameAr: 'المؤسسات',
      description: 'For large enterprises with custom needs',
      descriptionAr: 'للمؤسسات الكبيرة ذات الاحتياجات المخصصة',
      price: 999,
      currency: 'SAR',
      billingCycle: 'MONTHLY',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'White-label option',
        'API access',
        'Custom development',
      ],
      featuresAr: [
        'كل مميزات المحترف',
        'مدير حساب مخصص',
        'تكاملات مخصصة',
        'ضمان مستوى الخدمة',
        'خيار العلامة البيضاء',
        'وصول API',
        'تطوير مخصص',
      ],
      limits: { products: -1, orders: -1, storage: -1, staff: -1, customDomains: -1 },
      isActive: true,
      isPopular: false,
      sortOrder: 3,
    },
  ];

  for (const plan of defaultPlans) {
    const existing = await prisma.subscriptionPlan.findFirst({
      where: { code: plan.code },
    });

    if (existing) {
      console.log(`  ⚠️ Plan ${plan.name} already exists – updating`);
      await prisma.subscriptionPlan.update({
        where: { id: existing.id },
        data: plan,
      });
      continue;
    }

    await prisma.subscriptionPlan.create({ data: plan });
    console.log(`  ✅ Created plan: ${plan.name}`);
  }
}

// Seed currencies for a tenant
async function seedCurrencies(tenantId: string) {
  console.log('  💱 Seeding currencies...');
  
  const currencies = [
    {
      tenantId,
      code: 'SAR',
      name: 'Saudi Riyal',
      nameAr: 'ريال سعودي',
      symbol: 'SAR',
      symbolAr: 'ر.س',
      exchangeRate: 1,
      precision: 2,
      isActive: true,
      isDefault: true,
      sortOrder: 1,
    },
    {
      tenantId,
      code: 'AED',
      name: 'UAE Dirham',
      nameAr: 'درهم اماراتي',
      symbol: 'AED',
      symbolAr: 'د.إ',
      exchangeRate: 0.98, // 1 SAR ≈ 0.98 AED
      precision: 2,
      isActive: true,
      isDefault: false,
      sortOrder: 2,
    },
    {
      tenantId,
      code: 'KWD',
      name: 'Kuwaiti Dinar',
      nameAr: 'دينار كويتي',
      symbol: 'KWD',
      symbolAr: 'د.ك',
      exchangeRate: 0.082, // 1 SAR ≈ 0.082 KWD
      precision: 3,
      isActive: true,
      isDefault: false,
      sortOrder: 3,
    },
    {
      tenantId,
      code: 'USD',
      name: 'US Dollar',
      nameAr: 'دولار',
      symbol: '$',
      symbolAr: '$',
      exchangeRate: 0.27, // 1 SAR ≈ 0.27 USD
      precision: 2,
      isActive: true,
      isDefault: false,
      sortOrder: 4,
    },
    {
      tenantId,
      code: 'QAR',
      name: 'Qatari Riyal',
      nameAr: 'ريال قطري',
      symbol: 'QAR',
      symbolAr: 'ر.ق',
      exchangeRate: 0.97, // 1 SAR ≈ 0.97 QAR
      precision: 2,
      isActive: true,
      isDefault: false,
      sortOrder: 5,
    },
  ];

  for (const currency of currencies) {
    const existing = await prisma.currency.findUnique({
      where: {
        tenantId_code: {
          tenantId,
          code: currency.code,
        },
      },
    });

    if (existing) {
      // Update existing currency
      await prisma.currency.update({
        where: { id: existing.id },
        data: currency,
      });
      console.log(`    ⚠️ Currency ${currency.code} already exists – updated`);
    } else {
      await prisma.currency.create({ data: currency });
      console.log(`    ✅ Created currency: ${currency.code} (${currency.nameAr})`);
    }
  }

  // Create or update currency settings
  const existingSettings = await prisma.currencySettings.findUnique({
    where: { tenantId },
  });

  if (existingSettings) {
    await prisma.currencySettings.update({
      where: { tenantId },
      data: { baseCurrency: 'SAR' },
    });
    console.log('    ⚠️ Currency settings already exist – updated to SAR');
  } else {
    await prisma.currencySettings.create({
      data: {
        tenantId,
        baseCurrency: 'SAR',
        autoUpdateRates: false,
      },
    });
    console.log('    ✅ Created currency settings with SAR as default');
  }
}

// Seed digital cards marketplace data (brands, categories, banks)
async function seedDigitalCardsMarketplace(tenantId: string) {
  console.log('  🎮 Seeding digital cards marketplace data...');

  // Seed card brands
  const cardBrands = [
    {
      tenantId,
      name: 'iTunes',
      nameAr: 'أيتونز',
      code: 'ITUNES',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg',
      status: 'Active',
      sortOrder: 1,
    },
    {
      tenantId,
      name: 'Google Play',
      nameAr: 'جوجل بلاي',
      code: 'GOOGLE_PLAY',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
      status: 'Active',
      sortOrder: 2,
    },
    {
      tenantId,
      name: 'PlayStation',
      nameAr: 'بلايستيشن',
      code: 'PLAYSTATION',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg',
      status: 'Active',
      sortOrder: 3,
    },
    {
      tenantId,
      name: 'Xbox',
      nameAr: 'إكس بوكس',
      code: 'XBOX',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg',
      status: 'Active',
      sortOrder: 4,
    },
    {
      tenantId,
      name: 'Steam',
      nameAr: 'ستيم',
      code: 'STEAM',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
      status: 'Active',
      sortOrder: 5,
    },
    {
      tenantId,
      name: 'PUBG',
      nameAr: 'ببجي',
      code: 'PUBG',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Pubg_game.png',
      status: 'Active',
      sortOrder: 6,
    },
    {
      tenantId,
      name: 'Free Fire',
      nameAr: 'فري فاير',
      code: 'FREEFIRE',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/87/Free_Fire_cover.png',
      status: 'Active',
      sortOrder: 7,
    },
    {
      tenantId,
      name: 'Netflix',
      nameAr: 'نتفليكس',
      code: 'NETFLIX',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      status: 'Active',
      sortOrder: 8,
    },
    {
      tenantId,
      name: 'Spotify',
      nameAr: 'سبوتيفاي',
      code: 'SPOTIFY',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
      status: 'Active',
      sortOrder: 9,
    },
    {
      tenantId,
      name: 'Razer Gold',
      nameAr: 'ريزر جولد',
      code: 'RAZER_GOLD',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Razer_snake_logo.svg',
      status: 'Active',
      sortOrder: 10,
    },
    {
      tenantId,
      name: 'Amazon',
      nameAr: 'أمازون',
      code: 'AMAZON',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      status: 'Active',
      sortOrder: 11,
    },
    {
      tenantId,
      name: 'Nintendo',
      nameAr: 'نينتندو',
      code: 'NINTENDO',
      brandType: 'Digital Cards',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg',
      status: 'Active',
      sortOrder: 12,
    },
  ];

  for (const brand of cardBrands) {
    await prisma.brand.upsert({
      where: {
        tenantId_code: {
          tenantId,
          code: brand.code || brand.name.toUpperCase(),
        },
      },
      update: brand,
      create: brand,
    });
  }
  console.log('    ✅ Created/updated card brands');

  // Seed card categories
  const cardCategories = [
    {
      tenantId,
      name: 'Gaming',
      nameAr: 'الألعاب',
      description: 'Gaming cards and game credits',
      descriptionAr: 'بطاقات الألعاب وأرصدة الألعاب',
      slug: 'gaming-cards',
      icon: '🎮',
      isActive: true,
      sortOrder: 1,
    },
    {
      tenantId,
      name: 'Entertainment',
      nameAr: 'الترفيه',
      description: 'Streaming and entertainment cards',
      descriptionAr: 'بطاقات البث والترفيه',
      slug: 'entertainment-cards',
      icon: '🎬',
      isActive: true,
      sortOrder: 2,
    },
    {
      tenantId,
      name: 'Shopping',
      nameAr: 'التسوق',
      description: 'Gift cards for shopping',
      descriptionAr: 'بطاقات الهدايا للتسوق',
      slug: 'shopping-cards',
      icon: '🛒',
      isActive: true,
      sortOrder: 3,
    },
    {
      tenantId,
      name: 'Mobile Apps',
      nameAr: 'تطبيقات الجوال',
      description: 'App store credits and cards',
      descriptionAr: 'أرصدة وبطاقات متاجر التطبيقات',
      slug: 'mobile-apps-cards',
      icon: '📱',
      isActive: true,
      sortOrder: 4,
    },
    {
      tenantId,
      name: 'Telecom',
      nameAr: 'الاتصالات',
      description: 'Mobile recharge and telecom cards',
      descriptionAr: 'بطاقات شحن الجوال والاتصالات',
      slug: 'telecom-cards',
      icon: '📞',
      isActive: true,
      sortOrder: 5,
    },
  ];

  for (const category of cardCategories) {
    const existing = await prisma.category.findUnique({
      where: {
        tenantId_slug: {
          tenantId,
          slug: category.slug,
        },
      },
    });

    if (existing) {
      await prisma.category.update({
        where: { id: existing.id },
        data: category,
      });
    } else {
      await prisma.category.create({ data: category });
    }
  }
  console.log('    ✅ Created/updated card categories');

  // Seed banks for wallet top-up
  const banks = [
    {
      tenantId,
      name: 'Al Rajhi Bank',
      nameAr: 'مصرف الراجحي',
      code: 'RJHI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Al_Rajhi_Bank_Logo.svg',
      accountName: 'Saeaa Digital Cards',
      accountNumber: '1234567890123456',
      iban: 'SA0380000000608010167519',
      swiftCode: 'RJHISARI',
      isActive: true,
      sortOrder: 1,
    },
    {
      tenantId,
      name: 'Al Ahli Bank (SNB)',
      nameAr: 'البنك الأهلي السعودي',
      code: 'SABB',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Saudi_National_Bank_Logo.svg',
      accountName: 'Saeaa Digital Cards',
      accountNumber: '9876543210123456',
      iban: 'SA0310000000608010167520',
      swiftCode: 'SABBSARI',
      isActive: true,
      sortOrder: 2,
    },
    {
      tenantId,
      name: 'Riyad Bank',
      nameAr: 'بنك الرياض',
      code: 'RIBL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Riyad_Bank_Logo.svg',
      accountName: 'Saeaa Digital Cards',
      accountNumber: '5555555555123456',
      iban: 'SA0320000000608010167521',
      swiftCode: 'RIBLSARI',
      isActive: true,
      sortOrder: 3,
    },
    {
      tenantId,
      name: 'Bank AlBilad',
      nameAr: 'بنك البلاد',
      code: 'ALBI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Bank_Albilad_Logo.svg',
      accountName: 'Saeaa Digital Cards',
      accountNumber: '6666666666123456',
      iban: 'SA0360000000608010167522',
      swiftCode: 'ALBISAR1',
      isActive: true,
      sortOrder: 4,
    },
    {
      tenantId,
      name: 'STC Pay',
      nameAr: 'STC Pay',
      code: 'STCPAY',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/STC_Pay_logo.svg',
      accountName: 'Saeaa Digital Cards',
      accountNumber: '0500000000',
      iban: '',
      isActive: true,
      sortOrder: 5,
    },
  ];

  for (const bank of banks) {
    const existing = await prisma.bank.findUnique({
      where: {
        tenantId_code: {
          tenantId,
          code: bank.code,
        },
      },
    });

    if (existing) {
      await prisma.bank.update({
        where: { id: existing.id },
        data: bank,
      });
    } else {
      await prisma.bank.create({ data: bank });
    }
  }
  console.log('    ✅ Created/updated banks for wallet top-up');
}

async function seedTenantData(tenantId: string) {
  // Seed currencies first
  await seedCurrencies(tenantId);
  
  // Seed digital cards marketplace (brands, categories, banks)
  await seedDigitalCardsMarketplace(tenantId);

  // Create categories
  const categories = [
    {
      id: 'gaming',
      tenantId,
      name: 'Gaming & PUBG',
      description: 'Gaming cards, PUBG UC, game credits',
      slug: 'gaming-pubg',
      image: null,
      isActive: true,
    },
    {
      id: 'playstation',
      tenantId,
      name: 'PlayStation Store',
      description: 'PS Plus, PS Store cards, games',
      slug: 'playstation-store',
      image: null,
      isActive: true,
    },
    {
      id: 'communications',
      tenantId,
      name: 'Chat & Communications',
      description: 'Recharge cards, chat credits, VoIP',
      slug: 'chat-communications',
      image: null,
      isActive: true,
    },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { id: cat.id },
      update: { tenantId },
      create: cat,
    });
  }
  console.log('  ✅ Created/updated categories');

  // Helper for placeholder images
  const placeholderImage = (title: string) => ({
    url: `https://picsum.photos/seed/${encodeURIComponent(title)}/400/300`,
    altText: title,
    sortOrder: 0,
  });

  // Demo products
  const demoProducts = [
    {
      id: uuidv4(),
      tenantId,
      name: 'PUBG UC 1000',
      nameAr: 'شدات PUBG 1000',
      description: '1000 UC for PUBG Mobile – instantly usable.',
      descriptionAr: '1000 وحدة شحن للعبة PUBG Mobile – صالحة للاستخدام فوراً.',
      price: 49.99,
      sku: `PUBG-UC-1000-${tenantId.slice(0, 8)}`,
      isAvailable: true,
      isPublished: true,
      images: { create: [placeholderImage('PUBG UC 1000')] },
      variants: { create: [{ name: 'Standard', price: 49.99, sku: `PUBG-UC-1000-STD-${tenantId.slice(0, 8)}` }] },
      categories: { connect: { id: 'gaming' } },
    },
    {
      id: uuidv4(),
      tenantId,
      name: 'Gaming Gift Card $25',
      nameAr: 'بطاقة هدية ألعاب $25',
      description: 'Universal gaming credit usable on multiple platforms.',
      descriptionAr: 'رصيد ألعاب عالمي يمكن استعماله على عدة منصات.',
      price: 25.0,
      sku: `GIFT-25-${tenantId.slice(0, 8)}`,
      isAvailable: true,
      isPublished: true,
      images: { create: [placeholderImage('Gaming Gift Card $25')] },
      variants: { create: [{ name: 'Digital', price: 25.0, sku: `GIFT-25-DIG-${tenantId.slice(0, 8)}` }] },
      categories: { connect: { id: 'gaming' } },
    },
    {
      id: uuidv4(),
      tenantId,
      name: 'PS Plus 12‑Month Subscription',
      nameAr: 'اشتراك PS Plus 12 شهر',
      description: 'Full year of online multiplayer, free games & discounts.',
      descriptionAr: 'سنة كاملة من اللعب المتعدد عبر الإنترنت، ألعاب مجانية وخصومات.',
      price: 59.99,
      sku: `PSPLUS-12M-${tenantId.slice(0, 8)}`,
      isAvailable: true,
      isPublished: true,
      images: { create: [placeholderImage('PS Plus 12‑Month')] },
      variants: { create: [{ name: 'Digital', price: 59.99, sku: `PSPLUS-12M-DIG-${tenantId.slice(0, 8)}` }] },
      categories: { connect: { id: 'playstation' } },
    },
    {
      id: uuidv4(),
      tenantId,
      name: 'PlayStation Store $20 Card',
      nameAr: 'بطاقة متجر بلايستيشن $20',
      description: 'Spend $20 on games, DLCs, and add‑ons.',
      descriptionAr: 'استخدم 20 دولار لشراء ألعاب، محتوى إضافي، وإضافات.',
      price: 20.0,
      sku: `PS-20-${tenantId.slice(0, 8)}`,
      isAvailable: true,
      isPublished: true,
      images: { create: [placeholderImage('PS Store $20')] },
      variants: { create: [{ name: 'Digital', price: 20.0, sku: `PS-20-DIG-${tenantId.slice(0, 8)}` }] },
      categories: { connect: { id: 'playstation' } },
    },
    {
      id: uuidv4(),
      tenantId,
      name: 'WhatsApp Business Credits 500',
      nameAr: 'رصيد واتساب بزنس 500',
      description: '500 message credits for WhatsApp Business API.',
      descriptionAr: '500 رصيد رسائل لواجهة برمجة تطبيق واتساب للأعمال.',
      price: 15.0,
      sku: `WA‑500-${tenantId.slice(0, 8)}`,
      isAvailable: true,
      isPublished: true,
      images: { create: [placeholderImage('WhatsApp Credits 500')] },
      variants: { create: [{ name: 'Digital', price: 15.0, sku: `WA‑500-DIG-${tenantId.slice(0, 8)}` }] },
      categories: { connect: { id: 'communications' } },
    },
    {
      id: uuidv4(),
      tenantId,
      name: 'Mobile Recharge $10',
      nameAr: 'شحن هاتف $10',
      description: 'Top‑up any mobile number with $10 credit.',
      descriptionAr: 'شحن أي رقم هاتف ب10 دولارات.',
      price: 10.0,
      sku: `MOB‑10-${tenantId.slice(0, 8)}`,
      isAvailable: true,
      isPublished: true,
      images: { create: [placeholderImage('Mobile Recharge $10')] },
      variants: { create: [{ name: 'Digital', price: 10.0, sku: `MOB‑10-DIG-${tenantId.slice(0, 8)}` }] },
      categories: { connect: { id: 'communications' } },
    },
  ];

  for (const prod of demoProducts) {
    const existing = await prisma.product.findUnique({ where: { sku: prod.sku } });
    if (existing) {
      console.log(`  ⚠️ SKU ${prod.sku} already exists – skipping`);
      continue;
    }

    const { categories, ...productData } = prod;
    await prisma.product.create({
      data: {
        ...productData,
        categories: {
          create: {
            category: {
              connect: { id: categories.connect.id }
            }
          }
        }
      },
    });
    console.log(`  ✅ Created product ${prod.name}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
