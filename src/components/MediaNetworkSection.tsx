import React from 'react';

export const MediaNetworkSection: React.FC = () => {
  const publications = [
    { name: 'Financial Times', fontStyle: 'font-serif tracking-tight' },
    { name: 'Bloomberg', fontStyle: 'font-sans font-black tracking-tighter' },
    { name: 'The Wall Street Journal', fontStyle: 'font-serif italic font-bold' },
    { name: 'Forbes', fontStyle: 'font-serif font-black tracking-normal' },
    { name: 'TechCrunch', fontStyle: 'font-sans font-bold tracking-tight' },
    { name: 'Reuters', fontStyle: 'font-sans font-extrabold tracking-widest' },
  ];

  return (
    <div className="bg-[#08172b] py-10 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">
          Our Clients Regularly Featured In
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-85">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center py-2 px-3 text-slate-300 hover:text-white hover:opacity-100 transition-all text-center select-none"
            >
              <span className={`text-sm sm:text-base ${pub.fontStyle}`}>
                {pub.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
