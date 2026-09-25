import React, { useState } from 'react';
import { Megaphone, Film, Share2, Shield, Camera, Clapperboard, Newspaper, Users, Sliders, Check, X, ArrowRight, Lock, FileSpreadsheet, EyeOff } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activePillar, setActivePillar] = useState<'all' | 'pillar-a' | 'pillar-b' | 'pillar-c'>('all');
  const [activeModalService, setActiveModalService] = useState<any | null>(null);

  const pillars = [
    // Pillar A (Strategic PR & Consulting)
    {
      id: 'pillar-a-planning',
      pillarId: 'pillar-a',
      pillarName: 'Pillar A',
      pillarLabel: 'Pillar A: Strategic PR & Consulting',
      title: 'Strategic Communication Planning',
      headline: 'Architecting executive communication frameworks for sovereign boards and multinationals.',
      icon: Megaphone,
      deliverables: [
        'Multi-tiered stakeholder engagement protocols across public & private channels',
        'Boardroom & C-suite communication playbooks and messaging hierarchies',
        'Cross-border regulatory communication roadmaps in African & international markets',
        'Corporate posture assessments and competitive narrative gap auditing',
      ],
      capabilities: 'Strategic Planning • Executive Counsel • Policy Alignment',
      impactMetric: 'Board-Level Architecture',
    },
    {
      id: 'pillar-a-crisis',
      pillarId: 'pillar-a',
      pillarName: 'Pillar A',
      pillarLabel: 'Pillar A: Strategic PR & Consulting',
      title: 'Crisis Countermeasures & Reputation Shielding',
      headline: 'Proactive defense countermeasures preserving enterprise value during hostile scenarios.',
      icon: Shield,
      deliverables: [
        'Crisis communication countermeasures and holding statement matrices',
        '24/7/365 rapid-deployment crisis war room console',
        'Reputation shielding frameworks against regulatory scrutiny or media campaigns',
        'Algorithmic search de-escalation and factual narrative anchoring',
      ],
      capabilities: 'Crisis War Room • Reputation Shield • 24/7 SLA',
      impactMetric: '< 30 Min Response Readiness',
    },
    {
      id: 'pillar-a-media',
      pillarId: 'pillar-a',
      pillarName: 'Pillar A',
      pillarLabel: 'Pillar A: Strategic PR & Consulting',
      title: 'High-Tier Media Relations Management',
      headline: 'Securing authoritative placements across national dailies and global wire networks.',
      icon: Newspaper,
      deliverables: [
        'Direct relationship networks with senior editors, bureau chiefs, and finance desks',
        'Exclusive feature syndication across East African and global business channels',
        'Embargoed corporate briefings, press roundtables, and broadcast tours',
        'Keynote speechwriting and ministerial panel placements',
      ],
      capabilities: 'Editor Rolodex • Press Syndication • Tier-1 Desks',
      impactMetric: '92% Hit Rate On Target Publications',
    },

    // Pillar B (Cinematic Media Systems)
    {
      id: 'pillar-b-documentaries',
      pillarId: 'pillar-b',
      pillarName: 'Pillar B',
      pillarLabel: 'Pillar B: Cinematic Media Systems',
      title: 'Corporate Documentaries & Filming',
      headline: 'Broadcast-standard cinematic documentaries documenting landmark corporate transactions.',
      icon: Clapperboard,
      deliverables: [
        'High-fidelity corporate documentaries & institutional landmark retrospectives',
        'Script engineering, visual narrative storyboarding, and director oversight',
        'On-location filming crews with multi-camera 4K cinema rigs and aerial drone units',
        'Executive interview master recordings captured under cinema-grade lighting',
      ],
      capabilities: 'Script Engineering • 4K Filming • Documentaries',
      impactMetric: 'Cinema-Grade 4K Masters',
    },
    {
      id: 'pillar-b-industrial',
      pillarId: 'pillar-b',
      pillarName: 'Pillar B',
      pillarLabel: 'Pillar B: Cinematic Media Systems',
      title: 'Industrial Photography & Videography',
      headline: 'High-resolution industrial imagery capturing infrastructure, energy, and corporate assets.',
      icon: Camera,
      deliverables: [
        'Industrial and sovereign infrastructure photography for annual reports and prospectuses',
        'Broadcast-ready videography engineered for commercial television and press syndicates',
        'Executive C-suite portraiture and boardroom leadership visual libraries',
        'Architectural, supply-chain, and plant operational documentation',
      ],
      capabilities: 'Industrial Photography • Broadcast Video • C-Suite Stills',
      impactMetric: 'High-Bitrate Master Vault',
    },
    {
      id: 'pillar-b-postproduction',
      pillarId: 'pillar-b',
      pillarName: 'Pillar B',
      pillarLabel: 'Pillar B: Cinematic Media Systems',
      title: 'Postproduction Suites & Tracking',
      headline: 'Comprehensive editing, color grading, sound engineering, and distribution tracking.',
      icon: Film,
      deliverables: [
        'Comprehensive postproduction suites: offline/online editing, Davinci color grading',
        'Broadcast audio engineering, custom scoring, and multilingual voiceover mastering',
        'Asset tracking and digital watermarking for sovereign and investor assets',
        'Motion graphics, 3D title design, and interactive investor day visual showreels',
      ],
      capabilities: 'Postproduction Suite • Sound Design • Asset Tracking',
      impactMetric: 'Broadcast Syndication Ready',
    },

    // Pillar C (Omnichannel Branding)
    {
      id: 'pillar-c-strategy',
      pillarId: 'pillar-c',
      pillarName: 'Pillar C',
      pillarLabel: 'Pillar C: Omnichannel Branding',
      title: 'Brand Marketing Strategy & Identity',
      headline: 'Transformative market positioning and creative visual identity architectures.',
      icon: Sliders,
      deliverables: [
        'Comprehensive brand marketing strategy designed to shift regional market perceptions',
        'Creative visual identity frameworks (vector marks, type systems, brand architecture)',
        'Enterprise brand guidelines, stationery systems, and investor presentation kits',
        'Competitive moat positioning and institutional brand equity auditing',
      ],
      capabilities: 'Brand Architecture • Visual Identity • Market Repositioning',
      impactMetric: 'Category Creation Moat',
    },
    {
      id: 'pillar-c-syndication',
      pillarId: 'pillar-c',
      pillarName: 'Pillar C',
      pillarLabel: 'Pillar C: Omnichannel Branding',
      title: 'Programmatic Advertising & Publication Loops',
      headline: 'Multi-channel publication loops synchronizing digital and traditional media syndication.',
      icon: Share2,
      deliverables: [
        'Programmatic digital and traditional advertising syndication networks',
        'Multi-channel publication loops sustaining continuous brand momentum',
        'Influencer governance networks and executive ambassador alignment',
        'Editorial op-ed placement across Pan-African and international news outlets',
      ],
      capabilities: 'Advertising Syndication • Publication Loops • Influencer Governance',
      impactMetric: 'Multi-Territory Saturation',
    },
  ];

  const displayedPillars =
    activePillar === 'all'
      ? pillars
      : pillars.filter((p) => p.pillarId === activePillar);

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#d89e28] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase block mb-2 font-sans">
            KEY SERVICES MATRIX &bull; THREE CORE PILLARS
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0d2137] tracking-tight leading-[1.15]">
            Engineered Communications &amp; Media Architecture
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
            Constructing protective communications, high-fidelity cinematic productions, and omnichannel brand syndication for market-leading institutions.
          </p>
        </div>

        {/* 3-Pillar Tab Filter */}
        <div className="flex justify-start sm:justify-center mb-8 sm:mb-10 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-1 bg-slate-100 p-1 border border-slate-200 shrink-0">
            <button
              onClick={() => setActivePillar('all')}
              className={`px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap min-h-[42px] flex items-center ${
                activePillar === 'all'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              All Matrix Pillars (A &bull; B &bull; C)
            </button>
            <button
              onClick={() => setActivePillar('pillar-a')}
              className={`px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap min-h-[42px] flex items-center gap-1.5 ${
                activePillar === 'pillar-a'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d89e28]"></span>
              <span>Pillar A: Strategic PR &amp; Consulting</span>
            </button>
            <button
              onClick={() => setActivePillar('pillar-b')}
              className={`px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap min-h-[42px] flex items-center gap-1.5 ${
                activePillar === 'pillar-b'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d89e28]"></span>
              <span>Pillar B: Cinematic Media Systems</span>
            </button>
            <button
              onClick={() => setActivePillar('pillar-c')}
              className={`px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap min-h-[42px] flex items-center gap-1.5 ${
                activePillar === 'pillar-c'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d89e28]"></span>
              <span>Pillar C: Omnichannel Branding</span>
            </button>
          </div>
        </div>

        {/* 3 Pillars Overview Banners (Shown when viewing all) */}
        {activePillar === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#0a1829] text-white p-5 border-t-4 border-[#d89e28]">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d89e28] block mb-1">
                PILLAR A
              </span>
              <h3 className="font-extrabold text-base mb-2">Strategic PR &amp; Consulting</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strategic communication planning, crisis countermeasures, reputation shielding, high-tier media relations, and multi-layered stakeholder engagement protocols.
              </p>
            </div>

            <div className="bg-[#0a1829] text-white p-5 border-t-4 border-[#d89e28]">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d89e28] block mb-1">
                PILLAR B
              </span>
              <h3 className="font-extrabold text-base mb-2">Cinematic Media Systems</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Industrial photography, broadcast-ready videography, corporate documentaries, script engineering, tracking, filming, editing, and comprehensive postproduction.
              </p>
            </div>

            <div className="bg-[#0a1829] text-white p-5 border-t-4 border-[#d89e28]">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d89e28] block mb-1">
                PILLAR C
              </span>
              <h3 className="font-extrabold text-base mb-2">Omnichannel Branding</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Brand marketing strategy, creative visual identity frameworks, programmatic digital/traditional advertising syndication, influencer governance, and publication loops.
              </p>
            </div>
          </div>
        )}

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedPillars.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setActiveModalService(service)}
                className="group bg-white rounded-none p-5 sm:p-6 border border-slate-200 hover:border-[#d89e28] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(13,33,55,0.08)] active:scale-[0.99] transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-3.5">
                    {/* Deep Navy Square Icon Container */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0d2137] flex items-center justify-center text-white shrink-0 group-hover:bg-[#15304f] transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.8]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-black text-[#d89e28] uppercase tracking-wider block mb-0.5 truncate">
                        {service.pillarLabel}
                      </span>
                      <h3 className="font-bold text-[#0d2137] text-sm sm:text-base group-hover:text-[#d89e28] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4">
                    {service.headline}
                  </p>

                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider py-1 border-t border-slate-100">
                    {service.capabilities}
                  </div>
                </div>

                {/* Footer Metric */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 text-[11px] truncate">{service.impactMetric}</span>
                  <span className="text-[#d89e28] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-[11px] shrink-0">
                    Protocols &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Pricing Policy Banner [MANDATORY BY CORPORATE CHARTER] */}
        <div className="mt-12 sm:mt-16 bg-[#0a1829] text-white p-6 sm:p-8 lg:p-10 border border-[#15304f] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d89e28]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#d89e28]/20 border border-[#d89e28]/40 px-3 py-1 text-[#d89e28] text-[10.5px] font-black uppercase tracking-widest mb-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Institutional Pricing Policy</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Custom Retainer Assessment Ingestion Portal
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Public view access is strictly restricted to a customized <strong className="text-white">&lsquo;Request a Proposal / Custom Retainer Assessment&rsquo;</strong> ingestion portal. No public pricing grids shall be displayed to protect premium bespoke deal sizes and customized scope architectures.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <EyeOff className="w-3.5 h-3.5 text-[#d89e28]" />
                  Zero Public Rate Cards
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#d89e28]" />
                  Tailored Retainer Scoping
                </span>
                <span>&bull;</span>
                <span>B2B Commercial Invoicing Only</span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onSelectService('Pillar A: Strategic PR & Retainer Assessment')}
                className="w-full sm:w-auto bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-none shadow-md transition-colors cursor-pointer min-h-[46px] flex items-center justify-center gap-2"
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
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-none w-full max-w-lg p-5 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-slate-700 active:bg-slate-100 text-lg font-bold"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 pr-8">
              <div className="w-11 h-11 bg-[#0d2137] rounded-none flex items-center justify-center text-white shrink-0">
                <activeModalService.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#d89e28]">
                  {activeModalService.pillarLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0d2137]">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
              {activeModalService.headline} We engineer tailored communications frameworks tailored strictly to enterprise objectives and stakeholder sensitivities.
            </p>

            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#0d2137] uppercase tracking-wider mb-2.5">
                Practice Deliverables &amp; Protocols:
              </h4>
              <ul className="space-y-2">
                {activeModalService.deliverables?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-3 sm:p-3.5 border border-slate-100 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
              <span className="text-slate-500 font-medium">Standard Execution Benchmark:</span>
              <strong className="text-[#0d2137] font-bold">{activeModalService.impactMetric}</strong>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={() => {
                  const serviceTitle = `${activeModalService.pillarName}: ${activeModalService.title}`;
                  setActiveModalService(null);
                  onSelectService(serviceTitle);
                }}
                className="flex-1 bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3.5 px-4 transition-colors text-center cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
              >
                <span>INQUIRE FOR THIS PILLAR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-3 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
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
