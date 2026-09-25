import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Linkedin, Twitter, Youtube, Instagram, ShieldCheck, MessageCircle, Clock, Building, Lock } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#050f1b] text-slate-300 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Corporate Overview */}
          <div className="lg:col-span-5">
            <div className="mb-4 select-none">
              <Logo theme="light" size="md" />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Prinle PR Solutions Ltd. is a premier, full-service strategic communications, media relations, and high-fidelity multimedia agency operating at the intersection of East African corporate corridors and global market networks. We construct protective communication architectures for blue-chip companies, public boards, and multinational entities.
            </p>

            <div className="p-3 bg-[#0a1829] border border-slate-800 text-[11.5px] text-slate-400 mb-5 leading-relaxed">
              <span className="text-[#d89e28] font-bold block uppercase text-[10px] tracking-wider mb-1">
                Institutional Vision Statement:
              </span>
              &ldquo;To be the definitive cross-border communication architecture in Africa, guiding global institutions through intricate regulatory, media, and reputational ecosystems with absolute clarity and cinematic authority.&rdquo;
            </div>

            {/* Social Media Vectors: Exact corporate URLs */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20an%20executive%20consultation."
                target="_blank"
                rel="noreferrer"
                aria-label="Official WhatsApp Node"
                className="h-9 px-3 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] flex items-center justify-center gap-1.5 hover:bg-[#25D366] hover:text-[#0d2137] transition-colors font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp: 0725 128 059</span>
              </a>

              <a
                href="https://www.linkedin.com/company/prinle-pr-solutionslimited/about/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn: Prinle PR Solutions Ltd"
                title="LinkedIn"
                className="w-9 h-9 bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0077b5] transition-colors"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>

              <a
                href="https://x.com/PrinlePR"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter: @PrinlePR"
                title="X (Twitter): @PrinlePR"
                className="w-9 h-9 bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0d2137] transition-colors"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>

              <a
                href="https://youtube.com/@PrinlePRMedia"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube: @PrinlePRMedia"
                title="YouTube: @PrinlePRMedia"
                className="w-9 h-9 bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/prinle_pr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram: @prinle_pr"
                title="Instagram: @prinle_pr"
                className="w-9 h-9 bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation & 3-Pillar Matrix */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3">
              Key Services Matrix
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#d89e28] transition-colors cursor-pointer text-left py-1 block"
                >
                  <strong className="text-white">Pillar A:</strong> Strategic PR &amp; Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#d89e28] transition-colors cursor-pointer text-left py-1 block"
                >
                  <strong className="text-white">Pillar B:</strong> Cinematic Media Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#d89e28] transition-colors cursor-pointer text-left py-1 block"
                >
                  <strong className="text-white">Pillar C:</strong> Omnichannel Branding
                </button>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-red-400 hover:text-red-300 transition-colors cursor-pointer text-left py-1 block font-semibold"
                >
                  Sandboxed Crisis War Room (24/7/365)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#d89e28] transition-colors cursor-pointer text-left py-1 block"
                >
                  Visual Portfolio &amp; Documentaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('downloads')}
                  className="hover:text-[#d89e28] transition-colors cursor-pointer text-left py-1 block"
                >
                  Downloads &amp; Corporate Dossiers
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Operational Coordinates */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3">
              Operational Coordinates
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Physical HQ Address:</strong>
                  <span>Prinle Corporate Suites, Nairobi, Kenya</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Postal Registration Frame:</strong>
                  <span>P.O. Box 624- 00100, Nairobi, Kenya</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Official Corporate Email:</strong>
                  <div>
                    <a href="mailto:prinleprsolutions@gmail.com" className="text-slate-200 hover:text-[#d89e28] underline font-semibold">
                      prinleprsolutions@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Primary Trunk Lines &amp; Hotline:</strong>
                  <span>+254 (0) 20 7X-XXXXX / +254 (0) 7XX-XXXXXX</span>
                  <div className="text-slate-400 mt-0.5">
                    Hotline: <a href="tel:0725128059" className="text-white hover:underline font-bold">0725 128 059</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Operating Windows:</strong>
                  <span>Mon – Fri: 08:00 AM – 05:00 PM EAT</span>
                  <span className="text-amber-400 font-bold block text-[11px]">Crisis intake console active 24/7/365</span>
                </div>
              </div>
            </div>

            {/* Ingestion Portal CTA */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <button
                onClick={onOpenConsultation}
                className="w-full bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3 px-4 transition-colors cursor-pointer min-h-[42px] flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>REQUEST BESPOKE PROPOSAL</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal & Institutional Policy */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Prinle PR Solutions Ltd. All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Prinle Corporate Suites, Nairobi, Kenya</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>P.O. Box 624- 00100</span>
            <span className="hidden sm:inline">&middot;</span>
            <a
              href="https://wa.me/254725128059"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-semibold"
            >
              WhatsApp: +254 725 128 059 (0725128059)
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d89e28]" />
              Enterprise SSL Encrypted
            </span>
            <span>&middot;</span>
            <span className="text-slate-400">Institutional Retainers Only</span>
            <span>&middot;</span>
            <span>SWIFT / RTGS Transfers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
