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
  { id: 2, name: 'Infosys', logo: '/images/client-2.png', person: 'Priya Sharma', role: 'ESG Director', testimonial: 'Sustain360 transformed how we approach carbon accounting. The platform made our BRSR reporting seamless.' },
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
  'Manual tree measurements are slow and inconsistent',
  'Difficulty proving carbon sequestration claims',
  'No standardized way to track tree growth',
  'Challenges in geo-tagging plantations'
];

const arbortagResults = [
  'Complete plantation inventory digitized in days',
  'Accurate carbon sequestration data',
  'Automated reporting for CSR disclosures',
  'Real-time tracking of tree health'
];

// ============================================
// ICONS
// ============================================
const LeafIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6.5 21.5c4-4 8-8 12-12-4 4-8 8-12 12zm0 0c-2-2-2-6 0-8 4-4 10-4 14-2-4 2-10 6-14 10z"/>
  </svg>
);

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

const QuoteIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
  </svg>
);

// ============================================
// COMPONENTS
// ============================================

// Header Component
const Header = () => {
  const { currentPage, setCurrentPage } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-900/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <LeafIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-emerald-900 tracking-tight">
              NatureMark
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id || 
                  (item.id === 'products' && ['sustain360', 'arbortag'].includes(currentPage))
                    ? 'bg-emerald-900 text-white shadow-lg shadow-emerald-900/20'
                    : 'text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-emerald-600/30 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
            <ArrowRightIcon className="w-4 h-4" />
          </button>
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
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <LeafIcon className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xl font-semibold">NatureMark</span>
            </div>
            <p className="text-emerald-200/70 text-sm leading-relaxed">
              Empowering organizations to achieve sustainable growth through innovative technology solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setCurrentPage(item.toLowerCase().replace(' ', ''))}
                    className="text-emerald-200/70 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setCurrentPage('sustain360')}
                  className="text-emerald-200/70 hover:text-white transition-colors text-sm"
                >
                  Sustain360
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('arbortag')}
                  className="text-emerald-200/70 hover:text-white transition-colors text-sm"
                >
                  ArborTag
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:naturemarksystems@gmail.com" className="text-emerald-200/70 hover:text-white transition-colors text-sm">
                  naturemarksystems@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919833363372" className="text-emerald-200/70 hover:text-white transition-colors text-sm">
                  +91 9833363372
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-emerald-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-200/50 text-sm">
            © 2025 NatureMark Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-emerald-200/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-emerald-200/50 hover:text-white text-sm transition-colors">Terms of Service</a>
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
              <span className="text-emerald-200 text-sm font-medium">Sustainability Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Innovation for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                Sustainable
              </span>{' '}
              Future
            </h1>
            
            <p className="text-xl text-emerald-100/80 mb-10 max-w-lg leading-relaxed">
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
                <div className="text-4xl font-bold text-white">40%</div>
                <div className="text-emerald-200 text-sm">Emission Reduction</div>
              </div>
              
              <div className="absolute bottom-20 right-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-emerald-200 text-sm">Trees Monitored</div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-xl" />
              
              {/* Central Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-400/30 rotate-12">
                <LeafIcon className="w-16 h-16 text-white -rotate-12" />
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
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mt-4 mb-6">
              NatureMark Systems
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full opacity-20 animate-pulse" />
              </div>
              <img 
                src="/images/about-illustration.svg" 
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
                  <div className="text-2xl font-bold text-emerald-900">100%</div>
                  <div className="text-slate-500 text-sm">Compliance Rate</div>
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
      name: 'Sustain360',
      tagline: 'Enterprise Carbon Intelligence Platform',
      description: 'Measure, monitor, and manage greenhouse gas emissions across all operations.',
      gradient: 'from-emerald-600 to-emerald-800',
      features: ['Scope 1, 2 & 3 Tracking', 'AI Analytics', 'ESG Reporting']
    },
    {
      id: 'arbortag',
      name: 'ArborTag',
      tagline: 'Measure. Monitor. Sustain',
      description: 'Track tree plantations and carbon sequestration with computer vision.',
      gradient: 'from-teal-600 to-emerald-700',
      features: ['Tree Measurement', 'Geo-tagging', 'Carbon Calculation']
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mt-4">
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
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white rounded-full" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={product.id === 'sustain360' ? 'https://www.youtube.com/@NatureMarkSystems' : 'https://youtu.be/p0iGDVh6q2o'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-red-500/50"
                  >
                    <PlayIcon className="w-8 h-8 text-white ml-1" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">{product.name}</h3>
                <p className="text-slate-500 mb-4">{product.tagline}</p>
                <p className="text-slate-600 mb-6">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
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
    <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
            <QuoteIcon className="w-16 h-16 text-emerald-400 mb-6" />
            
            <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
              "{client.testimonial}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-full overflow-hidden">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain p-2"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              <div>
                <div className="text-white font-semibold">{client.person}</div>
                <div className="text-emerald-300 text-sm">{client.role}, {client.name}</div>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {clientsData.map((c, index) => (
              <button
                key={c.id}
                onClick={() => setActiveIndex(index)}
                className={`w-24 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white shadow-lg scale-110' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <img 
                  src={c.logo} 
                  alt={c.name} 
                  className="w-full h-full object-contain p-3"
                  onError={(e) => { e.target.parentElement.innerHTML = `<span class="text-xs ${index === activeIndex ? 'text-emerald-900' : 'text-white'}">${c.name}</span>` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Accreditations Section
const AccreditationsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Accreditations</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mt-4 mb-6">
          Our Accreditations
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Our accreditations reinforce our commitment to standards-aligned sustainability and rigorous methodologies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-12">
          <div className="w-64 h-40 bg-slate-50 rounded-2xl flex items-center justify-center p-6">
            <img src="/images/logo-iiswbm.svg" alt="IISWBM" className="max-w-full max-h-full object-contain" onError={(e) => { e.target.parentElement.innerHTML = '<span class="text-slate-400">IISWBM</span>' }} />
          </div>
          <div className="w-64 h-40 bg-slate-50 rounded-2xl flex items-center justify-center p-6">
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
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
            At NatureMark Systems
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
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
                That realization gave birth to <span className="text-emerald-600 font-semibold">Sustain360</span>. It converts raw environmental data into actionable insights — empowering companies to make informed decisions and meet ESG goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mt-4">
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
            <h3 className="text-2xl font-bold text-emerald-900">
              {teamMembers[activeTeamMember].name}
            </h3>
            <p className="text-emerald-600 mb-4">{teamMembers[activeTeamMember].role}</p>
            <p className="text-xl text-slate-600 italic">
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
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-slate-600">
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
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm mb-4">Carbon Intelligence</span>
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">Sustain360</h2>
              <p className="text-lg text-emerald-600 mb-4">Enterprise Carbon Intelligence Platform</p>
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
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm mb-4">Tree Monitoring</span>
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">ArborTag</h2>
              <p className="text-lg text-teal-600 mb-4">Measure. Monitor. Sustain</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                An innovative tree measurement and monitoring solution using computer vision and AI to accurately track plantation health and carbon sequestration.
              </p>
              <ul className="space-y-3 mb-8">
                {['Smartphone-based tree measurement', 'ArUco marker technology', 'Geo-tagging & tracking', 'Carbon sequestration calculation'].map((item) => (
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
          <h2 className="text-4xl font-bold text-white mb-4">
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

// Product Detail Page Component
const ProductDetailPage = ({ product }) => {
  const { setCurrentPage } = useApp();
  const isSustain360 = product === 'sustain360';
  
  const data = {
    name: isSustain360 ? 'Sustain360' : 'ArborTag',
    tagline: isSustain360 ? 'Enterprise Carbon Intelligence Platform' : 'Measure. Monitor. Sustain',
    problems: isSustain360 ? sustain360Problems : arbortagProblems,
    results: isSustain360 ? sustain360Results : arbortagResults,
    demoUrl: isSustain360 ? 'https://sustain360.naturemarksystems.com' : 'https://youtu.be/p0iGDVh6q2o',
    gradient: isSustain360 ? 'from-emerald-600 to-emerald-800' : 'from-teal-600 to-emerald-700'
  };

  const sections = [
    { id: 'what-we-do', label: 'What we do' },
    { id: 'problem', label: 'The Problem' },
    { id: 'solution', label: 'Our Solution' },
    { id: 'why', label: `Why ${data.name}` },
    { id: 'results', label: 'Results' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className={`py-24 bg-gradient-to-br ${isSustain360 ? 'from-emerald-50 to-teal-50' : 'from-teal-50 to-emerald-50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className={`w-24 h-24 bg-gradient-to-br ${data.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl`}>
            <LeafIcon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-4">
            {data.name}
          </h1>
          <p className="text-xl text-slate-600 mb-8">{data.tagline}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 border-2 border-emerald-900 text-emerald-900 rounded-full font-semibold hover:bg-emerald-900 hover:text-white transition-colors"
            >
              Get in Touch
            </button>
            <a
              href={data.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 bg-gradient-to-r ${data.gradient} text-white rounded-full font-semibold hover:shadow-xl transition-shadow`}
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Content with Side Nav */}
      <div className="relative">
        {/* Side Navigation */}
        <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-3 text-left group"
              >
                <span className="text-emerald-600 font-semibold">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-sm text-slate-500 group-hover:text-emerald-600 transition-colors">
                  {section.label}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* Sections */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* What We Do */}
          <section id="what-we-do" className="py-24">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">What we do</span>
            <h2 className="text-4xl font-bold text-emerald-900 mt-4 mb-6">
              {isSustain360 
                ? 'Measure, monitor and manage greenhouse gas emissions'
                : 'Measure, monitor and manage your tree assets with precision'
              }
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {isSustain360
                ? 'Sustain360 helps organizations measure, monitor, and manage their greenhouse gas emissions across operations and supply chains — all in one unified system.'
                : 'ArborTag enables organizations to accurately measure, monitor, and manage their tree plantations using computer vision and AI.'
              }
            </p>
          </section>

          {/* Problem */}
          <section id="problem" className="py-24 border-t border-slate-100">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">The Problem We Solve</span>
            <h2 className="text-4xl font-bold text-emerald-900 mt-4 mb-12">
              {isSustain360
                ? 'Organizations face increasing pressure to prove their climate commitments'
                : 'Organizations struggle to accurately track tree plantation initiatives'
              }
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.problems.map((problem, index) => (
                <div key={index} className="p-6 bg-slate-50 rounded-2xl">
                  <p className="text-slate-600">{problem}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section id="solution" className="py-24 border-t border-slate-100">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Our Solution</span>
            <h2 className="text-4xl font-bold text-emerald-900 mt-4 mb-6">
              {isSustain360 ? 'Complete Emissions Visibility' : 'AI-Powered Tree Measurement'}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {isSustain360
                ? 'Centralize and visualize every source of carbon, from energy use to supply chain, across Scope 1, 2, and 3.'
                : 'Use smartphone cameras with ArUco markers to instantly capture accurate tree measurements — no specialized equipment required.'
              }
            </p>
            <div className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                Smart Analytics That Drive Action
              </h3>
              <ul className="space-y-3">
                {(isSustain360 
                  ? ['Where are our biggest emission hotspots?', 'Which reduction projects deliver maximum ROI?', 'How are we performing month to month?', 'Are our initiatives accelerating our path to Net Zero?']
                  : ['How many trees have survived in each zone?', 'What is the estimated carbon sequestration per tree?', 'Which areas need attention or replanting?', 'How is overall plantation health trending?']
                ).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Why */}
          <section id="why" className="py-24 border-t border-slate-100">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Why {data.name}</span>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="p-8 bg-white border border-slate-200 rounded-3xl">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  {isSustain360 ? 'Advanced & Modern Systems' : 'Computer Vision Technology'}
                </h3>
                <p className="text-slate-600">
                  {isSustain360
                    ? 'Built with the latest technology to ensure accuracy, scalability, and ease of use.'
                    : 'Advanced AI algorithms deliver measurement accuracy within 5% using just a smartphone camera.'
                  }
                </p>
              </div>
              <div className="p-8 bg-white border border-slate-200 rounded-3xl">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  {isSustain360 ? 'ROI-Focused' : 'Cost-Effective'}
                </h3>
                <p className="text-slate-600">
                  {isSustain360
                    ? 'Identify the most cost-effective reduction opportunities first.'
                    : 'Reduce tree monitoring costs by up to 70% compared to traditional methods.'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section id="results" className="py-24 border-t border-slate-100">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Results You Can Expect</span>
            <h2 className="text-4xl font-bold text-emerald-900 mt-4 mb-12">
              Transform your {isSustain360 ? 'sustainability strategy' : 'tree monitoring operations'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.results.map((result, index) => (
                <div key={index} className="p-6 bg-emerald-50 rounded-2xl flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-700">{result}</p>
                </div>
              ))}
            </div>
          </section>
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
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Contact Us</span>
              <h1 className="text-5xl font-bold text-emerald-900 mt-4 mb-4">
                Connect With Us
              </h1>
              <p className="text-xl text-slate-600 mb-8">
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
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="+91 98333 63372"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
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
                        <span className="text-sm text-slate-600">{item}</span>
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
        return <ProductDetailPage product="sustain360" />;
      case 'arbortag':
        return <ProductDetailPage product="arbortag" />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
