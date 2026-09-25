import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, X } from 'lucide-react';

export const CaseStudiesSection: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  const [selectedCase, setSelectedCase] = useState<any | null>(null);

  const cases = [
    {
      id: 'fintech-unicorn',
      client: 'VanguardPay Financial Technologies',
      category: 'FinTech & Capital Markets',
      headline: '+340% Tier-1 Media Mentions Across Series B to Unicorn Milestone',
      summary:
        'Engineered an embargoed global media tour across Bloomberg, Financial Times, and WSJ, establishing category leadership in cross-border settlements.',
      statPrimary: '340%',
      statLabel: 'Media Mentions Lift',
      statSecondary: '42',
      statSecondaryLabel: 'Tier-1 Features Secured',
      challenge:
        'The company possessed groundbreaking core banking infrastructure but was perceived by financial press as just another payment processor.',
      solution:
        'Prinle PR reframed the narrative around global sovereignty and institutional treasury resilience, timing the announcement with macro-economic monetary shifts.',
      outcome:
        'Secured front-page coverage in Bloomberg Markets, 14 broadcast appearances, and a 2.8x inbound investor pipeline during the funding round.',
    },
    {
      id: 'healthtech-breakthrough',
      client: 'Aetheria BioSystems',
      category: 'Biotechnology & Regulatory PR',
      headline: 'Transforming Clinical Trial Data into Front-Page Market Confidence',
      summary:
        'Positioned novel oncology therapeutic data to both scientific journals and mainstream financial media, driving institutional analyst endorsements.',
      statPrimary: '60%',
      statLabel: 'Executive Share of Voice',
      statSecondary: '1.4M',
      statSecondaryLabel: 'High-Intent Impressions',
      challenge:
        'Complex scientific terminology created hesitation among mainstream business press and health sector decision makers.',
      solution:
        'Built an infographic-driven press kit and conducted one-on-one editorial background briefings with senior healthcare correspondents in Nairobi and regional bureaus.',
      outcome:
        'Achieved undisputed category authority, with 60% share of voice compared to two legacy competitors.',
    },
    {
      id: 'enterprise-cloud-rebrand',
      client: 'Kestrel Cloud Infrastructure',
      category: 'Enterprise SaaS & AI Infrastructure',
      headline: 'Repositioning Legacy Hosting into Next-Gen Enterprise AI Compute',
      summary:
        'Crafted a high-velocity narrative pivot that captured premier tech media and earned keynote speaking slots at major global summits.',
      statPrimary: '92%',
      statLabel: 'Positive Sentiment Score',
      statSecondary: '18d',
      statSecondaryLabel: 'Campaign Velocity Window',
      challenge:
        'Facing intense commoditization, the company needed to showcase its distributed GPU clusters without appearing to chase AI buzzwords.',
      solution:
        'Executed an authentic thought leadership roadmap featuring technical case studies on sustainable AI data centers, published in top tier outlets.',
      outcome:
        'Over 90% positive sentiment shift among tech analysts and invitations to keynote at Nairobi Innovation Week and Africa Tech Summit.',
    },
  ];

  return (
    <section id="cases" className="py-12 sm:py-16 lg:py-24 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="text-[#d89e28] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2 font-sans">
              PROVEN RESULTS &bull; CASE BRIEFINGS
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md">
            Concrete evidence of how strategic narrative design and precision media positioning drive real market outcomes.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-none p-5 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#d89e28] tracking-wider uppercase block mb-2">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-[#0d2137] text-base sm:text-xl leading-snug mb-3">
                  {item.headline}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  {item.summary}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 py-3.5 border-t border-b border-slate-100 bg-slate-50/70 px-3 mb-5 sm:mb-6">
                  <div>
                    <span className="block text-xl sm:text-2xl font-black text-[#0d2137] tracking-tight font-sans">
                      {item.statPrimary}
                    </span>
                    <span className="block text-[9.5px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.statLabel}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-black text-[#d89e28] tracking-tight font-sans">
                      {item.statSecondary}
                    </span>
                    <span className="block text-[9.5px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.statSecondaryLabel}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCase(item)}
                className="w-full inline-flex items-center justify-between text-xs font-bold text-[#0d2137] hover:text-[#d89e28] transition-colors pt-2 cursor-pointer min-h-[40px]"
              >
                <span>Read Case Brief</span>
                <ArrowUpRight className="w-4 h-4 text-[#d89e28]" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-none max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-slate-700 p-1 text-lg font-bold"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#d89e28] uppercase tracking-wider">
              {selectedCase.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d2137] mt-1 mb-2 pr-6">
              {selectedCase.client}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-5 sm:mb-6">
              {selectedCase.headline}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3.5 sm:p-4 bg-slate-50 border border-slate-200/60 mb-5 sm:mb-6">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#0d2137]">{selectedCase.statPrimary}</span>
                <span className="text-[10px] sm:text-xs text-slate-500 block uppercase font-medium mt-0.5">
                  {selectedCase.statLabel}
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#d89e28]">{selectedCase.statSecondary}</span>
                <span className="text-[10px] sm:text-xs text-slate-500 block uppercase font-medium mt-0.5">
                  {selectedCase.statSecondaryLabel}
                </span>
              </div>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-700 mb-6 sm:mb-8">
              <div>
                <strong className="block text-[#0d2137] uppercase text-xs tracking-wider mb-1">
                  The Strategic Challenge
                </strong>
                <p className="text-slate-600 leading-relaxed">{selectedCase.challenge}</p>
              </div>

              <div>
                <strong className="block text-[#0d2137] uppercase text-xs tracking-wider mb-1">
                  Prinle PR Intervention
                </strong>
                <p className="text-slate-600 leading-relaxed">{selectedCase.solution}</p>
              </div>

              <div>
                <strong className="block text-[#0d2137] uppercase text-xs tracking-wider mb-1">
                  Verified Outcome
                </strong>
                <p className="text-slate-600 leading-relaxed">{selectedCase.outcome}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onOpenConsultation();
                }}
                className="flex-1 bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3.5 px-4 text-center cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                Discuss A Similar Campaign
              </button>
              <button
                onClick={() => setSelectedCase(null)}
                className="px-4 py-3 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold min-h-[44px] flex items-center justify-center cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
