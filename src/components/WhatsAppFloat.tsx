import React, { useState } from 'react';
import { MessageCircle, X, ShieldCheck, ArrowRight } from 'lucide-react';

export const WhatsAppFloat: React.FC<{ onOpenDirectConsultation: () => void }> = ({
  onOpenDirectConsultation,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end">
      {/* Quick Intake Popover - Responsive width */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 bg-[#0d2137] text-white p-5 shadow-2xl border border-[#d89e28]/40 rounded-2xl animate-fadeIn">
          <div className="flex items-start justify-between pb-3 border-b border-[#15304f]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="font-bold text-xs uppercase tracking-wider block text-white">
                  Prinle Partner Desk
                </span>
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  WhatsApp: +254 725 128 059 (Online)
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 my-3 leading-relaxed">
            Immediate routing to Senior Partner &amp; Communications Counsel on <strong className="text-emerald-400 font-semibold">+254 725 128 059 (0725128059)</strong> for corporate inquiries, urgent crisis intervention, and enterprise briefings.
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20an%20executive%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20b858] text-[#0d2137] font-extrabold text-xs uppercase tracking-wider py-3 px-3 flex items-center justify-center gap-2 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#0d2137]" />
              <span>Connect on WhatsApp (0725 128 059)</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenDirectConsultation();
              }}
              className="w-full bg-gradient-to-r from-[#d89e28] to-[#e5b147] hover:from-[#c48e22] hover:to-[#d89e28] text-[#0d2137] font-extrabold text-xs uppercase tracking-wider py-3 px-3 flex items-center justify-center gap-1.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer min-h-[44px] border border-amber-300/40"
            >
              <span>Schedule Direct Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#15304f] flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#d89e28]" />
              Encrypted Corporate Channel
            </span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-[#0d2137] hover:bg-[#15304f] text-white border-2 border-[#d89e28] px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[0_10px_25px_-5px_rgba(216,158,40,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer min-h-[48px]"
        aria-label="Direct WhatsApp Consultation"
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
          <MessageCircle className="w-4 h-4 fill-current text-white" />
        </div>
        <div className="text-left hidden sm:block">
          <span className="block text-[9.5px] uppercase font-bold tracking-widest text-[#d89e28] leading-none">
            Direct Line
          </span>
          <span className="block text-xs font-black uppercase tracking-wider text-white mt-1 leading-none">
            WhatsApp Counsel
          </span>
        </div>
      </button>
    </div>
  );
};
