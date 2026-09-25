import React, { useState } from 'react';
import { Play, Film, ArrowUpRight, Award, Filter, X, ExternalLink } from 'lucide-react';

export interface PortfolioItem {
  id: string;
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
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'doc-1',
    title: 'Echoes of Industry: Sovereign Energy Transition',
    category: 'Cinematic Documentaries',
    client: 'East Africa Green Grid Consortium',
    year: '2026',
    aspect: 'aspect-video',
    impact: '1.8M High-Net-Worth Views',
    runtime: '14:20 min 4K',
    youtubeId: 'ScMzIvxBSi4', // Actual YouTube Video ID
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    summary:
      'A multi-part cinematic documentary chronicling the financing and engineering of cross-border geothermal pipelines, broadcast across global business forums.',
    deliverables: ['4K Cinema Package', 'Davos Ministerial Screening', 'Financial Times Op-Ed Syndicate'],
  },
  {
    id: 'case-2',
    title: 'Project Monarch: $450M Series C & Unicorn Valuation Drop',
    category: 'Corporate Milestones',
    client: 'Kestrel Distributed Cloud',
    year: '2026',
    aspect: 'aspect-video',
    impact: '+320% Tier-1 Global Reach',
    runtime: '08:45 min 4K',
    youtubeId: '1w43-sXyRvg', // Actual YouTube Video ID
    youtubeUrl: 'https://www.youtube.com/watch?v=1w43-sXyRvg',
    summary:
      'Orchestrated simultaneous embargoed announcements across national and regional media in Nairobi, Kenya, locking 48 Tier-1 press exclusives within 4 hours.',
    deliverables: ['Bloomberg Exclusive', 'WSJ Financial Desk Briefing', 'Broadcast Media Tour'],
  },
  {
    id: 'sovereign-3',
    title: 'AfCFTA Trade Corridor Bilateral Communications',
    category: 'Sovereign Advisory',
    client: 'Pan-African Regional Chamber of Commerce',
    year: '2025',
    aspect: 'aspect-video',
    impact: '24 Sovereign Signatories Engaged',
    runtime: '16:30 min 4K',
    youtubeId: 'ysz5S6PUM-U', // Actual YouTube Video ID
    youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    summary:
      'Strategic narrative and executive framing positioning trade harmonisation protocols to sovereign heads of state and multilateral lenders.',
    deliverables: ['Ministerial Briefing Dossier', 'Head of State Keynotes', 'International Diplomatic PR'],
  },
  {
    id: 'crisis-4',
    title: 'Shield Alpha: Rapid Algorithmic Defamation Neutralization',
    category: 'Crisis Armor',
    client: 'Equatorial Commercial Bank Ltd',
    year: '2026',
    aspect: 'aspect-video',
    impact: '< 38 Min Counter-Narrative',
    runtime: '11:15 min 4K',
    youtubeId: '7X8II6J-6mU', // Actual YouTube Video ID
    youtubeUrl: 'https://www.youtube.com/watch?v=7X8II6J-6mU',
    summary:
      'Neutralized coordinated bot syndicate dissemination targeting capital reserve liquidity rumors; restored market sentiment index to 99.1%.',
    deliverables: ['Central Bank Joint Statement', 'Algorithmic De-amplification', 'Live Broadcast Press Room'],
  },
  {
    id: 'doc-5',
    title: 'The Silicon Savannah: Institutional Tech Pedigree',
    category: 'Cinematic Documentaries',
    client: 'Nairobi Silicon Corridor Initiative',
    year: '2025',
    aspect: 'aspect-video',
    impact: 'Nominated Best Corporate Doc',
    runtime: '22:15 min 4K',
    youtubeId: 'LXb3EKWsInQ', // Actual YouTube Video ID
    youtubeUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    summary:
      'Feature documentary showcasing Kenyan engineering talent capturing enterprise fintech contracts and global recognition directly from Nairobi.',
    deliverables: ['Documentary Master Asset', 'YouTube Syndicate Stream', 'Investor Roadshow Feature'],
  },
  {
    id: 'sovereign-6',
    title: 'Nairobi International Financial Centre Inaugural Roadshow',
    category: 'Sovereign Advisory',
    client: 'Financial District Development Board',
    year: '2026',
    aspect: 'aspect-video',
    impact: '$1.2B Inbound Capital Pipelines',
    runtime: '18:50 min 4K',
    youtubeId: '9No-FiEInLA', // Actual YouTube Video ID
    youtubeUrl: 'https://www.youtube.com/watch?v=9No-FiEInLA',
    summary:
      'Executive storytelling orchestrating bilateral investor symposia in London, Dubai, and Nairobi to attract global financial firms to the Upper Hill corridor.',
    deliverables: ['Investor Dossier', 'Bloomberg Spotlight Feature', 'VIP Press Salon'],
  },
];

export const VisualPortfolioSection: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
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

  const filtered =
    activeFilter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-24 bg-[#0a192f] text-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 border-b border-slate-800 pb-6 sm:pb-8">
          <div>
            <span className="text-[#d89e28] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2 font-sans">
              VISUAL PORTFOLIO &bull; CASE SHOWCASE
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              High-Density Corporate Case Archives &amp; Documentaries
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Archive of documented broadcast releases, investor roadshows, and sovereign narrative programs.
          </p>
        </div>

        {/* Filter Pills & Item Counter - Horizontally scrollable on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-1 font-bold uppercase tracking-wider shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#d89e28]" />
              <span>Category:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer rounded-xl border whitespace-nowrap shrink-0 min-h-[38px] flex items-center shadow-xs active:scale-95 ${
                  activeFilter === cat
                    ? 'bg-[#d89e28] text-[#0d2137] border-[#d89e28] shadow-md shadow-[#d89e28]/20 font-black'
                    : 'bg-[#0d2137] text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white hover:bg-[#132c48]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 font-mono shrink-0">
            Showing <strong className="text-white">{filtered.length}</strong> Archives
          </div>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectItem(item)}
              className="group relative bg-[#0d2137] border border-slate-800 hover:border-[#d89e28] active:scale-[0.99] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden shadow-lg rounded-2xl"
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
                <div className="relative z-10 w-13 h-9 sm:w-15 sm:h-10 bg-red-600 group-hover:bg-red-700 text-white rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-200">
                  <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                </div>

                {/* Top Corner Category Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-black/80 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs border border-white/10">
                    {item.category}
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
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 bg-[#0d2137]">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Client: {item.client}
                  </span>
                  <h3 className="font-extrabold text-white text-base sm:text-lg group-hover:text-[#d89e28] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[#d89e28] font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Watch Documentary</span> <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">Ref: {item.id}</span>
                </div>
              </div>

            </div>
          ))}
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

            <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div>
                <span className="bg-[#d89e28] text-[#0d2137] text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 inline-block">
                  {selectedItem.category} &bull; {selectedItem.year}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedItem.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pb-4 border-b border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block font-bold uppercase tracking-wider">Enterprise Client:</span>
                  <span className="font-semibold text-white">{selectedItem.client}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold uppercase tracking-wider">Verified Outcome:</span>
                  <span className="font-semibold text-[#d89e28]">{selectedItem.impact}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#d89e28] uppercase tracking-wider mb-1.5 sm:mb-2">
                  Executive Briefing &amp; Narrative Scope
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedItem.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Institutional Deliverables
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {selectedItem.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d89e28] shrink-0"></span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
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
