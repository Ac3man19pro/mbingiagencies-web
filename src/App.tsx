import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, MessageSquare, ChevronRight, CheckCircle2, 
  Monitor, Palette, Shirt, Briefcase, FileText, Wallet, 
  TrendingUp, Star, Users, BriefcaseBusiness, Clock, 
  Headphones, Facebook, Instagram, Send, MapPin, Mail, 
  ArrowRight, QrCode, Youtube, Twitter
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

// --- Theme Constants ---
const COLORS = {
  teal: '#00A99D',
  orange: '#F58220',
  black: '#111111',
  white: '#FFFFFF',
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mwanzo', href: '#' },
    { name: 'Kuhusu Sisi', href: '#about' },
    { name: 'Huduma', href: '#services' },
    { name: 'Kazi Zetu', href: '#portfolio' },
    { name: 'Mawasiliano', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-[#00A99D] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
          >
            M
          </motion.div>
          <span className={`font-bold text-xl tracking-tighter ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            MBINGI <span className="text-[#F58220]">AGENCIES</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-[#00A99D] ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/255616421810" 
            target="_blank" 
            className="bg-[#00A99D] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#008d83] transition-all shadow-md hover:shadow-[#00A99D]/40"
          >
            Tupigie Sasa
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-700 font-medium hover:text-[#00A99D] py-2 border-b border-gray-50" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/255616421810" 
                className="bg-[#00A99D] text-white px-6 py-4 rounded-xl text-center font-bold mt-2"
                onClick={() => setIsOpen(false)}
              >
                Tupigie Sasa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]">
      {/* Background with tech elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/hero-bg-e8d9f34b-1780240115275.webp" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-transparent to-[#111111]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent" />
        
        {/* Animated particles/glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00A99D]/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#F58220]/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A99D]/10 border border-[#00A99D]/30 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
              <span className="text-[#00A99D] font-bold text-xs md:text-sm tracking-wide uppercase">
                Huduma Zenye Uhakika, Kwa Kiwango cha Kisasa
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8">
              HUDUMA ZOTE <br />
              <span className="text-[#00A99D]">SEHEMU MOJA</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-xl">
              Tunakupa huduma za biashara, nyaraka, IT, graphics design, branding, mobile money na digital solutions kwa haraka na uhakika.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/255616421810" 
                target="_blank"
                className="flex items-center justify-center gap-3 bg-[#00A99D] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#008d83] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,169,157,0.3)]"
              >
                <MessageSquare className="w-6 h-6" />
                WhatsApp Now
              </a>
              <div className="flex flex-col gap-3">
                <a 
                  href="tel:+255791147070" 
                  className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-6 text-gray-500"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#111111] bg-gray-800" />
                ))}
              </div>
              <p className="text-sm font-medium">Jiunge na wateja <span className="text-white">1,000+</span> walioridhika</p>
            </motion.div>
          </motion.div>

          {/* Large Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 h-80 md:w-96 md:h-96"
            >
              {/* Main Logo Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D] to-[#008d83] rounded-[60px] shadow-[0_0_100px_rgba(0,169,157,0.4)] flex items-center justify-center">
                <span className="text-white text-[180px] font-black leading-none select-none">M</span>
              </div>
              
              {/* Decorative rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border-2 border-[#F58220]/30 rounded-[80px] border-dashed" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-20 border border-white/10 rounded-[100px]" 
              />
              
              {/* Floating accents */}
              <motion.div 
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-[#F58220] rounded-3xl shadow-xl flex items-center justify-center"
              >
                <Monitor className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center"
              >
                <TrendingUp className="w-8 h-8 text-[#00A99D]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/about-us-345f95ba-1780240115275.webp" 
                alt="About MBINGI AGENCIES" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-4xl font-black mb-1">7+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-[#00A99D]">Service Categories</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#F58220] rounded-[40px] -z-0 hidden lg:block" />
            <div className="absolute -top-10 -left-10 w-48 h-48 border-[12px] border-[#00A99D] rounded-[40px] -z-0 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <span className="text-[#00A99D] font-black tracking-widest uppercase text-sm mb-4 block">Kuhusu Sisi</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#111111] leading-tight mb-8">
                Tunaongoza Katika <br />
                <span className="text-[#00A99D]">Huduma za Kidigitali</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                MBINGI AGENCIES ni taasisi inayotoa huduma mbalimbali za biashara, nyaraka, teknolojia, graphics design, branding na huduma za fedha. Tunalenga kutoa huduma za haraka, salama na za kisasa kwa watu binafsi, biashara na taasisi nchini Tanzania.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#00A99D]/10 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-[#00A99D] w-8 h-8" />
                </div>
                <h4 className="font-black text-xl text-[#111111] mb-3">Mission Yetu</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Kutoa huduma bora na suluhisho za kisasa kwa wateja wetu kote nchini.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#F58220]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="text-[#F58220] w-8 h-8" />
                </div>
                <h4 className="font-black text-xl text-[#111111] mb-3">Vision Yetu</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Kuwa taasisi inayoongoza katika huduma za kidigitali na biashara Tanzania.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceCategories = [
    {
      title: 'IT & GRAPHICS DESIGN',
      icon: <Monitor className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/service-graphics-4ec92fe3-1780240115655.webp",
      services: ['Logo Design', 'Poster Design', 'Banner Design', 'Business Card Design', 'Website Design', 'Social Media Design', 'Printing Services', 'Digital Marketing'],
      color: '#00A99D'
    },
    {
      title: 'STICKERS & BRANDING',
      icon: <Palette className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/service-branding-2c925e79-1780240115656.webp",
      services: ['Motorcycle Branding', 'Vehicle Branding', 'Business Branding', 'Product Stickers', 'Shop Branding', 'Corporate Branding'],
      color: '#F58220'
    },
    {
      title: 'T-SHIRT PRINTING',
      icon: <Shirt className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/service-printing-550dc640-1780240113016.webp",
      services: ['Custom T-Shirts', 'Company T-Shirts', 'Team T-Shirts', 'Event T-Shirts', 'Promotional Printing'],
      color: '#00A99D'
    },
    {
      title: 'BUSINESS REGISTRATION',
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/service-registration-bc31f824-1780240115655.webp",
      services: ['Business Name Registration', 'Company Registration (BRELA)', 'TIN Certificate', 'Business License', 'Business Documentation'],
      color: '#F58220'
    },
    {
      title: 'NIDA & DOCUMENTATION',
      icon: <FileText className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/hero-bg-e8d9f34b-1780240115275.webp",
      services: ['NIDA Follow Up', 'NIDA Corrections', 'Birth Certificates', 'Marriage Certificates', 'Death Certificates', 'School Certificates', 'Affidavits'],
      color: '#00A99D'
    },
    {
      title: 'MOBILE MONEY & BUNDLES',
      icon: <Wallet className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/service-finance-ffdaefc4-1780240115277.webp",
      services: ['Money Transfer', 'Money Withdrawal', 'Internet Bundles', 'Airtime', 'Agency Registration'],
      color: '#F58220'
    },
    {
      title: 'SOCIAL MEDIA GROWTH',
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/808262b1-3263-4189-9cff-2da4bed991c7/service-social-media-7a76d1ea-1780240115274.webp",
      services: ['Followers Growth', 'Likes', 'Comments', 'Views', 'Social Media Promotions'],
      color: '#00A99D'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00A99D] font-black tracking-widest uppercase text-sm mb-4 block">Huduma Zetu</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-6">Suluhisho kwa Kila Hitaji</h2>
          <p className="text-gray-600 text-lg">Tunatoa huduma zenye weledi na viwango vya juu kwa mahitaji yako yote ya biashara na kidigitali.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl text-white">
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-tight">{cat.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {cat.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A99D]" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://wa.me/255616421810" 
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gray-50 rounded-2xl font-black text-sm text-[#111111] hover:bg-[#00A99D] hover:text-white transition-all transform active:scale-95 shadow-sm"
                >
                  OMBA HUDUMA <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Professional Services', icon: <BriefcaseBusiness className="w-8 h-8" />, text: 'Tunatoa huduma za kiwango cha juu na zenye weledi mkubwa.' },
    { title: 'Fast Delivery', icon: <Clock className="w-8 h-8" />, text: 'Muda wako ni muhimu, tunakamilisha kazi kwa wakati uliopangwa.' },
    { title: 'Affordable Prices', icon: <Wallet className="w-8 h-8" />, text: 'Gharama zetu ni rafiki na zinaendana na ubora wa huduma.' },
    { title: 'Trusted Support', icon: <Headphones className="w-8 h-8" />, text: 'Timu yetu ipo tayari kukusaidia wakati wowote unapohitaji.' },
    { title: 'Modern Solutions', icon: <Monitor className="w-8 h-8" />, text: 'Tunatumia teknolojia na vifaa vya kisasa zaidi.' },
    { title: 'Customer Satisfaction', icon: <Star className="w-8 h-8" />, text: 'Furaha ya mteja ndio kipaumbele chetu namba moja.' }
  ];

  return (
    <section className="py-32 bg-[#111111] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00A99D] font-black tracking-widest uppercase text-sm mb-4 block">Ubora Wetu</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Kwa Nini Utuchague Sisi?</h2>
          <p className="text-gray-400 text-lg">Sababu zinazotufanya kuwa chaguo namba moja kwa wateja wetu nchini kote.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-[#00A99D]/50 hover:bg-white/10 transition-all group"
            >
              <div className="w-20 h-20 bg-[#00A99D]/20 rounded-3xl flex items-center justify-center text-[#00A99D] mb-8 group-hover:scale-110 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-500">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00A99D]/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F58220]/5 rounded-full blur-[120px] -z-0" />
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Wateja Walioridhika', value: '1000+', icon: <Users /> },
    { label: 'Miradi Iliyokamilika', value: '500+', icon: <CheckCircle2 /> },
    { label: 'Jamii za Huduma', value: '7+', icon: <Briefcase /> },
    { label: 'Msaada wa Wateja', value: '24/7', icon: <Headphones /> }
  ];

  return (
    <section className="py-20 bg-[#00A99D]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">{stat.value}</div>
              <div className="text-white/80 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00A99D] font-black tracking-widest uppercase text-sm mb-4 block">Kazi Zetu</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-6 tracking-tight">Gallery ya Kazi Zetu</h2>
          <p className="text-gray-600 text-lg">Tazama baadhi ya miradi tuliyoifanya kwa ubunifu wa hali ya juu na weledi.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden group cursor-pointer shadow-lg"
            >
              <img 
                src={`https://picsum.photos/seed/${item + 100}/800/1000`} 
                alt={`Portfolio item ${item}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00A99D] via-[#00A99D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div>
                  <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-2">Portfolio</p>
                  <h4 className="text-white text-2xl font-black leading-tight">Creative Branding Project {item}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'John Doe', role: 'Business Owner', text: 'Huduma zenu ni za kipekee. Logo yangu imetoka vizuri sana na kwa wakati. Nawapendekeza sana!' },
    { name: 'Amina Salum', role: 'Entrepreneur', text: 'Nimepata msaada mkubwa kwenye usajili wa kampuni yangu BRELA kupitia Mbingi Agencies. Wako makini sana.' },
    { name: 'Said Bakari', role: 'Artist', text: 'T-shirts nilizoprint hapa ni zenye ubora wa juu sana na hazichuji rangi hata baada ya kufua mara nyingi.' }
  ];

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00A99D] font-black tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-6">Wateja Wanasemaje?</h2>
          <p className="text-gray-600 text-lg">Ushahidi wa kazi zetu bora ni kupitia tabasamu za wateja wetu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white rounded-[40px] shadow-xl border border-gray-100 relative"
            >
              <div className="flex text-[#F58220] mb-8 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed mb-10">"{rev.text}"</p>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-[#00A99D]/10 rounded-2xl flex items-center justify-center text-[#00A99D] font-black text-xl">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-xl text-[#111111]">{rev.name}</h4>
                  <p className="text-sm font-bold text-[#00A99D] uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatsAppChannel = () => {
  return (
    <section className="py-32 bg-[#00A99D]">
      <div className="container mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-[60px] p-10 md:p-24 border border-white/20 relative overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
                Jiunge na <br />
                <span className="text-[#F58220]">WhatsApp <br />Channel</span> Yetu
              </h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed">
                Pata taarifa za huduma mpya, ofa kabambe, na elimu ya biashara moja kwa moja kwenye simu yako kwa haraka zaidi.
              </p>
              <a 
                href="https://wa.me/255616421810" 
                target="_blank"
                className="inline-flex items-center gap-4 bg-white text-[#00A99D] px-12 py-6 rounded-[32px] font-black text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-95"
              >
                Join Channel Now <MessageSquare className="w-7 h-7" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-white p-12 rounded-[60px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] transform rotate-6 hover:rotate-0 transition-all duration-700 relative">
                <QrCode className="w-56 h-56 text-[#111111]" />
                <div className="text-center mt-8">
                  <p className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Scan Here</p>
                  <p className="text-[#111111] font-black text-lg">TO CONNECT</p>
                </div>
                {/* Float decor */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#F58220] rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#F58220]/20 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Ujumbe wako umepokelewa kwa usalama! Tutakuwasiliana hivi punde.', {
      style: { background: '#00A99D', color: '#fff', border: 'none' }
    });
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-[#00A99D] font-black tracking-widest uppercase text-sm mb-4 block">Mawasiliano</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#111111] mb-10 leading-tight">
              Tujadiliane <br /><span className="text-[#00A99D]">Mradi Wako</span>
            </h2>
            <p className="text-gray-600 text-lg mb-16 max-w-md">
              Upo tayari kukuza biashara yako kwa viwango vya kisasa? Timu yetu ipo hapa kukusaidia.
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-20 h-20 bg-[#00A99D]/10 rounded-[24px] flex items-center justify-center text-[#00A99D] shrink-0 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-black text-2xl mb-2 text-[#111111]">Mahali Tulipo</h4>
                  <p className="text-gray-500 text-lg">Mbingu, Tandale, Tanzania</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-20 h-20 bg-[#F58220]/10 rounded-[24px] flex items-center justify-center text-[#F58220] shrink-0 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  <Phone className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-black text-2xl mb-2 text-[#111111]">Piga Simu / WhatsApp</h4>
                  <p className="text-gray-500 text-lg">+255 791 147 070</p>
                  <p className="text-gray-500 text-lg">+255 616 421 810</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-20 h-20 bg-[#00A99D]/10 rounded-[24px] flex items-center justify-center text-[#00A99D] shrink-0 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300">
                  <Mail className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-black text-2xl mb-2 text-[#111111]">Tuma Barua Pepe</h4>
                  <p className="text-gray-500 text-lg">info@mbingiagencies.co.tz</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 md:p-16 rounded-[60px] border border-gray-100 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-black text-[#111111] uppercase tracking-widest">Jina Lako Kamili</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-white border-2 border-gray-100 rounded-2xl px-8 py-5 focus:border-[#00A99D] outline-none transition-all shadow-sm"
                  placeholder="Mfano: John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-[#111111] uppercase tracking-widest">Namba ya Simu</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full bg-white border-2 border-gray-100 rounded-2xl px-8 py-5 focus:border-[#00A99D] outline-none transition-all shadow-sm"
                  placeholder="Mfano: 0712 000 000"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-[#111111] uppercase tracking-widest">Huduma Unayohitaji</label>
                <select className="w-full bg-white border-2 border-gray-100 rounded-2xl px-8 py-5 focus:border-[#00A99D] outline-none transition-all shadow-sm appearance-none">
                  <option>Kuchagua Huduma...</option>
                  <option>Graphics Design & IT</option>
                  <option>Branding & Stickers</option>
                  <option>T-Shirt Printing</option>
                  <option>Business Registration</option>
                  <option>NIDA & Documentation</option>
                  <option>Mobile Money & Bundles</option>
                  <option>Social Media Growth</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-[#111111] uppercase tracking-widest">Maelezo Zaidi</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white border-2 border-gray-100 rounded-2xl px-8 py-5 focus:border-[#00A99D] outline-none transition-all shadow-sm resize-none"
                  placeholder="Tueleze kidogo kuhusu hitaji lako..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#111111] text-white py-6 rounded-2xl font-black text-xl hover:bg-[#00A99D] transition-all transform hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-4 active:scale-95"
              >
                TUMA UJUMBE <Send className="w-6 h-6" />
              </button>
            </form>
            
            {/* Form decorative tag */}
            <div className="absolute -top-6 -right-6 bg-[#F58220] text-white px-6 py-3 rounded-2xl font-black text-sm shadow-xl transform rotate-12">
              Free Consultation!
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00A99D]/5 rounded-full blur-[120px] -z-0" />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-32 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <div className="w-12 h-12 bg-[#00A99D] rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:rotate-12 transition-transform">M</div>
              <span className="font-black text-3xl tracking-tighter text-white">MBINGI <span className="text-[#F58220]">AGENCIES</span></span>
            </div>
            <p className="text-gray-400 max-w-md mb-12 text-lg leading-relaxed">
              "Huduma Zenye Uhakika, Kwa Kiwango cha Kisasa". Tunakupa suluhisho bora kwa ajili ya biashara yako kupitia teknolojia na ubunifu wa hali ya juu.
            </p>
            <div className="flex gap-5">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00A99D] hover:border-[#00A99D] transition-all group">
                  <Icon className="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xl mb-10 uppercase tracking-widest text-[#00A99D]">Kurasa</h4>
            <ul className="space-y-5 text-gray-400 text-lg">
              {['Mwanzo', 'Huduma', 'Kazi Zetu', 'Kuhusu Sisi', 'Mawasiliano'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-[#00A99D] transition-colors flex items-center gap-3"><ChevronRight className="w-4 h-4 text-[#F58220]" /> {item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-10 uppercase tracking-widest text-[#00A99D]">Social Media</h4>
            <ul className="space-y-5 text-gray-400 text-lg">
              {['Instagram', 'Facebook', 'TikTok', 'WhatsApp'].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#F58220] transition-colors flex items-center gap-3"><ChevronRight className="w-4 h-4 text-[#F58220]" /> {item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
          <p className="font-medium">© {new Date().getFullYear()} MBINGI AGENCIES. Haki zote zimehifadhiwa.</p>
          <div className="flex gap-8 font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A99D]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F58220]/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/255616421810" 
      target="_blank" 
      className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-[24px] shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-110 hover:-rotate-6 transition-all active:scale-95 group overflow-hidden"
    >
      <MessageSquare className="w-8 h-8 relative z-10" />
      <span className="absolute right-full mr-6 bg-white text-[#111111] px-6 py-3 rounded-2xl font-black text-sm shadow-2xl opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-gray-100">
        Tutumie Ujumbe WhatsApp 👋
      </span>
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
    </a>
  );
};

// --- Root Component ---

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#00A99D] selection:text-white antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Portfolio />
      <Testimonials />
      <WhatsAppChannel />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="bottom-left" closeButton richColors />
    </div>
  );
}

export default App;