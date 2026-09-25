import React, { useState } from 'react';
import { Play, Film, ArrowUpRight, Award, Filter, X } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Cinematic Documentaries' | 'Corporate Milestones' | 'Sovereign Advisory' | 'Crisis Armor';
  client: string;
  year: string;
  aspect: string;
  impact: string;
  runtime?: string;
  thumbnailGradient: string;
  imageUrl: string;
  fallbackUrl: string;
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
    aspect: 'h-52 sm:h-64 lg:h-80',
    impact: '1.8M High-Net-Worth Views',
    runtime: '14:20 min 4K',
    thumbnailGradient: 'from-[#08172b] via-[#102a45] to-[#1e4168]',
    imageUrl: '/images/portfolio-1.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
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
    aspect: 'h-48 sm:h-56 lg:h-64',
    impact: '+320% Tier-1 Global Reach',
    thumbnailGradient: 'from-[#0d2137] via-[#1a385c] to-[#0a192f]',
    imageUrl: '/images/portfolio-2.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
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
    aspect: 'h-52 sm:h-64 lg:h-80',
    impact: '24 Sovereign Signatories Engaged',
    runtime: 'Keynote Cinema 4K',
    thumbnailGradient: 'from-[#0a192f] via-[#132c48] to-[#1b3d63]',
    imageUrl: '/images/portfolio-3.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
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
    aspect: 'h-48 sm:h-56 lg:h-72',
    impact: '< 38 Min Counter-Narrative',
    thumbnailGradient: 'from-[#071526] via-[#0d2137] to-[#183659]',
    imageUrl: '/images/portfolio-4.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
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
    aspect: 'h-52 sm:h-64 lg:h-72',
    impact: 'Nominated Best Corporate Doc',
    runtime: '22:15 min 4K',
    thumbnailGradient: 'from-[#102a45] via-[#0d2137] to-[#08172b]',
    imageUrl: '/images/portfolio-5.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
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
    aspect: 'h-48 sm:h-56 lg:h-64',
    impact: '$1.2B Inbound Capital Pipelines',
    thumbnailGradient: 'from-[#08172b] via-[#15304f] to-[#0a192f]',
    imageUrl: '/images/portfolio-6.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
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

  const categories = [
    'All',
    'Cinematic Documentaries',
    'Corporate Milestones',
    'Sovereign Advisory',
    'Crisis Armor',
  ];

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
                className={`px-3.5 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-none border whitespace-nowrap shrink-0 min-h-[38px] flex items-center ${
                  activeFilter === cat
                    ? 'bg-[#d89e28] text-[#0d2137] border-[#d89e28]'
                    : 'bg-[#0d2137] text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white'
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
              onClick={() => setSelectedItem(item)}
              className="group relative bg-[#0d2137] border border-slate-800 hover:border-[#d89e28] active:scale-[0.99] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Media Preview Canvas */}
              <div className={`w-full ${item.aspect} bg-gradient-to-br ${item.thumbnailGradient} relative flex items-center justify-center p-4 sm:p-6 overflow-hidden`}>
                
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== item.fallbackUrl) {
                      e.currentTarget.src = item.fallbackUrl;
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137] via-[#0d2137]/60 to-black/40 pointer-events-none" />

                {/* Center Badge / Play icon */}
                {item.runtime ? (
                  <div className="relative z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#d89e28] text-[#0d2137] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  </div>
                ) : (
                  <div className="relative z-10 w-11 h-11 sm:w-14 sm:h-14 bg-[#15304f]/90 border border-[#d89e28]/70 text-[#d89e28] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform backdrop-blur-xs">
                    <Film className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                )}

                {/* Top Corner Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
                  <span className="bg-[#0d2137]/90 backdrop-blur-xs text-[#d89e28] text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-1 border border-[#d89e28]/40">
                    {item.category}
                  </span>
                  {item.runtime && (
                    <span className="bg-black/80 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 font-mono">
                      {item.runtime}
                    </span>
                  )}
                </div>

                {/* Impact Metric overlay on bottom */}
                <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 z-10 flex items-center justify-between text-xs">
                  <span className="text-[#d89e28] font-bold flex items-center gap-1 text-[10px] sm:text-[11px] bg-[#0d2137]/90 px-2 py-0.5 border border-[#d89e28]/30 truncate max-w-[200px]">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>{item.impact}</span>
                  </span>
                  <span className="text-slate-300 font-mono text-[10px] sm:text-[11px] shrink-0">
                    {item.year}
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

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[#d89e28] font-bold inline-flex items-center gap-1">
                    Examine Case Dossier <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-mono text-[11px]">Ref: {item.id}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Dossier Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#0a192f] border border-[#d89e28]/40 max-w-2xl w-full text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-[#0d2137] text-slate-400 hover:text-white text-base font-bold border border-slate-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                onError={(e) => {
                  if (e.currentTarget.src !== selectedItem.fallbackUrl) {
                    e.currentTarget.src = selectedItem.fallbackUrl;
                  }
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-black/50" />
              
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
                <span className="bg-[#d89e28] text-[#0d2137] text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 mb-1.5 sm:mb-2 inline-block">
                  {selectedItem.category} &bull; {selectedItem.year}
                </span>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedItem.title}
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
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

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider px-6 py-3.5 cursor-pointer shadow-md text-center min-h-[44px] flex items-center justify-center"
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
