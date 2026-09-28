import React, { useState } from 'react';
import { 
  Play, 
  Film, 
  ArrowUpRight, 
  Award, 
  Filter, 
  X, 
  ExternalLink,
  Sparkles,
  Search,
  CheckCircle2,
  Building2,
  Calendar,
  Clock,
  ShieldCheck,
  Video,
  Layers,
  ArrowRight
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter.tsx';

export interface PortfolioItem {
  id: string;
  code: string;
  title: string;
  category: 'Cinematic Documentaries' | 'Corporate Milestones' | 'Sovereign Advisory' | 'Crisis Armor';
  client: string;
  year: string;
  aspect: string;
  impact: string;
  runtime?: string;
  youtubeId: string;
  youtubeUrl: string;
  summary: string;
  deliverables: string[];
  metricsTag: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'doc-1',
    code: 'ARC-01',
    title: 'Echoes of Industry: Sovereign Energy Transition',
    category: 'Cinematic Documentaries',
    client: 'East Africa Green Grid Consortium',
    year: '2026',
    aspect: 'aspect-video',
    impact: '1.8M High-Net-Worth Views',
    runtime: '14:20 min 4K',
    youtubeId: 'ScMzIvxBSi4',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    summary:
      'A multi-part cinematic documentary chronicling the financing and engineering of cross-border geothermal pipelines, broadcast across global business forums.',
    deliverables: ['4K Cinema Package', 'Davos Ministerial Screening', 'Financial Times Op-Ed Syndicate'],
    metricsTag: '1.8M Views &bull; Energy Sovereign Corridor',
  },
  {
    id: 'case-2',
    code: 'ARC-02',
    title: 'Project Monarch: $450M Series C & Unicorn Valuation Drop',
    category: 'Corporate Milestones',
    client: 'Kestrel Distributed Cloud',
    year: '2026',
    aspect: 'aspect-video',
    impact: '+320% Tier-1 Global Reach',
    runtime: '08:45 min 4K',
    youtubeId: '1w43-sXyRvg',
    youtubeUrl: 'https://www.youtube.com/watch?v=1w43-sXyRvg',
    summary:
      'Orchestrated simultaneous embargoed announcements across national and regional media in Nairobi, Kenya, locking 48 Tier-1 press exclusives within 4 hours.',
    deliverables: ['Bloomberg Exclusive', 'WSJ Financial Desk Briefing', 'Broadcast Media Tour'],
    metricsTag: '+320% Reach &bull; 48 Exclusives',
  },
  {
    id: 'sovereign-3',
    code: 'ARC-03',
    title: 'AfCFTA Trade Corridor Bilateral Communications',
    category: 'Sovereign Advisory',
    client: 'Pan-African Regional Chamber of Commerce',
    year: '2025',
    aspect: 'aspect-video',
    impact: '24 Sovereign Signatories Engaged',
    runtime: '16:30 min 4K',
    youtubeId: 'ysz5S6PUM-U',
    youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    summary:
      'Strategic narrative and executive framing positioning trade harmonisation protocols to sovereign heads of state and multilateral lenders.',
    deliverables: ['Ministerial Briefing Dossier', 'Head of State Keynotes', 'International Diplomatic PR'],
    metricsTag: '24 Sovereign Signatories',
  },
  {
    id: 'crisis-4',
    code: 'ARC-04',
    title: 'Shield Alpha: Rapid Algorithmic Defamation Neutralization',
    category: 'Crisis Armor',
    client: 'Equatorial Commercial Bank Ltd',
    year: '2026',
    aspect: 'aspect-video',
    impact: '< 38 Min Counter-Narrative',
    runtime: '11:15 min 4K',
    youtubeId: '7X8II6J-6mU',
    youtubeUrl: 'https://www.youtube.com/watch?v=7X8II6J-6mU',
    summary:
      'Neutralized coordinated bot syndicate dissemination targeting capital reserve liquidity rumors; restored market sentiment index to 99.1%.',
    deliverables: ['Central Bank Joint Statement', 'Algorithmic De-amplification', 'Live Broadcast Press Room'],
    metricsTag: '< 38 Min SLA &bull; 99.1% Sentiment Index',
  },
  {
    id: 'doc-5',
    code: 'ARC-05',
    title: 'The Silicon Savannah: Institutional Tech Pedigree',
    category: 'Cinematic Documentaries',
    client: 'Nairobi Silicon Corridor Initiative',
    year: '2025',
    aspect: 'aspect-video',
    impact: 'Nominated Best Corporate Doc',
    runtime: '22:15 min 4K',
    youtubeId: 'LXb3EKWsInQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    summary:
      'Feature documentary showcasing Kenyan engineering talent capturing enterprise fintech contracts and global recognition directly from Nairobi.',
    deliverables: ['Documentary Master Asset', 'YouTube Syndicate Stream', 'Investor Roadshow Feature'],
    metricsTag: 'Award Winner &bull; Silicon Savannah',
  },
  {
    id: 'sovereign-6',
    code: 'ARC-06',
    title: 'Nairobi International Financial Centre Inaugural Roadshow',
    category: 'Sovereign Advisory',
    client: 'Financial District Development Board',
    year: '2026',
    aspect: 'aspect-video',
    impact: '$1.2B Inbound Capital Pipelines',
    runtime: '18:50 min 4K',
    youtubeId: '9No-FiEInLA',
    youtubeUrl: 'https://www.youtube.com/watch?v=9No-FiEInLA',
    summary:
      'Executive storytelling orchestrating bilateral investor symposia in London, Dubai, and Nairobi to attract global financial firms to the Upper Hill corridor.',
    deliverables: ['Investor Dossier', 'Bloomberg Spotlight Feature', 'VIP Press Salon'],
    metricsTag: '$1.2B Inbound Capital Pipeline',
  },
];

export const VisualPortfolioSection: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const categories = [
    'All',
    'Cinematic Documentaries',
    'Corporate Milestones',
    'Sovereign Advisory',
    'Crisis Armor',
  ];

  const handleSelectItem = (item: PortfolioItem) => {
    setIsPlayingVideo(false);
    setSelectedItem(item);
  };

  const handleCloseItem = () => {
    setIsPlayingVideo(false);
    setSelectedItem(null);
  };

  const filtered = PORTFOLIO_ITEMS.filter((item) => {
    const matchesCategory = activeFilter === 'All' || item.category === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery = 
      item.title.toLowerCase().includes(q) ||
      item.client.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.impact.toLowerCase().includes(q) ||
      item.deliverables.some(d => d.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-24 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Ambient background light gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d89e28]/10 rounded-full blur-3xl pointer-events-none -mt-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mb-20" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6 border-b border-slate-800 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d2137] border border-[#15304f] px-3.5 py-1 rounded-full text-[#d89e28] text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-sm font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VISUAL PORTFOLIO &bull; CASE SHOWCASE</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.15]">
              High-Density Corporate Case Archives &amp; Documentaries
            </h2>
            <p className="mt-2 text-slate-300 text-xs sm:text-sm sm:text-base max-w-2xl leading-relaxed">
              Institutional vault of 4K cinematic documentaries, crisis defense retrospectives, and cross-border sovereign advisory programs executed across African and international financial hubs.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <div className="bg-[#0d2137] border border-slate-800 p-3 sm:p-4 rounded-xl text-center shadow-xs">
              <span className="block text-xl sm:text-2xl font-black text-[#d89e28] font-sans">100%</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">4K Cinema Quality</span>
            </div>
            <div className="bg-[#0d2137] border border-slate-800 p-3 sm:p-4 rounded-xl text-center shadow-xs">
              <span className="block text-xl sm:text-2xl font-black text-white font-sans">6/6</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Verified Broadcasts</span>
            </div>
          </div>
        </div>

        {/* Filter Pills, Search Bar, and Live Case Counter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 sm:mb-10 bg-[#0d2137] border border-slate-800 p-3.5 sm:p-4 rounded-2xl shadow-sm">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-1.5 font-bold uppercase tracking-wider shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#d89e28]" />
              <span className="hidden sm:inline">Pillar Archive:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer rounded-xl border whitespace-nowrap shrink-0 min-h-[38px] flex items-center shadow-xs active:scale-95 ${
                  activeFilter === cat
                    ? 'bg-[#d89e28] text-[#0d2137] border-[#d89e28] shadow-md shadow-[#d89e28]/20 font-black'
                    : 'bg-[#0a192f] text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white hover:bg-[#132c48]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Case Search */}
          <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
            <div className="relative w-full lg:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search archive or client..."
                className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] text-slate-800 placeholder-slate-400 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="text-xs text-slate-400 font-mono whitespace-nowrap hidden sm:block">
              <strong className="text-[#d89e28]">{filtered.length}</strong> Archives
            </div>
          </div>

        </div>

        {/* Masonry / Responsive Grid */}
        {filtered.length === 0 ? (
          <div className="p-12 text-center bg-[#0d2137] rounded-2xl border border-slate-800 text-slate-400">
            <Film className="w-10 h-10 text-[#d89e28] mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-bold text-white mb-1">No matching archives found</h4>
            <p className="text-xs text-slate-400 mb-4">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
              className="text-xs font-bold text-[#d89e28] uppercase tracking-wider underline cursor-pointer hover:text-amber-300"
            >
              Reset Archive Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectItem(item)}
                className="group relative bg-[#0d2137] border border-slate-800 hover:border-[#d89e28] active:scale-[0.99] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl rounded-2xl hover:-translate-y-1"
              >
                {/* Media Preview Canvas (Authentic YouTube Presentation) */}
                <div className="w-full aspect-video bg-black relative flex items-center justify-center overflow-hidden">
                  
                  {/* Real YouTube Video Thumbnail Image (Zero hover scale/distortion, rock-solid stable) */}
                  <img
                    src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
                    loading="lazy"
                  />

                  {/* Classic YouTube Red Play Badge */}
                  <div className="relative z-10 w-14 h-10 sm:w-16 sm:h-11 bg-red-600 group-hover:bg-red-700 text-white rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-200">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                  </div>

                  {/* Top Corner Category Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="bg-black/85 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Code Tag Top Right */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="bg-black/85 text-[#d89e28] font-mono text-[9.5px] font-black px-2 py-0.5 rounded-md border border-white/10">
                      {item.code}
                    </span>
                  </div>

                  {/* YouTube Duration Tag (Bottom Right) */}
                  {item.runtime && (
                    <div className="absolute bottom-2.5 right-2.5 z-10">
                      <span className="bg-black/90 text-white font-mono text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md shadow-md">
                        {item.runtime}
                      </span>
                    </div>
                  )}

                  {/* Impact Metric (Bottom-Left) */}
                  <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 text-xs">
                    <span className="text-[#d89e28] font-bold flex items-center gap-1 text-[10px] sm:text-[11px] bg-black/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 truncate max-w-[190px]">
                      <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span>{item.impact}</span>
                    </span>
                  </div>
                </div>

                {/* Text Card Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#0d2137]">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1.5">
                      <span className="truncate text-slate-300 font-semibold">{item.client}</span>
                      <span className="text-[#d89e28] font-bold">{item.year}</span>
                    </div>

                    <h3 className="font-extrabold text-white text-base sm:text-lg group-hover:text-[#d89e28] transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-[13px] line-clamp-2 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Deliverables snippet */}
                    <div className="space-y-1 py-2.5 border-t border-slate-800 text-[11px] text-slate-400">
                      {item.deliverables.slice(0, 2).map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-4 pt-3.5 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-[#d89e28] font-bold inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Documentary</span>
                    </span>
                    <span className="text-slate-500 font-mono text-[10.5px]">4K YouTube Stream</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Master Archive Vault Guarantee Pavilion */}
        <div className="mt-12 sm:mt-16 bg-[#071322] border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d89e28]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#d89e28]/20 border border-[#d89e28]/40 px-3 py-1 rounded-md text-[#d89e28] text-[10.5px] font-black uppercase tracking-widest mb-3">
                <Video className="w-3.5 h-3.5" />
                <span>UNCOMPRESSED BROADCAST ARCHIVES</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mb-2">
                4K Cinema Masters &amp; Global Media Distribution Vault
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                All Prinle PR visual productions are captured on dual-native cinema cameras with uncompressed audio mastering. Master assets are archived with frame-accurate timecode, digital watermarking, and worldwide broadcast rights clearances for international distribution.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d89e28]" />
                  Apple ProRes 422 HQ / DCI 4K
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d89e28]" />
                  Davinci Color Graded
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d89e28]" />
                  Worldwide Broadcast Clearances
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer min-h-[46px] flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <span>COMMISSION 4K PRODUCTION BRIEF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Case Dossier Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#0a192f] border border-[#d89e28]/50 max-w-2xl w-full text-white shadow-2xl relative max-h-[92vh] overflow-y-auto rounded-2xl">
            <button
              onClick={handleCloseItem}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-[#0d2137]/90 text-slate-300 hover:text-white text-base font-bold border border-slate-700 hover:border-slate-500 cursor-pointer shadow-md transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Area: Either YouTube Player or Clean YouTube Thumbnail with Play Trigger */}
            <div className="relative aspect-video w-full bg-black overflow-hidden rounded-t-2xl">
              {isPlayingVideo && selectedItem.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedItem.youtubeId}?autoplay=1&rel=0`}
                  title={selectedItem.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* Clean YouTube Thumbnail Image */}
                  <img
                    src={`https://img.youtube.com/vi/${selectedItem.youtubeId}/hqdefault.jpg`}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* YouTube Play Button Trigger */}
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group bg-black/25 hover:bg-black/35 transition-colors"
                    aria-label="Play video on YouTube"
                  >
                    <div className="w-16 h-11 sm:w-20 sm:h-14 bg-red-600 group-hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                      <Play className="w-8 h-8 fill-current text-white ml-0.5" />
                    </div>
                    <span className="mt-3 text-xs font-bold text-white bg-black/90 px-3 py-1 rounded-md shadow-lg border border-white/10">
                      Play Video &bull; {selectedItem.runtime || '4K Stream'}
                    </span>
                  </button>
                </>
              )}
            </div>

            <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#d89e28] text-[#0d2137] text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">
                    {selectedItem.category} &bull; {selectedItem.year}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                    {selectedItem.code}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedItem.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pb-4 border-b border-slate-800 text-xs">
                <div className="p-3 bg-[#0d2137] rounded-xl border border-slate-800">
                  <span className="text-slate-400 block font-bold uppercase tracking-wider text-[10px] font-mono">Enterprise Client:</span>
                  <span className="font-semibold text-white text-sm mt-0.5 block">{selectedItem.client}</span>
                </div>
                <div className="p-3 bg-[#0d2137] rounded-xl border border-slate-800">
                  <span className="text-slate-400 block font-bold uppercase tracking-wider text-[10px] font-mono">Verified Outcome:</span>
                  <span className="font-semibold text-[#d89e28] text-sm mt-0.5 block">{selectedItem.impact}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#d89e28] uppercase tracking-wider mb-2 font-mono">
                  Executive Briefing &amp; Narrative Scope
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0d2137] p-3.5 rounded-xl border border-slate-800">
                  {selectedItem.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  Key Institutional Deliverables &amp; Master Assets:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {selectedItem.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-[#0d2137] rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                {selectedItem.youtubeUrl && (
                  <a
                    href={selectedItem.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer min-h-[44px]"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => {
                    handleCloseItem();
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 cursor-pointer text-center min-h-[44px] flex items-center justify-center border border-amber-300/40"
                >
                  Request Similar Campaign Briefing
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
