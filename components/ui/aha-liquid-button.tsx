'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Liquid } from '@/components/ui/button-1';

const AHA_COLORS = {
  color1: '#FFFFFF', color2: '#ea384c', color3: '#c4162a', color4: '#FCFCFE',
  color5: '#F9F9FD', color6: '#ea384c', color7: '#c4162a', color8: '#1A1F2C',
  color9: '#ea384c', color10: '#c4162a', color11: '#1a1525', color12: '#ea384c',
  color13: '#c4162a', color14: '#ea384c', color15: '#c4162a', color16: '#1A1F2C',
  color17: '#1a1525',
};

interface AHALiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const AHALiquidButton: React.FC<AHALiquidButtonProps> = ({
  children, onClick, className = '', size = 'lg', disabled = false, ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-32 sm:w-36 h-[2.2em] text-sm',
    md: 'w-36 sm:w-40 h-[2.5em] text-base',
    lg: 'w-40 sm:w-48 h-[2.7em] text-base sm:text-lg'
  };

  return (
    <div className={`relative inline-block ${sizeClasses[size]} ${className} group border-2 border-aha-red rounded-full`}>
      <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[12px] sm:blur-[19px] opacity-70">
        <span className="absolute inset-0 rounded-full bg-aha-red/50 filter blur-[4px] sm:blur-[6.5px]"></span>
        <div className="relative w-full h-full overflow-hidden rounded-full">
          <Liquid isHovered={isHovered} colors={AHA_COLORS} />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-full bg-aha-dark filter blur-[4px] sm:blur-[7.3px]"></div>

      <div className="relative w-full h-full overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-white/10"></span>
        <span className="absolute inset-0 rounded-full bg-aha-dark"></span>
        <Liquid isHovered={isHovered} colors={AHA_COLORS} />

        {[1, 2, 3].map((i) => (
          <span key={i} className={`absolute inset-0 rounded-full border-solid border-[3px] border-white/20 mix-blend-overlay filter ${i <= 2 ? 'blur-[2px] sm:blur-[3px]' : 'blur-[3px] sm:blur-[5px]'} ${i > 3 ? 'hidden sm:block' : ''}`}></span>
        ))}
        {[4, 5].map((i) => (
          <span key={i} className="absolute inset-0 rounded-full border-solid border-[3px] border-white/20 mix-blend-overlay filter blur-[4px] hidden sm:block"></span>
        ))}

        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-full filter blur-[8px] sm:blur-[15px] bg-aha-red/60"></span>
      </div>

      <button
        className="absolute inset-0 rounded-full bg-transparent cursor-pointer touch-manipulation active:scale-95 transition-transform duration-150"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onTouchCancel={() => setIsHovered(false)}
        disabled={disabled}
        {...props}
      >
        <span className="flex items-center justify-center gap-2 h-full rounded-full group-hover:text-white text-white font-semibold tracking-wide whitespace-nowrap transition-all duration-300">
          {children}
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    </div>
  );
};

export default AHALiquidButton;
