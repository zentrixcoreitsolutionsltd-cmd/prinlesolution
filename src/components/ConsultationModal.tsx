import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, MessageCircle, Lock, Building, Mail, Phone } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'Pillar A: Strategic PR & Consulting',
    timeline: 'Immediate (Next 30 Days)',
    brief: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid corporate work email.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-none max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 active:bg-slate-100 font-bold"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 sm:py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-amber-50 text-[#d89e28] rounded-full flex items-center justify-center mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-[#0d2137] mb-1">
              Proposal Request Ingested
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-sm mb-5 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Managing partners at Prinle PR Solutions Ltd have received your brief for <strong>{formData.company}</strong>. Custom retainer assessment parameters will be delivered to <span className="underline break-all">{formData.email}</span>.
            </p>
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#0d2137] hover:bg-[#15304f] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none min-h-[44px]"
            >
              Close Portal
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-3 sm:mb-4 flex items-center justify-between">
              <Logo theme="dark" size="sm" />
            </div>
            
            <div className="mb-4 sm:mb-5">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#d89e28] uppercase tracking-wider bg-amber-50 px-2 py-0.5 border border-amber-200/60 mb-1.5">
                <Lock className="w-3 h-3" />
                <span>Custom Retainer Assessment Ingestion Portal</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0d2137] tracking-tight">
                Request a Bespoke Proposal
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                In line with institutional policy, retainers are bespoke and scoped confidentially under mutual non-disclosure.
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 mb-4 bg-red-50 text-red-700 text-xs border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Executive Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Kensington"
                  className="w-full px-3 py-2 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Corporate Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="s.kensington@enterprise.com"
                  className="w-full px-3 py-2 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Institution / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Blue-Chip Holdings"
                    className="w-full px-3 py-2 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Matrix Pillar
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800 bg-white"
                  >
                    <option value="Pillar A: Strategic PR & Consulting">Pillar A: Strategic PR &amp; Consulting</option>
                    <option value="Pillar A: Crisis Countermeasures & Reputation Shielding">Pillar A: Crisis Countermeasures</option>
                    <option value="Pillar A: High-Tier Media Relations Management">Pillar A: Media Relations</option>
                    <option value="Pillar B: Industrial Photography & Videography">Pillar B: Industrial Photography</option>
                    <option value="Pillar B: Corporate Documentaries & Filming">Pillar B: Corporate Documentaries</option>
                    <option value="Pillar B: Postproduction Suites & Tracking">Pillar B: Postproduction</option>
                    <option value="Pillar C: Brand Marketing Strategy & Identity">Pillar C: Brand Strategy &amp; Identity</option>
                    <option value="Pillar C: Programmatic Advertising & Publication Loops">Pillar C: Omnichannel Syndication</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Scope Brief / Strategic Objective
                </label>
                <textarea
                  rows={2}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Detail corporate milestones, transaction timelines, target media channels, or bespoke retainer needs..."
                  className="w-full px-3 py-2 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 py-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                <span>Protected by non-disclosure confidentiality</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.99] text-[#0d2137] font-black text-xs uppercase tracking-widest py-3.5 rounded-none shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[46px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT PROPOSAL BRIEF</span>
                </button>
              </div>

              {/* Instant WhatsApp Node Fallback */}
              <div className="pt-2 text-center border-t border-slate-100">
                <a
                  href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20a%20custom%20retainer%20assessment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 py-1"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                  <span>Instant front-end chat gateway: WhatsApp 0725 128 059</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
