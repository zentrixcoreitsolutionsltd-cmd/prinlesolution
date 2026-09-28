import React, { useState } from 'react';
import { AnimatedCounter } from './AnimatedCounter.tsx';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Globe2, 
  Quote, 
  ArrowRight, 
  Compass, 
  Shield, 
  Building2, 
  Clock, 
  Mail, 
  CheckCircle2, 
  TrendingUp, 
  Lock, 
  Sparkles,
  Phone,
  FileCheck,
  Activity,
  ShieldAlert,
  Radio,
  ChevronRight,
  MapPin,
  MessageCircle,
  Star
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

type TabType = 'overview' | 'vision_mission' | 'methodology' | 'governance';

interface ProtectiveProtocol {
  id: string;
  code: string;
  title: string;
  badge: string;
  sla: string;
  icon: React.ElementType;
  summary: string;
  deepDive: string;
  deliverables: string[];
  metric: string;
  metricLabel: string;
}

const PROTECTIVE_PROTOCOLS: ProtectiveProtocol[] = [
  {
    id: 'shielding',
    code: 'PROT-01',
    title: 'Reputation Shielding & Countermeasures',
    badge: 'Crisis Response',
    sla: '< 38 Min SLA',
    icon: Shield,
    summary: 'Constructing defensive narrative firewalls that protect enterprise balance sheets during hostile press leaks or regulatory friction.',
    deepDive: 'Immediate mobilization of the Sandboxed Crisis War Room. We deploy pre-drafted holding matrices, establish central bank liaison corridors, and neutralize malicious conjecture before it reaches mainstream syndication.',
    deliverables: ['Rapid Hostile Leak Containment', 'Editorial Injunctions & Retractions', 'Bespoke Executive Defense Dossiers'],
    metric: '99.1%',
    metricLabel: 'Market Sentiment Protection Index',
  },
  {
    id: 'media',
    code: 'PROT-02',
    title: 'Cross-Border Media Relations',
    badge: 'Senior Desks',
    sla: '48 Desks On-Record',
    icon: Target,
    summary: 'Direct speed-dial access to business editors across Business Daily, Nation, Bloomberg, Reuters, Financial Times & WSJ.',
    deepDive: 'We do not rely on unsolicited press releases. Our team engages senior bureau chiefs, finance editors, and broadcast producers through established boardroom relationships, locking in high-stature feature coverage.',
    deliverables: ['Embargoed Wire Syndication', 'Broadcast Studio Bookings (CNBC, BBC, Citizen)', 'Exclusive Financial Op-Eds'],
    metric: '48',
    metricLabel: 'Tier-1 Media Outlets Engaged',
  },
  {
    id: 'cinematic',
    code: 'PROT-03',
    title: 'Cinematic Narrative Authority',
    badge: '4K Broadcast',
    sla: 'Cinema Suite',
    icon: Award,
    summary: '4K cinema-grade documentary production, industrial photography, and sovereign visual packaging engineered for commanding market weight.',
    deepDive: 'High-production films capturing capital investments, energy infrastructure, and tech breakthroughs. Tailored for ministerial summits, annual shareholder meetings, and international investor roadshows.',
    deliverables: ['4K Corporate Documentaries', 'Executive Video Thought Leadership', 'Uncompressed Broadcast B-Roll Packages'],
    metric: '100%',
    metricLabel: 'Broadcast-Ready 4K Asset Delivery',
  },
  {
    id: 'governance',
    code: 'PROT-04',
    title: 'Omnichannel & Bilateral Governance',
    badge: 'Sovereign & MNDA',
    sla: 'Strict Mutual NDA',
    icon: Globe2,
    summary: 'Multi-market stakeholder framing, AfCFTA trade corridor roadshows, and reputation governance under strict mutual non-disclosure.',
    deepDive: 'Harmonising corporate positioning across pan-African jurisdictions. We ensure communications adhere strictly to financial market disclosure rules, regulatory filings, and executive non-disclosure standards.',
    deliverables: ['AfCFTA Trade Corridor Framing', 'Bilateral Investor Dossiers', 'Strict Mutual NDA Protocols'],
    metric: '24',
    metricLabel: 'Pan-African Sovereign Hubs Reached',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>('shielding');
  const currentProtocol = PROTECTIVE_PROTOCOLS.find((p) => p.id === selectedProtocolId) || PROTECTIVE_PROTOCOLS[0];
  const CurrentIcon = currentProtocol.icon;

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-slate-100/60 to-transparent rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header & Subtitle */}
        <div className="max-w-4xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#d89e28] uppercase tracking-[0.2em] mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#d89e28] animate-pulse"></span>
            <span>Corporate Overview &bull; Institutional Pedigree</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0d2137] tracking-tight leading-[1.15]">
            Constructing Protective Communication Architectures For Global &amp; Regional Institutions.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Headquartered in Nairobi, Kenya, <strong className="text-[#0d2137] font-semibold">Prinle PR Solutions Ltd</strong> is an elite strategic communications firm, Tier-1 media relations bureau, and cinematic multimedia production house. We safeguard sovereign reputations, orchestrate bilateral trade narratives, and elevate market valuations.
          </p>
        </div>

        {/* Interactive Corporate Dossier Navigation */}
        <div className="flex items-center gap-2 pb-2 mb-8 overflow-x-auto no-scrollbar border-b border-slate-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 min-h-[42px] ${
              activeTab === 'overview'
                ? 'bg-[#0d2137] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:text-[#0d2137] hover:bg-slate-200/80'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-[#d89e28]" />
            <span>01. Agency Profile &amp; Pedigree</span>
          </button>

          <button
            onClick={() => setActiveTab('vision_mission')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 min-h-[42px] ${
              activeTab === 'vision_mission'
                ? 'bg-[#0d2137] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:text-[#0d2137] hover:bg-slate-200/80'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#d89e28]" />
            <span>02. Vision &amp; Strategic Mission</span>
          </button>

          <button
            onClick={() => setActiveTab('methodology')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 min-h-[42px] ${
              activeTab === 'methodology'
                ? 'bg-[#0d2137] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:text-[#0d2137] hover:bg-slate-200/80'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-[#d89e28]" />
            <span>03. The 4-Phase Operating Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('governance')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 min-h-[42px] ${
              activeTab === 'governance'
                ? 'bg-[#0d2137] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:text-[#0d2137] hover:bg-slate-200/80'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#d89e28]" />
            <span>04. Governance, NDAs &amp; Compliance</span>
          </button>
        </div>

        {/* Dynamic Main Body Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Tabbed In-Depth Editorial Dossier */}
          <div className="lg:col-span-7 space-y-6">

            {/* TAB 1: AGENCY OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-50 border-l-4 border-[#d89e28] border-y border-r border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#d89e28] block mb-2">
                    Executive Summary &bull; East African &amp; Global Operational Footprint
                  </span>
                  <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium mb-4">
                    Founded with the mandate to deliver institutional-grade public relations, <strong className="text-[#0d2137] font-bold">Prinle PR Solutions Ltd.</strong> bridges African commercial frontiers with international capital corridors. We do not engage in superficial publicity; we build sovereign reputational capital that shields enterprise balance sheets.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    From guiding cross-border sovereign energy syndicates to launching $450M series financings, our teams combine deep relationships with senior East African media executives, regulatory insight, and state-of-the-art cinematic broadcasting capabilities.
                  </p>
                </div>

                {/* 3 Pillars Summary Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs hover:border-[#d89e28] transition-colors">
                    <span className="text-xs font-black text-[#d89e28] uppercase tracking-wider block mb-1">
                      Pillar Alpha
                    </span>
                    <strong className="text-sm font-bold text-[#0d2137] block mb-1">
                      Strategic PR &amp; Crisis
                    </strong>
                    <p className="text-[11.5px] text-slate-500 leading-normal">
                      Hostile narrative neutralization, regulatory alignment, and senior media syndication.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs hover:border-[#d89e28] transition-colors">
                    <span className="text-xs font-black text-[#d89e28] uppercase tracking-wider block mb-1">
                      Pillar Beta
                    </span>
                    <strong className="text-sm font-bold text-[#0d2137] block mb-1">
                      Cinematic Media
                    </strong>
                    <p className="text-[11.5px] text-slate-500 leading-normal">
                      4K broadcast production, executive visual assets, and high-fidelity corporate documentaries.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs hover:border-[#d89e28] transition-colors">
                    <span className="text-xs font-black text-[#d89e28] uppercase tracking-wider block mb-1">
                      Pillar Gamma
                    </span>
                    <strong className="text-sm font-bold text-[#0d2137] block mb-1">
                      Omnichannel Branding
                    </strong>
                    <p className="text-[11.5px] text-slate-500 leading-normal">
                      Multi-market stakeholder framing, trade corridor roadshows, and reputation governance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: VISION & MISSION */}
            {activeTab === 'vision_mission' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Vision Statement */}
                  <div className="bg-[#0d2137] text-white p-6 sm:p-7 border border-[#15304f] rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d89e28]/15 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <div className="flex items-center gap-2 text-[#d89e28] text-xs font-black uppercase tracking-wider mb-3">
                        <Compass className="w-4 h-4" />
                        <span>Corporate Vision</span>
                      </div>
                      <p className="text-slate-100 text-xs sm:text-[13.5px] leading-relaxed italic">
                        &ldquo;To be the definitive cross-border communication architecture in Africa, guiding global institutions through intricate regulatory, media, and reputational ecosystems with absolute clarity and cinematic authority.&rdquo;
                      </p>
                    </div>
                    <div className="mt-5 pt-3.5 border-t border-slate-700/80 flex items-center justify-between text-[10.5px] text-slate-400 font-mono uppercase tracking-wider">
                      <span>Pan-African Benchmark</span>
                      <span className="text-[#d89e28] font-bold">2030 Horizon</span>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div className="bg-[#08172b] text-white p-6 sm:p-7 border border-[#15304f] rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d89e28]/15 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <div className="flex items-center gap-2 text-[#d89e28] text-xs font-black uppercase tracking-wider mb-3">
                        <Target className="w-4 h-4" />
                        <span>Corporate Mission</span>
                      </div>
                      <p className="text-slate-100 text-xs sm:text-[13.5px] leading-relaxed">
                        &ldquo;To engineer high-integrity public relations frameworks and world-class multimedia narrative systems that defend corporate reputations, engage elite stakeholders, and shift regional market perceptions with precision.&rdquo;
                      </p>
                    </div>
                    <div className="mt-5 pt-3.5 border-t border-slate-700/80 flex items-center justify-between text-[10.5px] text-slate-400 font-mono uppercase tracking-wider">
                      <span>Precision Engineering</span>
                      <span className="text-emerald-400 font-bold">Active SLA</span>
                    </div>
                  </div>
                </div>

                {/* 4 Core Corporate Principles */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
                  <h4 className="text-xs font-black text-[#0d2137] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d89e28]" />
                    <span>Four Invariant Tenets of Prinle Strategic Counsel</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0d2137] block font-bold">Absolute Discretion:</strong>
                        <span className="text-slate-600">Strict sandboxed confidentiality protocols across all executive interactions.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0d2137] block font-bold">Narrative Sovereignty:</strong>
                        <span className="text-slate-600">Institutions must own their facts rather than reacting to third-party conjecture.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0d2137] block font-bold">Terminal Media Access:</strong>
                        <span className="text-slate-600">Direct phone &amp; boardroom access to senior editors across leading newsrooms.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0d2137] block font-bold">Institutional Accountability:</strong>
                        <span className="text-slate-600">Measurable impact on investor sentiment, brand equity, and regulatory goodwill.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: THE 4-PHASE OPERATING ARCHITECTURE */}
            {activeTab === 'methodology' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#d89e28] block mb-2">
                    The Prinle Method &bull; Systematic Execution Framework
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    Every corporate mandate progresses through our proprietary 4-Phase Architecture, ensuring airtight narrative framing, compliance with local press regulations, and unmatched media resonance.
                  </p>

                  <div className="space-y-3.5">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#0d2137] text-[#d89e28] text-xs font-black flex items-center justify-center shrink-0">
                        01
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm font-bold text-[#0d2137] block">
                          Perception Intelligence &amp; Stakeholder Audit
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          Deep qualitative analysis of industry sentiment, regulatory headwinds, editorial biases, and competitor messaging vectors.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#d89e28] text-[#0d2137] text-xs font-black flex items-center justify-center shrink-0">
                        02
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm font-bold text-[#0d2137] block">
                          Narrative Engineering &amp; Executive Framing
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          Translating intricate corporate balance sheets, sovereign infrastructure milestones, or technology platforms into commanding narratives.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#0d2137] text-[#d89e28] text-xs font-black flex items-center justify-center shrink-0">
                        03
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm font-bold text-[#0d2137] block">
                          Synchronized Tier-1 Syndication &amp; Broadcast
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          Deploying embargoed releases, orchestrating 4K broadcast packages, and securing front-page features across national and pan-African dailies.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white text-xs font-black flex items-center justify-center shrink-0">
                        04
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm font-bold text-[#0d2137] block">
                          Reputation Armor &amp; Continuous Sentiment Governance
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          24/7/365 active monitoring, counter-disinformation protocols, and long-term executive positioning across African economic forums.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: GOVERNANCE & COMPLIANCE */}
            {activeTab === 'governance' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <FileCheck className="w-4 h-4" />
                    <span>Institutional Integrity Protocols</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-[#0d2137]">
                    Enterprise-Grade Confidentiality &amp; Operational Governance
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Prinle PR Solutions Ltd adheres strictly to international compliance benchmarks. We understand the sensitivities of sovereign treaties, listed corporate disclosures, and impending merger announcements.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d89e28] flex items-center justify-center mb-2 font-bold">
                        <Lock className="w-4 h-4" />
                      </div>
                      <strong className="text-xs font-bold text-[#0d2137] block mb-1">Mutual NDA First</strong>
                      <p className="text-[11.5px] text-slate-600 leading-relaxed">
                        Formal bilateral non-disclosure agreements signed before preliminary retainer discovery briefs.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center mb-2 font-bold">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <strong className="text-xs font-bold text-[#0d2137] block mb-1">B2B Wire Settlement</strong>
                      <p className="text-[11.5px] text-slate-600 leading-relaxed">
                        Executed through transparent SWIFT / RTGS corporate wire invoicing transfers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Core Values / Stats - Responsive clean cards with animated counter */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="bg-slate-50 p-4 border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#d89e28] transition-all">
                <AnimatedCounter
                  value="14+"
                  duration={2000}
                  className="text-2xl sm:text-3xl font-black text-[#0d2137] block"
                />
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mt-1 block">
                  Years Operating Pedigree
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">East Africa &bull; Global Hubs</span>
              </div>
              <div className="bg-slate-50 p-4 border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#d89e28] transition-all">
                <AnimatedCounter
                  value="1,200+"
                  duration={2400}
                  className="text-2xl sm:text-3xl font-black text-[#d89e28] block"
                />
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mt-1 block">
                  Tier-1 Features Placed
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Financial Dailies &amp; Wires</span>
              </div>
              <div className="bg-slate-50 p-4 border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#d89e28] transition-all">
                <AnimatedCounter
                  value="24/7/365"
                  duration={1600}
                  className="text-xl sm:text-2xl font-black text-[#0d2137] block"
                />
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mt-1 block">
                  Crisis Countermeasures
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Active War Room SLA</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 cursor-pointer min-h-[44px] flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <span>REQUEST BESPOKE PROPOSAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#services"
                className="bg-[#0d2137] hover:bg-[#15304f] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 cursor-pointer min-h-[44px] flex items-center justify-center border border-slate-700/60"
              >
                VIEW 3-PILLAR MATRIX
              </a>
            </div>

          </div>

          {/* Right Column (5 cols): The Prinle Advantage & Operational Headquarters */}
          <div className="lg:col-span-5 space-y-5">
            {/* The Prinle Protective Framework Console */}
            <div className="bg-[#0a1829] text-white rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#d89e28]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Console Header & Live Telemetry Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#d89e28] font-bold">
                    PROTECTIVE FRAMEWORK &bull; REPUTATION ARMOR
                  </span>
                </div>
                <span className="text-[9.5px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                  ISO-27001 SEC-ALIGNED
                </span>
              </div>

              {/* Title & Context */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                  <span>Strategic Architecture Protocols</span>
                </h3>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                  Interactive operational modules deployed to defend balance sheets, control press releases, and elevate corporate stature. Select a protocol to inspect:
                </p>
              </div>

              {/* 4 Protocol Selector Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {PROTECTIVE_PROTOCOLS.map((p) => {
                  const IconComp = p.icon;
                  const isSelected = p.id === selectedProtocolId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProtocolId(p.id)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[68px] ${
                        isSelected
                          ? 'bg-[#15304f] border-[#d89e28] shadow-md shadow-[#d89e28]/15 ring-1 ring-[#d89e28]/40'
                          : 'bg-[#0d2137]/80 border-slate-800 hover:border-slate-700 hover:bg-[#132840]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 w-full mb-1">
                        <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider ${
                          isSelected ? 'text-[#d89e28]' : 'text-slate-400'
                        }`}>
                          {p.code}
                        </span>
                        <span className={`text-[8.5px] font-semibold px-1.5 py-0.2 rounded-md ${
                          isSelected ? 'bg-[#d89e28] text-[#0d2137] font-black' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {p.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <IconComp className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#d89e28]' : 'text-slate-400'}`} />
                        <span className="text-[11px] font-bold text-white leading-tight line-clamp-1">
                          {p.title.split('&')[0]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Deep-Dive Active Protocol Card */}
              <div className="bg-[#0d2137] border border-slate-700/80 rounded-xl p-4 sm:p-5 relative overflow-hidden shadow-inner">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#d89e28]/20 border border-[#d89e28]/40 text-[#d89e28] flex items-center justify-center shrink-0">
                      <CurrentIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#d89e28] font-bold block uppercase tracking-wider">
                        {currentProtocol.code} &bull; {currentProtocol.sla}
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                        {currentProtocol.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {currentProtocol.deepDive}
                </p>

                {/* Institutional Deliverables List */}
                <div className="space-y-1.5 mb-3.5 pt-2.5 border-t border-slate-700/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    Mandatory Retainer Execution Vector:
                  </span>
                  {currentProtocol.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11.5px] text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                {/* Metric & Direct CTA */}
                <div className="pt-3 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <AnimatedCounter
                        value={currentProtocol.metric}
                        duration={1800}
                        className="text-xl sm:text-2xl font-black text-[#d89e28] font-sans"
                      />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Verified Metric
                      </span>
                    </div>
                    <span className="text-[10.5px] text-slate-400 block mt-0.5">
                      {currentProtocol.metricLabel}
                    </span>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer min-h-[38px] flex items-center justify-center gap-1.5 border border-amber-300/40 shrink-0"
                  >
                    <span>ACTIVATE PROTOCOL BRIEF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom Security Assurance Tag */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-3 h-3 text-[#d89e28]" />
                  Protected by Mutual Non-Disclosure Agreement (MNDA)
                </span>
                <span className="font-mono text-emerald-400 font-semibold">
                  24/7 Monitored
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Full-Width Institutional Registration & Headquarters Pavilion */}
        <div className="mt-10 sm:mt-14 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Master Pavilion Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#0d2137] text-[#d89e28] flex items-center justify-center shrink-0 shadow-sm border border-slate-700/50">
                <Building2 className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10.5px] font-mono font-black uppercase tracking-widest text-[#d89e28] block">
                    INSTITUTIONAL REGISTRATION &bull; PHYSICAL HEADQUARTERS
                  </span>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span className="hidden sm:inline-block text-[10.5px] font-mono text-slate-500 font-bold">
                    REPUBLIC OF KENYA
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0d2137] tracking-tight">
                  Prinle PR Solutions Limited
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2.5 self-start md:self-auto">
              <span className="text-[10px] sm:text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200/90 px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE CORPORATE REGISTRY
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-lg font-semibold shadow-2xs">
                EAT (UTC+3)
              </span>
            </div>
          </div>

          {/* Full-Width 4-Quadrant Information Grid across the entire screen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Quadrant 1: Physical HQ */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#d89e28] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                  <MapPin className="w-4 h-4 text-[#d89e28] shrink-0" />
                  <span className="text-[10.5px] font-mono uppercase font-bold tracking-wider text-slate-500">01. Physical Suites</span>
                </div>
                <strong className="text-[#0d2137] font-black text-sm block mb-1">
                  Prinle Corporate Suites
                </strong>
                <p className="text-slate-700 font-medium text-xs leading-snug">
                  Nairobi, Kenya
                </p>
              </div>
              <span className="text-[11px] text-slate-500 pt-3 mt-3 border-t border-slate-100 block">
                East Africa Corporate Belt &bull; Executive Boardrooms &amp; 4K Media Studios
              </span>
            </div>

            {/* Quadrant 2: Statutory Postal Registry */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#d89e28] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                  <Building2 className="w-4 h-4 text-[#d89e28] shrink-0" />
                  <span className="text-[10.5px] font-mono uppercase font-bold tracking-wider text-slate-500">02. Statutory Registry</span>
                </div>
                <strong className="text-[#0d2137] font-black text-sm block mb-1">
                  P.O. Box 624- 00100
                </strong>
                <p className="text-slate-700 font-medium text-xs leading-snug">
                  Nairobi, Kenya
                </p>
              </div>
              <span className="text-[11px] text-slate-500 pt-3 mt-3 border-t border-slate-100 block">
                Companies Act Registry &bull; B2B Wire Settlement Protocol (SWIFT / RTGS)
              </span>
            </div>

            {/* Quadrant 3: Direct Executive Contact */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#d89e28] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                  <Phone className="w-4 h-4 text-[#d89e28] shrink-0" />
                  <span className="text-[10.5px] font-mono uppercase font-bold tracking-wider text-slate-500">03. Corporate Hotlines</span>
                </div>
                <a 
                  href="tel:0725128059"
                  className="text-[#0d2137] hover:text-[#d89e28] font-black text-sm block transition-colors"
                >
                  0725 128 059
                </a>
                <span className="text-[11px] text-slate-500 font-mono block mt-0.5">+254 725 128 059</span>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100">
                <a 
                  href="mailto:prinleprsolutions@gmail.com"
                  className="text-[#0d2137] hover:text-[#d89e28] font-bold text-xs block truncate transition-colors underline"
                >
                  prinleprsolutions@gmail.com
                </a>
                <span className="text-[10.5px] text-slate-400 block mt-0.5">TLS / PGP Encrypted Inquiries</span>
              </div>
            </div>

            {/* Quadrant 4: Operating Windows & 24/7 Crisis Console */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#d89e28] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                  <Clock className="w-4 h-4 text-[#d89e28] shrink-0" />
                  <span className="text-[10.5px] font-mono uppercase font-bold tracking-wider text-slate-500">04. Operating Windows</span>
                </div>
                <strong className="text-[#0d2137] font-bold text-xs block mb-0.5">
                  Mon &ndash; Fri &bull; 08:00 &ndash; 17:00 EAT
                </strong>
                <span className="text-[11px] text-slate-500 block">General Executive Operations</span>
              </div>
              
              <div className="pt-3 mt-3 border-t border-slate-100">
                <div className="p-2 bg-red-50 border border-red-200/80 rounded-lg flex items-center gap-2 text-red-900 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping shrink-0" />
                  <span>Crisis War Room: 24/7/365 Active</span>
                </div>
              </div>
            </div>

          </div>

          {/* Pavilion Bottom Fast-Track Gateway */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Operational Verification:</span>
              <span>Mutual Non-Disclosure Agreement (MNDA) Standard</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>B2B Commercial Invoicing Only</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20an%20executive%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20b858] text-[#0d2137] font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 min-h-[40px]"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#0d2137]" />
                <span>WhatsApp Partner Desk (0725 128 059)</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="bg-[#0d2137] hover:bg-[#15304f] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer min-h-[40px] flex items-center justify-center gap-1.5"
              >
                <span>Request Boardroom Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d89e28]" />
              </button>
            </div>
          </div>

        </div>

        {/* Sovereign Institutional Endorsement Pavilion */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-[#071322] via-[#0d2137] to-[#0a1829] text-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl relative overflow-hidden border border-[#d89e28]/35">
          {/* Subtle gold ambient lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d89e28]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Verification Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-700/80 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d89e28] animate-pulse"></span>
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#d89e28]">
                VERIFIED SOVEREIGN ENDORSEMENT &bull; PAN-AFRICAN CORRIDOR
              </span>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="flex items-center gap-1 text-[#d89e28]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d89e28] stroke-none" />
                ))}
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold">
                AUDITED OUTCOME
              </span>
            </div>
          </div>

          {/* Main Endorsement Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            
            {/* Quote Body (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#d89e28]/15 border border-[#d89e28]/40 text-[#d89e28] flex items-center justify-center shrink-0 shadow-inner mt-1">
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <blockquote className="text-slate-100 text-base sm:text-lg lg:text-xl font-medium italic leading-relaxed">
                    &ldquo;Prinle PR Solutions constructed our communications architecture prior to a cross-border regulatory review. Their narrative discipline and media relations delivered complete clarity and protected our enterprise stature across African capitals.&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Author Attribution Card */}
              <div className="pt-4 sm:pt-5 border-t border-slate-700/60 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#d89e28] to-[#f4cf75] text-[#0d2137] font-black text-xs flex items-center justify-center shrink-0 shadow-md ring-2 ring-white/20">
                  PSIF
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="text-white font-extrabold text-sm sm:text-base">
                      Regional Managing Director
                    </strong>
                    <span className="text-[10px] font-mono text-[#d89e28] bg-amber-400/10 border border-amber-400/20 px-2 py-0.2 rounded-md font-bold">
                      BOARD EXECUTIVE
                    </span>
                  </div>
                  <span className="text-slate-300 text-xs font-medium block mt-0.5">
                    Pan-African Sovereign Infrastructure Fund &bull; East &amp; Southern Africa Division
                  </span>
                </div>
              </div>
            </div>

            {/* Impact Metric & Quick Action Box (4 Cols) */}
            <div className="lg:col-span-4 bg-[#0a1829]/90 border border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Documented Engagement Milestones:
                </span>

                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs text-slate-300">Mandate Horizon:</span>
                    <strong className="text-xs text-white font-mono">Bilateral Treaty Review</strong>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs text-slate-300">Jurisdictions Engaged:</span>
                    <strong className="text-xs text-[#d89e28] font-mono">24 Sovereign Hubs</strong>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs text-slate-300">Unauthorized Press Leaks:</span>
                    <strong className="text-xs text-emerald-400 font-mono">0 (Zero Leaks Recorded)</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 border border-amber-300/40"
                >
                  <span>REQUEST SIMILAR SOVEREIGN BRIEF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
