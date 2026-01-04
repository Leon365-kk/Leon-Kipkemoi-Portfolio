
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import { portfolioData } from './data';
import { 
  Shield, Brain, Code, Rocket, GraduationCap, Mail, Phone, MapPin, 
  ExternalLink, Linkedin, ChevronDown, Sparkles, Github, Terminal, 
  ShieldCheck, BrainCircuit, Code2, Network, Crosshair, Lock, 
  Fingerprint, BarChart, Bot, CheckCircle2, Lightbulb, Globe, Server
} from 'lucide-react';

const FORMSPREE_ID = 'mvzgvyaj'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const App: React.FC = () => {
  const [expandedExp, setExpandedExp] = useState<number | null>(0);
  const [expandedCert, setExpandedCert] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('sent');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes('cybersecurity')) return <ShieldCheck size={18} />;
    if (s.includes('intelligence')) return <BrainCircuit size={18} />;
    if (s.includes('software development')) return <Code2 size={18} />;
    if (s.includes('network security')) return <Network size={18} />;
    if (s.includes('threat hunting')) return <Crosshair size={18} />;
    if (s.includes('vulnerability')) return <Lock size={18} />;
    if (s.includes('forensics')) return <Fingerprint size={18} />;
    if (s.includes('data analysis')) return <BarChart size={18} />;
    if (s.includes('stem')) return <Lightbulb size={18} />;
    if (s.includes('web')) return <Globe size={18} />;
    if (s.includes('it infrastructure')) return <Server size={18} />;
    if (s.includes('robotics')) return <Bot size={18} />;
    return <Terminal size={18} />;
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500/30 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[128px]"
          />
          <motion.div 
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[128px]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 border border-cyan-500/20 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Cybersecurity & AI Consultations
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-slate-900 dark:text-white"
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">{portfolioData.name}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {portfolioData.title}. <span className="text-slate-800 dark:text-slate-200">Advancing youth digital skills through AI & Cybersecurity.</span>
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-600/25 text-center"
              >
                Get in Touch
              </a>
              <div className="flex gap-4 w-full sm:w-auto">
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="flex-1 sm:w-auto px-6 py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-full font-bold border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  Projects <ChevronDown size={20} />
                </a>
                <a 
                  href={`https://${portfolioData.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-4 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-full font-bold border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] border-8 border-white/10 dark:border-white/5 overflow-hidden shadow-2xl glass-card flex items-center justify-center group"
            >
              {/* Photo */}
              <img 
                src={portfolioData.profileImage} 
                alt={portfolioData.name} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Leon+Kipkemoi&background=06b6d4&color=fff&size=512';
                }}
              />
              
              {/* Cyber Scan Effect */}
              <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10 pointer-events-none"
              />
              
              {/* Decorative Frame Elements */}
              <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-[2.2rem] pointer-events-none group-hover:border-cyan-500/50 transition-colors"></div>
            </motion.div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 p-5 glass-card rounded-2xl shadow-xl border border-cyan-500/20 backdrop-blur-md z-20"
            >
              <Shield className="text-cyan-500" size={32} />
            </motion.div>
            <motion.div 
              animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 p-5 glass-card rounded-2xl shadow-xl border border-indigo-500/20 backdrop-blur-md z-20"
            >
              <Brain className="text-indigo-500" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative glass-card rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <Sparkles className="text-cyan-500" size={28} />
                About <span className="text-cyan-500">Me</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                {portfolioData.about}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Location</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2"><MapPin size={14} /> {portfolioData.location}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Education</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2"><GraduationCap size={14} /> BSc Info Security</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: <Shield className="text-cyan-500" />, title: "Cybersecurity", desc: "Threat hunting, vulnerability management, and digital forensics expertise." },
              { icon: <Brain className="text-indigo-500" />, title: "AI Solutions", desc: "Leveraging Large Language Models and AI tools for organizational efficiency." },
              { icon: <Code className="text-emerald-500" />, title: "Software Dev", desc: "Building robust, secure, and user-centric digital platforms." },
              { icon: <Rocket className="text-orange-500" />, title: "STEM Advocacy", desc: "Mentoring youth in robotics, coding, and transformative technology." }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 flex flex-col gap-4 hover:border-cyan-500/50 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-cyan-500/10 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skill.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Professional <span className="text-cyan-500">Experience</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">My professional journey across information security and tech education.</p>
          </motion.div>
          
          <div className="space-y-6">
            {portfolioData.experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
                className={`group glass-card rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 border-l-4 shadow-sm ${
                  expandedExp === idx 
                  ? 'border-l-cyan-500 bg-white dark:bg-slate-800/50 ring-1 ring-cyan-500/20 shadow-xl' 
                  : 'border-l-slate-300 dark:border-l-slate-700 hover:border-l-cyan-400'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className={`text-sm font-bold mb-1 block transition-colors ${expandedExp === idx ? 'text-cyan-500' : 'text-slate-400'}`}>
                      {exp.period}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-bold mb-1 transition-colors ${expandedExp === idx ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                      {exp.role}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <motion.div 
                    animate={{ rotate: expandedExp === idx ? 180 : 0 }}
                    className={`p-2 rounded-full transition-all ${expandedExp === idx ? 'bg-cyan-500/20 text-cyan-600' : 'bg-slate-200/50 text-slate-500'}`}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedExp === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="grid gap-4 border-t border-slate-200 dark:border-slate-700/50 pt-6 mt-6">
                        {exp.points.map((pt, i) => (
                          <li key={i} className="flex gap-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className="shrink-0 text-cyan-600 font-bold">•</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-white dark:bg-slate-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Featured <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Selected works from my professional and academic career.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {portfolioData.projects.map((project, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col h-full shadow-sm hover:shadow-xl p-8"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-500">
                    {project.category === 'Cybersecurity' ? <Shield size={28} /> : 
                     project.category === 'AI' ? <Brain size={28} /> : 
                     project.category === 'STEM' ? <Rocket size={28} /> : 
                     <Code size={28} />}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white hover:bg-slate-900 transition-all">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-cyan-600/10 text-cyan-600 hover:text-white hover:bg-cyan-600 transition-all">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills & Certs Section */}
      <section id="skills" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                <Terminal className="text-cyan-500" /> Technical Arsenal
              </h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {portfolioData.skills.map((skill) => (
                  <motion.span 
                    key={skill} 
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500 transition-all flex items-center gap-3 shadow-sm group"
                  >
                    <span className="text-slate-400 group-hover:text-cyan-500 transition-colors">
                      {getSkillIcon(skill)}
                    </span>
                    <span className="font-medium">{skill}</span>
                  </motion.span>
                ))}
              </div>
              
              <div className="p-8 glass-card rounded-2xl border-t-4 border-t-indigo-500 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                  <GraduationCap className="text-indigo-500" /> Academic Foundation
                </h3>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{portfolioData.education.degree}</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-1">{portfolioData.education.school}</p>
                <p className="text-slate-500 dark:text-slate-400 font-medium">{portfolioData.education.period}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                <Shield className="text-emerald-500" /> Verified Credentials
              </h2>
              <div className="grid gap-4">
                {portfolioData.certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setExpandedCert(expandedCert === idx ? null : idx)}
                    className={`p-6 glass-card rounded-xl group cursor-pointer transition-all border-l-2 shadow-sm ${
                      expandedCert === idx ? 'border-l-emerald-500 bg-emerald-500/5' : 'border-l-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-slate-500 text-sm">{cert.issuer}</p>
                      </div>
                      <motion.div 
                        animate={{ rotate: expandedCert === idx ? 180 : 0 }}
                        className={`mt-1 transition-colors ${expandedCert === idx ? 'text-emerald-400' : 'text-slate-400'}`}>
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedCert === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                            {cert.description}
                          </p>
                          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{cert.date}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800"
          >
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                  Let's <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">Collaborate</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                  Have a vision for a secure digital future or a STEM initiative? I'm always open to discussing new opportunities and technical challenges.
                </p>
                
                <div className="space-y-8">
                  <a href={`mailto:${portfolioData.email}`} onClick={(e) => { e.preventDefault(); window.location.href=`mailto:${portfolioData.email}`; }} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Email</p>
                      <span className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">{portfolioData.email}</span>
                    </div>
                  </a>
                  
                  <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 shadow-sm group-hover:scale-110 transition-transform">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Social</p>
                      <span className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">LinkedIn Profile</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-white/50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  {formStatus === 'sent' ? (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-10"
                    >
                      <CheckCircle2 size={60} className="mx-auto text-emerald-500 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-slate-500">Thanks for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Name</label>
                        <input name="name" required className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                        <input name="email" required type="email" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Message</label>
                        <textarea name="message" required rows={4} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white resize-none outline-none focus:border-cyan-500 transition-colors" placeholder="How can I help you?"></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formStatus === 'sending'}
                        className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-900/20 active:scale-[0.98] disabled:opacity-50"
                      >
                        {formStatus === 'sending' ? 'Transmitting...' : 'Send Message'}
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 border-t border-slate-200 dark:border-slate-800/50 text-center px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-400 text-xs uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} Leon Kipkemoi. Built with Precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
