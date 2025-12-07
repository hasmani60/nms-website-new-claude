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
              
              {/* Logo Card - Added near 40% stat */}
              <div className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 animate-float" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="/images/logo-white.svg" 
                  alt="NatureMark" 
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
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

// Privacy Policy Page
const PrivacyPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600">
            Last updated: December 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-lg prose-emerald">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">1. Introduction</h2>
          <p className="text-slate-600 mb-8">
            NatureMark Systems ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including CarbonDesk and ArborTag.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">2. Information We Collect</h2>
          <p className="text-slate-600 mb-4">We may collect information about you in various ways, including:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you provide.</li>
            <li><strong>Usage Data:</strong> Information about how you use our services, including access times, pages viewed, and features used.</li>
            <li><strong>Device Data:</strong> Information about your device, including IP address, browser type, and operating system.</li>
            <li><strong>Location Data:</strong> Geographic location data when using our ArborTag service for tree monitoring.</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-slate-600 mb-4">We use the information we collect to:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Communicate with you about updates, support, and marketing</li>
            <li>Process transactions and send related information</li>
            <li>Generate carbon footprint reports and sustainability analytics</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">4. Data Sharing and Disclosure</h2>
          <p className="text-slate-600 mb-8">
            We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our services, conducting our business, or serving our users. We may also disclose your information when required by law or to protect our rights.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">5. Data Security</h2>
          <p className="text-slate-600 mb-8">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">6. Data Retention</h2>
          <p className="text-slate-600 mb-8">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">7. Your Rights</h2>
          <p className="text-slate-600 mb-4">Depending on your location, you may have the right to:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify or update your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict processing of your personal data</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">8. Contact Us</h2>
          <p className="text-slate-600 mb-8">
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            <br /><br />
            <strong>Email:</strong> naturemarksystems@gmail.com<br />
            <strong>Phone:</strong> +91 9833363372
          </p>
        </div>
      </section>
    </main>
  );
};

// Terms of Service Page
const TermsPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600">
            Last updated: December 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-lg prose-emerald">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-8">
            By accessing or using the services provided by NatureMark Systems, including CarbonDesk and ArborTag ("Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">2. Description of Services</h2>
          <p className="text-slate-600 mb-4">NatureMark Systems provides:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li><strong>CarbonDesk:</strong> An enterprise carbon intelligence platform for measuring, monitoring, and managing greenhouse gas emissions.</li>
            <li><strong>ArborTag:</strong> An AI-driven tree monitoring system for plantation tracking and carbon sequestration measurement.</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">3. User Accounts</h2>
          <p className="text-slate-600 mb-8">
            To access certain features of our Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">4. Acceptable Use</h2>
          <p className="text-slate-600 mb-4">You agree not to:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li>Use the Services for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the Services</li>
            <li>Upload malicious code or content</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the intellectual property rights of others</li>
          </ul>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">5. Intellectual Property</h2>
          <p className="text-slate-600 mb-8">
            All content, features, and functionality of our Services, including but not limited to text, graphics, logos, software, and data, are the exclusive property of NatureMark Systems and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">6. Data and Privacy</h2>
          <p className="text-slate-600 mb-8">
            Your use of our Services is also governed by our Privacy Policy. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-slate-600 mb-8">
            Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our Services will be uninterrupted, error-free, or secure. Carbon calculations and emission data are provided based on industry-standard methodologies but may vary based on actual conditions.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">8. Limitation of Liability</h2>
          <p className="text-slate-600 mb-8">
            To the maximum extent permitted by law, NatureMark Systems shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our Services.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">9. Indemnification</h2>
          <p className="text-slate-600 mb-8">
            You agree to indemnify and hold harmless NatureMark Systems and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of our Services or violation of these Terms.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">10. Termination</h2>
          <p className="text-slate-600 mb-8">
            We reserve the right to suspend or terminate your access to our Services at any time, with or without cause, and with or without notice. Upon termination, your right to use our Services will immediately cease.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">11. Governing Law</h2>
          <p className="text-slate-600 mb-8">
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Karnataka, India.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">12. Changes to Terms</h2>
          <p className="text-slate-600 mb-8">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our Services after such changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mb-4">13. Contact Us</h2>
          <p className="text-slate-600 mb-8">
            If you have questions about these Terms of Service, please contact us at:
            <br /><br />
            <strong>Email:</strong> naturemarksystems@gmail.com<br />
            <strong>Phone:</strong> +91 9833363372
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
