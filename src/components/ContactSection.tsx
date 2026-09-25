import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, AlertTriangle, Building, Lock, MessageCircle, Clock, Linkedin, Twitter, Youtube, Instagram, FileText } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: preselectedService || 'Pillar A: Strategic PR & Consulting',
    urgency: 'Standard Routine',
    message: '',
  });

  // Sync preselectedService when updated
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const [activeMode, setActiveMode] = useState<'proposal' | 'crisis'>('proposal');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setErrorMsg('Please complete all required verification fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-[#d89e28] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase block mb-2 font-sans">
            CONTACT DETAILS &amp; OPERATIONAL INFORMATION
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0d2137] tracking-tight leading-tight">
            Institutional Ingestion &amp; Proposal Portal
          </h2>
          <p className="mt-2.5 text-slate-600 text-xs sm:text-sm sm:text-base max-w-2xl leading-relaxed">
            In compliance with our institutional pricing policy, custom retainers and strategic briefs are ingested through this sandboxed corporate terminal under mutual non-disclosure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Official Contact Details & Operational Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Corporate Email Box */}
            <div className="bg-white border border-slate-200 p-5 shadow-2xs">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d89e28] block mb-3 font-sans">
                OFFICIAL CORPORATE EMAIL
              </span>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#0d2137] text-[#d89e28] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 block">
                    Institutional Inquiries &amp; Retainer Briefs
                  </span>
                  <a
                    href="mailto:prinleprsolutions@gmail.com"
                    className="font-bold text-sm text-[#0d2137] hover:text-[#d89e28] break-all transition-colors underline"
                  >
                    prinleprsolutions@gmail.com
                  </a>
                  <span className="text-[10.5px] text-slate-500 block mt-0.5 font-medium">Direct Partner Ingestion &bull; Monitored 24/7/365</span>
                </div>
              </div>
            </div>

            {/* Telephone & WhatsApp Business Node Box */}
            <div className="bg-white border border-slate-200 p-5 shadow-2xs">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d89e28] block mb-3 font-sans">
                TELEPHONY &amp; SECURE WHATSAPP NODE
              </span>

              <div className="space-y-3.5">
                {/* WhatsApp Node */}
                <div className="bg-emerald-50/80 border border-emerald-200 p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 fill-current text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                        WhatsApp Business Node (Front-End Gateway)
                      </span>
                      <a
                        href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20a%20custom%20retainer%20assessment."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-black text-xs text-[#0d2137] hover:text-emerald-700 underline"
                      >
                        +254 725 128 059 (0725128059)
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20a%20custom%20retainer%20assessment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-extrabold uppercase tracking-wider bg-[#25D366] hover:bg-[#20b858] text-[#0d2137] px-3 py-1.5 shrink-0 transition-colors shadow-xs"
                  >
                    Open Chat
                  </a>
                </div>

                {/* Primary Telephone Trunk Lines */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="w-8 h-8 bg-[#0d2137] text-[#d89e28] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Primary Telephone Trunk Lines (Nairobi)
                    </span>
                    <div className="font-semibold text-slate-800 mt-0.5">
                      <span>+254 (0) 20 7X-XXXXX / +254 (0) 7XX-XXXXXX</span>
                    </div>
                    <div className="text-slate-600 mt-0.5">
                      Hotline: <a href="tel:0725128059" className="font-bold text-[#0d2137] hover:underline">0725 128 059</a> (<a href="tel:+254725128059" className="hover:underline">+254 725 128 059</a>)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical HQ & Postal Frame */}
            <div className="bg-white border border-slate-200 p-5 shadow-2xs space-y-3 text-xs text-slate-700">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d89e28] block mb-2 font-sans">
                PHYSICAL HQ &amp; POSTAL REGISTRATION
              </span>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0d2137] block font-bold">Physical HQ Address:</strong>
                  <span>Prinle Corporate Suites, Nairobi, Kenya</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                <Building className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0d2137] block font-bold">Postal Registration Frame:</strong>
                  <span>P.O. Box 624- 00100, Nairobi, Kenya</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                <Clock className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0d2137] block font-bold">Official Operating Windows:</strong>
                  <span>Monday to Friday: 08:00 AM – 05:00 PM EAT</span>
                  <span className="text-red-700 font-bold block mt-0.5">Crisis intake console active 24/7/365</span>
                </div>
              </div>
            </div>

            {/* Social Media Vectors */}
            <div className="bg-white border border-slate-200 p-5 shadow-2xs">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d89e28] block mb-3 font-sans">
                OFFICIAL SOCIAL MEDIA VECTORS
              </span>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="https://www.linkedin.com/company/prinle-pr-solutionslimited/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5] fill-current" />
                  <span className="font-semibold truncate">LinkedIn</span>
                </a>

                <a
                  href="https://x.com/PrinlePR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-[#0d2137] fill-current" />
                  <span className="font-semibold truncate">@PrinlePR</span>
                </a>

                <a
                  href="https://youtube.com/@PrinlePRMedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span className="font-semibold truncate">@PrinlePRMedia</span>
                </a>

                <a
                  href="https://instagram.com/prinle_pr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span className="font-semibold truncate">@prinle_pr</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Institutional Ingestion Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-md">
              
              {/* Ingestion Mode Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 border-b border-slate-200 pb-4">
                <button
                  type="button"
                  onClick={() => setActiveMode('proposal')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer min-h-[44px] ${
                    activeMode === 'proposal'
                      ? 'bg-[#0d2137] text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-[#0d2137]'
                  }`}
                >
                  <FileText className="w-4 h-4 text-[#d89e28]" />
                  <span>Request Proposal / Retainer</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMode('crisis')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer min-h-[44px] ${
                    activeMode === 'crisis'
                      ? 'bg-red-900 text-white'
                      : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Sandboxed Crisis Console</span>
                </button>
              </div>

              {submitted ? (
                <div className="py-8 sm:py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-50 text-[#d89e28] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0d2137] mb-2">
                    Ingestion Protocol Dispatched
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Assessment request logged for <strong className="text-slate-900">{formData.company}</strong>. Our managing partners will review your scope specifications and transmit custom retainer documentation to <span className="font-semibold text-slate-900">{formData.email}</span> within {activeMode === 'crisis' ? '30 minutes' : '2 business hours'}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: 'Pillar A: Strategic PR & Consulting',
                        urgency: 'Standard Routine',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] text-xs font-black uppercase tracking-wider px-6 py-3 cursor-pointer min-h-[44px]"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0d2137]">
                      {activeMode === 'crisis'
                        ? 'Emergency Crisis Ingestion Console'
                        : 'Custom Retainer Assessment & Proposal Portal'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {activeMode === 'crisis'
                        ? 'High-priority intake activating our 24/7/365 emergency response console.'
                        : 'Confidential corporate scoping for Pillar A, Pillar B, or Pillar C communication programs.'}
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Executive Lead Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Mwangi"
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
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
                        placeholder="d.mwangi@enterprise.com"
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Institution / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Holdings Ltd"
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Service Pillar Specification
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800 bg-white"
                      >
                        <option value="Pillar A: Strategic PR & Consulting">Pillar A: Strategic PR &amp; Consulting</option>
                        <option value="Pillar A: Crisis Countermeasures & Reputation Shielding">Pillar A: Crisis Countermeasures &amp; Shielding</option>
                        <option value="Pillar A: High-Tier Media Relations Management">Pillar A: High-Tier Media Relations</option>
                        <option value="Pillar B: Industrial Photography & Videography">Pillar B: Industrial Photography &amp; Video</option>
                        <option value="Pillar B: Corporate Documentaries & Filming">Pillar B: Corporate Documentaries</option>
                        <option value="Pillar B: Postproduction Suites & Tracking">Pillar B: Postproduction Suites</option>
                        <option value="Pillar C: Brand Marketing Strategy & Identity">Pillar C: Brand Marketing &amp; Identity</option>
                        <option value="Pillar C: Programmatic Advertising & Publication Loops">Pillar C: Advertising &amp; Publication Loops</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {activeMode === 'crisis' ? 'Urgent Incident Dossier / Exposure Details' : 'Scope Brief & Strategic Requirements'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        activeMode === 'crisis'
                          ? 'Specify imminent press leaks, hostile publications, regulatory friction, or broadcast deadlines...'
                          : 'Outline corporate milestones, transaction timelines, target media channels, or bespoke retainer parameters...'
                      }
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 py-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d89e28] shrink-0" />
                    <span>Protected by end-to-end institutional non-disclosure protocol.</span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className={`w-full font-black text-xs uppercase tracking-widest py-3.5 rounded-none shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[46px] ${
                        activeMode === 'crisis'
                          ? 'bg-red-800 hover:bg-red-900 text-white'
                          : 'bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137]'
                      }`}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{activeMode === 'crisis' ? 'DISPATCH CRISIS INTERVENTION' : 'TRANSMIT PROPOSAL REQUEST'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
