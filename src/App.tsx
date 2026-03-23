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
    { label: 'Use Cases', id: 'use-cases' },
    { label: 'Docs', id: 'docs' },
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
          <span className="text-xl font-display font-bold tracking-tight">NEXUS AI</span>
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
          <button onClick={() => setCurrentPage('contact')} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Log in</button>
          <button onClick={() => setCurrentPage('contact')} className="btn-primary py-2 px-5 text-sm">Start Building</button>
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
            <span className="text-xl font-display font-bold tracking-tight">NEXUS AI</span>
          </div>
          <p className="text-white/50 max-w-xs mb-8">
            The enterprise execution layer for autonomous AI agents. From intent to action, powered by orchestration.
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
            <li><button onClick={() => setCurrentPage('product')} className="hover:text-brand-primary transition-colors">Agent Builder</button></li>
            <li><button onClick={() => setCurrentPage('product')} className="hover:text-brand-primary transition-colors">Orchestration</button></li>
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
        <p>© 2026 Nexus AI Orchestration Inc. All rights reserved.</p>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-brand-primary mb-6">
              V2.0 NOW LIVE • ENTERPRISE AGENT ORCHESTRATION
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Turn Complex Intent into <br />
              <span className="text-gradient">Autonomous Execution</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Nexus AI is the orchestration layer for the agentic era. Build, deploy, and scale multi-agent workflows that connect your entire stack.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => setCurrentPage('contact')} className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                Start Building <ArrowRight size={18} />
              </button>
              <button onClick={() => setCurrentPage('contact')} className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                Book Enterprise Demo <Play size={16} />
              </button>
            </div>
          </motion.div>

          {/* Hero Visual - Workflow Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 relative max-w-5xl mx-auto"
          >
            <div className="glass-card p-4 md:p-8 bg-black/40 border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-white/30 font-mono">nexus-orchestrator / workflow-v4.yaml</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Node 1 */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center mb-4">
                    <MessageSquare className="text-brand-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Customer Intent</h4>
                  <p className="text-xs text-white/40">Natural language processing & triage</p>
                </div>
                
                {/* Connector */}
                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="w-full h-px bg-linear-to-r from-brand-primary to-brand-secondary" />
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] -mt-2.5 font-mono text-brand-primary">ORCHESTRATOR</div>
                </div>

                {/* Node 2 */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center mb-4">
                    <Database className="text-brand-secondary" />
                  </div>
                  <h4 className="font-semibold mb-2">Tool Execution</h4>
                  <p className="text-xs text-white/40">API calls & data retrieval</p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-black/60 border border-white/5 font-mono text-sm text-left">
                <div className="flex gap-2 text-green-400 mb-1">
                  <span>$</span>
                  <span>nexus deploy --agent "Support-Ops"</span>
                </div>
                <div className="text-white/40">
                  {`> Initializing Agent... [OK]`} <br />
                  {`> Connecting to Salesforce... [OK]`} <br />
                  {`> Workflow active: 142 executions/min`}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                AI is powerful, but <br />
                <span className="text-white/40">execution is fragmented.</span>
              </h2>
              <p className="text-lg text-white/50 mb-10 leading-relaxed">
                Most companies have the models, but lack the plumbing. Disconnected tools, siloed data, and manual handoffs prevent AI from being truly autonomous.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Layers size={20} />, title: "Disconnected Tools", desc: "APIs don't talk to each other without manual code." },
                  { icon: <Shield size={20} />, title: "Security Gaps", desc: "No governance over how agents access sensitive data." },
                  { icon: <Zap size={20} />, title: "High Latency", desc: "Fragmented workflows lead to slow response times." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-brand-primary">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 glass-card p-6 flex flex-col justify-end">
                  <div className="text-2xl font-bold mb-2">90%</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Manual Handoffs</div>
                </div>
                <div className="h-60 glass-card p-6 bg-brand-primary/5 border-brand-primary/20 flex flex-col justify-end">
                  <div className="text-2xl font-bold mb-2 text-brand-primary">12+</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Siloed AI Tools</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-60 glass-card p-6 bg-brand-secondary/5 border-brand-secondary/20 flex flex-col justify-end">
                  <div className="text-2xl font-bold mb-2 text-brand-secondary">400ms</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Average Latency</div>
                </div>
                <div className="h-40 glass-card p-6 flex flex-col justify-end">
                  <div className="text-2xl font-bold mb-2">65%</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Dev Time on Plumbing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / How it Works */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The Agent Operating System</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Nexus AI provides the infrastructure to build, connect, and scale autonomous systems in four simple steps.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Define Goal", desc: "Set the objective in natural language or structured schema." },
            { step: "02", title: "Create Agents", desc: "Deploy specialized agents with unique personas and skills." },
            { step: "03", title: "Connect Tools", desc: "Link your APIs, databases, and internal systems instantly." },
            { step: "04", title: "Deploy Workflows", desc: "Orchestrate multi-agent loops with full observability." }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-display font-bold text-white/5 mb-4 group-hover:text-brand-primary/20 transition-colors">{item.step}</div>
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10" />}
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Built for Enterprise Scale</h2>
              <p className="text-lg text-white/50">
                Everything you need to move from experimental prototypes to production-ready autonomous systems.
              </p>
            </div>
            <button onClick={() => setCurrentPage('product')} className="btn-secondary flex items-center gap-2">
              View All Features <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Bot />, title: "Visual Agent Builder", desc: "No-code interface to define agent logic, memory, and tool access." },
              { icon: <Workflow />, title: "Orchestration Engine", desc: "Handle complex loops, parallel execution, and error recovery." },
              { icon: <Database />, title: "Context & Memory", desc: "Long-term vector memory and short-term session context for every agent." },
              { icon: <Shield />, title: "Enterprise Governance", desc: "RBAC, audit logs, and secure tool execution in sandboxed environments." },
              { icon: <BarChart3 />, title: "Observability", desc: "Real-time monitoring of agent costs, latency, and success rates." },
              { icon: <Globe />, title: "Universal Connectors", desc: "100+ pre-built integrations with SaaS, databases, and custom APIs." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 hover:border-white/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">AI-Driven Supply Chain Excellence</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Nexus AI orchestrates complex procurement and logistics workflows, moving from manual tracking to autonomous execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                tag: "Procurement", 
                title: "Autonomous Sourcing Agent", 
                desc: "Automatically triages incoming requests, searches global vendor databases, and generates RFPs based on historical pricing and quality data.",
                outcome: "85% reduction in sourcing cycle time"
              },
              { 
                tag: "Logistics", 
                title: "Multi-Carrier Orchestrator", 
                desc: "Agents that coordinate between carriers, warehouses, and customs, resolving delays and optimizing routes in real-time.",
                outcome: "22% decrease in shipping costs"
              },
              { 
                tag: "Inventory", 
                title: "Predictive Stock Replenishment", 
                desc: "Monitors stock levels across global nodes and autonomously triggers reorders based on lead times and demand signals.",
                outcome: "Zero stock-outs on critical SKUs"
              },
              { 
                tag: "Risk Management", 
                title: "Supplier Risk Monitor", 
                desc: "Scours financial reports, news, and geopolitical signals to alert and reroute supply chains before disruptions occur.",
                outcome: "Real-time resilience for global ops"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-white/5 p-8 flex flex-col justify-between border-r border-white/5">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">{item.tag}</span>
                  <div className="mt-8">
                    <div className="text-sm text-white/40 mb-1">Key Outcome:</div>
                    <div className="text-sm font-semibold">{item.outcome}</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <button onClick={() => setCurrentPage('use-cases')} className="text-sm font-semibold flex items-center gap-2 hover:text-brand-primary transition-colors">
                    Read Case Study <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Nexus AI Team" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-8 max-w-xs">
              <p className="text-sm italic text-white/70">"Our mission is to bridge the gap between AI potential and operational reality in the supply chain."</p>
              <div className="mt-4 font-bold text-brand-primary">— Nexus AI Founders</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Built by Supply Chain Experts, <span className="text-gradient">Powered by AI.</span></h2>
            <p className="text-lg text-white/50 mb-6 leading-relaxed">
              Nexus AI was founded by a team of logistics veterans and AI researchers from DeepMind and MIT. We saw firsthand how fragmented data and manual processes were crippling global trade.
            </p>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              Today, we provide the "Agent OS" that powers the world's most resilient supply chains, enabling autonomous execution from the first mile to the last.
            </p>
            <button onClick={() => setCurrentPage('about')} className="btn-secondary">Learn More About Our Vision</button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
          <div className="text-2xl font-bold font-display">STRIPE</div>
          <div className="text-2xl font-bold font-display">VERCEL</div>
          <div className="text-2xl font-bold font-display">NOTION</div>
          <div className="text-2xl font-bold font-display">OPENAI</div>
          <div className="text-2xl font-bold font-display">ANTHROPIC</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-brand-primary/10 to-brand-secondary/10 -z-10" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to build the future?</h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-12">
            Join 500+ enterprises building autonomous systems on Nexus AI. Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className="btn-primary px-10">Get Started Free</button>
            <button onClick={() => setCurrentPage('contact')} className="btn-secondary px-10">Talk to Sales</button>
          </div>
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">The Infrastructure for <span className="text-gradient">Autonomous Systems</span></h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Nexus AI is more than a builder. It's a complete execution environment designed for the rigors of enterprise automation.
          </p>
        </div>

        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                <Bot />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Visual Agent Studio</h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Define agent personas, system instructions, and tool access in a powerful visual interface. No more wrestling with complex YAML files or brittle code.
              </p>
              <ul className="space-y-4">
                {['Dynamic Prompt Templates', 'Tool Access Control', 'Model Agnostic (GPT-4, Claude 3, Gemini)', 'Persona Versioning'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card overflow-hidden aspect-video bg-white/5 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
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
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200" 
                alt="Orchestration Graph" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-6">
                <Workflow />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Orchestration Engine</h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Manage multi-agent conversations and complex loops. Our engine handles the state, memory, and routing between specialized agents automatically.
              </p>
              <ul className="space-y-4">
                {['Parallel Execution', 'Conditional Routing', 'Human-in-the-loop Gates', 'Automatic Error Recovery'].map((item, i) => (
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Knowledge & Memory (RAG)</h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Give your agents a memory. Nexus AI automatically indexes your documents and databases, providing agents with relevant context in real-time.
              </p>
              <ul className="space-y-4">
                {['Vector Database Integration', 'Automatic Document Chunking', 'Session-based Short-term Memory', 'Global Knowledge Bases'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card overflow-hidden aspect-video bg-white/5 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200" 
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
            <p className="text-lg text-white/50">Learn how to build and deploy your first autonomous agent in under 5 minutes.</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">1</span>
                Install the SDK
              </h2>
              <div className="bg-black/60 rounded-xl p-6 border border-white/5 font-mono text-sm">
                <div className="text-white/40 mb-2"># Install via npm</div>
                <div className="text-brand-primary">npm install @nexus-ai/sdk</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">2</span>
                Initialize your Agent
              </h2>
              <div className="bg-black/60 rounded-xl p-6 border border-white/5 font-mono text-sm overflow-x-auto">
                <pre className="text-white/70">
{`import { Nexus } from '@nexus-ai/sdk';

const nexus = new Nexus({ apiKey: 'YOUR_API_KEY' });

const agent = await nexus.agents.create({
  name: 'Support-Bot',
  role: 'Customer Support Specialist',
  tools: ['salesforce', 'zendesk'],
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
  goal: 'Find the latest order for user #123 and update the status to Shipped'
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">From Copilots to <span className="text-gradient">Autonomous Systems</span></h1>
          <p className="text-xl text-white/50 leading-relaxed mb-8">
            We believe the next decade of software won't be built around interfaces, but around intent. Our mission is to provide the infrastructure that makes autonomous AI safe, reliable, and accessible to every enterprise.
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
              The first wave of AI was about chat. The second wave is about action. We are building the "Agent OS"—the fundamental software layer that allows AI to navigate the digital world just as humans do, but with infinite scale.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              Based in San Francisco and London, our team comes from OpenAI, DeepMind, and Stripe, bringing together expertise in large-scale ML and enterprise infrastructure.
            </p>
          </div>
        </div>

        <div className="text-center py-20 border-t border-white/5">
          <h2 className="text-3xl font-display font-bold mb-8">Join the Orchestration Revolution</h2>
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Nexus Insights</h1>
          <p className="text-xl text-white/50">The latest on agent architectures, orchestration patterns, and AI ops.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { date: "Mar 15, 2026", title: "The Rise of Multi-Agent Orchestration", desc: "Why single agents aren't enough for complex enterprise workflows." },
            { date: "Mar 08, 2026", title: "Securing Tool Access for Autonomous Agents", desc: "Best practices for implementing RBAC and sandboxing in agentic systems." },
            { date: "Feb 28, 2026", title: "Nexus AI v2.0: What's New?", desc: "Deep dive into our new visual builder and orchestration engine." },
            { date: "Feb 20, 2026", title: "Agentic RAG: Beyond Simple Retrieval", desc: "How agents use memory to handle long-running business processes." },
            { date: "Feb 12, 2026", title: "Case Study: Automating Procurement at Scale", desc: "How a Fortune 500 company saved 10k hours with Nexus AI." },
            { date: "Feb 05, 2026", title: "The Future of Human-in-the-Loop", desc: "Designing effective gates for autonomous AI systems." }
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Supply Chain & Procurement</h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Orchestrating the future of global trade with autonomous agents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            { 
              title: "Autonomous Strategic Sourcing", 
              problem: "Manual vendor discovery and RFP management takes months and misses optimal pricing.",
              solution: "Agents that scan global markets, verify supplier credentials, and run automated RFP cycles.",
              outcome: "80% faster sourcing cycle and 12% average cost reduction."
            },
            { 
              title: "Real-time Logistics Orchestration", 
              problem: "Fragmented communication between carriers leads to delays and hidden costs.",
              solution: "Multi-agent systems that track shipments, handle customs documentation, and reroute dynamically.",
              outcome: "95% on-time delivery rate and zero manual tracking required."
            },
            { 
              title: "Intelligent Inventory Management", 
              problem: "Overstocking and stock-outs due to disconnected demand signals and lead times.",
              solution: "Agents that monitor ERP data and external market trends to trigger autonomous replenishment.",
              outcome: "30% reduction in carrying costs and 100% availability of critical parts."
            },
            { 
              title: "Supplier Risk & Compliance", 
              problem: "Inability to monitor thousands of suppliers for financial, environmental, or geopolitical risks.",
              solution: "Agents that continuously audit supplier data and news signals to flag risks instantly.",
              outcome: "Proactive mitigation of 90% of potential supply chain disruptions."
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
