import React, { useState } from 'react';
import { 
  Mic, 
  Video, 
  Newspaper, 
  Play, 
  Pause, 
  ArrowUpRight, 
  Volume2, 
  CheckCircle2, 
  X, 
  ExternalLink,
  Sparkles,
  Radio,
  Clock,
  Layers,
  FileText,
  Share2,
  ArrowRight,
  Headphones,
  Flame,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface BroadcastItem {
  id: string;
  code: string;
  title: string;
  channel: string;
  duration: string;
  date: string;
  views: string;
  summary: string;
  youtubeId: string;
  youtubeUrl: string;
  category: string;
}

interface PodcastItem {
  id: string;
  episode: string;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  date: string;
  summary: string;
  topics: string[];
}

interface WireReleaseItem {
  id: string;
  code: string;
  tag: string;
  title: string;
  date: string;
  wire: string;
  summary: string;
  jurisdiction: string;
  fullDispatch: string;
}

export const MultimediaNodeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'podcasts' | 'broadcasts' | 'releases'>('podcasts');
  const [playingPodcastId, setPlayingPodcastId] = useState<string | null>(null);
  const [selectedRelease, setSelectedRelease] = useState<WireReleaseItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<BroadcastItem | null>(null);

  const podcasts: PodcastItem[] = [
    {
      id: 'pod-1',
      episode: 'EPISODE 48',
      title: 'The Sovereign Narrative: How Nation Brands Attract Global FDI',
      guest: 'Amb. Dr. Evans Mwangi',
      guestRole: 'Trade & Investment Envoy &bull; East African Community',
      duration: '38:12 min',
      date: 'Sept 22, 2026',
      summary:
        'Unpacking the geopolitical messaging strategies required when pitching sovereign infrastructure bonds to institutional European capital markets.',
      topics: ['Sovereign Bonds', 'FDI Corridors', 'Bilateral Narratives'],
    },
    {
      id: 'pod-2',
      episode: 'EPISODE 47',
      title: '45-Minute War Room: Anatomy of a Corporate Hostile Takeover Defense',
      guest: 'Helena Vance',
      guestRole: 'Senior Crisis Counsel at Prinle PR Solutions',
      duration: '42:50 min',
      date: 'Sept 14, 2026',
      summary:
        'Step-by-step containment protocols during high-stakes corporate proxy battles, proxy advisory firm disclosures, and regulatory filings.',
      topics: ['Hostile Takeovers', 'Proxy Battles', 'Holding Statements'],
    },
    {
      id: 'pod-3',
      episode: 'EPISODE 46',
      title: 'De-commoditizing AI: Getting Tier-1 Coverage Without Buzzwords',
      guest: 'Tariq Al-Mansoor',
      guestRole: 'Tech Editor at Global Venture Dispatch',
      duration: '31:05 min',
      date: 'Sept 04, 2026',
      summary:
        'What top business and technology editors in Nairobi and regional financial desks actually look for when evaluating enterprises claiming category creation.',
      topics: ['Editorial Rolodex', 'Tech PR', 'Category Leadership'],
    },
  ];

  const broadcasts: BroadcastItem[] = [
    {
      id: 'yt-1',
      code: 'BC-01',
      title: 'Prinle PR Annual Media Sentiment Index: Key Findings Briefing',
      channel: 'Prinle Corporate Broadcasts',
      duration: '18:45',
      date: 'Sept 2026',
      views: '124,000 Views',
      summary: 'Executive presentation on journalist migration, AI content detection in newsrooms, and the collapse of blanket press releases.',
      youtubeId: 'ysz5S6PUM-U',
      youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
      category: 'Annual Research',
    },
    {
      id: 'yt-2',
      code: 'BC-02',
      title: 'Nairobi Corporate Corridor: The 2026 Capital Inflow Documentary',
      channel: 'Pan-African Business Channel',
      duration: '24:10',
      date: 'Aug 2026',
      views: '280,000 Views',
      summary: 'In-depth investigative feature tracing private equity deployments across renewable energy and fintech in East & Central Africa.',
      youtubeId: 'ScMzIvxBSi4',
      youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
      category: 'Documentary Feature',
    },
    {
      id: 'yt-3',
      code: 'BC-03',
      title: 'Crisis Simulation: Live Broadcast Media Defense Drill (Excerpt)',
      channel: 'Prinle Academy Archive',
      duration: '12:30',
      date: 'July 2026',
      views: '92,000 Views',
      summary: 'Behind-the-scenes recording of our sandbox simulation training C-suite executives to handle antagonistic national press conferences.',
      youtubeId: 'LXb3EKWsInQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
      category: 'War Room Training',
    },
  ];

  const releases: WireReleaseItem[] = [
    {
      id: 'pr-1',
      code: 'WIRE-2026-091',
      tag: 'FINANCIAL PR',
      title: 'Prinle PR Solutions Ltd Expands Strategic Desk to Upper Hill Financial District, Nairobi',
      date: 'Sept 23, 2026',
      wire: 'Syndicated via Bloomberg Terminal & Reuters Newsroom',
      jurisdiction: 'Nairobi & East Africa Corporate Belt',
      summary: 'Strengthening enterprise crisis advisory and sovereign communications capabilities across key African trade and investment corridors.',
      fullDispatch: 'Prinle PR Solutions Ltd, the Tier-1 strategic communications and crisis management firm, has officially announced the expansion of its specialized institutional desk to the Upper Hill financial district of Nairobi. The new headquarters facility encompasses dedicated 4K broadcast production studios, a secure war room suite with 256-bit sandbox protocols, and an expanded executive media relations bureau coordinating with newsrooms across Nairobi, Johannesburg, London, and New York.',
    },
    {
      id: 'pr-2',
      code: 'WIRE-2026-088',
      tag: 'RESEARCH WHITEPAPER',
      title: 'Whitepaper Release: Algorithmic Perception & Corporate Reputation in GenAI Search Engines',
      date: 'Sept 18, 2026',
      wire: 'Corporate Advisory Network & Pan-African Wires',
      jurisdiction: 'Global Corporate Governance',
      summary: 'Empirical analysis across 500 blue-chip entities demonstrating how AI answer engines source, weight, and summarize executive controversies.',
      fullDispatch: 'Conducted over an eight-month investigative window across 500 leading corporate entities, this landmark research whitepaper documents the mechanics by which modern generative search algorithms harvest, prioritize, and surface corporate litigation, regulatory scrutiny, and executive commentary. The paper introduces Prinle PR proprietary Factual Narrative Anchoring protocol to protect corporate balance sheets against automated hallucinatory defamation.',
    },
    {
      id: 'pr-3',
      code: 'WIRE-2026-074',
      tag: 'EXECUTIVE APPOINTMENT',
      title: 'Former National News Desk Editor Joins Prinle PR as Senior Vice President of Media Strategy',
      date: 'Sept 02, 2026',
      wire: 'Associated Press & Kenya Press Syndicate',
      jurisdiction: 'East Africa & International Media',
      summary: 'Bolstering direct journalist access and Tier-1 embargoed placement operations across the UK, East Africa, and North America.',
      fullDispatch: 'Bringing over 18 years of newsroom leadership across major financial dailies and commercial television broadcasting, the new appointment fortifies Prinle PR unrivaled speed-dial network with senior bureau chiefs, investigative editors, and national business anchors. The practice will focus on embargoed capital market announcements, sovereign investment roadshows, and bilateral trade delegation communications.',
    },
  ];

  return (
    <section id="multimedia" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -mt-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none -mb-20" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6 border-b border-slate-200 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d2137] text-white border border-[#15304f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-sm font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#d89e28]" />
              <span className="text-[#d89e28]">MULTIMEDIA NODE</span>
              <span className="text-slate-400">&bull;</span>
              <span>SYNDICATION FEED</span>
            </div>
            
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0d2137] tracking-tight leading-[1.15]">
              Corporate Podcasts, Broadcasts &amp; Wires
            </h2>
            
            <p className="mt-2 text-slate-600 text-xs sm:text-sm sm:text-base max-w-2xl leading-relaxed">
              Direct live syndication feed broadcasting sovereign intelligence, C-suite boardroom defense masterclasses, and verified wire dispatches across Pan-African and international newsrooms.
            </p>
          </div>
          
          {/* Node Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 border border-slate-200/80 rounded-2xl overflow-x-auto no-scrollbar shrink-0 self-start md:self-auto shadow-xs">
            <button
              onClick={() => setActiveTab('podcasts')}
              className={`flex items-center gap-2 px-4 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer whitespace-nowrap min-h-[40px] rounded-xl ${
                activeTab === 'podcasts'
                  ? 'bg-[#0d2137] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0d2137] hover:bg-slate-200/60'
              }`}
            >
              <Mic className="w-3.5 h-3.5 text-[#d89e28]" />
              <span>Corporate Podcasts</span>
            </button>

            <button
              onClick={() => setActiveTab('broadcasts')}
              className={`flex items-center gap-2 px-4 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer whitespace-nowrap min-h-[40px] rounded-xl ${
                activeTab === 'broadcasts'
                  ? 'bg-[#0d2137] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0d2137] hover:bg-slate-200/60'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-[#d89e28]" />
              <span>Broadcasts (4K)</span>
            </button>

            <button
              onClick={() => setActiveTab('releases')}
              className={`flex items-center gap-2 px-4 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer whitespace-nowrap min-h-[40px] rounded-xl ${
                activeTab === 'releases'
                  ? 'bg-[#0d2137] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0d2137] hover:bg-slate-200/60'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5 text-[#d89e28]" />
              <span>Press Wires &amp; Terminal</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Corporate Podcasts */}
        {activeTab === 'podcasts' && (
          <div className="space-y-4 sm:space-y-5">
            {podcasts.map((pod) => {
              const isPlaying = playingPodcastId === pod.id;
              return (
                <div
                  key={pod.id}
                  className="bg-slate-50 border border-slate-200/90 hover:border-[#d89e28] transition-all p-5 sm:p-7 rounded-2xl shadow-xs hover:shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                    {/* Audio Play Trigger */}
                    <button
                      onClick={() => setPlayingPodcastId(isPlaying ? null : pod.id)}
                      className={`w-13 h-13 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center font-bold transition-all rounded-2xl cursor-pointer shadow-md active:scale-95 border ${
                        isPlaying
                          ? 'bg-[#d89e28] text-[#0d2137] border-amber-300 ring-4 ring-[#d89e28]/25'
                          : 'bg-[#0d2137] text-white border-slate-700 hover:bg-[#15304f]'
                      }`}
                      aria-label={isPlaying ? 'Pause podcast audio' : 'Play podcast audio'}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      {/* Episode Meta Row */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mb-1.5">
                        <span className="font-mono font-black uppercase tracking-widest text-[#d89e28] text-[11px] bg-[#0d2137] px-2 py-0.5 rounded-md">
                          {pod.episode}
                        </span>
                        <span className="text-slate-400" aria-hidden="true">&bull;</span>
                        <span className="text-slate-500 font-medium text-[11px]">{pod.date}</span>
                        <span className="text-slate-400" aria-hidden="true">&bull;</span>
                        <span className="text-slate-600 font-mono text-[11px] font-bold">{pod.duration}</span>
                      </div>

                      <h3 className="text-base sm:text-xl font-black text-[#0d2137] leading-snug">
                        {pod.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-1.5 font-medium">
                        Featured Speaker: <strong className="text-[#0d2137] font-bold">{pod.guest}</strong> <span className="text-slate-500">({pod.guestRole})</span>
                      </p>

                      <p className="text-xs sm:text-[13px] text-slate-600 mt-2 max-w-3xl leading-relaxed">
                        {pod.summary}
                      </p>

                      {/* Topic Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-3">
                        {pod.topics.map((t, idx) => (
                          <span key={idx} className="text-[10px] font-mono font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                            #{t}
                          </span>
                        ))}
                      </div>

                      {/* Live Audio Streaming Feedback Console */}
                      {isPlaying && (
                        <div className="mt-3.5 p-3 bg-[#0d2137] text-white rounded-xl flex items-center justify-between gap-3 text-xs border border-slate-700 shadow-inner">
                          <div className="flex items-center gap-2.5">
                            {/* Animated Audio Equalizer Bars */}
                            <div className="flex items-end gap-1 h-4 shrink-0">
                              <span className="w-1 bg-[#d89e28] h-3 animate-bounce"></span>
                              <span className="w-1 bg-[#d89e28] h-4 animate-pulse"></span>
                              <span className="w-1 bg-[#d89e28] h-2 animate-bounce"></span>
                              <span className="w-1 bg-[#d89e28] h-3.5 animate-pulse"></span>
                            </div>
                            <span className="text-[11px] font-mono text-slate-200">
                              Now Streaming: <strong className="text-[#d89e28]">256kbps Studio Master Stream</strong>
                            </span>
                          </div>
                          <span className="text-[10.5px] font-mono text-emerald-400 font-bold hidden sm:inline">
                            AUDIO BUFFER READY
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2.5 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-0 border-slate-200">
                    <button
                      onClick={() => setPlayingPodcastId(isPlaying ? null : pod.id)}
                      className="w-full md:w-auto bg-[#0d2137] hover:bg-[#15304f] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 min-h-[42px] cursor-pointer"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current text-[#d89e28]" />
                          <span>Pause Stream</span>
                        </>
                      ) : (
                        <>
                          <Headphones className="w-3.5 h-3.5 text-[#d89e28]" />
                          <span>Listen Episode</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Broadcasts / Video */}
        {activeTab === 'broadcasts' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {broadcasts.map((bc) => (
              <div
                key={bc.id}
                onClick={() => setActiveVideo(bc)}
                className="group bg-slate-50 border border-slate-200/90 hover:border-[#d89e28] transition-all p-5 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-xl rounded-2xl active:scale-[0.99] hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  <div className="relative aspect-video bg-black flex items-center justify-center mb-4 text-white overflow-hidden rounded-xl shadow-inner">
                    {/* Real YouTube Video Thumbnail Image */}
                    <img
                      src={`https://img.youtube.com/vi/${bc.youtubeId}/hqdefault.jpg`}
                      alt={bc.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-100"
                      loading="lazy"
                    />

                    {/* Classic YouTube Red Play Badge */}
                    <div className="relative z-10 w-14 h-10 sm:w-16 sm:h-11 bg-red-600 group-hover:bg-red-700 text-white rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-200">
                      <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                    </div>

                    {/* Duration Badge */}
                    <span className="absolute bottom-2.5 right-2.5 z-10 bg-black/90 text-white font-mono text-[10.5px] font-bold px-2 py-0.5 rounded-md shadow-md border border-white/10">
                      {bc.duration}
                    </span>

                    {/* Category Pill Top Left */}
                    <span className="absolute top-2.5 left-2.5 z-10 bg-black/85 backdrop-blur-xs text-white text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-white/10">
                      {bc.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-mono">
                    <span className="font-bold text-[#0d2137] uppercase">{bc.channel}</span>
                    <span className="text-[#d89e28] font-bold">{bc.views}</span>
                  </div>

                  <h3 className="font-black text-[#0d2137] text-base leading-snug mb-2 group-hover:text-[#d89e28] transition-colors">
                    {bc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {bc.summary}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0d2137]">
                  <span className="group-hover:text-[#d89e28] transition-colors flex items-center gap-1.5 font-bold">
                    <Play className="w-3.5 h-3.5 fill-current text-[#d89e28]" />
                    <span>Watch 4K Broadcast</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d89e28] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Press Wires & Terminal Dispatches */}
        {activeTab === 'releases' && (
          <div className="space-y-4">
            {releases.map((rel) => (
              <div
                key={rel.id}
                className="bg-slate-50 border border-slate-200/90 hover:border-[#d89e28] transition-all p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-xs hover:shadow-md"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mb-2 font-mono">
                    <span className="font-bold uppercase tracking-widest text-[#0d2137] bg-amber-100 text-[10px] px-2 py-0.5 rounded-md border border-amber-300/60">
                      {rel.tag}
                    </span>
                    <span className="text-slate-400" aria-hidden="true">&bull;</span>
                    <span className="text-slate-600 font-semibold text-[11px]">{rel.code}</span>
                    <span className="text-slate-400" aria-hidden="true">&bull;</span>
                    <span className="text-slate-500 font-medium text-[11px]">{rel.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0d2137] leading-snug">
                    {rel.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 max-w-3xl leading-relaxed">
                    {rel.summary}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-500">
                    <Radio className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                    <span>Distribution: <strong>{rel.wire}</strong></span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-0 border-slate-200">
                  <button
                    onClick={() => setSelectedRelease(rel)}
                    className="w-full md:w-auto bg-[#0d2137] hover:bg-[#15304f] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer min-h-[42px] flex items-center justify-center gap-1.5"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d89e28]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Institutional Terminal Syndication Banner */}
        <div className="mt-12 sm:mt-16 bg-[#0a1829] text-white p-6 sm:p-8 lg:p-10 rounded-2xl relative overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d89e28]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#d89e28]/20 border border-[#d89e28]/40 px-3 py-1 rounded-md text-[#d89e28] text-[10.5px] font-black uppercase tracking-widest mb-3">
                <Radio className="w-3.5 h-3.5" />
                <span>TERMINAL SYNDICATION &bull; EMBARGO GATEWAY</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Pan-African Media Newsroom &amp; Press Syndicate Access
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                Accredited financial journalists, institutional editors, and corporate counsel can request access to embargoed dispatches, high-resolution B-roll footage, and verified interview bookings with Prinle PR leadership.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28]" />
                  Embargoed Wire Dispatches
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28]" />
                  Direct Studio B-Roll Master Access
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28]" />
                  Editorial Desk Clearance
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer min-h-[46px] flex items-center justify-center gap-2 border border-amber-300/40 text-center"
              >
                <span>REQUEST EMBARGOED DISPATCH ACCESS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Broadcast Video Modal with Embedded YouTube Player & Direct Links */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#0a192f] border border-[#d89e28]/50 max-w-3xl w-full text-white shadow-2xl relative max-h-[92vh] overflow-y-auto rounded-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-[#0d2137]/90 text-slate-300 hover:text-white text-base font-bold border border-slate-700 hover:border-slate-500 cursor-pointer shadow-md transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded YouTube 16:9 Player */}
            <div className="relative aspect-video w-full bg-black rounded-t-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Details & Actual YouTube Link Action */}
            <div className="p-5 sm:p-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="bg-[#d89e28] text-[#0d2137] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {activeVideo.channel}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">&bull; {activeVideo.duration} min</span>
                  <span className="text-slate-400 font-mono text-[11px]">&bull; {activeVideo.date}</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] font-bold">{activeVideo.views}</span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                  {activeVideo.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeVideo.summary}
                </p>
              </div>

              {/* Action Buttons: Direct YouTube Link + Dismiss */}
              <div className="pt-3.5 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400 font-mono truncate">
                  Source ID: <span className="text-slate-300 font-bold">{activeVideo.code} &bull; YouTube 4K Stream</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={activeVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[40px]"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveVideo(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer min-h-[40px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Release Reader Modal */}
      {selectedRelease && (
        <div className="fixed inset-0 z-50 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto rounded-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#d89e28] uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {selectedRelease.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">&bull; {selectedRelease.date}</span>
              </div>
              <button
                onClick={() => setSelectedRelease(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 font-bold cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-[#0d2137] mb-3 leading-snug">
              {selectedRelease.title}
            </h3>

            <div className="text-xs font-mono text-slate-600 mb-4 bg-slate-50 p-3 border border-slate-200 rounded-xl space-y-1">
              <div><strong className="text-slate-700">Wire Vector:</strong> {selectedRelease.wire}</div>
              <div><strong className="text-slate-700">Dispatch Reference:</strong> {selectedRelease.code}</div>
              <div><strong className="text-slate-700">Jurisdiction:</strong> {selectedRelease.jurisdiction}</div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              {selectedRelease.fullDispatch}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-mono text-slate-400">
                Official Press Record &bull; Prinle PR Bureau
              </span>
              <button
                onClick={() => setSelectedRelease(null)}
                className="bg-[#0d2137] hover:bg-[#15304f] text-white font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all min-h-[42px] cursor-pointer"
              >
                Close Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
