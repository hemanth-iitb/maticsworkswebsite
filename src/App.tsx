import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Workflow, 
  Zap, 
  Shield, 
  Cpu, 
  Layers, 
  Database, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Github,
  Twitter,
  Linkedin,
  ChevronRight,
  Play,
  Terminal,
  Search,
  MessageSquare,
  BarChart3,
  Globe,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'product' | 'use-cases' | 'docs' | 'about' | 'blog' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Product', id: 'product' },
    { label: 'Function', id: 'use-cases' },
    { label: 'Agents', id: 'home' }, // Or a dedicated agents page if we had one
    { label: 'Resources', id: 'docs' },
    { label: 'About', id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-dark/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => setCurrentPage('home')}
        >
          <div className="w-8 h-8 bg-linear-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Cpu size={20} className="text-black" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight uppercase">Delegatio AI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${currentPage === item.id ? 'text-brand-primary' : 'text-white/70'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setCurrentPage('contact')} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Sign in</button>
          <button onClick={() => setCurrentPage('contact')} className="btn-primary py-2 px-5 text-sm">Contact sales</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-dark border-b border-white/5 p-6 md:hidden flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-lg font-medium text-white/70"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
              <button className="text-left text-lg font-medium text-white/70">Log in</button>
              <button className="btn-primary w-full">Start Building</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-linear-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <Cpu size={20} className="text-black" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight uppercase">Delegatio AI</span>
          </div>
          <p className="text-white/50 max-w-xs mb-8">
            Scale GTM results, without scaling headcount. The best way to sell with AI.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"><Twitter size={18} /></button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"><Linkedin size={18} /></button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"><Github size={18} /></button>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6">Product</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><button onClick={() => setCurrentPage('product')} className="hover:text-brand-primary transition-colors">Copilot</button></li>
            <li><button onClick={() => setCurrentPage('product')} className="hover:text-brand-primary transition-colors">Autopilot</button></li>
            <li><button onClick={() => setCurrentPage('product')} className="hover:text-brand-primary transition-colors">Integrations</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Resources</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><button onClick={() => setCurrentPage('docs')} className="hover:text-brand-primary transition-colors">Documentation</button></li>
            <li><button onClick={() => setCurrentPage('blog')} className="hover:text-brand-primary transition-colors">Blog</button></li>
            <li><button onClick={() => setCurrentPage('docs')} className="hover:text-brand-primary transition-colors">API Reference</button></li>
            <li><button onClick={() => setCurrentPage('docs')} className="hover:text-brand-primary transition-colors">Community</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-primary transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-primary transition-colors">Careers</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-brand-primary transition-colors">Contact</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-primary transition-colors">Privacy Policy</button></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
        <p>© 2026 Delegatio AI Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Status: All Systems Operational</span>
          <span>Built for the future of work</span>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-linear-to-b from-brand-primary/10 to-transparent blur-3xl -z-10 opacity-50" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight tracking-tight">
              Scale GTM results, <br />
              <span className="text-gradient">without scaling headcount</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              The best way to sell with AI. Starts by assisting your team — evolves to driving your entire GTM strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => setCurrentPage('contact')} className="btn-primary px-8 py-4 text-lg">
                Talk to sales
              </button>
              <button onClick={() => setCurrentPage('contact')} className="btn-secondary px-8 py-4 text-lg">
                Try for free
              </button>
            </div>

            {/* Integrations Bar */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 mb-20">
              {['HubSpot', 'Salesforce', 'Slack', 'Gmail', 'Apollo', 'Gong'].map((name) => (
                <span key={name} className="text-sm font-bold tracking-widest">{name}</span>
              ))}
              <span className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10">100+ integrations</span>
            </div>
          </motion.div>

          {/* Hero Visual - Copilot/Autopilot */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center">
                  <span className="font-bold text-brand-primary">SC</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Sarah Chen</div>
                  <div className="text-xs text-white/40">Account Executive</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 mb-4 text-sm italic text-white/70">
                "Follow up with all my stalled deals — check what's blocking them and send personalised nudges."
              </div>
              <div className="flex items-center justify-between p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-brand-primary" />
                  <span className="text-sm font-bold">SuperGTM</span>
                </div>
                <span className="text-xs font-bold text-brand-primary">23 deals followed up</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                  <span className="font-bold text-brand-secondary">MJ</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Marcus Johnson</div>
                  <div className="text-xs text-white/40">Customer Success Manager</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 mb-4 text-sm italic text-white/70">
                "Check in on all accounts with low health scores and create personalised win-back plans for each."
              </div>
              <div className="flex items-center justify-between p-3 bg-brand-secondary/10 rounded-lg border border-brand-secondary/20">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-brand-secondary" />
                  <span className="text-sm font-bold">SuperGTM</span>
                </div>
                <span className="text-xs font-bold text-brand-secondary">8 win-back plans created</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof / Logos */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-white/30 mb-12">Trusted by world-class teams</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-bold font-display">CANVA</div>
            <div className="text-2xl font-bold font-display">AUTODESK</div>
            <div className="text-2xl font-bold font-display">KPMG</div>
            <div className="text-2xl font-bold font-display">DATABRICKS</div>
            <div className="text-2xl font-bold font-display">CONFLUENT</div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 leading-tight">
            "We're looking for every place where AI can allow sellers and customer success reps to be more engaged with customers."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 mb-4 overflow-hidden">
              <img src="https://picsum.photos/seed/rob/200" alt="Rob Giglio" referrerPolicy="no-referrer" />
            </div>
            <div className="font-bold">Rob Giglio</div>
            <div className="text-sm text-white/40">Chief Customer Officer</div>
          </div>
        </div>
      </section>

      {/* AI Adoption Roadmap */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our AI adoption roadmap</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Start wherever you are. Delegatio grows with you and evolves as models improve. No rip and replace — ever.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { level: "L1. Assisted", title: "Delegating busywork", desc: "Start by delegating busywork - research, CRM updates, drafting emails - to SuperGTM. You steer, and it accelerates." },
              { level: "L2. Copilot", title: "Teach playbooks", desc: "Teach SuperGTM about your playbooks. It starts to own end-to-end workflows like outbound, or meeting preparation." },
              { level: "L3. Autopilot", title: "AI Workforces", desc: "As playbooks solidify, turn them into AI Workforces that run autonomously, acting on pipeline signals. You handle escalations." },
              { level: "L4. Self-Driving", title: "Self-Optimizing", desc: "Your AI workforces optimize themselves, building new agents and running their own tests. You lead strategy." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 hover:border-brand-primary/30 transition-all">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-4">{item.level}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delegate to SuperGTM */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Delegate to SuperGTM
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              SuperGTM is your team's AI teammate. It joins their calls. It sits in their calendar, email, and CRM. Reps start delegating from day one — without changing how they work.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="btn-primary">Delegate to SuperGTM</button>
          </div>
          <div className="glass-card p-6 bg-black/40 border-white/10 shadow-2xl">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-brand-primary/20 text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                  @Enrichment Agent Hey I'm just about to jump on a call with James Baxter from Meridian
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white/5 text-white/70 p-3 rounded-2xl rounded-tl-none text-sm max-w-[80%]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-[10px] text-black font-bold">EA</div>
                    <span className="font-bold text-xs">Enrichment Agent</span>
                  </div>
                  Searching Apollo for contact details... <br />
                  Found James Baxter - VP of Sales <br />
                  Checking LinkedIn profile... <br />
                  Recent post about Q4 pipeline challenges
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white/10 text-white p-4 rounded-2xl rounded-tl-none text-sm max-w-[90%] border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={14} className="text-brand-primary" />
                    <span className="font-bold text-xs">Relly</span>
                  </div>
                  <div className="font-bold mb-2">Here's 4 things you need to know:</div>
                  <ul className="space-y-2 text-white/70">
                    <li>• James is VP of Sales at Meridian, reports to CEO</li>
                    <li>• They just raised $24M Series B - likely expanding</li>
                    <li>• Recent posts mention struggles with pipeline visibility</li>
                    <li>• Your team met with him 3 times - budget approval in Q1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build AI Workforces */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                  <Workflow className="text-brand-primary" />
                </div>
                <h4 className="font-bold text-sm">Lead Router</h4>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center mb-4">
                  <Search className="text-brand-secondary" />
                </div>
                <h4 className="font-bold text-sm">Enrichment Agent</h4>
              </div>
              <div className="col-span-2 glass-card p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Bot className="text-purple-400" />
                </div>
                <h4 className="font-bold text-sm">Outbound SDR</h4>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Build AI workforces
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              Build optimized teams of agents that run autonomously, triggered by events or signals. Inbound, outbound, onboarding, expansion — fully automated.
            </p>
            <button onClick={() => setCurrentPage('product')} className="btn-secondary">Explore Workforces</button>
          </div>
        </div>
      </section>

      {/* Enterprise Infrastructure */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Enterprise-grade infrastructure</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield />, title: "SOC 2 Type II & GDPR", desc: "Independently audited and certified compliant. Your data stays protected." },
              { icon: <Lock />, title: "SSO & RBAC", desc: "Enterprise SSO with role-based access control for your whole team." },
              { icon: <Globe />, title: "Data residency", desc: "Multi-region deployment ensures your data stays within your region." },
              { icon: <Workflow />, title: "Version control", desc: "Full version history on every agent. Roll back instantly when needed." },
              { icon: <BarChart3 />, title: "Monitoring & Evals", desc: "Understand agent activity, how much they cost and catch regressions." },
              { icon: <CheckCircle2 />, title: "Trust center", desc: "Pre-built security documentation, DPA templates, and a trust center." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-brand-primary">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Connect agents to 1,000+ apps</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "BDR Agent", desc: "Your always-on sales development rep that engages leads instantly and drives pipeline 24/7." },
              { title: "Research Agent", desc: "AI handles your research so you don't have to. Every call fully prepped with the right insights." },
              { title: "Inbound Qualification", desc: "Instantly qualify and route every inbound lead. No more missed opportunities." },
              { title: "Customer Support Agent", desc: "Resolve tickets faster with AI that understands your product and customers." }
            ].map((agent, i) => (
              <div key={i} className="glass-card p-8 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6">
                  <Bot className="text-brand-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{agent.title}</h4>
                <p className="text-white/50 text-sm mb-8 flex-grow leading-relaxed">{agent.desc}</p>
                <button className="text-sm font-bold text-brand-primary flex items-center gap-2 hover:underline">
                  View template <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Task List Comparison */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-6">Delegate 50% of GTM work to AI</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6">Manual Tasks</h4>
              {[
                "Update CRM after every call",
                "Log meeting notes in Salesforce",
                "Chase no-show prospects",
                "Personalize cold emails",
                "Enrich lead data manually",
                "Build QBR slide decks"
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50 line-through decoration-white/20">
                  <X size={16} className="text-red-500/50" />
                  <span className="text-sm">{task}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-6">Delegated to AI</h4>
              {[
                "Review Gong recordings",
                "Summarize sales calls",
                "Follow up on sent proposals",
                "Map account stakeholders",
                "Research prospects before meetings",
                "Track champion job changes"
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={16} className="text-brand-primary" />
                  <span className="text-sm">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-brand-primary/10 to-brand-secondary/10 -z-10" />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Delegate 50% of GTM work to AI Agents within 6 months</h2>
          <button onClick={() => setCurrentPage('contact')} className="btn-primary px-12 py-4 text-xl">Book a demo</button>
        </div>
      </section>
    </div>
  );
};

const ProductPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">The Infrastructure for <span className="text-gradient">AI GTM Workforces</span></h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Delegatio AI is more than a builder. It's a complete execution environment designed for the rigors of enterprise sales and marketing automation.
          </p>
        </div>

        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                <Bot />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Agent Workforce Studio</h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Define agent personas for SDRs, CSMs, and Marketing Ops. Set system instructions, and tool access in a powerful visual interface.
              </p>
              <ul className="space-y-4">
                {['GTM-Specific Prompt Templates', 'Sales Tool Access Control', 'Model Agnostic (GPT-4, Claude 3, Gemini)', 'Persona Versioning'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card overflow-hidden aspect-video bg-white/5 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Agent Builder UI" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 glass-card overflow-hidden aspect-video bg-white/5 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?auto=format&fit=crop&q=80&w=1200" 
                alt="Orchestration Graph" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-6">
                <Workflow />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">GTM Orchestration Engine</h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Manage multi-agent conversations between your Research Agent and Outbound SDR. Our engine handles the state, memory, and routing automatically.
              </p>
              <ul className="space-y-4">
                {['Lead Routing Logic', 'Conditional Outreach', 'Human-in-the-loop Approval Gates', 'Automatic CRM Sync'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-brand-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Database />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Sales Intelligence & Memory</h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Give your agents a memory. Delegatio AI automatically indexes your CRM, call transcripts, and market data, providing agents with relevant context.
              </p>
              <ul className="space-y-4">
                {['CRM Data Integration', 'Call Transcript Analysis', 'Account-based Short-term Memory', 'Global Market Knowledge Bases'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card overflow-hidden aspect-video bg-white/5 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                alt="Knowledge Base UI" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Simple, Usage-Based Pricing</h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Scale from your first agent to enterprise-wide automation with transparent pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free */}
          <div className="glass-card p-10 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Builder</h3>
            <p className="text-white/50 text-sm mb-8">For individuals and hobbyists.</p>
            <div className="text-4xl font-bold mb-8">$0 <span className="text-lg font-normal text-white/30">/mo</span></div>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Up to 3 Agents', '1,000 runs/mo', 'Standard Community Support', 'Basic Integrations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-secondary w-full">Start Building</button>
          </div>

          {/* Pro */}
          <div className="glass-card p-10 flex flex-col border-brand-primary/30 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-primary text-black text-xs font-bold rounded-full">MOST POPULAR</div>
            <h3 className="text-xl font-bold mb-2">Teams</h3>
            <p className="text-white/50 text-sm mb-8">For growing teams and startups.</p>
            <div className="text-4xl font-bold mb-8">$149 <span className="text-lg font-normal text-white/30">/mo</span></div>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Unlimited Agents', '10,000 runs/mo', 'Priority Email Support', 'Advanced Orchestration', 'Custom Tool Connectors'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full">Get Started</button>
          </div>

          {/* Enterprise */}
          <div className="glass-card p-10 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-white/50 text-sm mb-8">For mission-critical scale.</p>
            <div className="text-4xl font-bold mb-8">Custom</div>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Unlimited Everything', 'SLA Guarantees', 'Dedicated Account Manager', 'On-prem Deployment', 'Custom Security Review'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-secondary w-full">Contact Sales</button>
          </div>
        </div>

        <div className="mt-20 glass-card p-10 text-center">
          <h4 className="text-xl font-bold mb-4">Need a custom plan?</h4>
          <p className="text-white/50 mb-8">We offer volume discounts and custom token packages for high-scale users.</p>
          <button className="text-brand-primary font-semibold flex items-center gap-2 mx-auto hover:underline">
            Talk to our pricing experts <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const DocsPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[240px_1fr] gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block space-y-8">
          <div>
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Getting Started</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="text-brand-primary font-medium">Quickstart Guide</li>
              <li className="hover:text-white cursor-pointer">Architecture Overview</li>
              <li className="hover:text-white cursor-pointer">Core Concepts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Agent Builder</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer">Defining Personas</li>
              <li className="hover:text-white cursor-pointer">Tool Configuration</li>
              <li className="hover:text-white cursor-pointer">Memory Management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">API Reference</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer">Authentication</li>
              <li className="hover:text-white cursor-pointer">Agents API</li>
              <li className="hover:text-white cursor-pointer">Workflows API</li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Quickstart Guide</h1>
            <p className="text-lg text-white/50">Learn how to build and deploy your first autonomous GTM agent in under 5 minutes.</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">1</span>
                Install the SDK
              </h2>
              <div className="bg-black/60 rounded-xl p-6 border border-white/5 font-mono text-sm">
                <div className="text-white/40 mb-2"># Install via npm</div>
                <div className="text-brand-primary">npm install @delegatio-ai/sdk</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">2</span>
                Initialize your Agent
              </h2>
              <div className="bg-black/60 rounded-xl p-6 border border-white/5 font-mono text-sm overflow-x-auto">
                <pre className="text-white/70">
{`import { Delegatio } from '@delegatio-ai/sdk';

const delegatio = new Delegatio({ apiKey: 'YOUR_API_KEY' });

const agent = await delegatio.agents.create({
  name: 'SDR-Agent',
  role: 'Outbound Sales Development Representative',
  tools: ['salesforce', 'apollo', 'gmail'],
  memory: true
});`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">3</span>
                Run a Workflow
              </h2>
              <p className="text-white/50 mb-6">Execute the agent with a natural language goal. The orchestrator will handle tool selection and execution.</p>
              <div className="bg-black/60 rounded-xl p-6 border border-white/5 font-mono text-sm">
                <pre className="text-white/70">
{`const result = await agent.run({
  goal: 'Find 10 high-intent leads in the SaaS sector and send personalized outreach'
});`}
                </pre>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-32">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">From Headcount to <span className="text-gradient">AI Workforces</span></h1>
          <p className="text-xl text-white/50 leading-relaxed mb-8">
            We believe the next decade of GTM won't be built around hiring more people, but around delegating to AI. Our mission is to provide the infrastructure that makes autonomous sales and marketing safe, reliable, and accessible to every enterprise.
          </p>
          <div className="flex gap-12">
            <div>
              <div className="text-3xl font-bold mb-1">2024</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Founded</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Enterprises</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">$45M</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Funding</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div className="glass-card aspect-square bg-white/5 border-white/10 flex items-center justify-center text-white/20">
            [Team Photo Placeholder]
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              The first wave of GTM was about CRM. The second wave is about automation. We are building the "GTM OS"—the fundamental software layer that allows AI to drive your entire sales strategy with infinite scale.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              Based in San Francisco and London, our team comes from OpenAI, DeepMind, and Stripe, bringing together expertise in large-scale ML and enterprise infrastructure.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Why Delegatio AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Built for GTM", desc: "Unlike generic agent platforms, Delegatio is built specifically for the nuances of sales, marketing, and customer success." },
              { title: "Enterprise-Grade", desc: "SOC 2 Type II, GDPR, and HIPAA compliant. We provide the security and reliability that enterprises demand." },
              { title: "Autonomous Execution", desc: "Our agents don't just suggest actions; they execute them across your entire tool stack autonomously." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-20 border-t border-white/5">
          <h2 className="text-3xl font-display font-bold mb-8">Join the GTM Revolution</h2>
          <p className="text-white/50 mb-12">We're always looking for brilliant minds to help us build the future of AI.</p>
          <button className="btn-primary">View Open Roles</button>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Delegatio Insights</h1>
          <p className="text-xl text-white/50">The latest on GTM agents, sales orchestration, and AI-driven growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { date: "Mar 15, 2026", title: "The Rise of AI Sales Workforces", desc: "Why single SDRs aren't enough for complex enterprise GTM strategies." },
            { date: "Mar 08, 2026", title: "Securing CRM Access for Autonomous Agents", desc: "Best practices for implementing RBAC and data residency in sales systems." },
            { date: "Feb 28, 2026", title: "Delegatio AI v2.0: What's New?", desc: "Deep dive into our new GTM orchestration engine and CRM sync." },
            { date: "Feb 20, 2026", title: "Agentic Outreach: Beyond Simple Templates", desc: "How agents use account intelligence to handle long-running sales cycles." },
            { date: "Feb 12, 2026", title: "Case Study: Automating SDR Work at Scale", desc: "How a Fortune 500 company booked 100+ meetings with Delegatio AI." },
            { date: "Feb 05, 2026", title: "The Future of AI-Driven GTM", desc: "Designing effective human-in-the-loop gates for autonomous sales systems." }
          ].map((post, i) => (
            <div key={i} className="glass-card overflow-hidden group cursor-pointer hover:border-white/20 transition-all">
              <div className="h-48 bg-white/5 border-b border-white/5" />
              <div className="p-8">
                <div className="text-xs text-white/30 font-bold uppercase tracking-widest mb-4">{post.date}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{post.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{post.desc}</p>
                <div className="text-sm font-semibold flex items-center gap-2">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Let's build <br /><span className="text-gradient">together.</span></h1>
          <p className="text-xl text-white/50 mb-12 leading-relaxed">
            Whether you're a startup building your first agent or an enterprise scaling to thousands, we're here to help.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary">
                <MessageSquare />
              </div>
              <div>
                <h4 className="font-bold mb-1">Chat with us</h4>
                <p className="text-sm text-white/50">Our team is online Mon-Fri, 9am-6pm GMT.</p>
                <button className="text-brand-primary text-sm font-semibold mt-2">Start a live chat</button>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-secondary">
                <Globe />
              </div>
              <div>
                <h4 className="font-bold mb-1">Global Offices</h4>
                <p className="text-sm text-white/50">San Francisco • London • Singapore</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-purple-400">
                <Lock />
              </div>
              <div>
                <h4 className="font-bold mb-1">Security & Compliance</h4>
                <p className="text-sm text-white/50">SOC2 Type II, GDPR, and HIPAA compliant.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">First Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Last Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Work Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="jane@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Company Size</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors appearance-none">
                <option>1-50 employees</option>
                <option>51-200 employees</option>
                <option>201-1000 employees</option>
                <option>1000+ employees</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">How can we help?</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors h-32" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="btn-primary w-full py-4">Send Message</button>
            <p className="text-center text-xs text-white/30">By submitting this form, you agree to our Privacy Policy.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

const UseCasesPage = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">GTM & Sales Workforces</h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Orchestrating the future of Go-To-Market with autonomous agents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            { 
              title: "Autonomous Outbound SDRs", 
              problem: "Manual prospecting and personalized outreach takes hours and has low conversion.",
              solution: "Agents that research accounts, verify intent signals, and send hyper-personalized nudges.",
              outcome: "90 meetings booked per month and 5x higher conversion rate."
            },
            { 
              title: "Real-time Lead Enrichment", 
              problem: "Fragmented data across Apollo, LinkedIn, and CRM leads to missed opportunities.",
              solution: "Multi-agent systems that enrich leads instantly and route them to the right AE.",
              outcome: "100% lead coverage and zero manual data entry required."
            },
            { 
              title: "Intelligent Customer Success", 
              problem: "Inability to monitor thousands of accounts for churn risks or upsell signals.",
              solution: "Agents that monitor health scores and create personalized win-back plans.",
              outcome: "20% reduction in churn and 15% increase in expansion revenue."
            },
            { 
              title: "Sales Ops & CRM Automation", 
              problem: "Dirty CRM data and manual reporting slowing down the sales cycle.",
              solution: "Agents that continuously audit CRM data and generate real-time health reports.",
              outcome: "Proactive mitigation of 90% of potential deal slippage."
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-12">
              <h2 className="text-3xl font-display font-bold mb-8">{item.title}</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2">The Problem</h4>
                  <p className="text-white/70">{item.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">The Solution</h4>
                  <p className="text-white/70">{item.solution}</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2">The Outcome</h4>
                  <p className="text-xl font-bold text-brand-primary">{item.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'product': return <ProductPage />;
      case 'use-cases': return <UseCasesPage />;
      case 'docs': return <DocsPage />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
