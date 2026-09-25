import React from 'react';
import { Mail, MessageCircle, Clock, Linkedin, Twitter, Youtube, Instagram, Phone } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0a1829] text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-12 border-b border-[#15304f]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-2">
        {/* Contact Info: Touch-friendly links with official email, phone, and WhatsApp */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-center md:text-left">
          {/* Official Email: prinleprsolutions@gmail.com */}
          <a
            href="mailto:prinleprsolutions@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-[#d89e28] transition-colors min-h-[32px] sm:min-h-0 text-slate-200 hover:text-white font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
            <span>prinleprsolutions@gmail.com</span>
          </a>

          <span className="hidden sm:inline text-slate-600" aria-hidden="true">&bull;</span>

          {/* WhatsApp Node */}
          <a
            href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20an%20executive%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors min-h-[32px] sm:min-h-0 text-slate-200 hover:text-white font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
            <span>WhatsApp: +254 725 128 059</span>
          </a>

          <span className="hidden lg:inline text-slate-600" aria-hidden="true">&bull;</span>

          {/* Operating Hours */}
          <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
            <Clock className="w-3 h-3 text-[#d89e28] shrink-0" />
            <span>Mon–Fri: 08:00 AM – 05:00 PM EAT &bull; Crisis 24/7/365</span>
          </span>
        </div>

        {/* Social Media Vectors: Exact official corporate URLs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 shrink-0">
          <span className="text-[10.5px] text-slate-400 font-semibold uppercase tracking-wider mr-1 hidden sm:inline">Official Vectors:</span>
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/prinle-pr-solutionslimited/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prinle PR Solutions LinkedIn"
            title="LinkedIn: Prinle PR Solutions Ltd"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-[#d89e28] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 fill-current" />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/PrinlePR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prinle PR on X (@PrinlePR)"
            title="X (Twitter): @PrinlePR"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-[#d89e28] transition-colors"
          >
            <Twitter className="w-3.5 h-3.5 fill-current" />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@PrinlePRMedia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prinle PR Media on YouTube"
            title="YouTube: @PrinlePRMedia"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-[#d89e28] transition-colors"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/prinle_pr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prinle PR on Instagram (@prinle_pr)"
            title="Instagram: @prinle_pr"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-[#d89e28] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>

          {/* Telephone link */}
          <a
            href="tel:0725128059"
            aria-label="Call Prinle PR Hotline"
            className="w-7 h-7 sm:w-auto sm:h-auto flex items-center justify-center text-[#d89e28] hover:text-white transition-colors ml-1 font-bold text-xs"
          >
            <Phone className="w-3.5 h-3.5 sm:mr-1 shrink-0" />
            <span className="hidden sm:inline">0725 128 059</span>
          </a>
        </div>
      </div>
    </div>
  );
};
