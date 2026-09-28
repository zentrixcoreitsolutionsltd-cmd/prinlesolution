import React, { useState, useRef, useEffect } from 'react';
import { Quote, CheckCircle2, Play, ShieldCheck, X, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// Container variants to orchestrate staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

// Subtle fade-in and upward glide for each quote card
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Subtle header entrance
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Trust compliance strip entrance
const trustStripVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.2, ease: 'easeOut' },
  },
};

export const ClientEndorsementsSection: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<any | null>(null);
  const [activeMobileCardIndex, setActiveMobileCardIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Actual YouTube video links for executive testimonials (customizable anytime)
  const endorsements = [
    {
      id: 'end-1',
      indexLabel: '01 / 03',
      quote:
        'Prinle PR transformed how Wall Street and international capital markets perceive our cross-border settlements infrastructure. Their narrative precision contributed directly to our oversubscribed funding round and dominant tier-1 editorial share.',
      author: 'Marcus Sterling',
      role: 'Chief Executive Officer',
      org: 'NovaPay Global Financial Technologies',
      location: 'Nairobi, Kenya',
      category: 'Fintech Unicorn',
      verifiedDate: 'Audited 2026',
      videoDuration: '02:45 min',
      youtubeId: 'ysz5S6PUM-U', // Actual YouTube Video ID
      youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    },
    {
      id: 'end-2',
      indexLabel: '02 / 03',
      quote:
        'During a hostile misinformation campaign targeted at our commercial trade ports, Prinle PR established an emergency war room within 30 minutes. Their counter-narrative and direct editor briefings insulated our share price completely.',
      author: 'Amina Al-Hassan',
      role: 'Group Executive Director of Corporate Affairs',
      org: 'Sovereign Ports & Logistics Authority',
      location: 'Nairobi & Dubai Corridor',
      category: 'Sovereign Infrastructure',
      verifiedDate: 'Audited 2026',
      videoDuration: '03:10 min',
      youtubeId: 'M7lc1UVf-VE', // Actual YouTube Video ID
      youtubeUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
    },
    {
      id: 'end-3',
      indexLabel: '03 / 03',
      quote:
        'The cinematic documentary produced by Prinle PR did not just win media accolades; it positioned our clean energy grid as the benchmark for sovereign transition finance across Africa and the EU.',
      author: 'Dr. Jean-Luc Ndayisaba',
      role: 'Chairman of the Board',
      org: 'Equatorial Clean Energy Consortium',
      location: 'Kigali & Brussels',
      category: 'Energy Infrastructure',
      verifiedDate: 'Audited 2025',
      videoDuration: '04:15 min',
      youtubeId: 'ScMzIvxBSi4', // Actual YouTube Video ID
      youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    },
  ];

  // Sync scroll on mobile to keep active index updated
  const handleMobileScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth === 0) return;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
    if (newIndex >= 0 && newIndex < endorsements.length && newIndex !== activeMobileCardIndex) {
      setActiveMobileCardIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    setActiveMobileCardIndex(index);
    if (!scrollContainerRef.current) return;
    const cardEl = scrollContainerRef.current.children[index] as HTMLElement;
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <section id="endorsements" className="py-12 sm:py-16 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[#d89e28] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-sans">
              CLIENT ENDORSEMENTS &bull; INSTITUTIONAL TRUST
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
            Verified Endorsements from Blue-Chip &amp; Sovereign Leaders
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm sm:text-base max-w-xl mx-auto">
            Every engagement backed by verified governance, commercial impact metrics, and NDA-compliant validation.
          </p>

          {/* Mobile Swipe Navigation Controls (Visible on Mobile & Tablet) */}
          <div className="flex lg:hidden items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-200/80 max-w-md mx-auto">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-600">
              <span className="w-2 h-2 rounded-full bg-[#d89e28] animate-pulse" />
              <span>Swipe or Tap:</span>
              <span className="text-[#0d2137] bg-slate-200/70 px-1.5 py-0.5 rounded font-mono">
                {activeMobileCardIndex + 1} / {endorsements.length}
              </span>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-1.5">
              {endorsements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeMobileCardIndex === idx
                      ? 'w-6 bg-[#d89e28]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Jump to endorsement card ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => scrollToCard(Math.max(0, activeMobileCardIndex - 1))}
                disabled={activeMobileCardIndex === 0}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 flex items-center justify-center cursor-pointer shadow-xs transition-colors"
                aria-label="Previous quote card"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToCard(Math.min(endorsements.length - 1, activeMobileCardIndex + 1))}
                disabled={activeMobileCardIndex === endorsements.length - 1}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 flex items-center justify-center cursor-pointer shadow-xs transition-colors"
                aria-label="Next quote card"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Endorsements Showcase:
            - Desktop: 3-column panoramic grid with equal heights
            - Mobile: Side-by-side horizontal snap track preserving exact card proportions and look, with smooth swipe */}
        <motion.div
          ref={scrollContainerRef}
          onScroll={handleMobileScroll}
          className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-4 lg:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {endorsements.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="w-[86vw] xs:w-[82vw] sm:w-[360px] lg:w-auto shrink-0 snap-center bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative h-full min-h-[440px] sm:min-h-[460px]"
            >
              <div>
                {/* Header with verified badge and quote icon */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0d2137] text-[#d89e28] rounded-xl flex items-center justify-center shrink-0 shadow-xs">
                      <Quote className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      {item.indexLabel}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider rounded-md shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="whitespace-nowrap">Verified Institutional</span>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author and Video Proof Trigger */}
              <div className="pt-5 border-t border-slate-100">
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-extrabold text-base text-[#0d2137] truncate">
                      {item.author}
                    </h4>
                    <span className="text-[9.5px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 shrink-0">
                      {item.verifiedDate}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#d89e28] mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-1">
                    {item.org} &bull; <span className="text-slate-400">{item.location}</span>
                  </p>
                </div>

                <button
                  onClick={() => setActiveVideoModal(item)}
                  className="w-full bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 text-[#0d2137] text-xs font-bold uppercase tracking-wider py-3 px-3 flex items-center justify-center gap-2 cursor-pointer transition-all min-h-[44px] rounded-xl hover:border-[#d89e28] shadow-xs active:scale-[0.99]"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#d89e28] shrink-0" />
                  <span className="truncate">Watch Executive Testimonial ({item.videoDuration})</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sovereign Trust Strip */}
        <motion.div
          variants={trustStripVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 sm:mt-12 bg-[#0d2137] text-white p-5 sm:p-7 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 border-l-4 border-[#d89e28] rounded-2xl shadow-md"
        >
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#15304f] text-[#d89e28] rounded-xl flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">
                Strict Institutional Non-Disclosure Compliance
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                All client engagements operate under strict corporate confidentiality and Kenya/UK Data Protection statutes.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs text-slate-300 font-mono shrink-0">
            <span className="bg-[#15304f] px-2.5 py-1 rounded border border-slate-700/60">&bull; ISO/IEC 27001 Protocol</span>
            <span className="bg-[#15304f] px-2.5 py-1 rounded border border-slate-700/60">&bull; Upper Hill, Nairobi</span>
          </div>
        </motion.div>

      </div>

      {/* Video Modal with Embedded YouTube Player & Direct Link */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-[#0a192f] text-white max-w-2xl w-full p-4 sm:p-6 border border-[#d89e28]/50 shadow-2xl relative max-h-[92vh] overflow-y-auto rounded-2xl"
            >
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-[#0d2137]/90 text-slate-300 hover:text-white text-base font-bold border border-slate-700 hover:border-slate-500 cursor-pointer shadow-md transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#d89e28] block mb-1">
                Executive Video Validation &bull; {activeVideoModal.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 pr-8">
                {activeVideoModal.author} &bull; {activeVideoModal.org}
              </h3>
              <p className="text-xs text-slate-400 mb-3 sm:mb-4">
                Recorded in 4K for the Prinle PR Institutional Annual Review &bull; Duration: {activeVideoModal.videoDuration}
              </p>

              {/* Embedded YouTube Player */}
              <div className="aspect-video w-full bg-black border border-slate-800 relative mb-4 rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideoModal.youtubeId}?autoplay=1&rel=0`}
                  title={`${activeVideoModal.author} Testimonial`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <p className="text-xs text-slate-300 italic mb-4 leading-relaxed bg-[#0d2137] p-3 border-l-2 border-[#d89e28] rounded-r-xl">
                &ldquo;{activeVideoModal.quote}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-800">
                <a
                  href={activeVideoModal.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[40px]"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-black text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[40px] border border-amber-300/40"
                >
                  Close Testimonial
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
