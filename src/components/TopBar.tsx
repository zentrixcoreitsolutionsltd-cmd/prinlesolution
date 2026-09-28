import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Clock, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Instagram, 
  Phone, 
  Search, 
  X, 
  ArrowRight, 
  Briefcase, 
  Award, 
  Film, 
  Radio, 
  CheckCircle2, 
  Sparkles,
  Command,
  ChevronRight,
  Shield,
  Building2
} from 'lucide-react';

interface TopBarProps {
  onNavigate?: (sectionId: string) => void;
  onSelectService?: (serviceName: string) => void;
}

interface SearchItem {
  id: string;
  type: 'service' | 'case_study' | 'documentary' | 'wire' | 'protocol';
  typeLabel: string;
  title: string;
  subtitle: string;
  sectionId: string;
  badge?: string;
  metric?: string;
  servicePayload?: string;
  keywords: string[];
}

const SEARCH_DATABASE: SearchItem[] = [
  // 1. PR SERVICES (Pillars Alpha, Beta, Gamma)
  {
    id: 'srv-1',
    type: 'service',
    typeLabel: 'PR Service',
    title: 'Strategic Communication Planning',
    subtitle: 'Executive communication frameworks for sovereign boards and multinationals.',
    sectionId: 'services',
    badge: 'Pillar Alpha',
    metric: '100% Board Alignment',
    servicePayload: 'Pillar Alpha: Strategic Communication Planning',
    keywords: ['planning', 'boardroom', 'c-suite', 'framework', 'policy', 'strategy', 'pillar a', 'executive counsel'],
  },
  {
    id: 'srv-2',
    type: 'service',
    typeLabel: 'PR Service',
    title: 'Crisis Countermeasures & Reputation Shielding',
    subtitle: '24/7/365 rapid-deployment crisis war room console and holding statement matrices.',
    sectionId: 'services',
    badge: 'Pillar Alpha',
    metric: '< 30 Min Response SLA',
    servicePayload: 'Pillar Alpha: Crisis Countermeasures & Reputation Shielding',
    keywords: ['crisis', 'war room', 'defamation', 'countermeasure', 'emergency', 'shield', 'holding statements', 'hostile press'],
  },
  {
    id: 'srv-3',
    type: 'service',
    typeLabel: 'PR Service',
    title: 'High-Tier Media Relations Management',
    subtitle: 'Direct relationship networks with senior editors, bureau chiefs, and finance desks.',
    sectionId: 'services',
    badge: 'Pillar Alpha',
    metric: '92% Placement Hit Rate',
    servicePayload: 'Pillar Alpha: High-Tier Media Relations Management',
    keywords: ['media relations', 'journalists', 'editors', 'bloomberg', 'reuters', 'press releases', 'interviews', 'press tour', 'wire'],
  },
  {
    id: 'srv-4',
    type: 'service',
    typeLabel: 'PR Service',
    title: 'Corporate Documentaries & Filming',
    subtitle: 'Broadcast-standard cinematic documentaries documenting landmark corporate transactions.',
    sectionId: 'services',
    badge: 'Pillar Beta',
    metric: '4K Cinema Masters',
    servicePayload: 'Pillar Beta: Corporate Documentaries & Filming',
    keywords: ['documentary', 'filming', 'video', 'cinema', 'drone', 'broadcast', 'production', 'retrospective', '4k'],
  },
  {
    id: 'srv-5',
    type: 'service',
    typeLabel: 'PR Service',
    title: 'Industrial Photography & Videography',
    subtitle: 'High-resolution industrial imagery capturing infrastructure, energy, and corporate assets.',
    sectionId: 'services',
    badge: 'Pillar Beta',
    metric: 'Broadcast Ready Stills',
    servicePayload: 'Pillar Beta: Industrial Photography & Videography',
    keywords: ['photography', 'photos', 'portraits', 'industrial', 'plant', 'infrastructure', 'energy', 'c-suite stills'],
  },
  {
    id: 'srv-6',
    type: 'service',
    typeLabel: 'PR Service',
    title: 'Postproduction Suites & Tracking',
    subtitle: 'Comprehensive editing, Davinci color grading, audio mastering, and watermarking.',
    sectionId: 'services',
    badge: 'Pillar Beta',
    metric: '24h Fast-Track Pipeline',
    servicePayload: 'Pillar Beta: Postproduction Suites & Tracking',
    keywords: ['postproduction', 'editing', 'davinci', 'color grading', 'sound engineering', 'audio', 'watermarking'],
  },
  {
    id: 'srv-7',
    type: 'service',
    typeLabel: 'PR Service',
    title: 'Brand Marketing Strategy & Identity',
    subtitle: 'Transformative market positioning and creative visual identity architectures.',
    sectionId: 'services',
    badge: 'Pillar Gamma',
    metric: '+340% Brand Equity Lift',
    servicePayload: 'Pillar Gamma: Brand Marketing Strategy & Identity',
    keywords: ['brand', 'branding', 'logo', 'identity', 'design', 'repositioning', 'typography', 'visual system'],
  },
  {
    id: 'srv-8',
    type: 'service',
    typeLabel: 'PR Service',
    title: 'Programmatic Advertising & Publication Loops',
    subtitle: 'Multi-channel publication loops synchronizing digital and traditional media syndication.',
    sectionId: 'services',
    badge: 'Pillar Gamma',
    metric: 'Pan-African Saturation',
    servicePayload: 'Pillar Gamma: Programmatic Advertising & Publication Loops',
    keywords: ['programmatic', 'advertising', 'ads', 'publication loops', 'influencer governance', 'syndication', 'reach'],
  },

  // 2. CASE STUDIES & CLIENT ACHIEVEMENTS
  {
    id: 'cs-1',
    type: 'case_study',
    typeLabel: 'Case Study',
    title: 'VanguardPay Financial Technologies',
    subtitle: '+340% Tier-1 Media Mentions Across Series B to Unicorn Milestone.',
    sectionId: 'case-studies',
    badge: 'FinTech Unicorn',
    metric: '+340% Lift &bull; 42 Features',
    keywords: ['vanguardpay', 'fintech', 'unicorn', 'funding', 'series b', 'banking', 'cross-border', 'payments'],
  },
  {
    id: 'cs-2',
    type: 'case_study',
    typeLabel: 'Case Study',
    title: 'Aetheria BioSystems Clinical Trial PR',
    subtitle: 'Transforming clinical trial oncology therapeutic data into front-page market confidence.',
    sectionId: 'case-studies',
    badge: 'HealthTech & Regulatory',
    metric: '60% Coverage Expansion',
    keywords: ['aetheria', 'healthtech', 'biotech', 'clinical trials', 'fda', 'oncology', 'analyst', 'medicine'],
  },
  {
    id: 'cs-3',
    type: 'case_study',
    typeLabel: 'Case Study',
    title: 'Pan-African Sovereign Infrastructure Fund Endorsement',
    subtitle: 'Constructing bilateral regulatory communications architecture across African capital markets.',
    sectionId: 'about',
    badge: 'Sovereign Mandate',
    metric: '24 Sovereign Hubs &bull; 0 Leaks',
    keywords: ['pan-african', 'sovereign fund', 'infrastructure', 'bilateral', 'regulatory', 'treaty', 'managing director'],
  },

  // 3. CINEMATIC DOCUMENTARIES & ARCHIVES
  {
    id: 'doc-1',
    type: 'documentary',
    typeLabel: 'Documentary',
    title: 'Echoes of Industry: Sovereign Energy Transition',
    subtitle: 'Chronicling the financing and engineering of cross-border geothermal pipelines.',
    sectionId: 'portfolio',
    badge: 'Energy Consortium',
    metric: '1.8M HNW Views &bull; 14:20 min 4K',
    keywords: ['echoes of industry', 'geothermal', 'energy', 'green grid', 'davos', 'infrastructure', 'documentary'],
  },
  {
    id: 'doc-2',
    type: 'documentary',
    typeLabel: 'Documentary',
    title: 'Project Monarch: $450M Series C & Unicorn Valuation Drop',
    subtitle: 'Simultaneous embargoed announcements across national and regional media in Nairobi.',
    sectionId: 'portfolio',
    badge: 'Cloud & Tech',
    metric: '+320% Reach &bull; 48 Exclusives',
    keywords: ['monarch', 'kestrel', 'cloud', '450m', 'unicorn', 'series c', 'bloomberg exclusive', 'wsj'],
  },
  {
    id: 'doc-3',
    type: 'documentary',
    typeLabel: 'Documentary',
    title: 'AfCFTA Trade Corridor Bilateral Communications',
    subtitle: 'Positioning trade harmonisation protocols to sovereign heads of state and multilateral lenders.',
    sectionId: 'portfolio',
    badge: 'Sovereign Advisory',
    metric: '24 Signatories Engaged',
    keywords: ['afcfta', 'trade corridor', 'heads of state', 'bilateral', 'ministers', 'chamber of commerce', 'africa trade'],
  },
  {
    id: 'doc-4',
    type: 'documentary',
    typeLabel: 'Documentary',
    title: 'Shield Alpha: Rapid Algorithmic Defamation Neutralization',
    subtitle: 'Neutralized coordinated bot syndicate dissemination targeting capital reserve liquidity rumors.',
    sectionId: 'portfolio',
    badge: 'Crisis Armor',
    metric: '< 38 Min SLA &bull; 99.1% Sentiment',
    keywords: ['shield alpha', 'equatorial bank', 'defamation', 'bot syndicate', 'central bank', 'liquidity', 'crisis'],
  },
  {
    id: 'doc-5',
    type: 'documentary',
    typeLabel: 'Documentary',
    title: 'The Silicon Savannah: Institutional Tech Pedigree',
    subtitle: 'Documentary showcasing Kenyan engineering talent capturing enterprise fintech contracts globally.',
    sectionId: 'portfolio',
    badge: 'Film Feature',
    metric: 'Nominated Best Corporate Doc',
    keywords: ['silicon savannah', 'kenya tech', 'engineering', 'nairobi tech', 'fintech contracts', 'filming'],
  },

  // 4. MULTIMEDIA PODCASTS & PRESS WIRES
  {
    id: 'pod-1',
    type: 'wire',
    typeLabel: 'Podcast Episode',
    title: 'The Sovereign Narrative: How Nation Brands Attract Global FDI',
    subtitle: 'Geopolitical messaging strategies when pitching sovereign bonds to European capital markets.',
    sectionId: 'multimedia',
    badge: 'Episode 48',
    metric: '38:12 min &bull; Audio Master',
    keywords: ['sovereign narrative', 'fdi', 'nation branding', 'evans mwangi', 'ambassador', 'podcast', 'bonds'],
  },
  {
    id: 'pod-2',
    type: 'wire',
    typeLabel: 'Podcast Episode',
    title: '45-Minute War Room: Anatomy of a Hostile Takeover Defense',
    subtitle: 'Step-by-step containment protocols during high-stakes corporate proxy battles.',
    sectionId: 'multimedia',
    badge: 'Episode 47',
    metric: '42:50 min &bull; Crisis Counsel',
    keywords: ['war room', 'takeover defense', 'helena vance', 'proxy battle', 'crisis counsel', 'podcast'],
  },
  {
    id: 'wire-1',
    type: 'wire',
    typeLabel: 'Press Wire',
    title: 'Prinle PR Expands Strategic Desk to Upper Hill Financial District',
    subtitle: 'Strengthening enterprise crisis advisory across key African trade and investment corridors.',
    sectionId: 'multimedia',
    badge: 'Bloomberg & Reuters',
    metric: 'Official Wire Dispatch',
    keywords: ['upper hill', 'headquarters', 'expansion', 'bloomberg', 'reuters', 'press release', 'wire'],
  },
  {
    id: 'wire-2',
    type: 'wire',
    typeLabel: 'Whitepaper',
    title: 'Algorithmic Perception & Corporate Reputation in GenAI Search',
    subtitle: 'Empirical analysis across 500 blue-chip entities demonstrating how AI answer engines summarize controversies.',
    sectionId: 'multimedia',
    badge: 'Research Paper',
    metric: '500 Entities Audited',
    keywords: ['genai', 'ai search', 'whitepaper', 'research', 'reputation', 'factual narrative anchoring'],
  },
];

export const TopBar: React.FC<TopBarProps> = ({ onNavigate, onSelectService }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'service' | 'case_study' | 'documentary' | 'wire'>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Keyboard shortcut listener: Cmd+K / Ctrl+K or / to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
      setSelectedIndex(0);
    } else {
      setSearchQuery('');
    }
  }, [isSearchOpen]);

  // Filtered search results
  const filteredResults = SEARCH_DATABASE.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.type === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.typeLabel.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q)) ||
      item.keywords.some((k) => k.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  const handleSelectResult = (item: SearchItem) => {
    setIsSearchOpen(false);
    if (onNavigate) {
      onNavigate(item.sectionId);
    } else {
      const el = document.getElementById(item.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleConsultService = (e: React.MouseEvent, item: SearchItem) => {
    e.stopPropagation();
    setIsSearchOpen(false);
    if (onSelectService && item.servicePayload) {
      onSelectService(item.servicePayload);
    } else if (onNavigate) {
      onNavigate(item.sectionId);
    }
  };

  // Keyboard navigation within results
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredResults.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % Math.max(1, filteredResults.length));
    } else if (e.key === 'Enter' && filteredResults.length > 0) {
      e.preventDefault();
      const current = filteredResults[selectedIndex] || filteredResults[0];
      if (current) handleSelectResult(current);
    }
  };

  return (
    <>
      <div className="bg-[#0a1829] text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-12 border-b border-[#15304f] relative z-40">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
          
          {/* Contact Info: Official email, phone, and WhatsApp */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-center md:text-left">
            <a
              href="mailto:prinleprsolutions@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-[#d89e28] transition-colors text-slate-200 hover:text-white font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
              <span>prinleprsolutions@gmail.com</span>
            </a>

            <span className="hidden sm:inline text-slate-600" aria-hidden="true">&bull;</span>

            <a
              href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20an%20executive%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors text-slate-200 hover:text-white font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>WhatsApp: +254 725 128 059</span>
            </a>

            <span className="hidden xl:inline text-slate-600" aria-hidden="true">&bull;</span>

            <span className="hidden xl:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-[#d89e28] shrink-0" />
              <span>Mon–Fri: 08:00–17:00 EAT &bull; Crisis 24/7/365</span>
            </span>
          </div>

          {/* Center / Right: Instant Search Button & Social Media Vectors */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 shrink-0 w-full md:w-auto">
            
            {/* INSTANT SEARCH TRIGGER BAR */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex-1 md:flex-initial flex items-center justify-between gap-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#d89e28] text-slate-700 hover:text-slate-900 px-3 py-1 rounded-xl text-xs transition-all shadow-xs cursor-pointer group min-h-[32px]"
              aria-label="Open instant search for PR services and case studies (Press Cmd+K)"
              title="Instant Search (Shortcut: Cmd+K / Ctrl+K)"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#d89e28] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] text-slate-600 group-hover:text-slate-900 font-medium truncate max-w-[150px] xs:max-w-[210px] sm:max-w-none">
                  Search PR services &amp; case studies...
                </span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-0.5 text-[9.5px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 group-hover:border-[#d89e28]">
                <Command className="w-2.5 h-2.5" />
                <span>K</span>
              </div>
            </button>

            {/* Social Media Vectors: Official corporate links */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <a
                href="https://www.linkedin.com/company/prinle-pr-solutionslimited/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prinle PR Solutions LinkedIn"
                title="LinkedIn: Prinle PR Solutions Ltd"
                className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-[#d89e28] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
              </a>

              <a
                href="https://x.com/PrinlePR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prinle PR on X (@PrinlePR)"
                title="X (Twitter): @PrinlePR"
                className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-[#d89e28] transition-colors"
              >
                <Twitter className="w-3.5 h-3.5 fill-current" />
              </a>

              <a
                href="https://youtube.com/@PrinlePRMedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prinle PR Media on YouTube"
                title="YouTube: @PrinlePRMedia"
                className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-[#d89e28] transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:0725128059"
                aria-label="Call Prinle PR Hotline"
                className="hidden sm:inline-flex items-center text-[#d89e28] hover:text-white transition-colors ml-1 font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5 mr-1 shrink-0" />
                <span>0725 128 059</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* INSTANT SPOTLIGHT SEARCH MODAL / COMMAND PALETTE */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 sm:pt-20 animate-fadeIn">
          <div 
            className="bg-white border border-slate-200 w-full max-w-2xl text-slate-900 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh] ring-1 ring-black/5"
            role="dialog"
            aria-modal="true"
            aria-label="Search PR services and case studies"
          >
            {/* Modal Search Input Header */}
            <div className="p-3.5 sm:p-4.5 border-b border-slate-200 flex items-center gap-3 bg-white">
              <Search className="w-5 h-5 text-[#d89e28] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Search PR services, crisis war room, case studies, documentaries..."
                className="flex-1 bg-white text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-hidden font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 cursor-pointer text-xs font-mono font-bold flex items-center gap-1"
                aria-label="Close search (Esc)"
              >
                <span>ESC</span>
              </button>
            </div>

            {/* Quick Filter Category Pills */}
            <div className="px-3.5 py-2.5 border-b border-slate-200 bg-slate-50 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-500 mr-1 shrink-0">Filter:</span>
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                  activeCategory === 'all'
                    ? 'bg-[#0a1829] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Index ({SEARCH_DATABASE.length})
              </button>
              <button
                onClick={() => setActiveCategory('service')}
                className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                  activeCategory === 'service'
                    ? 'bg-[#0a1829] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Briefcase className="w-3 h-3" />
                <span>PR Services</span>
              </button>
              <button
                onClick={() => setActiveCategory('case_study')}
                className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                  activeCategory === 'case_study'
                    ? 'bg-[#0a1829] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Award className="w-3 h-3" />
                <span>Case Studies</span>
              </button>
              <button
                onClick={() => setActiveCategory('documentary')}
                className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                  activeCategory === 'documentary'
                    ? 'bg-[#0a1829] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Film className="w-3 h-3" />
                <span>4K Documentaries</span>
              </button>
              <button
                onClick={() => setActiveCategory('wire')}
                className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                  activeCategory === 'wire'
                    ? 'bg-[#0a1829] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Radio className="w-3 h-3" />
                <span>Podcasts &amp; Wires</span>
              </button>
            </div>

            {/* Results List */}
            <div className="flex-1 overflow-y-auto p-2.5 sm:p-3 space-y-1.5 divide-y divide-slate-100 bg-white">
              {filteredResults.length === 0 ? (
                <div className="py-12 px-4 text-center">
                  <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    No results found for &ldquo;{searchQuery}&rdquo;
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                    Try searching for terms like <strong className="text-[#b47a16]">Crisis</strong>, <strong className="text-[#b47a16]">Media Relations</strong>, <strong className="text-[#b47a16]">VanguardPay</strong>, <strong className="text-[#b47a16]">Documentary</strong>, or <strong className="text-[#b47a16]">AfCFTA</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="text-xs text-[#b47a16] font-bold uppercase tracking-wider underline cursor-pointer"
                  >
                    View All Categories
                  </button>
                </div>
              ) : (
                filteredResults.map((item, index) => {
                  const isHighlighted = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectResult(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`p-3 rounded-xl transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                        isHighlighted
                          ? 'bg-amber-50/70 border border-[#d89e28] shadow-xs ring-1 ring-[#d89e28]/30'
                          : 'bg-slate-50/60 hover:bg-slate-100/90 border border-slate-200/70'
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        {/* Icon by Category */}
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          item.type === 'service'
                            ? 'bg-amber-100/70 text-[#b47a16] border border-amber-300/60'
                            : item.type === 'case_study'
                            ? 'bg-blue-100/70 text-blue-700 border border-blue-300/60'
                            : item.type === 'documentary'
                            ? 'bg-red-100/70 text-red-700 border border-red-300/60'
                            : 'bg-emerald-100/70 text-emerald-700 border border-emerald-300/60'
                        }`}>
                          {item.type === 'service' && <Briefcase className="w-4 h-4" />}
                          {item.type === 'case_study' && <Award className="w-4 h-4" />}
                          {item.type === 'documentary' && <Film className="w-4 h-4" />}
                          {item.type === 'wire' && <Radio className="w-4 h-4" />}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#b47a16]">
                              {item.typeLabel}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-mono text-slate-700 bg-white px-1.5 py-0.2 rounded border border-slate-200">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          
                          <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0a1829] transition-colors truncate">
                            {item.title}
                          </h4>
                          
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Right Meta & Actions */}
                      <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                        {item.metric && (
                          <span className="text-[10px] font-mono text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 hidden xs:inline-block">
                            {item.metric}
                          </span>
                        )}

                        {item.servicePayload && onSelectService ? (
                          <button
                            onClick={(e) => handleConsultService(e, item)}
                            className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg transition-colors cursor-pointer shrink-0 shadow-2xs"
                          >
                            Inquire Service
                          </button>
                        ) : null}

                        <span className="text-[#b47a16] text-xs font-bold flex items-center gap-1">
                          <span className="hidden sm:inline">Jump</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer Shortcuts & Hotline */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10.5px] font-mono text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-700 shadow-2xs">↑</kbd>
                  <kbd className="bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-700 shadow-2xs">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700 shadow-2xs">↵</kbd>
                  <span>Select</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700 shadow-2xs">ESC</kbd>
                  <span>Close</span>
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <span>Immediate Crisis Desk:</span>
                <a href="tel:0725128059" className="text-[#0a1829] hover:text-[#d89e28] hover:underline font-bold">
                  0725 128 059
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
