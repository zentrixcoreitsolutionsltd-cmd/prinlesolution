import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { 
  Menu, 
  X, 
  PhoneCall, 
  MessageCircle, 
  Home, 
  Building2, 
  Layers, 
  Film, 
  Radio, 
  Award, 
  FileDown, 
  Mail, 
  ChevronRight,
  Lock
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      id: 'home', 
      label: 'HOME', 
      icon: Home,
      desc: 'Institutional Overview & Strategic Architecture' 
    },
    { 
      id: 'about', 
      label: 'ABOUT', 
      icon: Building2,
      desc: 'Vision, Mission & Operating Pedigree' 
    },
    { 
      id: 'services', 
      label: 'SERVICES MATRIX', 
      icon: Layers,
      desc: '3-Pillar Operational Modules (A, B, C)' 
    },
    { 
      id: 'portfolio', 
      label: 'PORTFOLIO', 
      icon: Film,
      desc: 'Industrial Documentaries & Productions' 
    },
    { 
      id: 'multimedia', 
      label: 'MULTIMEDIA', 
      icon: Radio,
      desc: 'Broadcasts, Podcasts & Syndication' 
    },
    { 
      id: 'endorsements', 
      label: 'ENDORSEMENTS', 
      icon: Award,
      desc: 'Institutional & Sovereign Validation' 
    },
    { 
      id: 'downloads', 
      label: 'DOWNLOADS', 
      icon: FileDown,
      desc: 'Brochures, Media Kits & Whitepapers' 
    },
    { 
      id: 'contact', 
      label: 'CONTACT & INTAKE', 
      icon: Mail,
      desc: 'Proposal Ingestion & 24/7 Crisis Console' 
    },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Main Navbar Bar */}
      <div className="w-full px-3 sm:px-6 lg:px-8 2xl:px-12 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-hidden shrink-0 cursor-pointer min-h-[44px] flex items-center"
          aria-label="Prinle PR Solutions Home"
        >
          <Logo theme="dark" size="md" />
        </button>

        {/* Desktop Nav Links (Visible from lg: 1024px upwards) */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-2.5 2xl:gap-4 flex-1 min-w-0 px-1 xl:px-2 text-[10px] xl:text-[11.5px] 2xl:text-[12px] font-bold tracking-normal">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 px-1.5 xl:px-2 transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer font-extrabold ${
                  isActive
                    ? 'text-[#d89e28]'
                    : 'text-[#0d2137] hover:text-[#d89e28]'
                }`}
              >
                {item.id === 'services' ? (
                  <span>SERVICES<span className="hidden xl:inline"> MATRIX</span></span>
                ) : item.id === 'contact' ? (
                  <span>CONTACT<span className="hidden xl:inline"> &amp; INTAKE</span></span>
                ) : (
                  <span>{item.label}</span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2.5px] bg-[#d89e28]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Proposal Action Button (Desktop & Tablet) */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.98] text-[#0d2137] font-black text-xs uppercase tracking-wider px-3.5 sm:px-4 2xl:px-6 py-2.5 rounded-none shadow-xs transition-all duration-150 cursor-pointer whitespace-nowrap min-h-[40px]"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>REQUEST PROPOSAL</span>
          </button>

          {/* Clean, Standard Hamburger Button (Mobile / Tablet) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-11 h-11 flex items-center justify-center transition-colors cursor-pointer border ${
              mobileMenuOpen 
                ? 'bg-[#0d2137] text-[#d89e28] border-[#0d2137]' 
                : 'bg-white text-[#0d2137] hover:text-[#d89e28] hover:bg-slate-50 border-slate-300'
            }`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.4]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel directly attached underneath the header */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop for closing by clicking outside */}
          <div 
            className="fixed inset-0 top-[50px] sm:top-[60px] bg-slate-950/60 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown Menu Container */}
          <div className="relative z-50 lg:hidden bg-white border-t border-slate-200 shadow-2xl max-h-[calc(100dvh-60px)] overflow-y-auto">
            {/* Header info bar inside menu */}
            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#d89e28]">
                INSTITUTIONAL NAVIGATION
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer py-1 px-2"
              >
                <span>Close</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Nav items list */}
            <div className="p-3 sm:p-4 space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-3 flex items-start gap-3 transition-colors cursor-pointer border ${
                      isActive
                        ? 'bg-[#0d2137] text-white border-[#0d2137]'
                        : 'bg-white hover:bg-slate-50 text-[#0d2137] border-slate-200'
                    }`}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 ${
                      isActive ? 'bg-[#15304f] text-[#d89e28]' : 'bg-slate-100 text-[#0d2137]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-black uppercase tracking-wider ${
                          isActive ? 'text-[#d89e28]' : 'text-[#0d2137]'
                        }`}>
                          {item.label}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 ${
                          isActive ? 'text-[#d89e28]' : 'text-slate-400'
                        }`} />
                      </div>
                      <p className={`text-[11px] leading-snug mt-0.5 truncate ${
                        isActive ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Action CTAs */}
            <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.98] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3.5 text-center shadow-xs cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>REQUEST BESPOKE PROPOSAL</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20an%20executive%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20b858] text-[#0d2137] font-extrabold text-[11px] uppercase tracking-wider py-2.5 px-2 text-center flex items-center justify-center gap-1.5 min-h-[38px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-[#0d2137]" />
                  <span className="truncate">WhatsApp</span>
                </a>

                <a
                  href="tel:0725128059"
                  className="bg-[#0d2137] hover:bg-[#15304f] text-white font-bold text-[11px] uppercase tracking-wider py-2.5 px-2 text-center flex items-center justify-center gap-1.5 min-h-[38px]"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#d89e28]" />
                  <span className="truncate">Call Hotline</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
