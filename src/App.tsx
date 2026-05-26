import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Menu, 
  X, 
  ChevronRight, 
  Search, 
  Video, 
  Camera, 
  BarChart3, 
  Globe, 
  Award, 
  Briefcase, 
  User, 
  Code, 
  MessageSquare,
  Instagram,
  Twitter,
  Facebook,
  Phone
} from 'lucide-react';

// --- Data ---

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const REELS = [
  {
    title: 'reel Unit 306 3Bed Dubai',
    category: 'Real Estate',
    videoUrl: 'https://www.youtube.com/embed/gvflTjGL4OM?autoplay=1&mute=1&loop=1&playlist=gvflTjGL4OM&controls=0&modestbranding=1',
  },
  {
    title: 'G2 Automotive videography Dubai I Alwan',
    category: 'Automotive videography',
    videoUrl: 'https://www.youtube.com/embed/ZFpegK44XGE?autoplay=1&mute=1&loop=1&playlist=ZFpegK44XGE&controls=0&modestbranding=1',
  },
  {
    title: 'reel 504 CW 22 Dubai',
    category: 'Real Estate',
    videoUrl: 'https://www.youtube.com/embed/tMiSEfo2jJk?autoplay=1&mute=1&loop=1&playlist=tMiSEfo2jJk&controls=0&modestbranding=1',
  },
  {
    title: 'reel Villa 32 Victory Heights Carmen Dubai',
    category: 'Real Estate',
    videoUrl: 'https://www.youtube.com/embed/KhU4QWxjmms?autoplay=1&mute=1&loop=1&playlist=KhU4QWxjmms&controls=0&modestbranding=1',
  },
];

const SKILLS = [
  { name: 'Real Estate Videography', icon: Video, color: 'text-white' },
  { name: 'Automotive Photography', icon: Camera, color: 'text-slate-300' },
  { name: 'Cinematic Storytelling', icon: MessageSquare, color: 'text-white' },
  { name: 'Post-Production', icon: Video, color: 'text-slate-300' },
  { name: 'Lighting & Composition', icon: Camera, color: 'text-white' },
  { name: 'Graphic Design', icon: Code, color: 'text-slate-300' },
];

const EXPERIENCE = [
  {
    role: 'Videographer & Photographer',
    company: 'AL KHATEEB GLOBAL GENERAL TRADING',
    period: '2025 - Present',
    description: 'Leading visual content creation for a premier automotive upgrades and modification company in Dubai. Specializing in high-end automotive videography and photography to showcase luxury vehicle enhancements.',
  },
  {
    role: 'Videographer, Photographer & Graphic Designer',
    company: 'ALWAN3dcars',
    period: '2023 - 2025',
    description: 'Automotive upgrades and modification company in Dubai, specializing in premium Automotive Videography. Managed end-to-end multimedia production, including professional photography and cinematic video editing.',
  },
  {
    role: 'Videographer, Photographer & Graphic Designer',
    company: 'Uber Homes Real Estate Abudhabi',
    period: '2021 - 2023',
    description: 'Real Estate company in Abu Dhabi. Captured luxury property tours and created high-impact visual content for the real estate market, combining photography with professional graphic design.',
  },
];

const PROJECTS = [
  {
    title: 'project 504 CW 22 Dubai',
    category: 'Real Estate',
    videoUrl: 'https://www.youtube.com/embed/6EHI46ByDvA?autoplay=1&mute=1&loop=1&playlist=6EHI46ByDvA&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.youtube.com/watch?v=6EHI46ByDvA',
  },
  {
    title: 'project Alwan Land Cruiser Project Dubai',
    category: 'Automotive videography',
    videoUrl: 'https://www.youtube.com/embed/6GAdoE17qbE?autoplay=1&mute=1&loop=1&playlist=6GAdoE17qbE&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.youtube.com/watch?v=6GAdoE17qbE',
  },
  {
    title: 'project Villa_06_West_Yas Dubai',
    category: 'Real Estate',
    videoUrl: 'https://www.youtube.com/embed/UGweuJqHLFM?autoplay=1&mute=1&loop=1&playlist=UGweuJqHLFM&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.youtube.com/watch?v=UGweuJqHLFM',
  },
  {
    title: 'Al Khateeb Jetour Upgrades project Dubai',
    category: 'Automotive Upgrades',
    videoUrl: 'https://www.youtube.com/embed/oDneqHX7Icc?autoplay=1&mute=1&loop=1&playlist=oDneqHX7Icc&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.youtube.com/watch?v=oDneqHX7Icc',
  },
];

const LEGAL_CONTENT = {
  'Privacy Policy': {
    title: 'Privacy Policy',
    content: `
      Your privacy is important to us. It is Yaya Moundé's policy to respect your privacy regarding any information we may collect from you across our website.
      
      We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
      
      We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
      
      We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
    `
  },
  'Terms of Service': {
    title: 'Terms of Service',
    content: `
      By accessing the website at https://mound.vercel.app, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
      
      If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
      
      In no event shall Yaya Moundé or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Yaya Moundé's website.
    `
  },
  'Cookie Policy': {
    title: 'Cookie Policy',
    content: `
      We use cookies to help improve your experience of our website. This cookie policy is part of Yaya Moundé's privacy policy, and covers the use of cookies between your device and our site.
      
      If you do not wish to accept cookies from us, you should instruct your browser to refuse cookies from our website, with the understanding that we may be unable to provide you with some of your desired content and services.
      
      We use cookies for a variety of reasons, such as remembering your preferences, analyzing how you use our site, and providing personalized content.
    `
  }
};

const CV_DATA = {
  name: "Yaya Moundé",
  title: "Cinematic Storytelling & Visual Production Specialist",
  location: "Dubai, UAE",
  phone: "+971 55 261 1055",
  email: "elyayayos53@gmail.com",
  summary: "Results-driven Visual Production Specialist with over 4 years of experience in the UAE market. Expert in cinematic storytelling, high-end videography, and professional photography for luxury real estate and automotive brands. Proven track record of delivering high-impact visual content that elevates brand identity and drives engagement.",
  experience: [
    {
      role: "Videographer & Photographer",
      company: "AL KHATEEB GLOBAL GENERAL TRADING",
      location: "Dubai, UAE",
      period: "2025 - Present",
      highlights: [
        "Leading visual content creation for a premier automotive upgrades and modification company in Dubai.",
        "Specializing in high-end automotive videography and photography to showcase luxury vehicle enhancements.",
        "Managing social media content strategy and production for automotive upgrades.",
        "Collaborating with technical teams to highlight vehicle modifications and enhancements."
      ]
    },
    {
      role: "Videographer, Photographer & Graphic Designer",
      company: "ALWAN3dcars",
      location: "Dubai, UAE",
      period: "2023 - 2025",
      highlights: [
        "Managed multimedia production for an automotive upgrades and modification company specializing in Automotive Videography.",
        "Produced cinematic video content showcasing high-end interior transformations and upholstery work.",
        "Conducted professional vehicle photography and high-end retouching for marketing materials.",
        "Designed creative graphic assets to promote premium automotive modification services."
      ]
    },
    {
      role: "Videographer, Photographer & Graphic Designer",
      company: "Uber Homes Real Estate",
      location: "Abu Dhabi, UAE",
      period: "2021 - 2023",
      highlights: [
        "Captured luxury property tours and architectural photography.",
        "Created high-impact visual content for the real estate market.",
        "Developed brand-consistent video storytelling for high-end listings.",
        "Collaborated with marketing teams to enhance property visibility."
      ]
    }
  ],
  skills: [
    "Cinematic Videography",
    "Luxury Real Estate Photography",
    "Automotive Visual Production",
    "Video Editing (Adobe Premiere Pro, After Effects)",
    "Graphic Design (Photoshop, Illustrator)",
    "Drone Cinematography",
    "Visual Storytelling",
    "Color Grading"
  ],
  education: [
    {
      degree: "Bachelor of Multimedia Arts",
      institution: "International University",
      period: "2017 - 2021"
    }
  ],
  languages: ["English (Conversational)", "French (Native)"]
};

// --- Components ---

const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4 text-liquid"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-slate-400 max-w-2xl mx-auto"
    >
      {subtitle}
    </motion.p>
  </div>
);

const HoverName = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <motion.span 
      className={`inline-block cursor-default ${className}`}
      initial="initial"
      whileHover="hover"
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { y: 0, color: "inherit" },
            hover: { 
              y: -8,
              color: "#fff",
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10,
                delay: i * 0.02 
              }
            }
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLegalPage, setActiveLegalPage] = useState<keyof typeof LEGAL_CONTENT | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-white/30 selection:text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-500/5 rounded-full blur-[120px] animate-blob [animation-delay:2s]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[100px] animate-blob [animation-delay:4s]" />
        
        {/* Floating Droplets */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-24 h-24 bg-white/5 rounded-full blur-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-grid-white opacity-10" />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
            <motion.span 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center text-white"
            >
              Y.
            </motion.span>
            <HoverName text="Moundé" className="hidden sm:inline" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 liquid-glass hover:bg-white/20 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 liquid-glass text-white rounded-full text-lg font-bold"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold mb-6 border border-white/20">
                  Available for Full time work
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                  <HoverName text="Yaya" /> <HoverName text="Moundé" className="text-liquid" />
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl">
                  Cinematic Storytelling & Visual Production Specialist with 4+ years of experience in the UAE.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href="#projects" 
                    className="px-8 py-4 liquid-glass text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    View Projects <ChevronRight size={20} />
                  </a>
                  <motion.button 
                    onClick={() => setCvModalOpen(true)}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 20px rgba(255,255,255,0.2)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="px-8 py-4 glass-card rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors relative z-10"
                  >
                    View My CV <Download size={20} />
                  </motion.button>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 animate-float"
              >
                <div className="w-64 h-64 md:w-96 md:h-96 mx-auto relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-400 liquid-blob rotate-6 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 bg-dark liquid-blob border border-white/10 overflow-hidden glass-edge-glow">
                    <img 
                      src="https://raw.githubusercontent.com/ahmathmusharraf/mound-portfolio/refs/heads/main/yaya.jpg" 
                      alt="Cinematic Production"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reels Section */}
        <section className="py-20 bg-dark relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {REELS.map((reel, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden glass-edge-glow group"
                >
                  <iframe 
                    src={reel.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-[1.02] group-hover:scale-110 transition-transform duration-700"
                    allow="autoplay; encrypted-media"
                    title={reel.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1 block">
                      {reel.category}
                    </span>
                    <h4 className="text-sm font-bold text-white truncate">{reel.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1">
              <SectionHeading 
                title="About Me" 
                subtitle="I combine cinematic storytelling with high-end visual production to showcase luxury properties and automotive transformations in their best light."
              />
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Based in Dubai, I’ve spent the last 4 years creating compelling photo and video content for real estate and automotive brands across the UAE. My approach goes beyond visuals—I focus on capturing the intricate details of automotive upgrades, modifications, and premium Automotive Videography.
                </p>
                <p>
                  Whether it’s luxury property tours, dynamic car modification shoots, or branded content for upholstery specialists, I ensure every frame reflects quality, enhances brand identity, and drives engagement.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-2xl flex items-center gap-4 glass-edge-glow hover:bg-white/10 transition-all hover:scale-105">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Location</div>
                    <div className="font-bold">Dubai, UAE</div>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-2xl flex items-center gap-4 glass-edge-glow hover:bg-white/10 transition-all hover:scale-105">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-slate-300">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Experience</div>
                    <div className="font-bold">4+ Years</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-white to-slate-500 rounded-3xl blur-2xl opacity-10" />
                <div className="relative glass-card p-8 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Briefcase className="text-white" /> My Philosophy
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Create visuals that tell a clear and engaging story',
                      'Focus on what the client wants and needs',
                      'Always aim for high quality in every shot',
                      'Make content that attracts people and builds strong brands'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-white" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-white/5">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Work Experience" 
              subtitle="Experienced in delivering impactful visuals for real estate and automotive projects across the UAE."
            />
            <div className="max-w-4xl mx-auto space-y-8">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 border-l-2 border-white/20 pb-8 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-dark" />
                  <div className="glass-card p-6 rounded-2xl hover:border-white/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-white font-medium">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1 rounded-full bg-white/5 text-slate-400 text-sm border border-white/10">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 container mx-auto px-6">
          <SectionHeading 
            title="Core Expertise" 
            subtitle="Specialized skills developed through years of hands-on experience and continuous learning."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="liquid-glass p-8 rounded-[2.5rem] group glass-edge-glow"
              >
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 ${skill.color}`}>
                  <skill.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{skill.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  Expert level proficiency in {skill.name.toLowerCase()}, delivering measurable business outcomes and creative excellence.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white/5">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Featured Projects" 
              subtitle="A selection of my recent work across digital marketing and multimedia production."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl aspect-video"
                >
                  {project.videoUrl ? (
                    <iframe 
                      src={project.videoUrl}
                      className="w-full h-full object-cover pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-700"
                      allow="autoplay; encrypted-media"
                      title={project.title}
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <span className="inline-block px-3 py-1 rounded-full liquid-glass text-xs font-bold mb-3 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-white transition-colors"
                    >
                      View Case Study <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <a 
                href="#" 
                className="px-8 py-4 glass-card rounded-full font-bold inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                View All Work <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 container mx-auto px-6">
          <div className="glass-card rounded-[3rem] overflow-hidden border border-white/10 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-12 md:p-16">
                <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
                <p className="text-slate-400 text-lg mb-10">
                  Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and creative collaborations.
                </p>
                <div className="space-y-6">
                  <a href="mailto:elyayayos53@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:liquid-glass transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Email Me</div>
                      <div className="font-bold text-lg">elyayayos53@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:0552611055" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:liquid-glass transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Call Me</div>
                      <div className="font-bold text-lg">0552611055</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
                      <Globe size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Location</div>
                      <div className="font-bold text-lg">Dubai, UAE</div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-4">
                  {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:liquid-glass transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-white/5 p-12 md:p-16 border-l border-white/5">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Email</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Project Inquiry" 
                      className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Message</label>
                    <textarea 
                      placeholder="Tell me about your project..." 
                      rows={4}
                      className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>
                  <button className="w-full py-4 liquid-glass text-white rounded-2xl font-bold hover:bg-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} <HoverName text="Yaya Moundé" />. All rights reserved.
          </div>
          <div className="flex gap-8">
            {(Object.keys(LEGAL_CONTENT) as Array<keyof typeof LEGAL_CONTENT>).map((item) => (
              <button 
                key={item} 
                onClick={() => setActiveLegalPage(item)}
                className="text-slate-500 hover:text-white text-sm transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            Built with <span className="text-red-500">❤️</span> in Dubai
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/971552611055"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors group"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1 bg-white text-dark text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Legal Modal */}
      <AnimatePresence>
        {activeLegalPage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setActiveLegalPage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-2xl w-full p-8 md:p-12 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 p-6">
                <button 
                  onClick={() => setActiveLegalPage(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-liquid">
                {LEGAL_CONTENT[activeLegalPage].title}
              </h2>
              <div className="text-slate-400 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                {LEGAL_CONTENT[activeLegalPage].content.split('\n').map((paragraph, i) => (
                  paragraph.trim() && <p key={i}>{paragraph.trim()}</p>
                ))}
              </div>
              <div className="mt-10">
                <button 
                  onClick={() => setActiveLegalPage(null)}
                  className="px-8 py-3 liquid-glass text-white rounded-full font-bold hover:scale-105 transition-transform"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CV Modal */}
      <AnimatePresence>
        {cvModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
            onClick={() => setCvModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white text-dark max-w-4xl w-full h-[90vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-dark text-white p-6 flex items-center justify-between no-print">
                <h2 className="text-xl font-bold">Professional Curriculum Vitae</h2>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold flex items-center gap-2 transition-colors"
                  >
                    <Download size={16} /> Print / Save PDF
                  </button>
                  <button 
                    onClick={() => setCvModalOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* CV Content (Printable Area) */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white print:p-0 print:overflow-visible">
                <div id="cv-printable-content" className="max-w-3xl mx-auto">
                  {/* Header */}
                  <div className="border-b-2 border-dark pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">{CV_DATA.name}</h1>
                      <p className="text-lg font-bold text-slate-600 uppercase tracking-wide">{CV_DATA.title}</p>
                    </div>
                    <div className="text-right space-y-1 text-sm font-medium">
                      <p className="flex items-center justify-end gap-2"><Globe size={14} /> {CV_DATA.location}</p>
                      <p className="flex items-center justify-end gap-2"><Phone size={14} /> {CV_DATA.phone}</p>
                      <p className="flex items-center justify-end gap-2"><Mail size={14} /> {CV_DATA.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left Column */}
                    <div className="md:col-span-2 space-y-10">
                      {/* Summary */}
                      <section>
                        <h2 className="text-xl font-black uppercase border-b border-dark/10 pb-2 mb-4">Professional Summary</h2>
                        <p className="text-slate-700 leading-relaxed">{CV_DATA.summary}</p>
                      </section>

                      {/* Experience */}
                      <section>
                        <h2 className="text-xl font-black uppercase border-b border-dark/10 pb-2 mb-4">Work Experience</h2>
                        <div className="space-y-8">
                          {CV_DATA.experience.map((exp, i) => (
                            <div key={i} className="relative pl-4 border-l-2 border-dark/10">
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark" />
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-black text-lg">{exp.role}</h3>
                                <span className="text-sm font-bold bg-dark text-white px-2 py-0.5 rounded">{exp.period}</span>
                              </div>
                              <p className="font-bold text-slate-600 mb-3">{exp.company} | {exp.location}</p>
                              <ul className="space-y-2">
                                {exp.highlights.map((h, j) => (
                                  <li key={j} className="text-slate-700 text-sm flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dark shrink-0" />
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-10">
                      {/* Skills */}
                      <section>
                        <h2 className="text-xl font-black uppercase border-b border-dark/10 pb-2 mb-4">Core Skills</h2>
                        <div className="flex flex-wrap gap-2">
                          {CV_DATA.skills.map((skill, i) => (
                            <span key={i} className="text-xs font-bold border border-dark/20 px-3 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </section>

                      {/* Education */}
                      <section>
                        <h2 className="text-xl font-black uppercase border-b border-dark/10 pb-2 mb-4">Education</h2>
                        {CV_DATA.education.map((edu, i) => (
                          <div key={i} className="mb-4">
                            <h3 className="font-bold">{edu.degree}</h3>
                            <p className="text-sm text-slate-600">{edu.institution}</p>
                            <p className="text-xs font-bold mt-1">{edu.period}</p>
                          </div>
                        ))}
                      </section>

                      {/* Languages */}
                      <section>
                        <h2 className="text-xl font-black uppercase border-b border-dark/10 pb-2 mb-4">Languages</h2>
                        <div className="space-y-2">
                          {CV_DATA.languages.map((lang, i) => (
                            <p key={i} className="text-sm font-bold text-slate-700">{lang}</p>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-16 pt-8 border-t border-dark/10 text-center text-xs text-slate-400">
                    <p>References available upon request</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
