import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<any | null>(null);

  const articles = [
    {
      id: '1',
      title: 'The Modern Rules of Embargo: Pitching Tier-1 Editors in 2026',
      excerpt:
        'Why blanket press releases fail, and how direct, bespoke background briefings secure front-page coverage.',
      category: 'Media Relations',
      date: 'Sept 2026',
      readTime: '5 min read',
      author: 'Eleanor Vance, Former Reuters Editor',
      content: `In an era overwhelmed by automated PR distribution, top business journalists receive upwards of 300 pitches a day. Standing out requires returning to first principles: exclusivity, empirical data, and macro relevance.

When launching a major product or financing milestone, the spray-and-pray approach does more than fail—it burns bridges with key desk editors. Strategic embargoes, when executed with strict 72-hour lead windows and access to C-level founders, create genuine collaborative reporting opportunities.

At Prinle PR Solutions Ltd, our campaign playbooks align company milestones with unfolding economic megatrends, ensuring editors see a broad commercial narrative rather than just self-serving promotion.`,
    },
    {
      id: '2',
      title: 'Algorithmic Sentiment & The New Crisis Playbook',
      excerpt:
        'Managing reputation when AI answer engines and social algorithms determine brand perception within minutes.',
      category: 'Crisis Management',
      date: 'Aug 2026',
      readTime: '7 min read',
      author: 'David Chen, VP of Reputation Strategy',
      content: `The window between an operational incident and public narrative consolidation has shrunk from 24 hours to under 45 minutes. More critically, search engines and conversational AI systems now synthesize real-time chatter to formulate permanent sentiment answers.

Proactive crisis mitigation is no longer about issuing defensive legal statements. It requires rapid factual clarity, transparent stakeholder outreach, and immediate multi-channel holding protocols that preserve long-term enterprise valuation.`,
    },
    {
      id: '3',
      title: 'Executive Stature: Building High-Influence C-Suite Presence',
      excerpt:
        'How visionary founders transition into globally recognized industry authorities through disciplined positioning.',
      category: 'Brand Strategy',
      date: 'July 2026',
      readTime: '4 min read',
      author: 'Sarah Jenkins, Senior Director',
      content: `Investors back visionaries, not just spreadsheets. An authoritative executive presence on LinkedIn, at global forums, and in business op-eds directly compresses sales cycles and attracts top-tier talent.

We break down the systematic cadence of executive thought leadership: curating proprietary industry benchmarks, contributing incisive perspectives on regulatory changes, and maintaining disciplined message cohesion across all public forums.`,
    },
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="text-[#d89e28] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2 font-sans">
              PR INSIGHTS &amp; EDITORIAL
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
              Latest Thinking &amp; Perspectives
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md">
            Actionable strategies on corporate narrative building, media relations, and reputation governance.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="group cursor-pointer flex flex-col justify-between border-b md:border-b-0 pb-6 md:pb-0 active:opacity-80 transition-opacity"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 sm:mb-3 font-medium">
                  <span className="text-[#d89e28] font-bold uppercase tracking-wider">{art.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{art.date}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="font-extrabold text-[#0d2137] text-base sm:text-xl group-hover:text-[#d89e28] transition-colors leading-snug mb-2 sm:mb-3">
                  {art.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0d2137] group-hover:text-[#d89e28] transition-colors min-h-[40px]">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 text-[#d89e28] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-none max-w-2xl w-full p-5 sm:p-8 lg:p-10 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-slate-700 font-bold"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
              <span className="text-[#d89e28] font-bold uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <span aria-hidden="true">&middot;</span>
              <span>{activeArticle.date}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0d2137] mb-2 sm:mb-3 leading-tight pr-6">
              {activeArticle.title}
            </h3>

            <p className="text-xs font-semibold text-slate-500 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-100">
              By {activeArticle.author}
            </p>

            <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-4 whitespace-pre-line mb-6 sm:mb-8">
              {activeArticle.content}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="w-full sm:w-auto bg-[#0d2137] hover:bg-[#15304f] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 cursor-pointer min-h-[44px]"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
