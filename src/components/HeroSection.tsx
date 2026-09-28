import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight, ShieldCheck, Camera, Image as ImageIcon } from 'lucide-react';
import { HeroImageModal, HeroDisplayMode } from './HeroImageModal.tsx';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

interface SlideItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  tagline: string;
  statNumber: string;
  statLabel: string;
  node1: string;
  node2: string;
  node3: string;
  node4: string;
  node5: string;
  accentLabel: string;
  badge: string;
}

export const DEFAULT_HERO_SLIDE_IMAGES: Record<string, string> = {
  'slide-1': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  'slide-2': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
  'slide-3': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
  'slide-4': 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1600&q=80',
};

const SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    titleLine1: 'Protective',
    titleLine2: 'Architectures.',
    subtitle:
      'Constructing protective communication architectures for blue-chip companies, public boards, and multinational entities at the intersection of East African corporate corridors and global market networks.',
    tagline: 'STRATEGIC COMMUNICATIONS & BESPOKE RETAINERS',
    statNumber: '100%',
    statLabel: 'BESPOKE RETAINER ARCHITECTURE',
    node1: 'STRATEGIC PR',
    node2: 'REPUTATION SHIELD',
    node3: 'CINEMATIC NODE',
    node4: 'OMNICHANNEL',
    node5: 'REQUEST PROPOSAL',
    accentLabel: 'PREMIER CORPORATE ADVISORY',
    badge: 'CROSS-BORDER COMMUNICATION ARCHITECTURE',
  },
  {
    id: 'slide-2',
    titleLine1: 'Absolute Clarity.',
    titleLine2: 'Cinematic Authority.',
    subtitle:
      'Guiding global institutions through intricate regulatory, media, and reputational ecosystems with absolute clarity and cinematic authority.',
    tagline: 'PILLAR A • STRATEGIC PR & CONSULTING',
    statNumber: '92%',
    statLabel: 'TIER-1 MEDIA HIT RATE',
    node1: 'MEDIA RELATIONS',
    node2: 'STAKEHOLDER PROTOCOLS',
    node3: 'EDITORIAL DESKS',
    node4: 'STRATEGIC CITATIONS',
    node5: 'REQUEST PROPOSAL',
    accentLabel: 'PAN-AFRICAN SYNDICATE',
    badge: 'INSTITUTIONAL CONSULTING MATRIX',
  },
  {
    id: 'slide-3',
    titleLine1: 'Defending Stature.',
    titleLine2: 'Shifting Perceptions.',
    subtitle:
      'Engineering high-integrity PR frameworks that defend corporate reputations, engage elite stakeholders, and shift regional market perceptions with precision.',
    tagline: 'CRISIS COUNTERMEASURES & SHIELDING',
    statNumber: '24/7',
    statLabel: 'CRISIS CONSOLE ACTIVE 365',
    node1: 'CRISIS WAR ROOM',
    node2: 'HOLDING MATRICES',
    node3: 'REPUTATION SHIELD',
    node4: 'REGULATORY ALIGNMENT',
    node5: 'REQUEST PROPOSAL',
    accentLabel: 'RAPID DEFENSE PROTOCOL',
    badge: 'INSTITUTIONAL REPUTATION SHIELD',
  },
  {
    id: 'slide-4',
    titleLine1: 'Cinematic Systems.',
    titleLine2: 'Omnichannel Reach.',
    subtitle:
      'Industrial photography, broadcast-ready videography, corporate documentaries, and multi-channel publication loops engineered for lasting market authority.',
    tagline: 'PILLAR B & C • CINEMATIC MEDIA & BRANDING',
    statNumber: '4K',
    statLabel: 'BROADCAST MASTER SUITE',
    node1: 'CINEMA PRODUCTION',
    node2: '4K DOCUMENTARIES',
    node3: 'OMNICHANNEL SYNDICATION',
    node4: 'BRAND GOVERNANCE',
    node5: 'REQUEST PROPOSAL',
    accentLabel: 'BROADCAST & POSTPRODUCTION',
    badge: 'MULTIMEDIA NARRATIVE SYSTEMS',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = SLIDES.length;

  const handleNextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleSelectSlide = (index: number) => {
    setActiveSlide(index);
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNextSlide();
      if (e.key === 'ArrowLeft') handlePrevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  // Touch swipe gesture handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 40) {
      if (distance > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = SLIDES[activeSlide];
  const [animatedStat, setAnimatedStat] = useState<string>(currentSlide.statNumber);

  // Hero Section Image Manager state with LocalStorage persistence
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [customImages, setCustomImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('prinle_hero_custom_images');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading custom hero images:', e);
    }
    return DEFAULT_HERO_SLIDE_IMAGES;
  });

  const [displayMode, setDisplayMode] = useState<HeroDisplayMode>(() => {
    try {
      const saved = localStorage.getItem('prinle_hero_display_mode');
      if (saved === 'card-backdrop' || saved === 'full-banner' || saved === 'split-visual') {
        return saved;
      }
    } catch {}
    return 'card-backdrop';
  });

  const [imageOpacity, setImageOpacity] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('prinle_hero_image_opacity');
      if (saved) return Number(saved);
    } catch {}
    return 65;
  });

  const handleSaveImage = (slideId: string, imageUrl: string) => {
    setCustomImages((prev) => {
      const next = { ...prev, [slideId]: imageUrl };
      try {
        localStorage.setItem('prinle_hero_custom_images', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const handleApplyToAllSlides = (imageUrl: string) => {
    setCustomImages((prev) => {
      const next = {
        ...prev,
        'slide-1': imageUrl,
        'slide-2': imageUrl,
        'slide-3': imageUrl,
        'slide-4': imageUrl,
      };
      try {
        localStorage.setItem('prinle_hero_custom_images', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const handleResetImages = () => {
    setCustomImages(DEFAULT_HERO_SLIDE_IMAGES);
    try {
      localStorage.removeItem('prinle_hero_custom_images');
    } catch (e) {}
  };

  const handleChangeDisplayMode = (mode: HeroDisplayMode) => {
    setDisplayMode(mode);
    try {
      localStorage.setItem('prinle_hero_display_mode', mode);
    } catch (e) {}
  };

  const handleChangeOpacity = (opacity: number) => {
    setImageOpacity(opacity);
    try {
      localStorage.setItem('prinle_hero_image_opacity', String(opacity));
    } catch (e) {}
  };

  const activeSlideImage = customImages[currentSlide.id] || DEFAULT_HERO_SLIDE_IMAGES[currentSlide.id] || '';

  // Smooth number counting animation on slide load or change
  useEffect(() => {
    const raw = currentSlide.statNumber;
    const match = raw.match(/^([^\d.-]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setAnimatedStat(raw);
      return;
    }

    const prefix = match[1];
    const target = parseFloat(match[2].replace(/,/g, ''));
    const suffix = match[3];

    if (isNaN(target)) {
      setAnimatedStat(raw);
      return;
    }

    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 1200;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.round(target * eased);
      setAnimatedStat(`${prefix}${currentVal}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setAnimatedStat(raw);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeSlide, currentSlide.statNumber]);

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative w-full bg-[#b8c9dc] border-b border-slate-300 select-none overflow-hidden
                 h-[calc(100dvh-82px)] min-h-[460px] xs:min-h-[500px] sm:min-h-[530px]
                 lg:h-[calc(100dvh-94px)] lg:min-h-[550px] lg:max-h-[860px]
                 flex flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full Banner Background Image (Active when displayMode === 'full-banner') */}
      {displayMode === 'full-banner' && activeSlideImage && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={activeSlideImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-center filter transition-all duration-700"
            style={{ opacity: (imageOpacity / 100) * 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#b8c9dc]/95 via-[#b8c9dc]/85 to-[#b8c9dc]/90" />
        </div>
      )}

      {/* LEFT CORNER ARROW (Desktop / Tablet) */}
      <button
        onClick={handlePrevSlide}
        className="hidden lg:flex absolute left-3 xl:left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-14 bg-[#0d2137]/90 hover:bg-[#15304f] active:scale-95 text-white hover:text-[#d89e28] items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer rounded-2xl border border-amber-400/40 backdrop-blur-xs"
        aria-label="Previous Slide"
        title="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* RIGHT CORNER ARROW (Desktop / Tablet) */}
      <button
        onClick={handleNextSlide}
        className="hidden lg:flex absolute right-3 xl:right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-14 bg-[#0d2137]/90 hover:bg-[#15304f] active:scale-95 text-white hover:text-[#d89e28] items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer rounded-2xl border border-amber-400/40 backdrop-blur-xs"
        aria-label="Next Slide"
        title="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* INNER CONTENT WRAPPER - Flex Column that utilizes 100% of height cleanly */}
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12 xl:px-16 h-full flex flex-col justify-between py-1.5 xs:py-2 sm:py-3 lg:py-4">

        {/* 1. TOP CORRIDOR RIBBON (Ultra-compact, single row) */}
        <div className="shrink-0 flex items-center justify-between pb-1 sm:pb-1.5 border-b border-[#0d2137]/20 text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold text-[#0d2137]/85 uppercase tracking-wider">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d89e28] shrink-0" />
            <span className="truncate">PRINLE PR SOLUTIONS LTD &bull; STRATEGIC COMMUNICATIONS</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0 font-extrabold text-[#0d2137]">
            <MapPin className="w-3 h-3 text-[#d89e28] shrink-0" />
            <span className="hidden xs:inline">NAIROBI, KENYA</span>
            <span className="hidden sm:inline">&bull; UPPER HILL &bull; WESTLANDS</span>
          </div>
        </div>

        {/* 2. SUB-HEADER BAR: SLIDE BADGE & SLIDE CONTROLS */}
        <div className="shrink-0 flex items-center justify-between py-1">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-mono font-black text-[#0d2137] bg-white/85 px-1.5 sm:px-2 py-0.5 border border-[#0d2137]/20 shrink-0">
              0{activeSlide + 1} / 0{totalSlides}
            </span>
            <span className="text-[9px] xs:text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#0d2137]/85 truncate">
              {currentSlide.badge}
            </span>
          </div>

          {/* Quick jump slide buttons & mobile arrow controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Mobile Prev / Next Buttons */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={handlePrevSlide}
                className="w-5 h-5 xs:w-6 xs:h-6 bg-[#0d2137] text-white flex items-center justify-center active:bg-[#d89e28] active:text-[#0d2137] cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-5 h-5 xs:w-6 xs:h-6 bg-[#0d2137] text-white flex items-center justify-center active:bg-[#d89e28] active:text-[#0d2137] cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Slide Indicator Bars */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {SLIDES.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => handleSelectSlide(index)}
                  className={`transition-all cursor-pointer ${
                    activeSlide === index
                      ? 'w-4 xs:w-5 sm:w-6 h-1.5 sm:h-2 bg-[#d89e28]'
                      : 'w-1.5 xs:w-2 h-1.5 sm:h-2 bg-[#8ca3bd] hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Add / Manage Hero Images Button */}
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-white/95 hover:bg-white text-[#0d2137] hover:text-[#b47a16] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-[#0d2137]/20 text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold shadow-2xs transition-all cursor-pointer group shrink-0"
              title="Add or Change Images on Hero Section"
            >
              <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#d89e28] group-hover:scale-110 transition-transform" />
              <span className="hidden xs:inline">Add Images</span>
              <span className="xs:hidden">Photo</span>
            </button>
          </div>
        </div>

        {/* 3. MAIN ADAPTIVE BODY (Grid on Desktop/Tablet, Stack on Small Mobile) */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-2 xs:gap-3 sm:gap-5 lg:gap-8 items-center my-auto">
          
          {/* LEFT COLUMN: Headings, Subtitle & Primary Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left py-0.5">
            
            {/* Pillar Badge */}
            <div className="inline-flex items-center gap-1.5 text-[9px] xs:text-[10px] sm:text-[10.5px] font-black tracking-wider uppercase text-[#0d2137] mb-0.5 sm:mb-1.5">
              <ShieldCheck className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#d89e28] shrink-0" />
              <span className="truncate">EAST AFRICA CORPORATE &bull; GLOBAL NETWORKS</span>
            </div>

            {/* Slide Title */}
            <div key={currentSlide.id} className="transition-opacity duration-200">
              <h1 className="text-lg xs:text-xl sm:text-2xl lg:text-[2.5rem] xl:text-[2.85rem] font-black text-[#0d2137] tracking-tight leading-[1.12] sm:leading-[1.08] font-sans">
                <span className="block">{currentSlide.titleLine1}</span>
                <span className="block text-[#0d2137]">{currentSlide.titleLine2}</span>
              </h1>

              {/* Subtitle - responsive line clamp ensures it fits comfortably without vertical expansion */}
              <p className="mt-1 sm:mt-2 text-[#0d2137]/90 font-medium text-[10.5px] xs:text-[11.5px] sm:text-sm lg:text-[0.95rem] leading-relaxed max-w-lg line-clamp-2 xs:line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                {currentSlide.subtitle}
              </p>

              {/* Tagline */}
              <div className="mt-1.5 sm:mt-2.5 pt-1 sm:pt-1.5 border-t border-[#0d2137]/15">
                <span className="text-[10px] xs:text-[11px] sm:text-xs lg:text-[0.9rem] font-black text-[#0d2137] tracking-tight uppercase block truncate">
                  {currentSlide.tagline}
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-2 sm:mt-3.5 flex flex-row items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] active:scale-[0.98] text-[#0d2137] font-black text-[9.5px] xs:text-[10.5px] sm:text-xs uppercase tracking-wider px-4 xs:px-5 sm:px-7 py-2.5 xs:py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 cursor-pointer text-center justify-center flex items-center shrink-0 min-h-[38px] xs:min-h-[42px] border border-amber-300/40"
              >
                SCHEDULE CONSULTATION
              </button>

              <button
                onClick={onExploreServices}
                className="bg-[#0d2137] hover:bg-[#15304f] active:scale-[0.98] text-white font-extrabold text-[9.5px] xs:text-[10.5px] sm:text-xs uppercase tracking-wider px-3.5 xs:px-4.5 sm:px-6 py-2.5 xs:py-3 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 cursor-pointer text-center justify-center flex items-center shrink-0 min-h-[38px] xs:min-h-[42px] border border-slate-700/60"
              >
                EXPLORE SERVICES
              </button>
            </div>

            {/* Trust Marker (conditionally hidden on extra small vertical heights to prevent overflow) */}
            <div className="hidden xs:flex mt-1.5 sm:mt-2 text-[9px] xs:text-[10px] sm:text-[11px] text-[#0d2137]/80 font-bold items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#d89e28] rounded-full shrink-0" />
              <span className="truncate">Nairobi Corporate Headquarters &bull; Pan-African Mandates</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Soaring Straight-Line Arrow Graphic + Steps Process */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center w-full h-full min-h-0">
            <div className="relative w-full h-full max-h-[145px] xs:max-h-[185px] sm:max-h-[250px] lg:max-h-[420px] xl:max-h-[460px] aspect-[16/10] overflow-hidden flex flex-col justify-between shadow-xs border border-[#0d2137]/15 bg-[#0a1829]">
              
              {/* Dynamic Corporate Visual Image Layer (Graphic Backdrop) */}
              {activeSlideImage && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={activeSlideImage}
                    alt={currentSlide.tagline}
                    className="w-full h-full object-cover object-center transition-all duration-700"
                    style={{ opacity: imageOpacity / 100 }}
                  />
                  {/* Subtle gradient overlay guaranteeing maximum arrow & stat contrast */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1829]/95 via-[#0d2137]/55 to-[#0a1829]/30" />
                </div>
              )}

              {/* Quick Image Action Button on Card */}
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 z-20 bg-[#0d2137]/85 hover:bg-[#0d2137] text-white hover:text-[#d89e28] text-[8px] xs:text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:py-1 rounded-lg border border-white/20 backdrop-blur-xs flex items-center gap-1 transition-all cursor-pointer shadow-xs group"
                title="Change Image for this Slide"
              >
                <Camera className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d89e28] group-hover:scale-110 transition-transform" />
                <span className="hidden xs:inline">Add / Change Image</span>
                <span className="xs:hidden">Photo</span>
              </button>

              {/* SVG Canvas with Navy Triangular Wedge & Soaring Golden Arrow */}
              <svg
                viewBox="0 0 800 520"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full pointer-events-none select-none relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Navy Wedge Gradient */}
                  <linearGradient id="navyWedgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0a1a2c" />
                    <stop offset="70%" stopColor="#0d2137" />
                    <stop offset="90%" stopColor="#15304f" />
                    <stop offset="100%" stopColor="#1e4168" stopOpacity="0.2" />
                  </linearGradient>

                  {/* Arrow flat gradient matching warm ochre-gold */}
                  <linearGradient id="goldArrowFill" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cfa030" />
                    <stop offset="50%" stopColor="#d89e28" />
                    <stop offset="100%" stopColor="#ddaa36" />
                  </linearGradient>
                </defs>

                {/* 1. Deep Navy Triangular Wedge with stat copy */}
                <path
                  d="M 0 0 L 520 0 L 0 520 Z"
                  fill="url(#navyWedgeGradient)"
                />

                {/* Stat Text directly placed on Navy Wedge with counting animation */}
                <text x="32" y="85" fill="#ffffff" fontSize="52" fontWeight="900" fontFamily="sans-serif">
                  {animatedStat}
                </text>
                <text x="34" y="118" fill="#ffffff" fontSize="12" fontWeight="800" letterSpacing="0.05em" fontFamily="sans-serif">
                  {currentSlide.statLabel}
                </text>

                {/* 2. THE SOARING GOLDEN ARROW — FIXED IN A PURE STRAIGHT LINE */}
                <g>
                  {/* Straight Arrow Shaft & Head */}
                  <path
                    d="M 0 515
                       L 670 148
                       L 705 198
                       L 780 48
                       L 630 22
                       L 665 76
                       L 0 445
                       Z"
                    fill="url(#goldArrowFill)"
                  />
                  {/* Lower 3D depth rim */}
                  <path
                    d="M 0 515
                       L 670 148
                       L 675 158
                       L 0 525
                       Z"
                    fill="#b8831b"
                    opacity="0.65"
                  />
                </g>
              </svg>

              {/* Accent Tag Pill placed in top right corner */}
              <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 z-20 bg-[#f8f4df] border border-slate-300 text-[#0d2137] text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider px-1.5 xs:px-2 py-0.5 sm:py-1 shadow-2xs">
                {currentSlide.accentLabel}
              </div>

              {/* 3. STEP PROCESS DIAGRAM: Horizontally docked along bottom */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-[#0d2137]/95 border-t border-[#d89e28]/50 p-1 sm:p-2 backdrop-blur-xs">
                <div className="flex items-center justify-start xs:justify-between gap-1 sm:gap-1.5 max-w-full overflow-x-auto no-scrollbar py-0.5">
                  
                  {/* Step 1 */}
                  <div className="bg-[#08172b] text-white text-[6.5px] xs:text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider px-1 xs:px-1.5 sm:px-2 py-0.5 sm:py-1 whitespace-nowrap border border-slate-700 text-center shrink-0">
                    {currentSlide.node1}
                  </div>

                  {/* Straight Arrow 1 */}
                  <svg className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-2.5 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 2 */}
                  <div className="bg-[#08172b] text-white text-[6.5px] xs:text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider px-1 xs:px-1.5 sm:px-2 py-0.5 sm:py-1 whitespace-nowrap border border-slate-700 text-center shrink-0">
                    {currentSlide.node2}
                  </div>

                  {/* Straight Arrow 2 */}
                  <svg className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-2.5 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 3 */}
                  <div className="bg-white text-[#0d2137] text-[6.5px] xs:text-[7.5px] sm:text-[9px] font-extrabold uppercase tracking-wider px-1 xs:px-1.5 sm:px-2 py-0.5 sm:py-1 whitespace-nowrap border border-slate-300 text-center shrink-0 shadow-xs">
                    {currentSlide.node3}
                  </div>

                  {/* Straight Arrow 3 */}
                  <svg className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-2.5 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 4 */}
                  <div className="bg-[#d89e28] text-[#0d2137] text-[6.5px] xs:text-[7.5px] sm:text-[9px] font-black uppercase tracking-wider px-1 xs:px-1.5 sm:px-2 py-0.5 sm:py-1 whitespace-nowrap text-center shrink-0 shadow-xs">
                    {currentSlide.node4}
                  </div>

                  {/* Straight Arrow 4 */}
                  <svg className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-2.5 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 5 Action Button */}
                  <button
                    onClick={onOpenConsultation}
                    className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] text-[6.5px] xs:text-[7.5px] sm:text-[9px] font-black uppercase tracking-wider px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 whitespace-nowrap text-center shrink-0 cursor-pointer shadow-sm rounded-md transition-colors"
                  >
                    {currentSlide.node5}
                  </button>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4. FOOTER CONTROLS & PAGINATION (Compact bottom row) */}
        <div className="shrink-0 flex items-center justify-between pt-1 sm:pt-1.5 border-t border-[#0d2137]/15 text-[9.5px] xs:text-[10px] sm:text-xs">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[#0d2137]/75 font-semibold uppercase text-[8.5px] xs:text-[9.5px] sm:text-[10.5px]">NAVIGATION:</span>
            {SLIDES.map((s, index) => (
              <button
                key={s.id}
                onClick={() => handleSelectSlide(index)}
                className={`px-2 py-0.5 text-[8.5px] xs:text-[9.5px] sm:text-[10px] font-bold transition-all cursor-pointer rounded-md ${
                  activeSlide === index
                    ? 'bg-[#0d2137] text-[#d89e28] shadow-xs'
                    : 'text-[#0d2137]/70 hover:text-[#0d2137] bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Jump to slide ${index + 1}`}
              >
                0{index + 1}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExploreServices}
              className="hidden sm:inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#0d2137] hover:text-[#d89e28] transition-colors cursor-pointer"
            >
              <span>Explore Operational Modules</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* Visual Architecture Image Manager Modal */}
      <HeroImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        activeSlideIndex={activeSlide}
        slides={SLIDES}
        currentImages={customImages}
        onSaveImage={handleSaveImage}
        onApplyToAllSlides={handleApplyToAllSlides}
        onResetImages={handleResetImages}
        displayMode={displayMode}
        onChangeDisplayMode={handleChangeDisplayMode}
        imageOpacity={imageOpacity}
        onChangeOpacity={handleChangeOpacity}
      />
    </section>
  );
};
