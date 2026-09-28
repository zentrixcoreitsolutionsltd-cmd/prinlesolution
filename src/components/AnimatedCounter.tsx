import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  /** Raw text or target number to animate (e.g. 14, "1,200+", "$450M", "+320%", "99.1%") */
  value?: string | number;
  /** Explicit numeric target to count up to */
  target?: number;
  /** Optional prefix (e.g. "$", "+", "< ") */
  prefix?: string;
  /** Optional suffix (e.g. "+", "%", "M", " min") */
  suffix?: string;
  /** Decimal places (defaults to 0, or auto-detected if decimal in value) */
  decimals?: number;
  /** Duration in milliseconds (default: 2000ms) */
  duration?: number;
  /** Custom className applied to the rendered container/span */
  className?: string;
}

/**
 * Intelligent parser that extracts prefix, numeric value, suffix, and decimal precision
 * from strings like "1,200+", "$450M", "+320%", "99.1%", or 14.
 */
function parseCounterValue(raw: string | number | undefined, explicitTarget?: number) {
  if (explicitTarget !== undefined) {
    return {
      target: explicitTarget,
      prefix: '',
      suffix: '',
      decimals: Number.isInteger(explicitTarget) ? 0 : 1,
    };
  }

  if (typeof raw === 'number') {
    return {
      target: raw,
      prefix: '',
      suffix: '',
      decimals: Number.isInteger(raw) ? 0 : 1,
    };
  }

  if (!raw) {
    return { target: 0, prefix: '', suffix: '', decimals: 0 };
  }

  const str = String(raw).trim();

  // Special case for composite strings like "24/7/365"
  if (str === '24/7/365') {
    return {
      target: 24,
      prefix: '',
      suffix: '/7/365',
      decimals: 0,
    };
  }

  // Regular expression to match prefix, number (with commas or decimals), and suffix
  // e.g. "$450M" -> prefix: "$", num: "450", suffix: "M"
  // e.g. "+320%" -> prefix: "+", num: "320", suffix: "%"
  // e.g. "1,200+" -> prefix: "", num: "1,200", suffix: "+"
  // e.g. "< 38 Min" -> prefix: "< ", num: "38", suffix: " Min"
  const match = str.match(/^([^\d.-]*)([\d,]+(?:\.\d+)?)(.*)$/);

  if (match) {
    const rawPrefix = match[1];
    const numStr = match[2].replace(/,/g, '');
    const rawSuffix = match[3];

    const parsedNum = parseFloat(numStr);
    const hasDecimal = numStr.includes('.');
    const decimalCount = hasDecimal ? numStr.split('.')[1].length : 0;

    return {
      target: isNaN(parsedNum) ? 0 : parsedNum,
      prefix: rawPrefix,
      suffix: rawSuffix,
      decimals: decimalCount,
    };
  }

  return { target: 0, prefix: '', suffix: str, decimals: 0 };
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  target: explicitTarget,
  prefix: explicitPrefix,
  suffix: explicitSuffix,
  decimals: explicitDecimals,
  duration = 2000,
  className = '',
}) => {
  const parsed = parseCounterValue(value, explicitTarget);
  const target = explicitTarget !== undefined ? explicitTarget : parsed.target;
  const prefix = explicitPrefix !== undefined ? explicitPrefix : parsed.prefix;
  const suffix = explicitSuffix !== undefined ? explicitSuffix : parsed.suffix;
  const decimals = explicitDecimals !== undefined ? explicitDecimals : parsed.decimals;

  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let observer: IntersectionObserver | null = null;
    let animationFrameId: number;

    const startCounting = () => {
      const startTime = performance.now();
      const startVal = 0;
      const endVal = target;

      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);

        const currentVal = startVal + (endVal - startVal) * easedProgress;
        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(endVal);
          setHasAnimated(true);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              startCounting();
              if (observer && element) {
                observer.unobserve(element);
              }
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(element);
    } else {
      // Fallback if IntersectionObserver not supported
      startCounting();
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, hasAnimated]);

  // Format with thousand separators (e.g. 1,200)
  const formattedNumber = count.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className={`inline-block tabular-nums font-sans ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
