import { ContactInfo, ServiceItem, ProjectItem, TestimonialItem, PricingPlan, FAQItem, EstimatorOption } from '../types';

export const siteConfig = {
  contactInfo: {
    companyName: 'Bluecrest',
    tagline: 'We Build Websites That Build Businesses.',
    whatsappNumber: '15550192834', // Formatted for wa.me API link
    whatsappDisplay: '+1 (555) 019-2834',
    phone: '+1 (555) 019-2834',
    email: 'hello@bluecrestweb.com',
    location: 'Available for Local & Global Businesses (HQ: Austin, TX / Remote)',
    instagram: 'https://instagram.com/bluecrestweb',
    facebook: 'https://facebook.com/bluecrestweb',
    linkedin: 'https://linkedin.com/company/bluecrestweb',
    workingHours: 'Mon - Sat: 9:00 AM - 8:00 PM EST',
  } as ContactInfo,

  stats: [
    { label: 'Projects Completed', value: '45+', subtext: 'Local & regional client builds' },
    { label: 'Mobile Optimization', value: '100%', subtext: 'Flawless across all devices' },
    { label: 'Client Satisfaction', value: '99%', subtext: 'Direct WhatsApp support' },
    { label: 'Avg. Turnaround', value: '5-10 Days', subtext: 'Rapid professional delivery' },
  ],

  services: [
    {
      id: 'business-websites',
      title: 'Business Websites',
      shortDesc: 'Professional, high-converting websites for small and local services.',
      fullDesc: 'Custom multi-page or landing style websites tailored specifically for local businesses. Built to display your services clearly, capture phone enquiries, and build instant trust with potential customers in your area.',
      iconName: 'Building2',
      targetIndustry: 'Local Service Providers, Contractors, Agencies',
      keyFeatures: [
        'Custom Service Pages',
        'Direct Phone & WhatsApp Contact CTAs',
        'Google Maps & Local SEO Setup',
        'Customer Reviews & Testimonials Section',
        'Fast 100/100 Mobile Speed Rating'
      ],
      samplePriceRange: 'Custom Quote Available'
    },
    {
      id: 'restaurant-websites',
      title: 'Restaurant Websites',
      shortDesc: 'Interactive digital menus, food galleries, and direct WhatsApp ordering.',
      fullDesc: 'Give your diners an irresistible online menu experience. Includes fast-loading high-definition dish galleries, table reservation forms, location maps, and zero-commission WhatsApp food ordering.',
      iconName: 'Utensils',
      targetIndustry: 'Restaurants, Cafes, Bakeries, Food Trucks',
      keyFeatures: [
        'Mobile-Optimized Digital Menu with Categories',
        'Direct WhatsApp Order & Table Booking Button',
        'High-Resolution Food Photo Gallery',
        'Google Maps Integration & Business Hours',
        'QR Code Menu Integration Ready'
      ],
      samplePriceRange: 'Custom Quote Available'
    },
    {
      id: 'gym-websites',
      title: 'Gym & Fitness Websites',
      shortDesc: 'Membership plans, trainer profiles, workout schedules, and enquiry forms.',
      fullDesc: 'Engage fitness enthusiasts in your neighborhood. Show off your gym equipment, group class schedules, membership pricing tiers, trainer bios, and direct trial pass signups.',
      iconName: 'Dumbbell',
      targetIndustry: 'Gyms, Crossfit Boxes, Yoga Studios, Personal Trainers',
      keyFeatures: [
        'Interactive Class Timetable & Schedule',
        'Membership Tier Comparison Table',
        'Trainer Profiles & Specialization Showcases',
        'Free Trial / Day Pass Enquiry Form',
        'Facility Photo & Video Gallery'
      ],
      samplePriceRange: 'Custom Quote Available'
    },
    {
      id: 'salon-websites',
      title: 'Salon & Beauty Websites',
      shortDesc: 'Service menus, price lists, appointment booking, and portfolio gallery.',
      fullDesc: 'Elegantly showcase your hair, beauty, or spa services. Make it seamless for clients to review service packages, view before-and-after work, and book appointments via WhatsApp or web form.',
      iconName: 'Sparkles',
      targetIndustry: 'Hair Salons, Barbershops, Spas, Nail Studios, Clinics',
      keyFeatures: [
        'Service & Price Catalog with Category Tabs',
        'Easy Appointment Enquiry via WhatsApp or Form',
        'Stylist Portfolio & Before/After Gallery',
        'Client Review Slider & Instagram Feed Grid',
        'Gift Card & Special Offers Banner'
      ],
      samplePriceRange: 'Custom Quote Available'
    },
    {
      id: 'ecommerce-websites',
      title: 'E-Commerce Websites',
      shortDesc: 'Online product catalogues, shopping carts, checkout, and order management.',
      fullDesc: 'Turn local shoppers into repeat online buyers. Complete e-commerce store setups with modern product catalogues, instant search, simple shopping cart, secure payment gateway or cash-on-delivery options.',
      iconName: 'ShoppingBag',
      targetIndustry: 'Boutiques, Retail Shops, Artisan Crafts, Local Brands',
      keyFeatures: [
        'Full Product Catalogue with Categories & Filters',
        'Seamless Shopping Cart & One-Page Checkout',
        'WhatsApp Order Confirmation Option',
        'Inventory Management & Order Dashboard',
        'Coupon Code & Discount Banner Tools'
      ],
      samplePriceRange: 'Custom Quote Available'
    },
    {
      id: 'portfolio-websites',
      title: 'Portfolio Websites',
      shortDesc: 'Personal portfolios for freelancers, students, professionals, and creators.',
      fullDesc: 'Stand out from the competition with a slick personal showcase. Ideal for designers, photographers, consultants, students, and freelancers who need a world-class digital resume.',
      iconName: 'Briefcase',
      targetIndustry: 'Freelancers, Photographers, Architects, Consultants, Students',
      keyFeatures: [
        'Grid & Lightbox Media Gallery',
        'Downloadable Resume / Brochure PDF Link',
        'Project Case Study Layouts',
        'Client Feedback & Recommendations',
        'Direct Hire Me / Contact Buttons'
      ],
      samplePriceRange: 'Custom Quote Available'
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      shortDesc: 'High-converting single-page sites built for ad campaigns and lead gen.',
      fullDesc: 'Laser-focused single-page websites engineered for high conversion rates. Perfect for running Meta/Google ads, product launches, special seasonal promotions, or local lead generation campaigns.',
      iconName: 'Zap',
      targetIndustry: 'Product Launches, Ad Campaigns, Event Organizers',
      keyFeatures: [
        'Laser-Focused High Conversion Structure',
        'Fast Loading Under 1 Second',
        'A/B Test Ready Design Sections',
        'Integrated Lead Capture Forms & WhatsApp Sticky Bar',
        'Analytics & Pixel Tracking Setup'
      ],
      samplePriceRange: 'Custom Quote Available'
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      shortDesc: 'Modernize outdated websites with a mobile-friendly, fast, sleek look.',
      fullDesc: 'Is your current website slow, old, or embarrassing on mobile phones? We overhaul your existing content into a modern, lightning-fast, highly professional agency-level design that drives results.',
      iconName: 'RefreshCw',
      targetIndustry: 'Existing Businesses with Outdated Web Presences',
      keyFeatures: [
        'Complete UI/UX Overhaul & Modern Aesthetic',
        '100% Mobile & Tablet Optimization',
        'SEO Preservation & Redirection Check',
        'Improved Site Speed & Performance Overhaul',
        'Content Refresh & CTA Optimization'
      ],
      samplePriceRange: 'Custom Quote Available'
    }
  ] as ServiceItem[],

  projects: [
    {
      id: 'project-1',
      title: 'The Artisanal Bistro',
      businessName: 'Gourmet Haven Bistro',
      category: 'Restaurants',
      shortDesc: 'Luxury restaurant website with digital QR menu, online table reservation, and direct WhatsApp takeaway ordering.',
      fullDesc: 'Gourmet Haven needed a sleek digital home to reflect their farm-to-table dining experience. Bluecrest designed a dark-mode luxury website featuring smooth food photography transitions, dynamic menu categorization, table reservation forms, and a custom WhatsApp quick-order flow.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Web API'],
      liveUrl: 'https://example.com/demo-bistro',
      featured: true,
      caseStudy: {
        challenge: 'The bistro had no website and relied solely on Instagram photos. Customers found it difficult to find opening hours, daily specials, or make weekend table reservations without calling during busy kitchen hours.',
        solution: 'Bluecrest built a lightning-fast responsive website with clear location maps, interactive food menu tabs, instantaneous WhatsApp table booking, and a mobile-first design.',
        results: [
          { label: 'Enquiry Surge', value: '+185%', desc: 'Increase in weekend reservations within 30 days' },
          { label: 'Mobile Traffic', value: '82%', desc: 'Visitors browsing directly on smartphone devices' },
          { label: 'Page Speed', value: '99/100', desc: 'Google Lighthouse Performance Score' }
        ],
        beforeMetrics: [
          'No official website on Google Search',
          'Phone lines tied up during dinner service',
          'Outdated PDF menus hard to read on mobile'
        ],
        afterMetrics: [
          'Instant Google My Business link to digital menu',
          'Zero-commission WhatsApp order booking system',
          'Beautiful HD food gallery driving walk-ins'
        ],
        clientName: 'Chef Mateo Rossi',
        clientQuote: 'Bluecrest transformed our restaurant online! We received 40+ reservation messages on WhatsApp in our very first week after launch.'
      }
    },
    {
      id: 'project-2',
      title: 'Peak Performance Athletic Club',
      businessName: 'Peak Fitness Lab',
      category: 'Gyms',
      shortDesc: 'High-energy fitness studio web portal with class schedules, trainer highlights, and free day pass lead generator.',
      fullDesc: 'Peak Fitness Lab wanted to dominate local search results for fitness centers in their city. Bluecrest delivered a punchy, high-contrast website featuring animated class timetables, membership pricing calculators, and a 1-click free trial pass booking mechanism.',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com/demo-gym',
      featured: true,
      caseStudy: {
        challenge: 'High competition in the local fitness market with potential members leaving the site without booking a gym walkthrough.',
        solution: 'Added a bold hero section with a floating "Get Free 1-Day Pass" sticky CTA and class schedule viewer categorized by workout type.',
        results: [
          { label: 'Lead Capture', value: '3.4x', desc: 'Increase in free trial pass requests' },
          { label: 'Bounce Rate', value: '24%', desc: 'Significantly lower bounce rate than industry avg' },
          { label: 'WhatsApp Enquiries', value: '120+', desc: 'Direct chat enquiries per month' }
        ],
        beforeMetrics: [
          'Generic static template with hidden prices',
          'Hard to read trainer timetable on mobile screens',
          'No direct instant messaging channel'
        ],
        afterMetrics: [
          'Prominent Free Trial Pass call-to-action button',
          'Clean weekly timetable filterable by trainer',
          'Direct WhatsApp chat for instant workout advice'
        ],
        clientName: 'Marcus Vance',
        clientQuote: 'The website paid for itself in two weeks. Our free trial pass signups quadrupled almost overnight!'
      }
    },
    {
      id: 'project-3',
      title: 'Aura Luxe Beauty & Spa',
      businessName: 'Aura Salon & Spa',
      category: 'Salons',
      shortDesc: 'Elegant salon experience showcasing hair, skin, and wellness treatments with instant appointment booking.',
      fullDesc: 'A premium beauty boutique needing a soft, sophisticated digital aesthetic. Bluecrest created a glassmorphism inspired website with service package cards, before-and-after image comparison sliders, client reviews, and direct WhatsApp appointment routing.',
      imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Tailwind CSS', 'Lucide Icons', 'WhatsApp Linker'],
      liveUrl: 'https://example.com/demo-salon',
      featured: true,
      caseStudy: {
        challenge: 'Aura Salon relied on manual phone calls during appointments, causing missed calls and lost potential clients.',
        solution: 'Implemented automated WhatsApp consultation buttons with pre-filled service request details.',
        results: [
          { label: 'Appointment Rate', value: '+140%', desc: 'More bookings via WhatsApp messaging' },
          { label: 'Customer Rating', value: '5.0★', desc: 'Feedback on ease of online service browsing' },
          { label: 'Mobile Speed', value: '< 1.2s', desc: 'Instant page loading time' }
        ],
        beforeMetrics: [
          'Missed calls during busy salon hours',
          'Services and prices not clearly displayed',
          'Inconsistent visual brand online'
        ],
        afterMetrics: [
          'Direct 24/7 WhatsApp booking button',
          'Transparent price list with treatment durations',
          'Stunning photo gallery of satisfied salon clients'
        ],
        clientName: 'Elena Rostova',
        clientQuote: 'Our clients constantly compliment our new website! Booking appointments through WhatsApp is so easy for both us and our customers.'
      }
    },
    {
      id: 'project-4',
      title: 'Urban Threads Boutique',
      businessName: 'Urban Threads Store',
      category: 'Shops',
      shortDesc: 'Modern apparel catalogue with mobile product filter, stock status, store location map, and instant purchase chat.',
      fullDesc: 'Urban Threads wanted a fast digital storefront to showcase new seasonal fashion drops. Bluecrest built a high-speed catalogue site with quick product filters, Instagram gallery integration, and direct WhatsApp buying buttons for instant inventory reservation.',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://example.com/demo-shop',
      featured: false,
      caseStudy: {
        challenge: 'In-store inventory rotated quickly, making traditional complex e-commerce updates cumbersome for staff.',
        solution: 'Created a lightweight catalogue layout where clients can tap "Order via WhatsApp" directly from any item card.',
        results: [
          { label: 'Daily Visits', value: '1,200+', desc: 'Active shoppers browsing daily catalogue' },
          { label: 'Order Velocity', value: '+95%', desc: 'Faster item reservation cycle' }
        ],
        beforeMetrics: ['Only physical foot traffic', 'No online preview of store items'],
        afterMetrics: ['Instant WhatsApp item reservation', 'Live catalogue updated in minutes'],
        clientName: 'David K.',
        clientQuote: 'Bluecrest gave our local boutique the modern digital presence of a top fashion brand!'
      }
    },
    {
      id: 'project-5',
      title: 'Horizon Academy International',
      businessName: 'Horizon Private Academy',
      category: 'Education',
      shortDesc: 'Comprehensive educational portal with admissions guide, campus virtual tour, downloadable prospectus, and parent enquiries.',
      fullDesc: 'A leading private school needed a modern, trustworthy web platform for parent admissions. Bluecrest designed a structured educational website with course curriculum breakdowns, faculty listings, event calendar, and online enquiry forms.',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com/demo-academy',
      featured: false,
      caseStudy: {
        challenge: 'Parents struggled to find admission criteria and tuition information, resulting in administrative phone overload.',
        solution: 'Built a clean, intuitive navigation layout with downloadable prospectus PDF links and streamlined enquiry forms.',
        results: [
          { label: 'Parent Enquiries', value: '+210%', desc: 'Increase in qualified admission enquiries' },
          { label: 'Trust Index', value: '100%', desc: 'Positive feedback from PTA members' }
        ],
        beforeMetrics: ['Outdated static portal', 'No downloadable forms'],
        afterMetrics: ['Instant PDF prospectus download', 'Simple admissions request form'],
        clientName: 'Dr. Sarah Jenkins',
        clientQuote: 'Bluecrest delivered an exceptionally polished educational portal that reflects our academic standards.'
      }
    },
    {
      id: 'project-6',
      title: 'Dr. Maya Lin - Creative Director',
      businessName: 'Maya Lin Design Studio',
      category: 'Personal Portfolio',
      shortDesc: 'Minimalist luxury portfolio for an award-winning brand strategist and interior architect.',
      fullDesc: 'An elite personal portfolio showcasing high-end architectural and branding projects. Built with smooth page transitions, full-screen image lightboxes, interactive project storytelling, and a minimalist contact portal.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://example.com/demo-portfolio',
      featured: false,
      caseStudy: {
        challenge: 'Needs to present high-resolution photography without compromising mobile load speed.',
        solution: 'Implemented responsive image optimization and smooth lazy-loading animations.',
        results: [
          { label: 'Client Inquiries', value: '5x', desc: 'More high-ticket consulting requests' }
        ],
        beforeMetrics: ['Slow portfolio load time', 'Cluttered grid layout'],
        afterMetrics: ['Sub-second image loading', 'Award-winning typography pairing'],
        clientName: 'Maya Lin',
        clientQuote: 'The aesthetic precision is unmatched. My portfolio now lands enterprise consulting deals effortlessly.'
      }
    }
  ] as ProjectItem[],

  whyChooseUs: [
    {
      title: 'Affordable Pricing',
      desc: 'Get a world-class, custom agency-quality website without paying traditional $5,000+ agency price tags. Transparent costs with zero hidden fees.',
      icon: 'PiggyBank'
    },
    {
      title: 'Designed For Your Business',
      desc: 'No cookie-cutter templates. Every layout, color scheme, and section is tailored specifically to your industry, target audience, and business goals.',
      icon: 'Palette'
    },
    {
      title: '100% Mobile Friendly',
      desc: 'Over 80% of local customers browse on phones. Your site will look stunning and render blisteringly fast on iPhone, Android, tablets, and laptops.',
      icon: 'Smartphone'
    },
    {
      title: 'WhatsApp Integration',
      desc: 'Turn casual site visitors into paying clients instantly. Integrated WhatsApp CTA buttons allow customers to reach you directly in 1 click.',
      icon: 'MessageSquare'
    },
    {
      title: 'Google & SEO Friendly',
      desc: 'Structured with clean semantic code, fast speed ratings, metadata, and local schema so local customers can easily discover you on Google Search.',
      icon: 'Search'
    },
    {
      title: 'Personal Direct Support',
      desc: 'Work directly with Bluecrest developers. Fast communication, quick edits, launch guidance, and ongoing technical peace of mind.',
      icon: 'UserCheck'
    }
  ],

  beforeAfter: {
    headline: 'Your Business Deserves More Than Just a Social Media Page.',
    subtext: 'Social media profiles are great, but a dedicated Bluecrest website establishes true authority, ranks on Google, and works for you 24 hours a day.',
    withoutWebsite: [
      'Customers depend only on social media algorithms',
      'Business hours, address, & prices are scattered or missing',
      'Difficult to showcase full service menus or galleries',
      'Competitors with websites look more established & trustworthy',
      'Zero search visibility on Google Maps & Google Search',
      'No direct professional booking or automated lead forms'
    ],
    withWebsite: [
      'Dedicated 24/7 digital storefront that you own completely',
      'All business info, pricing, & locations clearly structured',
      'High-resolution galleries, digital menus, & video showcases',
      'Instant brand authority that wins trust over competitors',
      'SEO-optimized to attract local customers on Google',
      '1-click WhatsApp messaging, calls, & enquiry submissions'
    ]
  },

  processSteps: [
    {
      step: '01',
      title: 'Discuss',
      desc: 'We start with a quick phone call or WhatsApp discussion to understand your business, target audience, services, and goals.',
      deliverable: 'Project scope & design plan'
    },
    {
      step: '02',
      title: 'Design',
      desc: 'We craft a modern visual concept customized for your brand, selecting colors, typography, layouts, and copy that convert.',
      deliverable: 'Custom website preview mockup'
    },
    {
      step: '03',
      title: 'Develop',
      desc: 'We code your website using high-performance web tech, ensuring 100% mobile responsiveness, fast load speeds, and WhatsApp integration.',
      deliverable: 'Fully functional staging website'
    },
    {
      step: '04',
      title: 'Launch',
      desc: 'After your final review and approval, we deploy your site live on your domain, optimize Google search indexing, and train you on updates.',
      deliverable: 'Live website + Launch support'
    }
  ],

  testimonials: [
    {
      id: 't1',
      clientName: 'Sarah Jenkins',
      role: 'Owner',
      businessName: 'The Bloom Café',
      businessCategory: 'Cafe & Bakery',
      quote: 'Bluecrest created an amazing website for our café in less than a week. Our customers love viewing the daily pastry menu on their phones before visiting!',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verifiedLocal: true
    },
    {
      id: 't2',
      clientName: 'David Ramirez',
      role: 'Founder',
      businessName: 'Ironclad Fitness',
      businessCategory: 'Gym & Crossfit',
      quote: 'Bluecrest understood exactly what our gym needed. The WhatsApp integration for free trial passes brought in 35 new gym members in the first month alone.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      verifiedLocal: true
    },
    {
      id: 't3',
      clientName: 'Dr. Anita Roy',
      role: 'Director',
      businessName: 'Roy Dental Care',
      businessCategory: 'Healthcare Clinic',
      quote: 'Extremely professional team. They modernized our outdated clinic site, made it super clean, and set up an appointment enquiry form that works flawlessly.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
      verifiedLocal: true
    },
    {
      id: 't4',
      clientName: 'Kevin Patel',
      role: 'Manager',
      businessName: 'Velvet Cuts Barbershop',
      businessCategory: 'Grooming Salon',
      quote: 'Working with Bluecrest was completely hassle-free. They took care of everything from domain setup to mobile styling. Best investment for our shop.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verifiedLocal: true
    }
  ] as TestimonialItem[],

  pricingPlans: [
    {
      id: 'starter',
      name: 'Starter Website',
      tagline: 'Ideal for small or newly opened local businesses needing a fast, professional online presence.',
      priceNote: 'Starting at Affordable Local Rates',
      recommendedFor: 'Small Shops, Solo Practitioners, Cafes, Freelancers',
      turnaroundTime: '3 to 5 Days',
      features: [
        'Single-page or 3-page custom design',
        '100% Mobile & tablet responsive',
        'Core business information & hours',
        'Direct WhatsApp chat button',
        'Click-to-call phone button',
        'Google Maps location embed',
        'Basic local SEO setup',
        'Fast SSL secure hosting support'
      ],
      notIncluded: [
        'E-commerce shopping cart',
        'Custom admin dashboard'
      ]
    },
    {
      id: 'business',
      name: 'Business Pro',
      tagline: 'Our most popular plan for growing businesses that want to dominate local competitors.',
      priceNote: 'Best Value for Growing Businesses',
      badge: 'MOST POPULAR',
      isPopular: true,
      recommendedFor: 'Restaurants, Gyms, Salons, Clinics, Service Contractors',
      turnaroundTime: '5 to 7 Days',
      features: [
        'Up to 5 to 7 custom pages (Home, About, Services, Gallery, Contact, etc.)',
        'High-resolution photo gallery / menu showcase',
        'Advanced animations & micro-interactions',
        'WhatsApp booking / enquiry routing',
        'Custom interactive lead capture forms',
        'Full Google SEO & Schema optimization',
        'Social media feed & reviews integration',
        '1 Month free maintenance & support'
      ]
    },
    {
      id: 'premium',
      name: 'Custom / E-Commerce',
      tagline: 'For businesses requiring online product sales, custom features, or multi-location setup.',
      priceNote: 'Custom Tailored Solution',
      recommendedFor: 'E-commerce Stores, Educational Institutions, Multi-branch Businesses',
      turnaroundTime: '7 to 14 Days',
      features: [
        'Everything in Business Pro',
        'Full e-commerce store / product catalogue',
        'Shopping cart & payment gateway setup',
        'Custom functional modules (Booking engines, Calculators)',
        'Admin content management option',
        'Priority 24/7 technical support',
        'Speed optimization (Sub-second loading)',
        'Quarterly site performance updates'
      ]
    }
  ] as PricingPlan[],

  faqs: [
    {
      id: 'faq-1',
      question: 'How much does a website cost with Bluecrest?',
      answer: 'Pricing depends on your specific business requirements, number of pages, and special features (such as e-commerce or booking systems). We provide affordable local business rates with clear upfront quotes and zero hidden fees. Contact us on WhatsApp or fill out our enquiry form for an instant estimate!',
      category: 'Pricing'
    },
    {
      id: 'faq-2',
      question: 'How long does it take to build a website?',
      answer: 'Most local business websites are completed within 5 to 10 days once we receive your business details, photos, and preferences. Simple Starter sites can even be launched in as little as 3 days.',
      category: 'Process'
    },
    {
      id: 'faq-3',
      question: 'Will my website work perfectly on mobile phones?',
      answer: 'Yes, 100%! Every Bluecrest website is engineered mobile-first. Your website will adapt automatically and render beautifully on iPhones, Android phones, iPads, and desktop screens.',
      category: 'Technical'
    },
    {
      id: 'faq-4',
      question: 'Can customers contact me directly through WhatsApp?',
      answer: 'Yes! We place smart WhatsApp call-to-action buttons directly on your site. When a visitor clicks the button, it opens WhatsApp on their device with a pre-formatted friendly enquiry message ready to send directly to your phone.',
      category: 'General'
    },
    {
      id: 'faq-5',
      question: 'Can you redesign my existing outdated website?',
      answer: 'Absolutely. We specialize in modernizing old, slow, or non-mobile-friendly websites. We preserve your domain name and Google search equity while giving your brand a modern, agency-grade facelift.',
      category: 'General'
    },
    {
      id: 'faq-6',
      question: 'Do you provide support after launching the website?',
      answer: 'Yes, we stand behind our work! We provide launch guidance, technical support, and optional ongoing maintenance packages so you never have to worry about updates or security.',
      category: 'Process'
    },
    {
      id: 'faq-7',
      question: 'Do I need technical skills to manage or request changes?',
      answer: 'Not at all! Bluecrest handles all the technical heavy lifting for you. Whenever you need to update text, photos, or prices, you can simply text us on WhatsApp or we can provide a straightforward content editor.',
      category: 'Technical'
    }
  ] as FAQItem[],

  estimatorOptions: {
    industries: [
      { id: 'restaurant', label: 'Restaurant / Cafe', description: 'Digital menu, reservation & takeaway WhatsApp', estimatedDays: 6, basePricePoints: 100, icon: 'Utensils' },
      { id: 'gym', label: 'Gym / Fitness Studio', description: 'Timetable, trainer profiles & trial pass signups', estimatedDays: 5, basePricePoints: 95, icon: 'Dumbbell' },
      { id: 'salon', label: 'Salon / Beauty & Spa', description: 'Services menu, price list & booking forms', estimatedDays: 5, basePricePoints: 90, icon: 'Sparkles' },
      { id: 'retail', label: 'Shop / Retail Store', description: 'Product catalogue, store location & order chat', estimatedDays: 7, basePricePoints: 120, icon: 'ShoppingBag' },
      { id: 'services', label: 'Local Business / Contractor', description: 'Service pages, reviews, quote request form', estimatedDays: 5, basePricePoints: 85, icon: 'Building2' },
      { id: 'personal', label: 'Personal Portfolio', description: 'Resume, showcase gallery & contact options', estimatedDays: 4, basePricePoints: 70, icon: 'Briefcase' }
    ],
    addonFeatures: [
      { id: 'whatsapp-order', label: 'WhatsApp Direct Ordering System', description: 'Pre-configured cart/order message format', estimatedDays: 1, basePricePoints: 20, icon: 'MessageSquare' },
      { id: 'gallery', label: 'High-Res Photo & Video Gallery', description: 'Lightbox gallery with category filter', estimatedDays: 1, basePricePoints: 15, icon: 'Image' },
      { id: 'seo-pro', label: 'Advanced Google Local SEO Package', description: 'Schema markup + Google My Business sync', estimatedDays: 1, basePricePoints: 25, icon: 'Search' },
      { id: 'custom-domain', label: 'Domain & SSL Email Setup', description: 'Professional custom domain configuration', estimatedDays: 1, basePricePoints: 10, icon: 'Globe' }
    ]
  }
};
