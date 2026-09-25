import React, { useState } from 'react';
import { Mic, Video, Newspaper, Play, Pause, ArrowUpRight, Volume2, CheckCircle2, X, ExternalLink } from 'lucide-react';

interface BroadcastItem {
  id: string;
  title: string;
  channel: string;
  duration: string;
  date: string;
  views: string;
  summary: string;
  youtubeId: string;
  youtubeUrl: string;
}

export const MultimediaNodeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'podcasts' | 'broadcasts' | 'releases'>('podcasts');
  const [playingPodcastId, setPlayingPodcastId] = useState<string | null>(null);
  const [selectedRelease, setSelectedRelease] = useState<any | null>(null);
  const [activeVideo, setActiveVideo] = useState<BroadcastItem | null>(null);

  const podcasts = [
    {
      id: 'pod-1',
      episode: 'EPISODE 48',
      title: 'The Sovereign Narrative: How Nation Brands Attract Global FDI',
      guest: 'Amb. Dr. Evans Mwangi, Trade & Investment Envoy',
      duration: '38:12 min',
      date: 'Sept 22, 2026',
      summary:
        'Unpacking the geopolitical messaging strategies required when pitching sovereign infrastructure bonds to institutional European capital markets.',
    },
    {
      id: 'pod-2',
      episode: 'EPISODE 47',
      title: '45-Minute War Room: Anatomy of a Corporate Hostile Takeover Defense',
      guest: 'Helena Vance, Senior Crisis Counsel at Prinle PR',
      duration: '42:50 min',
      date: 'Sept 14, 2026',
      summary:
        'Step-by-step containment protocols during high-stakes corporate proxy battles, proxy advisory firm disclosures, and regulatory disclosures.',
    },
    {
      id: 'pod-3',
      episode: 'EPISODE 46',
      title: 'De-commoditizing AI: Getting Tier-1 Coverage Without Buzzwords',
      guest: 'Tariq Al-Mansoor, Tech Editor at Global Venture Dispatch',
      duration: '31:05 min',
      date: 'Sept 04, 2026',
      summary:
        'What top business and technology editors in Nairobi and regional financial desks actually look for when evaluating enterprises claiming category creation.',
    },
  ];

  // Actual YouTube video links (can be updated with your company YouTube video URLs anytime)
  const broadcasts: BroadcastItem[] = [
    {
      id: 'yt-1',
      title: 'Prinle PR Annual Media Sentiment Index: Key Findings Briefing',
      channel: 'Prinle Corporate Broadcasts',
      duration: '18:45',
      date: 'Sept 2026',
      views: '124,000 Views',
      summary: 'Executive presentation on journalist migration, AI content detection in newsrooms, and the collapse of blanket press releases.',
      youtubeId: 'ysz5S6PUM-U', // Actual YouTube Video ID
      youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    },
    {
      id: 'yt-2',
      title: 'Nairobi Corporate Corridor: The 2026 Capital Inflow Documentary',
      channel: 'Pan-African Business Channel',
      duration: '24:10',
      date: 'Aug 2026',
      views: '280,000 Views',
      summary: 'In-depth investigative feature tracing private equity deployments across renewable energy and fintech in East & Central Africa.',
      youtubeId: 'ScMzIvxBSi4', // Actual YouTube Video ID
      youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    },
    {
      id: 'yt-3',
      title: 'Crisis Simulation: Live Broadcast Media Defense Drill (Excerpt)',
      channel: 'Prinle Academy Archive',
      duration: '12:30',
      date: 'July 2026',
      views: '92,000 Views',
      summary: 'Behind-the-scenes recording of our sandbox simulation training C-suite executives to handle antagonistic national press conferences.',
      youtubeId: 'LXb3EKWsInQ', // Actual YouTube Video ID
      youtubeUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    },
  ];

  const releases = [
    {
      id: 'pr-1',
      tag: 'FINANCIAL PR',
      title: 'Prinle PR Solutions Ltd Expands Strategic Desk to Upper Hill Financial District, Nairobi',
      date: 'Sept 23, 2026',
      wire: 'Syndicated via Bloomberg Terminal & Reuters',
      summary: 'Strengthening enterprise crisis advisory and sovereign communications capabilities across key African trade and investment corridors.',
    },
    {
      id: 'pr-2',
      tag: 'RESEARCH REPORT',
      title: 'Whitepaper Release: Algorithmic Perception & Corporate Reputation in GenAI Search Engines',
      date: 'Sept 18, 2026',
      wire: 'Corporate Advisory Network',
      summary: 'Empirical analysis across 500 blue-chip entities demonstrating how AI answer engines source, weight, and summarize executive controversies.',
    },
    {
      id: 'pr-3',
      tag: 'APPOINTMENT',
      title: 'Former National News Desk Editor Joins Prinle PR as Senior Vice President of Media Strategy',
      date: 'Sept 02, 2026',
      wire: 'Associated Press Syndicate',
      summary: 'Bolstering direct journalist access and Tier-1 embargoed placement operations across the UK, East Africa, and North America.',
    },
  ];

  return (
    <section id="multimedia" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <span className="text-[#d89e28] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2 font-sans">
              MULTIMEDIA NODE &bull; SYNDICATION FEED
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
              Corporate Podcasts, Broadcasts &amp; Wires
            </h2>
          </div>
          
          {/* Node Tab Switcher - Mobile scrollable */}
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
              <span>Podcasts</span>
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
              <span>Broadcasts</span>
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
              <span>Press Wires</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Podcasts */}
        {activeTab === 'podcasts' && (
          <div className="space-y-4">
            {podcasts.map((pod) => {
              const isPlaying = playingPodcastId === pod.id;
              return (
                <div
                  key={pod.id}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 hover:border-[#d89e28] transition-all shadow-xs hover:shadow-md"
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    {/* Play / Pause Button - Touch target 48x48 */}
                    <button
                      onClick={() => setPlayingPodcastId(isPlaying ? null : pod.id)}
                      className={`w-12 h-12 shrink-0 flex items-center justify-center font-bold transition-all rounded-2xl cursor-pointer shadow-sm active:scale-95 ${
                        isPlaying
                          ? 'bg-[#d89e28] text-[#0d2137] shadow-md shadow-[#d89e28]/25'
                          : 'bg-[#0d2137] text-white hover:bg-[#15304f] hover:shadow-md'
                      }`}
                      aria-label={isPlaying ? 'Pause podcast' : 'Play podcast'}
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mb-1">
                        <span className="font-bold uppercase tracking-widest text-[#d89e28] text-[11px]">
                          {pod.episode}
                        </span>
                        <span className="text-slate-400" aria-hidden="true">&bull;</span>
                        <span className="text-slate-500 font-medium text-[11px]">{pod.date}</span>
                        <span className="text-slate-400" aria-hidden="true">&bull;</span>
                        <span className="text-slate-500 font-mono text-[11px]">{pod.duration}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0d2137] leading-snug">
                        {pod.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 font-semibold">
                        Guest: <span className="text-slate-700">{pod.guest}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                        {pod.summary}
                      </p>
                      {isPlaying && (
                        <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#d89e28] bg-[#0d2137] px-3 py-1.5 rounded-lg inline-flex">
                          <Volume2 className="w-3.5 h-3.5 animate-pulse shrink-0" />
                          <span className="text-[11px]">Streaming audio feed: 256kbps Studio Master (Simulated)</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-0 border-slate-200">
                    <button
                      onClick={() => setPlayingPodcastId(isPlaying ? null : pod.id)}
                      className="text-xs font-bold uppercase tracking-wider text-[#0d2137] hover:text-[#d89e28] inline-flex items-center gap-1.5 cursor-pointer min-h-[38px] px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <span>{isPlaying ? 'Pause' : 'Listen Now'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#d89e28]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Broadcasts / Video */}
        {activeTab === 'broadcasts' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {broadcasts.map((bc) => (
              <div
                key={bc.id}
                onClick={() => setActiveVideo(bc)}
                className="group bg-slate-50 border border-slate-200 hover:border-[#d89e28] transition-all p-4 sm:p-5 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-lg rounded-2xl active:scale-[0.99]"
              >
                <div>
                  <div className="relative aspect-video bg-black flex items-center justify-center mb-3 sm:mb-4 text-white overflow-hidden rounded-xl">
                    {/* Real YouTube Video Thumbnail (Zero hover scale/distortion, rock-solid stable) */}
                    <img
                      src={`https://img.youtube.com/vi/${bc.youtubeId}/hqdefault.jpg`}
                      alt={bc.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-100"
                      loading="lazy"
                    />

                    {/* Classic YouTube Red Play Badge */}
                    <div className="relative z-10 w-13 h-9 sm:w-15 sm:h-10 bg-red-600 group-hover:bg-red-700 text-white rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-200">
                      <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                    </div>

                    {/* YouTube Duration Tag (Bottom Right) */}
                    <span className="absolute bottom-2 right-2 z-10 bg-black/90 text-white font-mono text-[11px] font-bold px-2 py-0.5 rounded-md shadow-md">
                      {bc.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                    <span className="font-bold text-[#d89e28] uppercase">{bc.channel}</span>
                    <span>{bc.views}</span>
                  </div>

                  <h3 className="font-bold text-[#0d2137] text-base leading-snug mb-2 group-hover:text-[#d89e28] transition-colors">
                    {bc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {bc.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0d2137]">
                  <span className="group-hover:text-[#d89e28] transition-colors flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 fill-current text-[#d89e28]" />
                    <span>Watch Broadcast</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d89e28] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Press Wires */}
        {activeTab === 'releases' && (
          <div className="space-y-4">
            {releases.map((rel) => (
              <div
                key={rel.id}
                className="bg-slate-50 border border-slate-200 hover:border-[#d89e28] transition-all p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs hover:shadow-md"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mb-1">
                    <span className="font-bold uppercase tracking-widest text-[#d89e28] text-[11px]">
                      {rel.tag}
                    </span>
                    <span className="text-slate-400" aria-hidden="true">&bull;</span>
                    <span className="text-slate-500 font-medium text-[11px]">{rel.date}</span>
                    <span className="text-slate-400" aria-hidden="true">&bull;</span>
                    <span className="text-slate-500 font-semibold text-[11px]">{rel.wire}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d2137] leading-snug">
                    {rel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                    {rel.summary}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedRelease(rel)}
                  className="w-full sm:w-auto bg-[#0d2137] hover:bg-[#15304f] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer min-h-[44px] flex items-center justify-center text-center"
                >
                  Read Release
                </button>
              </div>
            ))}
          </div>
        )}

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
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="bg-[#d89e28] text-[#0d2137] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {activeVideo.channel}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">&bull; {activeVideo.duration}</span>
                  <span className="text-slate-400 font-mono text-[11px]">&bull; {activeVideo.date}</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">{activeVideo.views}</span>
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
              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <div className="text-[11px] text-slate-400 font-mono truncate">
                  Source: <span className="text-slate-300 underline">{activeVideo.youtubeUrl}</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Direct YouTube Link */}
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
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto rounded-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-[#d89e28] uppercase tracking-wider">
                {selectedRelease.tag} &bull; {selectedRelease.date}
              </span>
              <button
                onClick={() => setSelectedRelease(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0d2137] mb-3 leading-snug">
              {selectedRelease.title}
            </h3>
            <div className="text-xs font-mono text-slate-500 mb-4 bg-slate-50 p-2.5 border border-slate-200 rounded-lg">
              Wire Vector: {selectedRelease.wire}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              {selectedRelease.summary} Full syndication distribution archived across Nairobi financial bureaus and global newsroom terminals.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedRelease(null)}
                className="w-full sm:w-auto bg-[#0d2137] hover:bg-[#15304f] text-white font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all min-h-[44px]"
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
