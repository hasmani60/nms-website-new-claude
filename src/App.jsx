import React, { useState, useEffect, createContext, useContext } from 'react';

// ============================================
// CONTEXT & STATE MANAGEMENT
// ============================================
const AppContext = createContext();

const useApp = () => useContext(AppContext);

// ============================================
// DATA
// ============================================
const teamMembers = [
  {
    name: 'Ali Abbas Khan',
    role: 'Co-Founder & CTO',
    quote: "Engineering is about finding elegant solutions to complex problems — and that's exactly what we do at NMS.",
    image: '/images/team-ali-abbas.png'
  },
  {
    name: 'Shivakiran Alva',
    role: 'Co-Founder & COO',
    quote: 'Technology is only meaningful when it simplifies the path to doing good.',
    image: '/images/team-shivakiran.png'
  },
  {
    name: 'Mohamed Saif Hasmani',
    role: 'Co-Founder & CEO',
    quote: 'Sustainability should not be a burden for businesses — it should be their biggest strength.',
    image: '/images/team-saif.png'
  },
  {
    name: 'Deepak Pinto',
    role: 'Co-Founder & Chief Analytics Officer',
    quote: "Data tells the story of our planet — our job is to make sure it's understood.",
    image: '/images/team-deepak.png'
  }
];

const clientsData = [
  { id: 1, name: 'Tata Motors', logo: '/images/client-1.png', person: 'Rajesh Kumar', role: 'Sustainability Head', testimonial: 'NatureMark Systems has been instrumental in helping us track and verify our tree plantation initiatives across multiple sites.' },
  { id: 2, name: 'Infosys', logo: '/images/client-2.png', person: 'Priya Sharma', role: 'ESG Director', testimonial: 'CarbonDesk transformed how we approach carbon accounting. The platform made our BRSR reporting seamless.' },
  { id: 3, name: 'Mahindra Group', logo: '/images/client-3.png', person: 'Vikram Mehta', role: 'Chief Sustainability Officer', testimonial: 'The team at NatureMark truly understands the challenges of enterprise sustainability.' },
  { id: 4, name: 'Wipro', logo: '/images/client-4.png', person: 'Anita Desai', role: 'Environmental Compliance Manager', testimonial: 'Working with NatureMark has accelerated our Net Zero journey significantly.' },
  { id: 5, name: 'L&T', logo: '/images/client-5.png', person: 'Suresh Nair', role: 'VP Operations', testimonial: 'ArborTag gave us complete visibility into our afforestation projects.' },
];

const faqData = [
  { question: 'What is carbon offsetting?', answer: 'Carbon offsetting involves compensating for your carbon emissions by funding projects that reduce or remove greenhouse gases elsewhere.' },
  { question: 'What is a carbon credit market?', answer: 'A carbon credit market is a trading system where carbon credits can be bought and sold, allowing companies to offset their emissions.' },
  { question: 'Why should you decarbonize?', answer: 'Decarbonization is essential to combat climate change and meet regulatory requirements while improving operational efficiency.' },
  { question: 'How does being carbon neutral benefit me?', answer: 'Being carbon neutral enhances brand value, solidifies customer trust, and gives you a competitive advantage in an environmentally conscious market.' }
];

const sustain360Problems = [
  'Fragmented and inconsistent emission data across departments',
  'Difficulty aligning with global reporting standards',
  'Complex Scope 1, 2, and 3 calculations',
  'Challenges communicating progress to stakeholders'
];

const sustain360Results = [
  'Full carbon footprint visibility in weeks',
  'Data-backed roadmap for emission cuts',
  'Streamlined BRSR and ESG reporting',
  'Real-time progress tracking'
];

const arbortagProblems = [
  'Environmental data collection is outdated and manual',
  'Tree audits are slow, inconsistent, and often inaccurate',
  'Corporates struggle to verify CSR plantations',
  'Governments lack reliable ground truth for carbon offset reporting'
];

const arbortagResults = [
  'Complete plantation inventory digitized in days',
  'Accurate carbon sequestration data with AI precision',
  'Tamper-proof data with blockchain logging',
  'Integrated ESG dashboards for audit-ready reports'
];

const arbortagFeatures = [
  { title: 'Smart Tagging with AI Vision', description: 'Instantly identifies and verifies each tree using ArUco-based markers.' },
  { title: 'Real-time Growth Tracking', description: 'Monitors height, canopy spread, and health indicators continuously.' },
  { title: 'Geo-Fencing & Mapping', description: 'Create accurate digital boundaries of plantations and forest assets.' },
  { title: 'Seamless Data Integration', description: 'Syncs directly with CarbonDesk™ for carbon and biodiversity reporting.' },
  { title: 'Offline Mode + Cloud Sync', description: 'Works in remote terrains — uploads when reconnected.' }
];

const arbortagAdvantages = [
  'Zero manual dependency — completely automated verification',
  'High accuracy using AI + GIS synergy',
  'Scalable from small plantations to large urban forests',
  'Tamper-proof data — every tag, timestamp, and image is blockchain-logged',
  'Integrated ESG dashboards for audit-ready sustainability reports'
];

const arbortagUseCases = [
  'Corporate CSR plantations & ESG reporting',
  'Urban forest management',
  'Carbon credit validation',
  'Smart campus sustainability programs',
  'Government reforestation tracking'
];

// ============================================
// DEMO URLS - Configure your external demo links here
// ============================================
const DEMO_URLS = {
  main: 'https://carbondesk-live.vercel.app/',
  sustain360: 'https://carbondesk-live.vercel.app/',
  arbortag: 'https://youtu.be/p0iGDVh6q2o'
};

// ============================================
// ICONS
// ============================================
const PlayIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14m-7-7l7 7-7 7"/>
  </svg>
);

const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);

// ============================================
// COMPONENTS
// ============================================

// Header Component
const Header = () => {
  const { currentPage, setCurrentPage } = useApp();
  const [scrolled, setScrolled] = useState(false);

  // Reset scroll position when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setScrolled(false);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' }
  ];

  // Determine if we're on a page with dark hero (home, sustain360, arbortag)
  const isDarkHero = ['home', 'sustain360', 'arbortag'].includes(currentPage);
  const useWhiteText = isDarkHero && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg shadow-emerald-900/5' 
        : isDarkHero 
          ? 'bg-transparent' 
          : 'bg-white shadow-lg shadow-emerald-900/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/images/logo.svg"
              alt="NatureMark Systems" 
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                useWhiteText ? 'brightness-0 invert' : ''
              }`}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${
              useWhiteText ? 'text-white' : 'text-emerald-900'
            }`}>
              NatureMark Systems
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || 
                (item.id === 'products' && ['sustain360', 'arbortag'].includes(currentPage));
              
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-5 py-2.5 rounded-full text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-emerald-900 shadow-lg'
                      : useWhiteText
                        ? 'text-white hover:bg-white/20'
                        : 'text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button - Try Demo */}
          <a 
            href={DEMO_URLS.main}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-lg font-medium transform hover:-translate-y-0.5 transition-all duration-300 ${
              useWhiteText
                ? 'bg-white text-emerald-900 hover:shadow-lg hover:shadow-white/30'
                : 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:shadow-lg hover:shadow-emerald-600/30'
            }`}
          >
            Try Demo
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  const { setCurrentPage } = useApp();
  
  return (
    <footer className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand - Updated with actual logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/logo-white.svg" 
                alt="NatureMark Systems" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xl font-semibold">NatureMark</span>
            </div>
            <p className="text-emerald-200/70 text-base leading-relaxed">
              Empowering organizations to achieve sustainable growth through innovative technology solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold uppercase tracking-wider text-emerald-400 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setCurrentPage(item.toLowerCase().replace(' ', ''))}
                    className="text-emerald-200/70 hover:text-white transition-colors text-base"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold uppercase tracking-wider text-emerald-400 mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setCurrentPage('sustain360')}
                  className="text-emerald-200/70 hover:text-white transition-colors text-base"
                >
                  CarbonDesk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('arbortag')}
                  className="text-emerald-200/70 hover:text-white transition-colors text-base"
                >
                  ArborTag
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold uppercase tracking-wider text-emerald-400 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:naturemarksystems@gmail.com" className="text-emerald-200/70 hover:text-white transition-colors text-base">
                  naturemarksystems@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919833363372" className="text-emerald-200/70 hover:text-white transition-colors text-base">
                  +91 9833363372
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-emerald-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-200/50 text-base">
            © 2025 NatureMark Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => setCurrentPage('privacy')} className="text-emerald-200/50 hover:text-white text-base transition-colors">Privacy Policy</button>
            <button onClick={() => setCurrentPage('terms')} className="text-emerald-200/50 hover:text-white text-base transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Hero Section
const HeroSection = () => {
  const { setCurrentPage } = useApp();
  
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-200 text-lg font-medium">Sustainability Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Innovation for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                Sustainable
              </span>{' '}
              Future
            </h1>
            
            <p className="text-2xl text-emerald-100/80 mb-10 max-w-lg leading-relaxed">
              We combine AI, IoT, and smart analytics to help organizations achieve ESG compliance and transform environmental impact into competitive advantage.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                Work With Us
              </button>
              <button 
                onClick={() => setCurrentPage('products')}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square">
              {/* Floating Cards */}
              <div className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 animate-float">
                <div className="text-5xl font-bold text-white">40%</div>
                <div className="text-emerald-200 text-base">Emission Reduction</div>
              </div>
              
              
              <div className="absolute bottom-20 right-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-5xl font-bold text-white">500+</div>
                <div className="text-emerald-200 text-base">Trees Monitored</div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-xl" />
              
              {/* Central Logo - Replace /images/hero-central-logo.png with your logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 flex items-center justify-center">
                <img 
                  src="/images/hero-central-logo.svg" 
                  alt="NatureMark Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// About Section (Home)
const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-600 font-medium text-base uppercase tracking-wider">About Us</span>
            <h2 className="text-6xl lg:text-7xl font-bold text-emerald-900 mt-4 mb-6">
              NatureMark Systems
            </h2>
            <p className="text-2xl text-slate-600 leading-relaxed mb-8">
              At NMS, we combine AI, IoT, and smart data analytics to help companies achieve ESG compliance, reduce carbon footprints, and transform environmental impact into a competitive advantage.
            </p>
            
            <a 
              href="https://www.youtube.com/@NatureMarkSystems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-emerald-600/30">
                <PlayIcon className="w-6 h-6 text-white ml-1" />
              </div>
              <div>
                <span className="text-slate-600">Find out how we were founded</span>
                <span className="block text-emerald-600 font-semibold">Watch Video</span>
              </div>
            </a>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl overflow-hidden">
              {/* Removed the pulsing circle animation */}
              <img 
                src="/images/about-illustration.png" 
                alt="About NatureMark" 
                className="w-full h-full object-contain p-12"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 p-6 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-emerald-900">100%</div>
                  <div className="text-slate-500 text-base">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Products Section (Home)
const ProductsSection = () => {
  const { setCurrentPage } = useApp();
  
  const products = [
    {
      id: 'sustain360',
      name: 'CarbonDesk',
      tagline: 'Enterprise Carbon Intelligence Platform',
      description: 'Measure, monitor, and manage greenhouse gas emissions across all operations.',
      gradient: 'from-emerald-600 to-emerald-800',
      features: ['Scope 1, 2 & 3 Tracking', 'AI Analytics', 'ESG Reporting'],
      // Add your background image path here
      backgroundImage: '/images/carbondesk-product-bg.png'
    },
    {
      id: 'arbortag',
      name: 'ArborTag',
      tagline: 'Measure. Monitor. Sustain',
      description: 'Track tree plantations and carbon sequestration with computer vision.',
      gradient: 'from-teal-600 to-emerald-700',
      features: ['Tree Measurement', 'Geo-tagging', 'Carbon Calculation'],
      // Add your background image path here
      backgroundImage: '/images/arbortag-product-bg.png'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium text-base uppercase tracking-wider">Our Products</span>
          <h2 className="text-6xl lg:text-7xl font-bold text-emerald-900 mt-4">
            Smart Solutions for Sustainability
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500"
            >
              <div className={`h-64 bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                {/* Background Image - Add your image at the specified path */}
                <img 
                  src={product.backgroundImage}
                  alt={`${product.name} background`}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white rounded-full" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={product.id === 'sustain360' ? 'https://www.youtube.com/@NatureMarkSystems' : 'https://youtu.be/p0iGDVh6q2o'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-red-500/50 relative z-10"
                  >
                    <PlayIcon className="w-8 h-8 text-white ml-1" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-5xl font-bold text-emerald-900 mb-2">{product.name}</h3>
                <p className="text-slate-500 mb-4">{product.tagline}</p>
                <p className="text-slate-600 mb-6">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-base">
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(product.id)}
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all"
                >
                  Explore More
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const client = clientsData[activeIndex];

  return (
    <>
      {/* Testimonials */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Logo */}
            <div className="bg-white rounded-2xl p-8 w-64 h-64 flex items-center justify-center flex-shrink-0">
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span class="text-emerald-800 font-bold text-2xl text-center">${client.name}</span>`;
                }}
              />
            </div>

            {/* Right - Quote and Details */}
            <div className="flex-1">
              <div className="text-white text-8xl font-serif leading-none mb-4">"</div>
              
              <p className="text-white text-xl lg:text-2xl leading-relaxed mb-6">
                {client.testimonial}
              </p>
              
              <div className="mb-8">
                <span className="text-white font-semibold text-lg">{client.person}</span>
                <span className="text-emerald-200 mx-2">•</span>
                <span className="text-emerald-200">{client.role}, {client.name}</span>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setActiveIndex((prev) => (prev - 1 + clientsData.length) % clientsData.length)}
                  className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-emerald-900 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setActiveIndex((prev) => (prev + 1) % clientsData.length)}
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-emerald-900 hover:bg-emerald-100 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-5xl font-bold text-slate-900 text-center mb-12">Our Clients</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientsData.map((c, index) => (
              <button 
                key={c.id}
                onClick={() => setActiveIndex(index)}
                className={`h-24 w-36 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-emerald-50 ring-2 ring-emerald-500' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <img 
                  src={c.logo} 
                  alt={c.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => { 
                    e.target.parentElement.innerHTML = `<span class="text-slate-500 font-medium text-base text-center">${c.name}</span>`;
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Accreditations Section
const AccreditationsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-emerald-600 font-medium text-base uppercase tracking-wider">Accreditations</span>
        <h2 className="text-6xl lg:text-7xl font-bold text-emerald-900 mt-4 mb-6">
          Our Accreditations
        </h2>
        <p className="text-2xl text-slate-600 max-w-2xl mx-auto mb-12">
          Our accreditations reinforce our commitment to standards-aligned sustainability and rigorous methodologies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-12">
          <div className="w-256 h-160 bg-slate-20 rounded-2xl flex items-center justify-center p-6">
            <img src="/images/logo-iiswbm.svg" alt="IISWBM" className="max-w-full max-h-full object-contain" onError={(e) => { e.target.parentElement.innerHTML = '<span class="text-slate-400">IISWBM</span>' }} />
          </div>
          <div className="w-256 h-160 bg-slate-20 rounded-2xl flex items-center justify-center p-6">
            <img src="/images/logo-cii.svg" alt="CII" className="max-w-full max-h-full object-contain" onError={(e) => { e.target.parentElement.innerHTML = '<span class="text-slate-400">CII</span>' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// PAGES
// ============================================

// Home Page
const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AccreditationsSection />
      <ProductsSection />
      <TestimonialsSection />
    </main>
  );
};

// About Page
const AboutPage = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-6xl lg:text-7xl font-bold text-emerald-900 mb-6">
            At NatureMark Systems
          </h1>
          <p className="text-2xl text-slate-600 max-w-2xl">
            Our goal is clear — to make sustainability not just a promise, but a practical and profitable pathway for every organization.
          </p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-12">
              <img src="/images/illustration-team-1.png" alt="Team" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <div>
              <p className="text-2xl text-slate-700 leading-relaxed">
                Our journey began with the development of <span className="text-emerald-600 font-semibold">ArborTag</span>. From there, we recognized that sustainability extends beyond ecosystems — it's central to every business operation.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 aspect-square bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl p-12">
              <img src="/images/illustration-team-2.png" alt="Team" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <div className="lg:order-1">
              <p className="text-2xl text-slate-700 leading-relaxed">
                That realization gave birth to <span className="text-emerald-600 font-semibold">CarbonDesk</span>. It converts raw environmental data into actionable insights — empowering companies to make informed decisions and meet ESG goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium text-base uppercase tracking-wider">Our Team</span>
            <h2 className="text-6xl lg:text-7xl font-bold text-emerald-900 mt-4">
              Meet the Founders
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <button
                key={member.name}
                onClick={() => setActiveTeamMember(index)}
                className={`transition-all duration-500 ${
                  index === activeTeamMember 
                    ? 'scale-110' 
                    : 'scale-100 opacity-60 hover:opacity-100'
                }`}
              >
                <div className={`overflow-hidden rounded-2xl transition-all duration-500 ${
                  index === activeTeamMember ? 'w-56 h-72' : 'w-32 h-44'
                }`}>
                  <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-teal-200">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Member Info */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <h3 className="text-5xl font-bold text-emerald-900">
              {teamMembers[activeTeamMember].name}
            </h3>
            <p className="text-emerald-600 mb-4">{teamMembers[activeTeamMember].role}</p>
            <p className="text-2xl text-slate-600 italic">
              "{teamMembers[activeTeamMember].quote}"
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

// Products Page
const ProductsPage = () => {
  const { setCurrentPage } = useApp();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-emerald-900 mb-6">
            Our Products
          </h1>
          <p className="text-2xl text-slate-600">
            Smart solutions for a sustainable future
          </p>
        </div>
      </section>

      {/* Products Listing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {/* Sustain360 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl overflow-hidden">
              <img src="/images/sustain360-preview.svg" alt="Sustain360" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-base mb-4">Carbon Intelligence</span>
              <h2 className="text-5xl font-bold text-emerald-900 mb-4">CarbonDesk</h2>
              <p className="text-2xl text-emerald-600 mb-4">Enterprise Carbon Intelligence Platform</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A comprehensive platform that helps organizations measure, monitor, and manage their greenhouse gas emissions across all operations and supply chains.
              </p>
              <ul className="space-y-3 mb-8">
                {['Complete Scope 1, 2 & 3 emissions tracking', 'AI-powered analytics and insights', 'Automated ESG reporting', 'Net Zero pathway planning'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setCurrentPage('sustain360')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
              >
                Learn More
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ArborTag */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 aspect-video bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl overflow-hidden">
              <img src="/images/arbortag-preview.png" alt="ArborTag" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <div className="lg:order-1">
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-base mb-4">Tree Intelligence</span>
              <h2 className="text-5xl font-bold text-emerald-900 mb-4">ArborTag</h2>
              <p className="text-xl text-teal-600 mb-4">Measure. Monitor. Sustain</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A smart, AI-driven monitoring system that makes every tree measurable, traceable, and report-ready. ArborTag combines precision hardware, AI-based image analytics, and secure geotagging.
              </p>
              <ul className="space-y-3 mb-8">
                {['Smart tagging with AI vision', 'Real-time growth tracking', 'Geo-fencing & mapping', 'Carbon sequestration calculation'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-teal-600" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setCurrentPage('arbortag')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
              >
                Learn More
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Ready to Start Your Sustainability Journey?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Contact us today to learn how our products can help your organization.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold hover:shadow-xl transition-shadow"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
};

// Sustain360 Product Detail Page
const Sustain360Page = () => {
  const { setCurrentPage } = useApp();

  const sections = [
    { id: 'what-we-do', label: 'What we do' },
    { id: 'problem', label: 'The Problem' },
    { id: 'solution', label: 'Our Solution' },
    { id: 'why', label: 'Why CarbonDesk' },
    { id: 'results', label: 'Results' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      {/* Hero Section - With background image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background with image */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700">
          {/* Hero Background Image */}
          <img 
            src="/images/sustain360-hero-bg.png" 
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-teal-900/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center w-full">
          {/* Sustain360 Hero Icon - Replace /images/sustain360-hero-icon.png with your icon */}
          <div className="w-50 h-50 flex items-center justify-center mx-auto mb-8">
            <img 
              src="/images/sustain360-hero-icon.svg" 
              alt="CarbonDesk" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
      
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </button>
            <a
              href={DEMO_URLS.sustain360}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/10 border border-slate-200">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_SUSTAIN360_VIDEO_ID?rel=0"
              title="CarbonDesk Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Page Layout - Sidebar + Content */}
      <div className="flex min-h-screen">
        {/* Left Sidebar Section */}
        <aside className="hidden lg:block w-64 flex-shrink-0 bg-slate-50 border-r border-slate-200">
          <nav className="sticky top-20 p-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Contents</p>
            <div className="space-y-1">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-3 text-left group py-3 w-full border-l-2 border-slate-300 pl-4 hover:border-emerald-500 hover:bg-white transition-all rounded-r-lg"
                >
                  <span className="text-emerald-600 font-bold text-base">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-base text-slate-600 group-hover:text-emerald-700 font-medium transition-colors">
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content Section */}
        <div className="flex-1">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            {/* What We Do */}
            <section id="what-we-do" className="py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-lg font-medium mb-6">What we do</span>
                <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  Measure, monitor and manage greenhouse gas emissions
                </h2>
                <p className="text-2xl text-slate-600 leading-relaxed mb-6">
                  CarbonDesk helps organizations measure, monitor, and manage their greenhouse gas emissions across operations and supply chains — all in one unified system.
                </p>
                <p className="text-2xl text-slate-600 leading-relaxed">
                  We turn complex carbon data into actionable insights that help businesses reduce emissions, achieve compliance, and demonstrate real climate leadership.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                  <img 
                    src="/images/sustain360-dashboard.png" 
                    alt="CarbonDesk Dashboard"
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-lg font-medium mb-6">The Problem We Solve</span>
              <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Organizations today face increasing pressure to prove their climate commitments
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sustain360Problems.map((problem, index) => (
                <div key={index} className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-emerald-600 font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-slate-700 text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section id="solution" className="py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                  <img 
                    src="/images/sustain360-analytics.png" 
                    alt="Analytics Dashboard"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-lg font-medium mb-6">Our Solution</span>
                <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  Complete Emissions Visibility
                </h2>
                <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                  Centralize and visualize every source of carbon, from energy use and logistics to supply chain and business travel, across Scope 1, Scope 2, and Scope 3.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Smart Analytics That Drive Action</h3>
                  {[
                    'Where are our biggest emission hotspots?',
                    'Which reduction projects deliver maximum ROI?',
                    'How are we performing month to month?',
                    'Are our initiatives accelerating our path to Net Zero?'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Sustain360 */}
          <section id="why" className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-lg font-medium mb-6">Why CarbonDesk</span>
              <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Built for enterprise sustainability
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <h3 className="text-5xl font-bold text-slate-900 mb-4">
                  Advanced & Modern Systems
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Built with the latest technology to ensure accuracy, scalability, and ease of use for enterprises of all sizes.
                </p>
              </div>
              <div className="p-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border border-teal-100">
                <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-5xl font-bold text-slate-900 mb-4">
                  ROI-Focused Approach
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Identify the most cost-effective reduction opportunities first, maximizing your return on sustainability investments.
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section id="results" className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-lg font-medium mb-6">Results You Can Expect</span>
              <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Transform your sustainability strategy
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sustain360Results.map((result, index) => (
                <div key={index} className="p-6 bg-emerald-50 rounded-2xl flex items-start gap-4 border border-emerald-100">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg pt-1.5">{result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 -mx-6 lg:-mx-12 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to transform your carbon management?
              </h2>
              <p className="text-2xl text-emerald-200 mb-10">
                Start your journey to Net Zero with CarbonDesk.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-10 py-4 bg-white text-emerald-900 rounded-full font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
                >
                  Get Started Today
                </button>
                <a
                  href={DEMO_URLS.sustain360}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Try Demo
                </a>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    </main>
  );
};

// ArborTag Product Detail Page
const ArborTagPage = () => {
  const { setCurrentPage } = useApp();

  const sections = [
    { id: 'what-we-do', label: 'What we do' },
    { id: 'problem', label: 'The Problem' },
    { id: 'solution', label: 'Our Solution' },
    { id: 'features', label: 'Key Features' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'results', label: 'Results' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      {/* Hero Section - With background image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background with image */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-emerald-600 to-emerald-700">
          {/* Hero Background Image */}
          <img 
            src="/images/arbortag-hero-bg.png" 
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-emerald-800/70 to-emerald-900/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center w-full">
          {/* ArborTag Hero Icon - Replace /images/arbortag-hero-icon.png with your icon */}
          <div className="w-50 h-50 flex items-center justify-center mx-auto mb-10">
            <img 
              src="/images/arbortag-hero-icon.svg" 
              alt="ArborTag" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            The Future of Tree Intelligence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </button>
            <a
              href={DEMO_URLS.arbortag}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-teal-900 rounded-full font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/10 border border-slate-200">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/p0iGDVh6q2o?rel=0"
              title="ArborTag Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl lg:text-3xl font-medium text-white italic">
            "Every tree tells a story. ArborTag lets you hear it."
          </p>
          <p className="mt-4 text-xl text-teal-100">
            No clipboards. No spreadsheets. Just live, intelligent data.
          </p>
        </div>
      </section>

      {/* Page Layout - Sidebar + Content */}
      <div className="flex min-h-screen">
        {/* Left Sidebar Section */}
        <aside className="hidden lg:block w-64 flex-shrink-0 bg-slate-50 border-r border-slate-200">
          <nav className="sticky top-20 p-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Contents</p>
            <div className="space-y-1">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-3 text-left group py-3 w-full border-l-2 border-slate-300 pl-4 hover:border-teal-500 hover:bg-white transition-all rounded-r-lg"
                >
                  <span className="text-teal-600 font-bold text-base">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-base text-slate-600 group-hover:text-teal-700 font-medium transition-colors">
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content Section */}
        <div className="flex-1">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            {/* What We Do */}
            <section id="what-we-do" className="py-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-lg font-medium mb-6">What we do</span>
                  <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    Smart AI-Driven Tree Monitoring
                  </h2>
                  <p className="text-2xl text-slate-600 leading-relaxed mb-6">
                    ArborTag is a smart, AI-driven monitoring system that makes every tree measurable, traceable, and report-ready.
                  </p>
                  <p className="text-2xl text-slate-600 leading-relaxed">
                    We combine precision hardware, AI-based image analytics, and secure geotagging to deliver verified ecological insights in seconds.
                  </p>
                </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100">
                  <img 
                    src="/images/arbortag-app-demo.png" 
                    alt="ArborTag App"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-lg font-medium mb-6">The Problem We Solve</span>
              <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Environmental data collection is outdated
              </h2>
              <p className="text-2xl text-slate-600">
                Tree audits are slow, manual, and often inaccurate. Corporates struggle to verify CSR plantations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {arbortagProblems.map((problem, index) => (
                <div key={index} className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-slate-700 text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section id="solution" className="py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100">
                  <img 
                    src="/images/arbortag-aruco-demo.png" 
                    alt="ArUco Detection"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-lg font-medium mb-6">Our Solution</span>
                <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  AI-Powered Precision
                </h2>
                <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                  Use smartphone cameras with ArUco markers to instantly capture accurate tree measurements — no specialized equipment required.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Instant tree identification and verification',
                    'Accurate height and diameter measurements',
                    'Secure GPS geotagging for every tree',
                    'Carbon sequestration calculations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-lg font-medium mb-6">Key Features</span>
              <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Everything you need for tree intelligence
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {arbortagFeatures.map((feature, index) => (
                <div key={index} className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section className="py-24">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 lg:p-16 border border-teal-100">
              <div className="max-w-3xl">
                <span className="inline-block px-4 py-1.5 bg-teal-600 text-white rounded-full text-lg font-medium mb-6">Cutting-edge Advantages</span>
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-10">
                  Why ArborTag stands out
                </h2>
                
                <div className="space-y-5">
                  {arbortagAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-slate-700 text-lg pt-0.5">{advantage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases" className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-lg font-medium mb-6">Use Cases</span>
              <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Built for diverse applications
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {arbortagUseCases.map((useCase, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-teal-300 hover:bg-teal-50 transition-all duration-300">
                  <p className="text-slate-800 font-medium">{useCase}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section id="results" className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-lg font-medium mb-6">Results You Can Expect</span>
              <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Transform your tree monitoring
              </h2>
              <p className="text-2xl text-slate-600">
                Because sustainability isn't about promises. It's about proof.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {arbortagResults.map((result, index) => (
                <div key={index} className="p-6 bg-teal-50 rounded-2xl flex items-start gap-4 border border-teal-100">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg pt-1.5">{result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-br from-teal-900 via-emerald-800 to-emerald-900 -mx-6 lg:-mx-12 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to tag the future of sustainability?
              </h2>
              <p className="text-xl text-teal-200 mb-10">
                Get your quote today and transform how you monitor your green assets.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-10 py-4 bg-white text-teal-900 rounded-full font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
                >
                  Contact Us
                </button>
                <a
                  href={DEMO_URLS.arbortag}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    </main>
  );
};

// Contact Page
const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <span className="text-emerald-600 font-medium text-base uppercase tracking-wider">Contact Us</span>
              <h1 className="text-5xl font-bold text-emerald-900 mt-4 mb-4">
                Connect With Us
              </h1>
              <p className="text-2xl text-slate-600 mb-8">
                Initiate Your ESG Excellence Journey
              </p>

              <ul className="space-y-4 mb-12">
                {[
                  'Our team of ESG experts is here to guide your organization',
                  'Explore our range of services from carbon footprint measurement to full ESG strategy',
                  'Innovative tools and methodologies for accurate measurement',
                  "Let's create a roadmap that turns your commitments into achievements"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* FAQ */}
              <div>
                <h3 className="text-5xl font-bold text-emerald-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full p-5 flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-slate-900">{faq.question}</span>
                        <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === index && (
                        <div className="px-5 pb-5">
                          <p className="text-slate-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <p className="text-slate-600 mb-8">
                Fill out the form and a sales or support expert will be in touch right away.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-medium text-slate-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-slate-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-slate-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-slate-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="+91 98333 63372"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-slate-700 mb-3">
                    How can we help you?
                  </label>
                  <div className="space-y-3">
                    {[
                      'Need clarity on Scope 1, 2, and 3 emissions',
                      'Looking to adhere to global sustainability standards',
                      'Need assistance mapping material topics to GRI',
                      'Considering purchasing carbon credits',
                      'Want to optimize operational efficiency'
                    ].map((item) => (
                      <label key={item} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 mt-0.5"
                        />
                        <span className="text-base text-slate-600">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Privacy Policy Page - Content from Privacy_Policy.pdf
const PrivacyPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600">
            Last updated March 17, 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-lg prose-emerald">
          <p className="text-slate-600 mb-8">
            This Privacy Notice for NatureMark Systems Private Limited ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you visit our website at <a href="https://www.naturemarksystems.com" className="text-emerald-600 hover:text-emerald-700">https://www.naturemarksystems.com</a>, or any website of ours that links to this Privacy Notice, and engage with us in other related ways, including any sales, marketing, or events.
          </p>
          <p className="text-slate-600 mb-8">
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at enquiries@naturemarksystems.com.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Summary of Key Points</h3>
            <p className="text-slate-600 mb-4"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
            <p className="text-slate-600 mb-4"><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</p>
            <p className="text-slate-600 mb-4"><strong>Do we collect any information from third parties?</strong> We may collect information from public databases, marketing partners, social media platforms, and other outside sources.</p>
            <p className="text-slate-600 mb-4"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
            <p className="text-slate-600 mb-4"><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
            <p className="text-slate-600"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
          </div>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">1. What Information Do We Collect?</h2>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Personal information you disclose to us</h3>
          <p className="text-slate-600 mb-4">
            <em>In Short: We collect personal information that you provide to us.</em>
          </p>
          <p className="text-slate-600 mb-4">
            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <p className="text-slate-600 mb-4"><strong>Personal Information Provided by You.</strong> The personal information we collect may include:</p>
          <ul className="text-slate-600 mb-6 space-y-1">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Mailing addresses</li>
            <li>Job titles</li>
            <li>Usernames</li>
            <li>Passwords</li>
            <li>Contact preferences</li>
            <li>Contact or authentication data</li>
            <li>Billing addresses</li>
          </ul>
          <p className="text-slate-600 mb-4"><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
          <ul className="text-slate-600 mb-6 space-y-1">
            <li>Financial data</li>
            <li>Biometric data</li>
            <li>Information revealing race or ethnic origin</li>
            <li>Information revealing political opinions</li>
            <li>Information revealing trade union membership</li>
            <li>Credit worthiness data</li>
          </ul>
          <p className="text-slate-600 mb-8">
            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
          </p>

          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Information collected from other sources</h3>
          <p className="text-slate-600 mb-8">
            <em>In Short: We may collect limited data from public databases, marketing partners, and other outside sources.</em><br /><br />
            In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">2. How Do We Process Your Information?</h2>
          <p className="text-slate-600 mb-4">
            <em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em>
          </p>
          <p className="text-slate-600 mb-4">We process your personal information for a variety of reasons, including:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li><strong>To facilitate account creation and authentication</strong> and otherwise manage user accounts.</li>
            <li><strong>To deliver and facilitate delivery of services</strong> to the user.</li>
            <li><strong>To respond to user inquiries/offer support to users.</strong></li>
            <li><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
            <li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">3. What Legal Bases Do We Rely On To Process Your Information?</h2>
          <p className="text-slate-600 mb-4">
            <em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law.</em>
          </p>
          <p className="text-slate-600 mb-4">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. We may rely on the following legal bases:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
            <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
            <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
            <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">4. When And With Whom Do We Share Your Personal Information?</h2>
          <p className="text-slate-600 mb-4">
            <em>In Short: We may share information in specific situations described in this section and/or with the following third parties.</em>
          </p>
          <p className="text-slate-600 mb-4">We may need to share your personal information in the following situations:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location.</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">5. Do We Use Cookies And Other Tracking Technologies?</h2>
          <p className="text-slate-600 mb-8">
            <em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em><br /><br />
            We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.<br /><br />
            We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences).
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">6. Do We Offer Artificial Intelligence-Based Products?</h2>
          <p className="text-slate-600 mb-4">
            <em>In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em>
          </p>
          <p className="text-slate-600 mb-4">
            As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
          </p>
          <p className="text-slate-600 mb-4"><strong>Use of AI Technologies:</strong> We provide the AI Products through third-party service providers ("AI Service Providers"), including OpenAI, DeepSeek and Perplexity. Your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products.</p>
          <p className="text-slate-600 mb-8"><strong>Our AI Products are designed for:</strong> AI automation. All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process.</p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">7. How Long Do We Keep Your Information?</h2>
          <p className="text-slate-600 mb-8">
            <em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em><br /><br />
            We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.<br /><br />
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">8. How Do We Keep Your Information Safe?</h2>
          <p className="text-slate-600 mb-8">
            <em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em><br /><br />
            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">9. Do We Collect Information From Minors?</h2>
          <p className="text-slate-600 mb-8">
            <em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em><br /><br />
            We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at enquiries@naturemarksystems.com.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">10. What Are Your Privacy Rights?</h2>
          <p className="text-slate-600 mb-4">
            <em>In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em>
          </p>
          <p className="text-slate-600 mb-4">In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right:</p>
          <ul className="text-slate-600 mb-6 space-y-1">
            <li>(i) to request access and obtain a copy of your personal information</li>
            <li>(ii) to request rectification or erasure</li>
            <li>(iii) to restrict the processing of your personal information</li>
            <li>(iv) if applicable, to data portability</li>
            <li>(v) not to be subject to automated decision-making</li>
          </ul>
          <p className="text-slate-600 mb-4">In certain circumstances, you may also have the right to object to the processing of your personal information.</p>
          <p className="text-slate-600 mb-4"><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided below or updating your preferences.</p>
          <p className="text-slate-600 mb-8"><strong>Account Information:</strong> If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">11. Controls For Do-Not-Track Features</h2>
          <p className="text-slate-600 mb-8">
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">12. Do We Make Updates To This Notice?</h2>
          <p className="text-slate-600 mb-8">
            <em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em><br /><br />
            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">13. How Can You Contact Us About This Notice?</h2>
          <p className="text-slate-600 mb-8">
            If you have questions or comments about this notice, you may email us at enquiries@naturemarksystems.com or contact us by post at:
            <br /><br />
            <strong>NatureMark Systems Private Limited</strong><br />
            302/2 Parkview bldg, Opp. B.M.C. Garden,<br />
            Ajit Glass Road, Jogeshwari (West), Mumbai-400102<br />
            Mumbai, Maharashtra 400102<br />
            India
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">14. How Can You Review, Update, Or Delete The Data We Collect From You?</h2>
          <p className="text-slate-600 mb-8">
            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request by contacting us at enquiries@naturemarksystems.com.
          </p>
        </div>
      </section>
    </main>
  );
};

// Terms of Service Page - Content from Terms_of_Service.pdf
const TermsPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-slate-600">
            Last updated March 18, 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-lg prose-emerald">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Agreement To Our Legal Terms</h2>
          <p className="text-slate-600 mb-4">
            We are NatureMark Systems Private Limited ("Company," "we," "us," "our"), a company registered in India at 302/2 Parkview bldg, Opp. B.M.C. Garden, Ajit Glass Road, Jogeshwari (West), Mumbai-400102, Mumbai, Maharashtra 400102.
          </p>
          <p className="text-slate-600 mb-4">
            We operate the website <a href="https://www.naturemarksystems.com" className="text-emerald-600 hover:text-emerald-700">https://www.naturemarksystems.com</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          <p className="text-slate-600 mb-4">
            You can contact us by phone at 9833363372, email at enquiries@naturemarksystems.com, or by mail to 302/2 Parkview bldg, Opp. B.M.C. Garden, Ajit Glass Road, Jogeshwari (West), Mumbai-400102, Mumbai, Maharashtra 400102, India.
          </p>
          <p className="text-slate-600 mb-4">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and NatureMark Systems Private Limited, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
          </p>
          <p className="text-slate-600 mb-4 font-semibold">
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p className="text-slate-600 mb-8">
            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">1. Our Services</h2>
          <p className="text-slate-600 mb-8">
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.<br /><br />
            The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">2. Intellectual Property Rights</h2>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Our intellectual property</h3>
          <p className="text-slate-600 mb-4">
            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
          </p>
          <p className="text-slate-600 mb-4">
            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world. The Content and Marks are provided in or through the Services "AS IS" for your internal business purpose only.
          </p>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Your use of our Services</h3>
          <p className="text-slate-600 mb-4">
            Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
          </p>
          <ul className="text-slate-600 mb-6 space-y-1">
            <li>access the Services; and</li>
            <li>download or print a copy of any portion of the Content to which you have properly gained access, solely for your internal business purpose.</li>
          </ul>
          <p className="text-slate-600 mb-8">
            Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.<br /><br />
            Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">3. User Representations</h2>
          <p className="text-slate-600 mb-4">By using the Services, you represent and warrant that:</p>
          <ul className="text-slate-600 mb-8 space-y-1">
            <li>(1) all registration information you submit will be true, accurate, current, and complete;</li>
            <li>(2) you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
            <li>(3) you have the legal capacity and you agree to comply with these Legal Terms;</li>
            <li>(4) you are not a minor in the jurisdiction in which you reside;</li>
            <li>(5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise;</li>
            <li>(6) you will not use the Services for any illegal or unauthorized purpose; and</li>
            <li>(7) your use of the Services will not violate any applicable law or regulation.</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">4. User Registration</h2>
          <p className="text-slate-600 mb-8">
            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">5. Purchases and Payment</h2>
          <p className="text-slate-600 mb-8">
            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.<br /><br />
            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">6. Subscriptions</h2>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Billing and Renewal</h3>
          <p className="text-slate-600 mb-4">
            Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle is annual.
          </p>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Cancellation</h3>
          <p className="text-slate-600 mb-4">
            All purchases are non-refundable. You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at enquiries@naturemarksystems.com.
          </p>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Fee Changes</h3>
          <p className="text-slate-600 mb-8">
            We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">7. Software</h2>
          <p className="text-slate-600 mb-8">
            We may include software for use in connection with our Services. If such software is accompanied by an end user license agreement ("EULA"), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our services and in accordance with these Legal Terms. Any software and any related documentation is provided "AS IS" without warranty of any kind, either express or implied.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">8. Prohibited Activities</h2>
          <p className="text-slate-600 mb-4">
            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
          <p className="text-slate-600 mb-4">As a user of the Services, you agree not to:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorized framing of or linking to the Services.</li>
            <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>Attempt to impersonate another user or person or use the username of another user.</li>
            <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
            <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services.</li>
            <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
            <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">9. User Generated Contributions</h2>
          <p className="text-slate-600 mb-8">
            The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">10. Contribution License</h2>
          <p className="text-slate-600 mb-8">
            You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).<br /><br />
            By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.<br /><br />
            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">11. Guidelines For Reviews</h2>
          <p className="text-slate-600 mb-8">
            We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">12. Services Management</h2>
          <p className="text-slate-600 mb-8">
            We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms; (3) refuse, restrict access to, limit the availability of, or disable any of your Contributions or any portion thereof; (4) remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">13. Privacy Policy</h2>
          <p className="text-slate-600 mb-8">
            We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in India. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Services, you are transferring your data to India, and you expressly consent to have your data transferred to and processed in India.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">14. Term and Termination</h2>
          <p className="text-slate-600 mb-8">
            These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION.<br /><br />
            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">15. Modifications and Interruptions</h2>
          <p className="text-slate-600 mb-8">
            We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.<br /><br />
            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">16. Governing Law</h2>
          <p className="text-slate-600 mb-8">
            These Legal Terms shall be governed by and defined following the laws of India. NatureMark Systems Private Limited and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">17. Dispute Resolution</h2>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Informal Negotiations</h3>
          <p className="text-slate-600 mb-4">
            To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms, the Parties agree to first attempt to negotiate any Dispute informally for at least sixty (60) days before initiating arbitration.
          </p>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Binding Arbitration</h3>
          <p className="text-slate-600 mb-4">
            Any dispute arising out of or in connection with these Legal Terms shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146). The number of arbitrators shall be two (2). The seat, or legal place, or arbitration shall be Mangalore, India. The language of the proceedings shall be English. The governing law of these Legal Terms shall be substantive law of India.
          </p>
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Restrictions</h3>
          <p className="text-slate-600 mb-8">
            The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">18. Corrections</h2>
          <p className="text-slate-600 mb-8">
            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">19. Disclaimer</h2>
          <p className="text-slate-600 mb-8">
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">20. Limitations of Liability</h2>
          <p className="text-slate-600 mb-8">
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">21. Indemnification</h2>
          <p className="text-slate-600 mb-8">
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">22. User Data</h2>
          <p className="text-slate-600 mb-8">
            We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">23. Electronic Communications, Transactions, and Signatures</h2>
          <p className="text-slate-600 mb-8">
            Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">24. California Users and Residents</h2>
          <p className="text-slate-600 mb-8">
            If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">25. Miscellaneous</h2>
          <p className="text-slate-600 mb-8">
            These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.<br /><br />
            If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">26. Contact Us</h2>
          <p className="text-slate-600 mb-8">
            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
            <br /><br />
            <strong>NatureMark Systems Private Limited</strong><br />
            302/2 Parkview bldg, Opp. B.M.C. Garden,<br />
            Ajit Glass Road, Jogeshwari (West), Mumbai-400102<br />
            Mumbai, Maharashtra 400102<br />
            India<br />
            Phone: 9833363372<br />
            Email: enquiries@naturemarksystems.com
          </p>
        </div>
      </section>
    </main>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'sustain360':
        return <Sustain360Page />;
      case 'arbortag':
        return <ArborTagPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  // Fix: Scroll to top when page changes
  useEffect(() => {
    // Use setTimeout to ensure scroll happens after page render
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    
    return () => clearTimeout(scrollTimeout);
  }, [currentPage]);

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      <div className="min-h-screen bg-white">
        <Header />
        {renderPage()}
        <Footer />
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </AppContext.Provider>
  );
}