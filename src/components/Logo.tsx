import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'auto'; // 'light' = for dark/navy backgrounds, 'dark' = for light/white backgrounds
  layout?: 'horizontal' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'dark',
  layout = 'horizontal',
  size = 'md',
}) => {
  const isLight = theme === 'light'; // true on dark backgrounds like footer

  // Size styling with fluid responsive classes
  const emblemSize =
    size === 'sm'
      ? 'w-7 h-7 text-xs'
      : size === 'lg'
      ? 'w-9 h-9 sm:w-11 sm:h-11 text-sm sm:text-lg'
      : size === 'xl'
      ? 'w-11 h-11 sm:w-14 sm:h-14 text-lg sm:text-2xl'
      : 'w-8 h-8 sm:w-9 sm:h-9 text-xs sm:text-sm';

  const brandTitleSize =
    size === 'sm'
      ? 'text-[11px]'
      : size === 'lg'
      ? 'text-[13px] sm:text-base'
      : size === 'xl'
      ? 'text-base sm:text-lg'
      : 'text-xs sm:text-[13px]';

  const brandSubSize =
    size === 'sm'
      ? 'text-[8px]'
      : size === 'lg'
      ? 'text-[8px] sm:text-[10px]'
      : size === 'xl'
      ? 'text-[10px] sm:text-xs'
      : 'text-[8px] sm:text-[9px]';

  const titleColor = isLight ? 'text-white' : 'text-[#0d2137]';
  const subColor = isLight ? 'text-[#d89e28]' : 'text-[#d89e28]';

  if (layout === 'stacked') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center p-1.5 sm:p-2 select-none ${className}`}
        role="img"
        aria-label="Prinle PR Solutions Ltd"
      >
        <div className={`flex items-center justify-center font-black tracking-tighter bg-[#0d2137] text-white border-2 border-[#d89e28] shadow-xs shrink-0 ${emblemSize}`}>
          <span className="text-[#d89e28]">P</span>
          <span className="text-white">R</span>
        </div>
        <div className="mt-1.5 sm:mt-2 flex flex-col items-center text-center leading-tight">
          <span className={`font-black tracking-wider uppercase ${brandTitleSize} ${titleColor}`}>
            PRINLE PR
          </span>
          <span className={`font-bold tracking-widest uppercase mt-0.5 ${brandSubSize} ${subColor}`}>
            SOLUTIONS LTD
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-3 select-none max-w-full ${className}`}
      role="img"
      aria-label="Prinle PR Solutions Ltd"
    >
      <div className={`flex items-center justify-center font-black tracking-tight shrink-0 bg-[#0d2137] text-white border-2 border-[#d89e28] shadow-xs ${emblemSize}`}>
        <span className="text-[#d89e28]">P</span>
        <span className="text-white">R</span>
      </div>
      <div className="flex flex-col justify-center leading-none min-w-0">
        <span className={`font-black tracking-[0.05em] sm:tracking-[0.08em] uppercase truncate ${brandTitleSize} ${titleColor}`}>
          PRINLE PR SOLUTIONS
        </span>
        <span className={`font-bold tracking-[0.15em] sm:tracking-[0.22em] uppercase mt-0.5 sm:mt-1 truncate ${brandSubSize} ${subColor}`}>
          STRATEGIC COMMUNICATIONS &bull; LTD
        </span>
      </div>
    </div>
  );
};
