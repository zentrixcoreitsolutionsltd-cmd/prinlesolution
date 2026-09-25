import React from 'react';
import { ShieldCheck, Target, Award, Globe2, Quote, ArrowRight, Compass, Shield, Building2, Clock, Mail } from 'lucide-react';

export const AboutSection: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Lead & Overview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Corporate Overview & Mission/Vision */}
          <div className="lg:col-span-7">
            <span className="text-[#d89e28] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase block mb-2.5 font-sans">
              CORPORATE OVERVIEW &bull; INSTITUTIONAL PEDIGREE
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0d2137] tracking-tight leading-[1.15]">
              Constructing Protective Communication Architectures For Global &amp; Regional Leaders.
            </h2>
            
            {/* Corporate Overview Body */}
            <div className="mt-5 sm:mt-6 p-5 sm:p-6 bg-slate-50 border-l-4 border-[#d89e28] border-y border-r border-slate-200">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#d89e28] block mb-1.5">
                Official Corporate Overview
              </span>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                <strong className="text-[#0d2137] font-bold">Prinle PR Solutions Ltd.</strong> is a premier, full-service strategic communications, media relations, and high-fidelity multimedia agency operating at the intersection of East African corporate corridors and global market networks. We construct protective communication architectures for blue-chip companies, public boards, and multinational entities.
              </p>
            </div>

            {/* Vision & Mission Double Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* Vision Statement */}
              <div className="bg-[#0d2137] text-white p-5 sm:p-6 border border-[#15304f] relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d89e28]/10 rounded-full blur-xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-2 text-[#d89e28] text-xs font-black uppercase tracking-wider mb-2.5">
                    <Compass className="w-4 h-4" />
                    <span>Corporate Vision</span>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed italic">
                    &ldquo;To be the definitive cross-border communication architecture in Africa, guiding global institutions through intricate regulatory, media, and reputational ecosystems with absolute clarity and cinematic authority.&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/80 text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                  Pan-African Benchmark
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-[#08172b] text-white p-5 sm:p-6 border border-[#15304f] relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d89e28]/10 rounded-full blur-xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-2 text-[#d89e28] text-xs font-black uppercase tracking-wider mb-2.5">
                    <Target className="w-4 h-4" />
                    <span>Corporate Mission</span>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed">
                    &ldquo;To engineer high-integrity public relations frameworks and worldclass multimedia narrative systems that defend corporate reputations, engage elite stakeholders, and shift regional market perceptions with precision.&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/80 text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                  Precision Engineering
                </div>
              </div>
            </div>

            {/* Core Values / Stats - Responsive clean cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-200">
              <div className="bg-slate-50 p-4 border border-slate-200">
                <span className="text-2xl sm:text-3xl font-black text-[#0d2137] block">14+</span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1 block">
                  Years Operating Pedigree
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">East Africa &bull; Global Wire Hubs</span>
              </div>
              <div className="bg-slate-50 p-4 border border-slate-200">
                <span className="text-2xl sm:text-3xl font-black text-[#d89e28] block">1,200+</span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1 block">
                  Tier-1 Features Placed
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Financial Dailies &amp; Wires</span>
              </div>
              <div className="bg-slate-50 p-4 border border-slate-200">
                <span className="text-xl sm:text-2xl font-black text-[#0d2137] block">24/7/365</span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1 block">
                  Crisis Countermeasures
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Active War Room SLA</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-none shadow-xs transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-2"
              >
                <span>REQUEST BESPOKE PROPOSAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#services"
                className="bg-[#0d2137] hover:bg-[#15304f] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-none shadow-xs transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                VIEW 3-PILLAR MATRIX
              </a>
            </div>
          </div>

          {/* Right Column: Institutional Advantages & Operational Coordinates */}
          <div className="lg:col-span-5 space-y-5">
            {/* The Prinle Advantage Box */}
            <div className="bg-[#0d2137] text-white rounded-none p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#d89e28]/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[#d89e28] text-xs font-bold uppercase tracking-widest block mb-2">
                Protective Framework
              </span>
              <h3 className="text-lg sm:text-xl font-bold mb-5">
                Strategic Architecture Protocols
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#15304f] flex items-center justify-center shrink-0 text-[#d89e28]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Reputation Shielding</strong>
                    <span className="text-slate-300">
                      Constructing resilient defensive messaging systems that protect enterprise balance sheets during regulatory friction.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#15304f] flex items-center justify-center shrink-0 text-[#d89e28]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Cross-Border Media Relations</strong>
                    <span className="text-slate-300">
                      Direct access to senior business editors and terminal syndication across Nairobi, Johannesburg, London, and New York.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#15304f] flex items-center justify-center shrink-0 text-[#d89e28]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Cinematic Authority</strong>
                    <span className="text-slate-300">
                      Broadcast-ready videography, industrial photography, and 4K corporate documentaries engineered for institutional weight.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#15304f] flex items-center justify-center shrink-0 text-[#d89e28]">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Omnichannel Syndication</strong>
                    <span className="text-slate-300">
                      Multi-channel publication loops, programmatic digital reach, and influencer governance frameworks.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Information & Physical Coordinates */}
            <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 text-xs text-slate-700">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-[#d89e28] block mb-3 font-sans">
                INSTITUTIONAL REGISTRATION &amp; HEADQUARTERS
              </span>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-[#0d2137] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0d2137] block font-bold">Physical Headquarters:</strong>
                    <span>Prinle Corporate Suites, Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#0d2137] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0d2137] block font-bold">Postal Registration Frame:</strong>
                    <span>P.O. Box 624- 00100, Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#0d2137] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0d2137] block font-bold">Official Operating Windows:</strong>
                    <span>Monday to Friday: 08:00 AM – 05:00 PM EAT</span>
                    <span className="text-red-700 font-bold block mt-0.5">(Crisis intake console active 24/7/365)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Client Endorsement Quote Banner */}
        <div className="mt-12 sm:mt-16 bg-[#0a1829] text-white border-l-4 border-[#d89e28] p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-5 sm:gap-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#d89e28]/20 text-[#d89e28] flex items-center justify-center shrink-0">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-100 text-sm sm:text-base lg:text-lg font-semibold italic leading-relaxed">
              &ldquo;Prinle PR Solutions constructed our communications architecture prior to a cross-border regulatory review. Their narrative discipline and media relations delivered complete clarity and protected our enterprise stature across African capitals.&rdquo;
            </p>
            <div className="mt-3 text-xs text-slate-400 font-medium">
              <strong className="text-[#d89e28] font-bold">Regional Managing Director</strong> &middot; Pan-African Sovereign Infrastructure Fund
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
