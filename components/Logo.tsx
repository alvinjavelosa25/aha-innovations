import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img
        src="/logomark-red.svg"
        alt="AHA-Innovations"
        className="h-8 md:h-10 transition-all duration-300 hover:scale-105"
      />
    </Link>
  );
};

export default Logo;
