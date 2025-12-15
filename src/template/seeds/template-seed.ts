// Pre-defined website templates using standard section types
export const templateSeeds = [
  // ========== WEBSITE TEMPLATES ==========

  // 1. Fashion Store Template
  {
    name: 'Fashion Store',
    category: 'fashion',
    description: 'Modern, image-heavy design perfect for fashion retailers',
    thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-fashion',
          type: 'hero',
          props: {
            title: 'Summer Collection 2024',
            subtitle: 'Discover the latest fashion trends',
            backgroundImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop',
            ctaText: 'Shop Now',
            ctaLink: '/products',
            textColor: '#ffffff',
            backgroundColor: '#000000',
            overlayOpacity: 0.5,
          },
        },
        {
          id: 'features-fashion',
          type: 'features',
          props: {
            title: 'Why Shop With Us',
            items: [
              { icon: '🚚', title: 'Free Shipping', description: 'On orders over $50' },
              { icon: '↩️', title: 'Easy Returns', description: '30-day return policy' },
              { icon: '👗', title: 'Latest Trends', description: 'Always in style' },
              { icon: '💳', title: 'Secure Payment', description: '100% protected' },
            ],
          },
        },
        {
          id: 'products-fashion',
          type: 'products',
          props: {
            title: 'Featured Collection',
            limit: 8,
            layout: 'grid',
          },
        },
        {
          id: 'cta-fashion',
          type: 'cta',
          props: {
            title: 'Join Our Fashion Community',
            description: 'Get exclusive access to new arrivals and special offers',
            buttonText: 'Sign Up Now',
            buttonLink: '/auth/signup',
            backgroundColor: '#1a1a1a',
            textColor: '#ffffff',
          },
        },
        {
          id: 'newsletter-fashion',
          type: 'newsletter',
          props: {
            title: 'Stay Updated',
            description: 'Subscribe to our newsletter for the latest trends',
            buttonText: 'Subscribe',
            placeholder: 'Enter your email',
          },
        },
        {
          id: 'footer-fashion',
          type: 'footer',
          props: {
            companyName: 'Fashion Store',
            links: [
              { label: 'About Us', url: '/about' },
              { label: 'Contact', url: '/contact' },
              { label: 'Shipping Info', url: '/shipping' },
            ],
            socialLinks: {
              instagram: '#',
              facebook: '#',
              twitter: '#',
            },
          },
        },
      ],
    },
  },

  // 2. Electronics Shop Template
  {
    name: 'Electronics Shop',
    category: 'electronics',
    description: 'Tech-focused design with product grid layout',
    thumbnail: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-electronics',
          type: 'hero',
          props: {
            title: 'Cutting-Edge Technology',
            subtitle: 'Latest gadgets and electronics at best prices',
            backgroundImage: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1920&h=1080&fit=crop',
            ctaText: 'Browse Products',
            ctaLink: '/products',
            textColor: '#ffffff',
            backgroundColor: '#1e3a8a',
            overlayOpacity: 0.6,
          },
        },
        {
          id: 'features-electronics',
          type: 'features',
          props: {
            title: 'Our Guarantees',
            items: [
              { icon: '✅', title: 'Authentic Products', description: '100% genuine' },
              { icon: '🔧', title: 'Warranty Support', description: 'Full coverage' },
              { icon: '⚡', title: 'Fast Delivery', description: '2-day shipping' },
              { icon: '🎧', title: '24/7 Support', description: 'Always here to help' },
            ],
          },
        },
        {
          id: 'products-electronics',
          type: 'products',
          props: {
            title: 'Top Selling Products',
            limit: 12,
            layout: 'grid',
          },
        },
        {
          id: 'stats-electronics',
          type: 'stats',
          props: {
            title: 'Trusted by Thousands',
            items: [
              { number: '10K+', label: 'Happy Customers' },
              { number: '500+', label: 'Products' },
              { number: '99%', label: 'Satisfaction' },
              { number: '24/7', label: 'Support' },
            ],
          },
        },
        {
          id: 'footer-electronics',
          type: 'footer',
          props: {
            companyName: 'Tech Store',
            links: [
              { label: 'Support', url: '/support' },
              { label: 'Warranty', url: '/warranty' },
              { label: 'Compare', url: '/compare' },
            ],
            socialLinks: {
              twitter: '#',
              youtube: '#',
              linkedin: '#',
            },
          },
        },
      ],
    },
  },

  // 3. Food & Beverage Template
  {
    name: 'Food & Beverage',
    category: 'food',
    description: 'Warm, appetizing design for restaurants and food businesses',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-food',
          type: 'hero',
          props: {
            title: 'Fresh, Delicious, Delivered',
            subtitle: 'Order your favorite meals online',
            backgroundImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop',
            ctaText: 'View Menu',
            ctaLink: '/products',
            textColor: '#ffffff',
            backgroundColor: '#dc2626',
            overlayOpacity: 0.5,
          },
        },
        {
          id: 'features-food',
          type: 'features',
          props: {
            title: 'Why Choose Us',
            items: [
              { icon: '🍽️', title: 'Fresh Ingredients', description: 'Daily sourced' },
              { icon: '⏱️', title: 'Quick Delivery', description: 'Under 30 minutes' },
              { icon: '👨‍🍳', title: 'Expert Chefs', description: 'Award-winning' },
              { icon: '🌿', title: 'Healthy Options', description: 'For every diet' },
            ],
          },
        },
        {
          id: 'products-food',
          type: 'products',
          props: {
            title: 'Popular Dishes',
            limit: 6,
            layout: 'grid',
          },
        },
        {
          id: 'testimonials-food',
          type: 'testimonials',
          props: {
            title: 'What Our Customers Say',
            items: [
              { name: 'Sarah M.', text: 'Best food delivery service! Always fresh and on time.', rating: 5 },
              { name: 'Ahmed K.', text: 'Amazing variety and great taste. Highly recommend!', rating: 5 },
              { name: 'Lisa R.', text: 'My go-to for weekend meals. Never disappoints!', rating: 5 },
            ],
          },
        },
        {
          id: 'cta-food',
          type: 'cta',
          props: {
            title: 'Hungry? Order Now!',
            description: 'Get 20% off your first order',
            buttonText: 'Order Now',
            buttonLink: '/products',
            backgroundColor: '#ea580c',
            textColor: '#ffffff',
          },
        },
      ],
    },
  },

  // 4. Beauty & Cosmetics Template
  {
    name: 'Beauty & Cosmetics',
    category: 'beauty',
    description: 'Elegant, minimalist design for beauty products',
    thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-beauty',
          type: 'hero',
          props: {
            title: 'Discover Your Beauty',
            subtitle: 'Premium skincare and cosmetics',
            backgroundImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop',
            ctaText: 'Shop Collection',
            ctaLink: '/products',
            textColor: '#ffffff',
            backgroundColor: '#db2777',
            overlayOpacity: 0.4,
          },
        },
        {
          id: 'features-beauty',
          type: 'features',
          props: {
            title: 'Our Promise',
            items: [
              { icon: '🌿', title: 'Natural Ingredients', description: 'Cruelty-free' },
              { icon: '💝', title: 'Luxury Quality', description: 'Premium brands' },
              { icon: '✨', title: 'Expert Advice', description: 'Beauty consultations' },
              { icon: '🎁', title: 'Free Samples', description: 'With every order' },
            ],
          },
        },
        {
          id: 'products-beauty',
          type: 'products',
          props: {
            title: 'Bestsellers',
            limit: 8,
            layout: 'grid',
          },
        },
        {
          id: 'brands-beauty',
          type: 'brands',
          props: {
            title: 'Featured Brands',
            logos: [
              { name: 'Brand 1', url: 'https://via.placeholder.com/150x50' },
              { name: 'Brand 2', url: 'https://via.placeholder.com/150x50' },
              { name: 'Brand 3', url: 'https://via.placeholder.com/150x50' },
              { name: 'Brand 4', url: 'https://via.placeholder.com/150x50' },
            ],
          },
        },
        {
          id: 'newsletter-beauty',
          type: 'newsletter',
          props: {
            title: 'Join the Beauty Club',
            description: 'Get exclusive offers and beauty tips',
            buttonText: 'Subscribe',
            placeholder: 'Your email address',
          },
        },
      ],
    },
  },

  // 5. Home & Furniture Template
  {
    name: 'Home & Furniture',
    category: 'home',
    description: 'Clean, spacious layout for furniture and home decor',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-home',
          type: 'hero',
          props: {
            title: 'Transform Your Space',
            subtitle: 'Quality furniture for every room',
            backgroundImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop',
            ctaText: 'Browse Furniture',
            ctaLink: '/products',
            textColor: '#ffffff',
            backgroundColor: '#059669',
            overlayOpacity: 0.5,
          },
        },
        {
          id: 'features-home',
          type: 'features',
          props: {
            title: 'Why Choose Us',
            items: [
              { icon: '🏠', title: 'Quality Craftsmanship', description: 'Built to last' },
              { icon: '🚚', title: 'White Glove Delivery', description: 'Assembly included' },
              { icon: '💲', title: 'Best Prices', description: 'Price match guarantee' },
              { icon: '🔄', title: 'Easy Returns', description: '30-day policy' },
            ],
          },
        },
        {
          id: 'products-home',
          type: 'products',
          props: {
            title: 'Featured Furniture',
            limit: 9,
            layout: 'grid',
          },
        },
        {
          id: 'gallery-home',
          type: 'gallery',
          props: {
            title: 'Room Inspiration',
            images: [
              { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop', alt: 'Living Room' },
              { url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop', alt: 'Bedroom' },
              { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', alt: 'Kitchen' },
            ],
          },
        },
        {
          id: 'contact-home',
          type: 'contact',
          props: {
            title: 'Need Design Help?',
            description: 'Our interior design experts are here to help',
            phone: '+1 234 567 890',
            email: 'design@store.com',
            address: '123 Furniture Street',
          },
        },
      ],
    },
  },

  // 6. Digital Cards Marketplace (Arabic)
  {
    name: 'متجر البطاقات الرقمية',
    category: 'digital',
    description: 'متجر شامل للبطاقات الرقمية مع تسليم فوري | Complete digital cards store with instant delivery',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-cards',
          type: 'hero',
          props: {
            title: 'بطاقات رقمية بضغطة زر ⚡',
            subtitle: 'iTunes | Google Play | PlayStation | Xbox | Steam | PUBG | Netflix - تسليم فوري خلال ثوانٍ',
            backgroundImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop',
            ctaText: 'تصفح جميع البطاقات',
            ctaLink: '/products',
            textColor: '#ffffff',
            backgroundColor: '#8b5cf6',
            overlayOpacity: 0.75,
          },
        },
        {
          id: 'features-cards',
          type: 'features',
          props: {
            title: 'لماذا تختارنا؟',
            subtitle: 'نوفر لك أفضل تجربة شراء للبطاقات الرقمية',
            items: [
              { icon: '⚡', title: 'تسليم فوري', description: 'احصل على كود البطاقة في ثوانٍ معدودة' },
              { icon: '🔒', title: 'دفع آمن 100%', description: 'حماية كاملة لمعلوماتك المالية' },
              { icon: '💰', title: 'أفضل الأسعار', description: 'أسعار تنافسية مع عروض يومية' },
              { icon: '🎁', title: 'هدايا مجانية', description: 'نقاط ولاء وخصومات حصرية' },
              { icon: '🕐', title: 'خدمة 24/7', description: 'دعم فني على مدار الساعة' },
              { icon: '📱', title: 'سهل الاستخدام', description: 'تطبيق ويب سريع وبسيط' },
            ],
          },
        },
        {
          id: 'brands-cards',
          type: 'brands',
          props: {
            title: 'أشهر العلامات التجارية',
            subtitle: 'نوفر بطاقات من أكثر من 50 علامة تجارية عالمية',
            logos: [
              { name: 'iTunes', url: 'https://via.placeholder.com/150x80?text=iTunes' },
              { name: 'Google Play', url: 'https://via.placeholder.com/150x80?text=Google+Play' },
              { name: 'PlayStation', url: 'https://via.placeholder.com/150x80?text=PlayStation' },
              { name: 'Xbox', url: 'https://via.placeholder.com/150x80?text=Xbox' },
              { name: 'Steam', url: 'https://via.placeholder.com/150x80?text=Steam' },
              { name: 'Netflix', url: 'https://via.placeholder.com/150x80?text=Netflix' },
              { name: 'PUBG', url: 'https://via.placeholder.com/150x80?text=PUBG' },
              { name: 'Free Fire', url: 'https://via.placeholder.com/150x80?text=Free+Fire' },
            ],
          },
        },
        {
          id: 'products-cards',
          type: 'products',
          props: {
            title: 'البطاقات الأكثر مبيعاً 🔥',
            subtitle: 'اكتشف أشهر البطاقات المتوفرة لدينا',
            limit: 12,
            layout: 'grid',
          },
        },
        {
          id: 'slider-howto',
          type: 'content-slider',
          props: {
            title: 'كيف تشتري بطاقة رقمية؟',
            subtitle: 'عملية بسيطة في 3 خطوات فقط',
            items: [
              {
                title: '1️⃣ اختر البطاقة',
                description: 'تصفح المتجر واختر البطاقة التي تريدها',
                icon: '🔍',
              },
              {
                title: '2️⃣ ادفع بأمان',
                description: 'ادفع باستخدام بطاقتك أو محفظتك الإلكترونية',
                icon: '💳',
              },
              {
                title: '3️⃣ استلم فوراً',
                description: 'احصل على كود البطاقة مباشرة في حسابك',
                icon: '✅',
              },
            ],
          },
        },
        {
          id: 'stats-cards',
          type: 'stats',
          props: {
            title: 'نحن الأوثق في السوق',
            items: [
              { number: '+15,000', label: 'عميل راضٍ' },
              { number: '+100,000', label: 'بطاقة مُسلّمة' },
              { number: '4.9/5', label: 'تقييم العملاء' },
              { number: '< 10 ثانية', label: 'وقت التسليم' },
            ],
          },
        },
        {
          id: 'testimonials-cards',
          type: 'testimonials',
          props: {
            title: 'آراء عملائنا',
            subtitle: 'ماذا يقول من جرب خدماتنا',
            items: [
              { 
                name: 'أحمد محمد', 
                text: 'أفضل موقع لشراء البطاقات الرقمية! سريع وآمن ومصداقية عالية 👍', 
                rating: 5,
                image: 'https://ui-avatars.com/api/?name=Ahmed+M&background=8b5cf6&color=fff',
              },
              { 
                name: 'سارة العلي', 
                text: 'استلمت البطاقة في أقل من دقيقة. خدمة ممتازة وأسعار منافسة 🌟', 
                rating: 5,
                image: 'https://ui-avatars.com/api/?name=Sarah+A&background=ec4899&color=fff',
              },
              { 
                name: 'خالد السعيد', 
                text: 'تعاملت معهم أكثر من 10 مرات، دائماً موثوقين ومحترمين 💯', 
                rating: 5,
                image: 'https://ui-avatars.com/api/?name=Khaled+S&background=10b981&color=fff',
              },
            ],
          },
        },
        {
          id: 'faq-cards',
          type: 'faq',
          props: {
            title: 'الأسئلة الشائعة',
            subtitle: 'إجابات لأكثر الأسئلة تكراراً',
            items: [
              { 
                question: 'كم يستغرق استلام البطاقة؟', 
                answer: 'يتم تسليم البطاقة فوراً خلال ثوانٍ معدودة بعد إتمام الدفع بنجاح. ستجد الكود في حسابك وعبر البريد الإلكتروني.' 
              },
              { 
                question: 'هل الدفع آمن؟', 
                answer: 'نعم، نستخدم أحدث تقنيات التشفير وبوابات دفع معتمدة عالمياً لحماية معلوماتك المالية بنسبة 100%.' 
              },
              { 
                question: 'هل يمكنني استرجاع البطاقة؟', 
                answer: 'للأسف لا يمكن استرجاع البطاقات الرقمية بعد تسليم الكود. يرجى التأكد من البطاقة قبل الشراء.' 
              },
              { 
                question: 'هل تدعمون الدفع عند الاستلام؟', 
                answer: 'نظراً لطبيعة المنتج الرقمي، نقبل فقط الدفع الإلكتروني (بطاقات بنكية، Apple Pay، تحويل بنكي).' 
              },
              { 
                question: 'ماذا لو لم يعمل الكود؟', 
                answer: 'نادراً ما يحدث ذلك، ولكن إذا واجهت أي مشكلة يرجى التواصل معنا فوراً وسنقوم بحل المشكلة أو استبدال البطاقة.' 
              },
            ],
          },
        },
        {
          id: 'payments-cards',
          type: 'payments',
          props: {
            title: 'طرق الدفع المتاحة',
            subtitle: 'نقبل جميع وسائل الدفع الإلكترونية',
            methods: ['Visa', 'Mastercard', 'Apple Pay', 'مدى', 'STC Pay', 'تحويل بنكي'],
          },
        },
        {
          id: 'cta-cards',
          type: 'cta',
          props: {
            title: 'جاهز لشراء بطاقتك الأولى؟ 🎮',
            description: 'سجل الآن واحصل على خصم 10% على أول عملية شراء',
            buttonText: 'ابدأ التسوق الآن',
            buttonLink: '/products',
            backgroundColor: '#8b5cf6',
            textColor: '#ffffff',
          },
        },
        {
          id: 'footer-cards',
          type: 'footer',
          props: {
            companyName: 'متجر البطاقات الرقمية',
            description: 'منصة موثوقة لشراء البطاقات الرقمية مع تسليم فوري وأسعار منافسة',
            links: [
              { label: 'من نحن', url: '/about' },
              { label: 'اتصل بنا', url: '/contact' },
              { label: 'الشروط والأحكام', url: '/terms' },
              { label: 'سياسة الخصوصية', url: '/privacy' },
            ],
            socialLinks: {
              twitter: '#',
              instagram: '#',
              whatsapp: '#',
              telegram: '#',
            },
          },
        },
      ],
    },
  },

  // 7. Landing Page Template
  {
    name: 'Landing Page',
    category: 'general',
    description: 'High-converting landing page for products or services',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-landing',
          type: 'hero',
          props: {
            title: 'Launch Your Business Today',
            subtitle: 'Everything you need to start selling online',
            backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop',
            ctaText: 'Get Started Free',
            ctaLink: '/auth/signup',
            textColor: '#ffffff',
            backgroundColor: '#2563eb',
            overlayOpacity: 0.6,
          },
        },
        {
          id: 'features-landing',
          type: 'features',
          props: {
            title: 'Everything You Need',
            items: [
              { icon: '🛒', title: 'Easy Store Setup', description: 'Launch in minutes' },
              { icon: '📊', title: 'Analytics', description: 'Track your growth' },
              { icon: '💳', title: 'Payments', description: 'Accept all methods' },
              { icon: '📱', title: 'Mobile Ready', description: 'Works everywhere' },
            ],
          },
        },
        {
          id: 'stats-landing',
          type: 'stats',
          props: {
            title: 'Trusted by Thousands',
            items: [
              { number: '50K+', label: 'Active Stores' },
              { number: '$100M+', label: 'Sales Processed' },
              { number: '99.9%', label: 'Uptime' },
              { number: '150+', label: 'Countries' },
            ],
          },
        },
        {
          id: 'pricing-landing',
          type: 'pricing',
          props: {
            title: 'Simple, Transparent Pricing',
            plans: [
              { 
                name: 'Starter', 
                price: '$9/mo', 
                features: ['100 Products', 'Basic Analytics', 'Email Support'],
                buttonText: 'Start Free Trial',
                popular: false,
              },
              { 
                name: 'Professional', 
                price: '$29/mo', 
                features: ['Unlimited Products', 'Advanced Analytics', 'Priority Support', 'Custom Domain'],
                buttonText: 'Start Free Trial',
                popular: true,
              },
              { 
                name: 'Enterprise', 
                price: '$99/mo', 
                features: ['Everything in Pro', 'Dedicated Manager', 'API Access', 'White Label'],
                buttonText: 'Contact Sales',
                popular: false,
              },
            ],
          },
        },
        {
          id: 'testimonials-landing',
          type: 'testimonials',
          props: {
            title: 'What Our Customers Say',
            items: [
              { name: 'John D.', text: 'Best decision for my business. Sales doubled in 3 months!', rating: 5, company: 'Tech Store' },
              { name: 'Maria S.', text: 'So easy to use. I launched my store in one day.', rating: 5, company: 'Fashion Boutique' },
              { name: 'Alex T.', text: 'Amazing support team. They helped me every step of the way.', rating: 5, company: 'Food Delivery' },
            ],
          },
        },
        {
          id: 'faq-landing',
          type: 'faq',
          props: {
            title: 'Frequently Asked Questions',
            items: [
              { question: 'How do I get started?', answer: 'Simply sign up for a free trial and follow our setup wizard.' },
              { question: 'Can I cancel anytime?', answer: 'Yes, you can cancel your subscription at any time with no penalties.' },
              { question: 'Do you offer support?', answer: 'Yes, we offer 24/7 support via chat, email, and phone.' },
              { question: 'Is there a free plan?', answer: 'Yes, we offer a 14-day free trial with all features included.' },
            ],
          },
        },
        {
          id: 'cta-landing',
          type: 'cta',
          props: {
            title: 'Ready to Get Started?',
            description: 'Join thousands of successful businesses today',
            buttonText: 'Start Your Free Trial',
            buttonLink: '/auth/signup',
            backgroundColor: '#2563eb',
            textColor: '#ffffff',
          },
        },
      ],
    },
  },

  // 8. Simple Store Template
  {
    name: 'Simple Store',
    category: 'general',
    description: 'Clean, minimal template for any type of store',
    thumbnail: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-simple',
          type: 'hero',
          props: {
            title: 'Welcome to Our Store',
            subtitle: 'Discover amazing products',
            ctaText: 'Shop Now',
            ctaLink: '/products',
            textColor: '#ffffff',
            backgroundColor: '#111827',
          },
        },
        {
          id: 'products-simple',
          type: 'products',
          props: {
            title: 'Our Products',
            limit: 8,
            layout: 'grid',
          },
        },
        {
          id: 'cta-simple',
          type: 'cta',
          props: {
            title: 'Need Help?',
            description: 'Contact us for any questions',
            buttonText: 'Contact Us',
            buttonLink: '/contact',
            backgroundColor: '#111827',
            textColor: '#ffffff',
          },
        },
        {
          id: 'footer-simple',
          type: 'footer',
          props: {
            companyName: 'Our Store',
            links: [
              { label: 'About', url: '/about' },
              { label: 'Contact', url: '/contact' },
              { label: 'Privacy', url: '/privacy' },
            ],
          },
        },
      ],
    },
  },

  // 9. Blank Template
  {
    name: 'Blank Template',
    category: 'general',
    description: 'Start from scratch with an empty page',
    thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [],
    },
  },

  // 10. Restaurant/Cafe Template
  {
    name: 'Restaurant & Cafe',
    category: 'food',
    description: 'Elegant template for restaurants and cafes',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-restaurant',
          type: 'hero',
          props: {
            title: 'Experience Fine Dining',
            subtitle: 'Reserve your table today',
            backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop',
            ctaText: 'Book a Table',
            ctaLink: '/contact',
            textColor: '#ffffff',
            backgroundColor: '#1f2937',
            overlayOpacity: 0.5,
          },
        },
        {
          id: 'text-restaurant',
          type: 'text',
          props: {
            title: 'Our Story',
            content: 'Founded in 2010, our restaurant has been serving exceptional cuisine with passion and dedication. Every dish tells a story of tradition, innovation, and love for great food.',
            alignment: 'center',
          },
        },
        {
          id: 'gallery-restaurant',
          type: 'gallery',
          props: {
            title: 'Our Ambiance',
            images: [
              { url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop', alt: 'Interior' },
              { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', alt: 'Food' },
              { url: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=600&h=400&fit=crop', alt: 'Dessert' },
            ],
          },
        },
        {
          id: 'products-restaurant',
          type: 'products',
          props: {
            title: 'Our Menu',
            limit: 6,
            layout: 'grid',
          },
        },
        {
          id: 'contact-restaurant',
          type: 'contact',
          props: {
            title: 'Make a Reservation',
            description: 'Call us or fill out the form below',
            phone: '+1 234 567 890',
            email: 'reservations@restaurant.com',
            address: '123 Gourmet Street, Food City',
          },
        },
      ],
    },
  },

  // 11. Services Business Template
  {
    name: 'Services Business',
    category: 'services',
    description: 'Professional template for service-based businesses',
    thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    isDefault: true,
    content: {
      sections: [
        {
          id: 'hero-services',
          type: 'hero',
          props: {
            title: 'Professional Services',
            subtitle: 'Solutions that drive results',
            backgroundImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop',
            ctaText: 'Get a Quote',
            ctaLink: '/contact',
            textColor: '#ffffff',
            backgroundColor: '#0f172a',
            overlayOpacity: 0.6,
          },
        },
        {
          id: 'features-services',
          type: 'features',
          props: {
            title: 'Our Services',
            items: [
              { icon: '💼', title: 'Consulting', description: 'Expert business advice' },
              { icon: '📈', title: 'Strategy', description: 'Growth planning' },
              { icon: '🎯', title: 'Marketing', description: 'Digital campaigns' },
              { icon: '🤝', title: 'Support', description: '24/7 assistance' },
            ],
          },
        },
        {
          id: 'stats-services',
          type: 'stats',
          props: {
            title: 'Our Track Record',
            items: [
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Team Members' },
            ],
          },
        },
        {
          id: 'testimonials-services',
          type: 'testimonials',
          props: {
            title: 'Client Success Stories',
            items: [
              { name: 'David M.', text: 'They transformed our business. Highly recommended!', rating: 5, company: 'Tech Corp' },
              { name: 'Sarah L.', text: 'Professional team with excellent results.', rating: 5, company: 'Finance Inc' },
              { name: 'Mike R.', text: 'Best investment we made for our company.', rating: 5, company: 'Retail Co' },
            ],
          },
        },
        {
          id: 'team-services',
          type: 'team',
          props: {
            title: 'Meet Our Team',
            members: [
              { name: 'John Smith', role: 'CEO', image: 'https://via.placeholder.com/200x200' },
              { name: 'Jane Doe', role: 'COO', image: 'https://via.placeholder.com/200x200' },
              { name: 'Mike Johnson', role: 'CTO', image: 'https://via.placeholder.com/200x200' },
            ],
          },
        },
        {
          id: 'contact-services',
          type: 'contact',
          props: {
            title: 'Let\'s Work Together',
            description: 'Ready to start your project?',
            phone: '+1 234 567 890',
            email: 'contact@services.com',
            address: '123 Business Ave',
          },
        },
      ],
    },
  },

];

