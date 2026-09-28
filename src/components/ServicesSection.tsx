import React, { useState } from 'react';
import { 
  Megaphone, 
  Film, 
  Share2, 
  Shield, 
  Camera, 
  Clapperboard, 
  Newspaper, 
  Sliders, 
  Check, 
  X, 
  ArrowRight, 
  Lock, 
  FileSpreadsheet, 
  EyeOff,
  Sparkles,
  ShieldCheck,
  Search,
  CheckCircle2,
  Building2,
  FileCheck,
  Layers,
  Award,
  Clock,
  Radio,
  ExternalLink
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter.tsx';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export interface ServiceItem {
  id: string;
  pillarId: 'pillar-a' | 'pillar-b' | 'pillar-c';
  pillarName: string;
  pillarCode: string;
  pillarLabel: string;
  title: string;
  headline: string;
  icon: React.ElementType;
  deliverables: string[];
  capabilities: string[];
  impactMetric: string;
  metricNumber?: string;
  metricLabel: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activePillar, setActivePillar] = useState<'all' | 'pillar-a' | 'pillar-b' | 'pillar-c'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const pillars: ServiceItem[] = [
    // Pillar A (Strategic PR & Consulting)
    {
      id: 'pillar-a-planning',
      pillarId: 'pillar-a',
      pillarName: 'Pillar Alpha',
      pillarCode: 'PL-A01',
      pillarLabel: 'Pillar Alpha &bull; Strategic PR &amp; Consulting',
      title: 'Strategic Communication Planning',
      headline: 'Architecting executive communication frameworks for sovereign boards and multinationals.',
      icon: Megaphone,
      deliverables: [
        'Multi-tiered stakeholder engagement protocols across public & private channels',
        'Boardroom & C-suite communication playbooks and messaging hierarchies',
        'Cross-border regulatory communication roadmaps in African & international markets',
        'Corporate posture assessments and competitive narrative gap auditing',
      ],
      capabilities: ['Strategic Planning', 'Executive Counsel', 'Policy Alignment', 'Stakeholder Framing'],
      impactMetric: 'Board-Level Architecture',
      metricNumber: '100%',
      metricLabel: 'Alignment with Governance Filings',
    },
    {
      id: 'pillar-a-crisis',
      pillarId: 'pillar-a',
      pillarName: 'Pillar Alpha',
      pillarCode: 'PL-A02',
      pillarLabel: 'Pillar Alpha &bull; Strategic PR &amp; Consulting',
      title: 'Crisis Countermeasures & Reputation Shielding',
      headline: 'Proactive defense countermeasures preserving enterprise value during hostile scenarios.',
      icon: Shield,
      deliverables: [
        'Crisis communication countermeasures and holding statement matrices',
        '24/7/365 rapid-deployment crisis war room console',
        'Reputation shielding frameworks against regulatory scrutiny or media campaigns',
        'Algorithmic search de-escalation and factual narrative anchoring',
      ],
      capabilities: ['Crisis War Room', 'Reputation Shield', '24/7 SLA', 'Algorithmic De-amplification'],
      impactMetric: '< 30 Min Response Readiness',
      metricNumber: '< 30m',
      metricLabel: 'Immediate Emergency Deployment SLA',
    },
    {
      id: 'pillar-a-media',
      pillarId: 'pillar-a',
      pillarName: 'Pillar Alpha',
      pillarCode: 'PL-A03',
      pillarLabel: 'Pillar Alpha &bull; Strategic PR &amp; Consulting',
      title: 'High-Tier Media Relations Management',
      headline: 'Securing authoritative placements across national dailies and global wire networks.',
      icon: Newspaper,
      deliverables: [
        'Direct relationship networks with senior editors, bureau chiefs, and finance desks',
        'Exclusive feature syndication across East African and global business channels',
        'Embargoed corporate briefings, press roundtables, and broadcast tours',
        'Keynote speechwriting and ministerial panel placements',
      ],
      capabilities: ['Editor Rolodex', 'Press Syndication', 'Tier-1 Desks', 'Embargo Management'],
      impactMetric: '92% Hit Rate On Target Publications',
      metricNumber: '92%',
      metricLabel: 'Tier-1 Target Placement Hit Rate',
    },

    // Pillar B (Cinematic Media Systems)
    {
      id: 'pillar-b-documentaries',
      pillarId: 'pillar-b',
      pillarName: 'Pillar Beta',
      pillarCode: 'PL-B01',
      pillarLabel: 'Pillar Beta &bull; Cinematic Media Systems',
      title: 'Corporate Documentaries & Filming',
      headline: 'Broadcast-standard cinematic documentaries documenting landmark corporate transactions.',
      icon: Clapperboard,
      deliverables: [
        'High-fidelity corporate documentaries & institutional landmark retrospectives',
        'Script engineering, visual narrative storyboarding, and director oversight',
        'On-location filming crews with multi-camera 4K cinema rigs and aerial drone units',
        'Executive interview master recordings captured under cinema-grade lighting',
      ],
      capabilities: ['Script Engineering', '4K Cinema Filming', 'Drone Aerials', 'Executive Master Stills'],
      impactMetric: 'Cinema-Grade 4K Masters',
      metricNumber: '4K',
      metricLabel: 'Uncompressed Cinema Package',
    },
    {
      id: 'pillar-b-industrial',
      pillarId: 'pillar-b',
      pillarName: 'Pillar Beta',
      pillarCode: 'PL-B02',
      pillarLabel: 'Pillar Beta &bull; Cinematic Media Systems',
      title: 'Industrial Photography & Videography',
      headline: 'High-resolution industrial imagery capturing infrastructure, energy, and corporate assets.',
      icon: Camera,
      deliverables: [
        'Industrial and sovereign infrastructure photography for annual reports and prospectuses',
        'Broadcast-ready videography engineered for commercial television and press syndicates',
        'Executive C-suite portraiture and boardroom leadership visual libraries',
        'Architectural, supply-chain, and plant operational documentation',
      ],
      capabilities: ['Industrial Photography', 'Broadcast Video', 'C-Suite Stills', 'Supply Chain Assets'],
      impactMetric: 'High-Bitrate Master Vault',
      metricNumber: '100%',
      metricLabel: 'Commercial Broadcast Ready',
    },
    {
      id: 'pillar-b-postproduction',
      pillarId: 'pillar-b',
      pillarName: 'Pillar Beta',
      pillarCode: 'PL-B03',
      pillarLabel: 'Pillar Beta &bull; Cinematic Media Systems',
      title: 'Postproduction Suites & Tracking',
      headline: 'Comprehensive editing, color grading, sound engineering, and distribution tracking.',
      icon: Film,
      deliverables: [
        'Comprehensive postproduction suites: offline/online editing, Davinci color grading',
        'Broadcast audio engineering, custom scoring, and multilingual voiceover mastering',
        'Asset tracking and digital watermarking for sovereign and investor assets',
        'Motion graphics, 3D title design, and interactive investor day visual showreels',
      ],
      capabilities: ['Postproduction Suite', 'Davinci Color Grading', 'Audio Mastering', 'Asset Watermarking'],
      impactMetric: 'Broadcast Syndication Ready',
      metricNumber: '24h',
      metricLabel: 'Fast-Track Turnaround Pipeline',
    },

    // Pillar C (Omnichannel Branding)
    {
      id: 'pillar-c-strategy',
      pillarId: 'pillar-c',
      pillarName: 'Pillar Gamma',
      pillarCode: 'PL-C01',
      pillarLabel: 'Pillar Gamma &bull; Omnichannel Branding',
      title: 'Brand Marketing Strategy & Identity',
      headline: 'Transformative market positioning and creative visual identity architectures.',
      icon: Sliders,
      deliverables: [
        'Comprehensive brand marketing strategy designed to shift regional market perceptions',
        'Creative visual identity frameworks (vector marks, type systems, brand architecture)',
        'Enterprise brand guidelines, stationery systems, and investor presentation kits',
        'Competitive moat positioning and institutional brand equity auditing',
      ],
      capabilities: ['Brand Architecture', 'Visual Identity', 'Market Repositioning', 'Design Systems'],
      impactMetric: 'Category Creation Moat',
      metricNumber: '+340%',
      metricLabel: 'Institutional Brand Equity Lift',
    },
    {
      id: 'pillar-c-syndication',
      pillarId: 'pillar-c',
      pillarName: 'Pillar Gamma',
      pillarCode: 'PL-C02',
      pillarLabel: 'Pillar Gamma &bull; Omnichannel Branding',
      title: 'Programmatic Advertising & Publication Loops',
      headline: 'Multi-channel publication loops synchronizing digital and traditional media syndication.',
      icon: Share2,
      deliverables: [
        'Programmatic digital and traditional advertising syndication networks',
        'Multi-channel publication loops sustaining continuous brand momentum',
        'Influencer governance networks and executive ambassador alignment',
        'Editorial op-ed placement across Pan-African and international news outlets',
      ],
      capabilities: ['Advertising Syndication', 'Publication Loops', 'Influencer Governance', 'Programmatic Reach'],
      impactMetric: 'Multi-Territory Saturation',
      metricNumber: '24',
      metricLabel: 'Pan-African Sovereign Distribution Hubs',
    },
  ];

  const quickFilterTags = [
    { id: 'all', label: 'All 8 Practices' },
    { id: 'crisis', label: 'Crisis War Room' },
    { id: 'media', label: 'Tier-1 Media Relations' },
    { id: 'documentary', label: '4K Documentaries' },
    { id: 'industrial', label: 'Industrial Media' },
    { id: 'brand', label: 'Brand Architecture' },
    { id: 'syndication', label: 'Programmatic Syndication' },
  ];

  // Filter by pillar, tag, and search query
  const filteredPillars = pillars.filter((service) => {
    const matchesPillar = activePillar === 'all' || service.pillarId === activePillar;
    
    // Tag filter
    let matchesTag = true;
    if (selectedTag === 'crisis') matchesTag = service.id.includes('crisis');
    else if (selectedTag === 'media') matchesTag = service.id.includes('media');
    else if (selectedTag === 'documentary') matchesTag = service.id.includes('documentaries');
    else if (selectedTag === 'industrial') matchesTag = service.id.includes('industrial');
    else if (selectedTag === 'brand') matchesTag = service.id.includes('strategy');
    else if (selectedTag === 'syndication') matchesTag = service.id.includes('syndication');

    // Query filter
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesPillar && matchesTag;

    const matchesQuery = 
      service.title.toLowerCase().includes(q) ||
      service.headline.toLowerCase().includes(q) ||
      service.capabilities.some(c => c.toLowerCase().includes(q)) ||
      service.deliverables.some(d => d.toLowerCase().includes(q));

    return matchesPillar && matchesTag && matchesQuery;
  });

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white relative border-b border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -mt-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none -mb-20" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0d2137] text-white border border-[#15304f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-sm font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#d89e28]" />
            <span className="text-[#d89e28]">KEY SERVICES MATRIX</span>
            <span className="text-slate-400">&bull;</span>
            <span className="text-white">THREE CORE PILLARS</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d2137] tracking-tight leading-[1.12]">
            Engineered Communications &amp; Media Architecture
          </h2>
          
          <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Prinle PR Solutions Ltd structures its corporate counsel into three synergistic operational pillars: safeguarding enterprise balance sheets, engineering broadcast-standard cinematic assets, and expanding cross-border brand equity across African and international markets.
          </p>

          {/* Institutional Architecture Metric Strip */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-1.5 font-bold text-[#0d2137]">
              <Layers className="w-4 h-4 text-[#d89e28]" />
              3 Sovereign Divisions (Alpha &bull; Beta &bull; Gamma)
            </span>
            <span className="hidden sm:inline text-slate-300">&bull;</span>
            <span className="flex items-center gap-1.5 font-bold text-[#0d2137]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              8 Mission-Critical Practices
            </span>
            <span className="hidden sm:inline text-slate-300">&bull;</span>
            <span className="flex items-center gap-1.5 font-bold text-[#0d2137]">
              <Clock className="w-4 h-4 text-[#d89e28]" />
              24/7/365 Crisis War Room SLA
            </span>
            <span className="hidden sm:inline text-slate-300">&bull;</span>
            <span className="flex items-center gap-1.5 font-bold text-[#0d2137]">
              <Award className="w-4 h-4 text-[#d89e28]" />
              100% 4K Cinema Master Quality
            </span>
          </div>
        </div>

        {/* 3 Interactive Pillar Command Pods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12">
          
          {/* Pillar Alpha Pod */}
          <div 
            onClick={() => setActivePillar(activePillar === 'pillar-a' ? 'all' : 'pillar-a')}
            className={`rounded-2xl p-6 sm:p-7 transition-all duration-200 cursor-pointer border relative overflow-hidden flex flex-col justify-between shadow-md hover:-translate-y-0.5 ${
              activePillar === 'pillar-a'
                ? 'bg-gradient-to-br from-[#0d2137] to-[#122840] text-white border-[#d89e28] ring-2 ring-[#d89e28]/50 shadow-xl'
                : 'bg-[#0a1829] text-white border-slate-800 hover:border-[#d89e28]/70 hover:bg-[#0e2239]'
            }`}
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#d89e28]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d89e28] bg-amber-400/10 border border-amber-400/25 px-2.5 py-1 rounded-md">
                  PILLAR ALPHA
                </span>
                <span className="text-[10.5px] font-mono text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  24/7 Crisis SLA
                </span>
              </div>

              <h3 className="font-black text-xl text-white mb-2 tracking-tight">
                Strategic PR &amp; Executive Consulting
              </h3>
              
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4">
                Executive communication planning, rapid crisis war room deployment, sovereign reputation shielding, and terminal newsroom syndication.
              </p>

              <div className="space-y-1.5 py-3 border-t border-slate-700/60 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Strategic Planning &amp; C-Suite Counsel</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Crisis Countermeasures &amp; War Room</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Senior Editors &amp; National Press Rolodex</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs mt-3">
              <span className="text-[11px] font-mono text-slate-400">3 Practices &bull; Tier-1 Desks</span>
              <span className="text-[#d89e28] font-black text-xs flex items-center gap-1.5">
                <span>{activePillar === 'pillar-a' ? 'Active Filter &bull; Reset' : 'Filter Division'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Pillar Beta Pod */}
          <div 
            onClick={() => setActivePillar(activePillar === 'pillar-b' ? 'all' : 'pillar-b')}
            className={`rounded-2xl p-6 sm:p-7 transition-all duration-200 cursor-pointer border relative overflow-hidden flex flex-col justify-between shadow-md hover:-translate-y-0.5 ${
              activePillar === 'pillar-b'
                ? 'bg-gradient-to-br from-[#0d2137] to-[#122840] text-white border-[#d89e28] ring-2 ring-[#d89e28]/50 shadow-xl'
                : 'bg-[#0a1829] text-white border-slate-800 hover:border-[#d89e28]/70 hover:bg-[#0e2239]'
            }`}
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#d89e28]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d89e28] bg-amber-400/10 border border-amber-400/25 px-2.5 py-1 rounded-md">
                  PILLAR BETA
                </span>
                <span className="text-[10.5px] font-mono text-[#d89e28] font-bold bg-amber-950/50 px-2 py-0.5 rounded-md border border-amber-500/20">
                  4K Broadcast Suite
                </span>
              </div>

              <h3 className="font-black text-xl text-white mb-2 tracking-tight">
                Cinematic Media Systems &amp; Documentaries
              </h3>
              
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4">
                Industrial photography, broadcast-ready videography, high-fidelity corporate documentaries, aerial drone rigs, and Davinci postproduction.
              </p>

              <div className="space-y-1.5 py-3 border-t border-slate-700/60 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Corporate Documentaries &amp; Scripts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Industrial &amp; Sovereign Infrastructure Stills</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Davinci Color, Sound &amp; Watermarking</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs mt-3">
              <span className="text-[11px] font-mono text-slate-400">3 Practices &bull; 4K Cinema Package</span>
              <span className="text-[#d89e28] font-black text-xs flex items-center gap-1.5">
                <span>{activePillar === 'pillar-b' ? 'Active Filter &bull; Reset' : 'Filter Division'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Pillar Gamma Pod */}
          <div 
            onClick={() => setActivePillar(activePillar === 'pillar-c' ? 'all' : 'pillar-c')}
            className={`rounded-2xl p-6 sm:p-7 transition-all duration-200 cursor-pointer border relative overflow-hidden flex flex-col justify-between shadow-md hover:-translate-y-0.5 ${
              activePillar === 'pillar-c'
                ? 'bg-gradient-to-br from-[#0d2137] to-[#122840] text-white border-[#d89e28] ring-2 ring-[#d89e28]/50 shadow-xl'
                : 'bg-[#0a1829] text-white border-slate-800 hover:border-[#d89e28]/70 hover:bg-[#0e2239]'
            }`}
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#d89e28]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d89e28] bg-amber-400/10 border border-amber-400/25 px-2.5 py-1 rounded-md">
                  PILLAR GAMMA
                </span>
                <span className="text-[10.5px] font-mono text-blue-400 font-bold bg-blue-950/50 px-2 py-0.5 rounded-md border border-blue-500/20">
                  Pan-African Corridors
                </span>
              </div>

              <h3 className="font-black text-xl text-white mb-2 tracking-tight">
                Omnichannel Branding &amp; Syndication
              </h3>
              
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4">
                Brand marketing strategy, visual identity design systems, programmatic digital/traditional advertising loops, and trade corridor alignment.
              </p>

              <div className="space-y-1.5 py-3 border-t border-slate-700/60 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Enterprise Brand Strategy &amp; Identity</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Programmatic Advertising &amp; Publication Loops</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                  <span>Influencer Governance &amp; Executive Op-Eds</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs mt-3">
              <span className="text-[11px] font-mono text-slate-400">2 Practices &bull; Pan-African Wires</span>
              <span className="text-[#d89e28] font-black text-xs flex items-center gap-1.5">
                <span>{activePillar === 'pillar-c' ? 'Active Filter &bull; Reset' : 'Filter Division'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>

        {/* Quick Tag Pills & Search Bar Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 sm:mb-10 bg-slate-50 border border-slate-200/90 p-3 sm:p-4 rounded-2xl shadow-2xs">
          
          {/* Quick Filter Tags */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
            {quickFilterTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => {
                  setSelectedTag(tag.id);
                  if (tag.id === 'all') setActivePillar('all');
                }}
                className={`px-3.5 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap min-h-[38px] flex items-center shrink-0 ${
                  selectedTag === tag.id
                    ? 'bg-[#0d2137] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-[#0d2137] hover:bg-slate-200/70 border border-slate-200/80'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Capability Search Bar */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capability or deliverable..."
              className="w-full pl-9.5 pr-8 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:border-[#d89e28] focus:ring-2 focus:ring-[#d89e28]/20 transition-all text-slate-800 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Services Cards Grid */}
        {filteredPillars.length === 0 ? (
          <div className="p-10 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-600">
            <p className="text-sm font-semibold mb-2">No matching practices found for &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedTag('all'); setActivePillar('all'); }}
              className="text-xs font-bold text-[#d89e28] uppercase tracking-wider underline cursor-pointer"
            >
              Clear filters and view all 8 matrix practices
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredPillars.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveModalService(service)}
                  className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#d89e28] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(13,33,55,0.09)] hover:-translate-y-1 active:scale-[0.99] transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

                  <div>
                    {/* Top Row: Icon + Pillar Code Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#0d2137] group-hover:bg-[#15304f] rounded-xl flex items-center justify-center text-white shrink-0 transition-colors shadow-xs border border-slate-700/40">
                        <Icon className="w-6 h-6 text-[#d89e28] stroke-[1.8]" />
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0d2137] bg-slate-100 px-2 py-0.5 rounded-md truncate border border-slate-200 block">
                          {service.pillarCode}
                        </span>
                        <span className="text-[9.5px] font-mono text-[#d89e28] font-semibold block mt-0.5">
                          {service.pillarName}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-extrabold text-[#0d2137] text-base group-hover:text-[#d89e28] transition-colors leading-snug mb-2">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed mb-4">
                      {service.headline}
                    </p>

                    {/* Deliverables Snippet */}
                    <div className="space-y-1.5 mb-4 py-2.5 border-t border-slate-100 text-[11px] text-slate-500">
                      {service.deliverables.slice(0, 2).map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0 mt-0.5" />
                          <span className="line-clamp-1 text-slate-600">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Metric + Action Trigger */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] font-bold text-slate-700 truncate max-w-[130px]">
                      {service.impactMetric}
                    </span>
                    <span className="text-[#d89e28] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-xs shrink-0">
                      <span>Protocols</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Institutional Pricing Policy Banner [MANDATORY BY CORPORATE CHARTER] */}
        <div className="mt-12 sm:mt-16 bg-[#0a1829] text-white p-6 sm:p-8 lg:p-10 border border-[#15304f] rounded-2xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d89e28]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#d89e28]/20 border border-[#d89e28]/40 px-3 py-1 rounded-md text-[#d89e28] text-[10.5px] font-black uppercase tracking-widest mb-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Institutional Retainer Policy &bull; B2B Settlement</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mb-2">
                Custom Retainer Assessment Ingestion Portal
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                In strict adherence to institutional PR governance, public access is restricted to a customized <strong className="text-white">&lsquo;Request a Proposal / Custom Retainer Assessment&rsquo;</strong> portal. No public pricing grids or retail shopping carts are displayed to safeguard confidential deal structures and sovereign mandates.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <EyeOff className="w-3.5 h-3.5 text-[#d89e28]" />
                  Zero Public Rate Cards
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#d89e28]" />
                  Tailored Retainer Scoping
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  SWIFT / RTGS Corporate Invoicing
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onSelectService('Pillar Alpha: Strategic PR & Retainer Assessment')}
                className="w-full sm:w-auto bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer min-h-[46px] flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <span>REQUEST BESPOKE PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl p-5 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 font-bold cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-4 pr-8">
              <div className="w-12 h-12 bg-[#0d2137] rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs">
                <activeModalService.icon className="w-6 h-6 text-[#d89e28]" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#d89e28] block font-mono">
                  {activeModalService.pillarLabel} &bull; {activeModalService.pillarCode}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#0d2137] leading-tight">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
              {activeModalService.headline} We construct bespoke communication vectors configured strictly around enterprise outcomes, board approvals, and media confidentiality.
            </p>

            {/* Key Capabilities Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-5">
              {activeModalService.capabilities.map((cap, cIdx) => (
                <span key={cIdx} className="text-[10.5px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                  {cap}
                </span>
              ))}
            </div>

            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#0d2137] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-mono">
                <FileCheck className="w-4 h-4 text-[#d89e28]" />
                <span>Practice Deliverables &amp; Protocols:</span>
              </h4>
              <ul className="space-y-2">
                {activeModalService.deliverables?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <Check className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metric Banner */}
            <div className="bg-[#0a1829] text-white p-3.5 sm:p-4 rounded-xl mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs border border-slate-800">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">Standard Execution Benchmark</span>
                <strong className="text-sm font-bold text-white block mt-0.5">{activeModalService.impactMetric}</strong>
              </div>
              {activeModalService.metricNumber && (
                <div className="text-right sm:border-l sm:border-slate-800 sm:pl-4">
                  <AnimatedCounter
                    value={activeModalService.metricNumber}
                    className="text-xl sm:text-2xl font-black text-[#d89e28]"
                  />
                  <span className="text-[9.5px] text-slate-400 block font-mono">{activeModalService.metricLabel}</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={() => {
                  const serviceTitle = `${activeModalService.pillarName}: ${activeModalService.title}`;
                  setActiveModalService(null);
                  onSelectService(serviceTitle);
                }}
                className="flex-1 bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <span>REQUEST BESPOKE PROPOSAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-3 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold rounded-xl transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
