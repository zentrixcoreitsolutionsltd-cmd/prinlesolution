import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Shield, ArrowDownToLine, AlertCircle } from 'lucide-react';

export const DownloadsRepositorySection: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [completedId, setCompletedId] = useState<string | null>(null);

  const assets = [
    {
      id: 'd1',
      title: 'Prinle PR Official Corporate Capability Brochure',
      type: 'PDF Dossier',
      fileSize: '14.2 MB',
      version: 'v2026.3',
      description:
        'Comprehensive breakdown of our practice areas, leadership biographies, cross-border media relationships, and verified case studies.',
      securityBadge: 'SHA-256 Verified',
    },
    {
      id: 'd2',
      title: 'Global Media Kit & Master Brand Identity Guidelines',
      type: 'ZIP Package',
      fileSize: '48.6 MB',
      version: 'v4.0 4K Master',
      description:
        'Official vector SVGs, brand identity specifications, typography guidelines, and approved executive photo libraries for press syndicates.',
      securityBadge: 'Press Accredited',
    },
    {
      id: 'd3',
      title: 'Executive Whitepaper: Algorithmic Crisis Management in AI Engines',
      type: 'Research PDF',
      fileSize: '8.4 MB',
      version: 'Q3 2026 Edition',
      description:
        'Proprietary research into how conversational models and financial news scrapers index executive controversies and how to mitigate negative sentiment.',
      securityBadge: 'Peer Reviewed',
    },
    {
      id: 'd4',
      title: 'Institutional Service Level Agreement (SLA) & Wire Transfer Terms',
      type: 'Legal PDF',
      fileSize: '3.1 MB',
      version: 'Commercial B2B',
      description:
        'Standard institutional engagement framework, mutual NDA commitments, and international SWIFT / RTGS B2B wire invoicing specifications.',
      securityBadge: 'Legal Encrypted',
    },
  ];

  const handleDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setCompletedId(id);
      setTimeout(() => setCompletedId(null), 4000);
    }, 1200);
  };

  return (
    <section id="downloads" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="text-[#d89e28] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase block mb-2 font-sans">
              DOWNLOADS REPOSITORY &bull; OFFICIAL ASSETS
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
              API-Monitored Institutional Vector
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md">
            Directly access audited capability dossiers, press kits, and research whitepapers. Instant delivery monitored for intellectual property compliance.
          </p>
        </div>

        {/* Assets 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {assets.map((item) => {
            const isDownloading = downloadingId === item.id;
            const isDone = completedId === item.id;

            return (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200 p-5 sm:p-7 flex flex-col justify-between hover:border-[#d89e28] transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest bg-[#0d2137] text-white px-2 sm:px-2.5 py-1">
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        {item.fileSize} &bull; {item.version}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                      <Shield className="w-3 h-3 text-emerald-600" />
                      {item.securityBadge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0d2137] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Official Release Vector &bull; Monitored SHA
                  </span>

                  <button
                    onClick={() => handleDownload(item.id, item.title)}
                    disabled={isDownloading}
                    className={`w-full sm:w-auto text-xs font-bold uppercase tracking-wider px-4 py-3 flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px] ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : isDownloading
                        ? 'bg-slate-300 text-slate-600 cursor-wait'
                        : 'bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137]'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Downloaded</span>
                      </>
                    ) : isDownloading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-slate-600 border-t-transparent rounded-full animate-spin"></span>
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <ArrowDownToLine className="w-4 h-4" />
                        <span>Download Asset</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Notice */}
        <div className="mt-6 sm:mt-8 p-4 bg-slate-100 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <AlertCircle className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#0d2137] font-bold uppercase">Commercial Settlement Policy:</strong> E-commerce checkouts and mobile wallet shops are strictly disabled. Prinle PR Solutions Ltd executes all institutional retainers, broadcast production contracts, and advisory services via formal corporate B2B wire invoicing transfers (SWIFT / RTGS).
          </p>
        </div>

      </div>
    </section>
  );
};
