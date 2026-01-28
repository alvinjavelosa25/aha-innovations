'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';
import { SparklesText } from '@/components/ui/sparkles-text';
import GlassSurface from '@/components/ui/GlassSurface';

const menuItems = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Showcase', href: '/showcase' },
  { name: 'AHA University', href: 'https://tutorials.aha-university.org/communities/groups/aha-community/home?invite=684a52e768e341175153da67', external: true },
  { name: 'Be an Affiliate', href: 'https://affiliate.aha-innovations.com/register', external: true },
];

export default function Navigation() {
  const router = useRouter();
  const [menuState, setMenuState] = React.useState(false);
  const [scrollState, setScrollState] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAffiliateClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
    window.open('https://affiliate.aha-innovations.com/register', '_blank', 'noopener,noreferrer');
  };

  const Confetti = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: -10,
            rotate: 0,
            scale: 0
          }}
          animate={{
            y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
            rotate: 360,
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <header>
      {showConfetti && <Confetti />}
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group transition-all duration-500"
      >
        <div className={cn(
          'mx-auto transition-all duration-500 ease-out',
          scrollState
            ? 'mt-3 max-w-4xl px-4 py-2 rounded-2xl border border-white/10 shadow-lg shadow-black/20 relative overflow-hidden'
            : 'mt-0 max-w-6xl px-6 py-4 lg:px-12'
        )}>
          {scrollState && (
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <GlassSurface
                width="100%"
                height="100%"
                borderRadius={16}
                borderWidth={0.07}
                brightness={50}
                opacity={0.93}
                blur={10}
                displace={0.4}
                backgroundOpacity={0.12}
                saturation={1.15}
                distortionScale={-40}
                mixBlendMode="difference"
              >
                <div />
              </GlassSurface>
            </div>
          )}
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0">
            <div className="flex w-full justify-between lg:w-auto">
              <button
                onClick={() => router.push('/')}
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
                <span className={cn(
                  "font-bold text-white text-lg tracking-tight hidden sm:inline-block transition-all duration-300",
                  scrollState ? "text-base" : "text-lg"
                )}>
                  {scrollState ? "AHA" : "AHA Innovations"}
                </span>
              </button>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="hidden lg:block">
              <ul className="flex gap-6 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.name === 'Be an Affiliate' ? (
                      <motion.button
                        onClick={handleAffiliateClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group transition-all duration-300 px-4 py-1.5 rounded-full text-white bg-white/12 hover:bg-white/18 border border-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-saturate-150 backdrop-brightness-110 backdrop-blur-md ring-1 ring-white/20"
                      >
                        <SparklesText
                          text={item.name}
                          className="text-sm font-bold"
                          sparklesCount={6}
                          colors={{ first: "#ef4444", second: "#f97316" }}
                        />
                      </motion.button>
                    ) : (
                      <button
                        onClick={() => {
                          if (item.external) {
                            window.open(item.href, '_blank', 'noopener,noreferrer');
                          } else {
                            router.push(item.href);
                          }
                        }}
                        className={cn(
                          "text-white block duration-150 font-gotham font-medium transition-all px-4 py-1.5 rounded-full",
                          "bg-white/12 hover:bg-white/18 border border-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-saturate-150 backdrop-brightness-110 backdrop-blur-md ring-1 ring-white/20",
                          item.name === 'AHA University' && "text-aha-red"
                        )}
                      >
                        <span className="whitespace-nowrap">{item.name}</span>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-xl group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl shadow-black/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.name === 'Be an Affiliate' ? (
                        <motion.button
                          onClick={() => {
                            handleAffiliateClick();
                            setMenuState(false);
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group transition-all duration-300 w-full text-left px-4 py-2 rounded-full text-white bg-white/12 hover:bg-white/18 border border-white/20 backdrop-saturate-150 backdrop-brightness-110 backdrop-blur-md ring-1 ring-white/20"
                        >
                          <SparklesText
                            text={item.name}
                            className="text-base font-bold"
                            sparklesCount={6}
                            colors={{ first: "#ef4444", second: "#f97316" }}
                          />
                        </motion.button>
                      ) : (
                        <button
                          onClick={() => {
                            if (item.external) {
                              window.open(item.href, '_blank', 'noopener,noreferrer');
                            } else {
                              router.push(item.href);
                            }
                            setMenuState(false);
                          }}
                          className={cn(
                            "text-white block w-full text-left duration-150 font-gotham font-medium transition-all px-4 py-2 rounded-full",
                            "bg-white/12 hover:bg-white/18 border border-white/20 backdrop-saturate-150 backdrop-brightness-110 backdrop-blur-md ring-1 ring-white/20",
                            item.name === 'AHA University' && "text-aha-red"
                          )}
                        >
                          <span>{item.name}</span>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'transition-all duration-300 text-white hover:bg-white/10 font-gotham font-medium',
                    scrollState ? 'lg:hidden opacity-0 scale-95' : 'opacity-100 scale-100'
                  )}
                  onClick={() => window.location.href = 'https://app.aha-innovations.com'}
                >
                  <span>Sign In</span>
                </Button>
                <Button
                  size="sm"
                  className={cn(
                    'transition-all duration-300 bg-gradient-to-r from-aha-red to-aha-darkred hover:from-aha-darkred hover:to-aha-red text-white font-gotham font-medium',
                    scrollState ? 'lg:hidden opacity-0 scale-95' : 'opacity-100 scale-100'
                  )}
                  onClick={() => router.push('/signup')}
                >
                  <span>Sign Up</span>
                </Button>
                <Button
                  size="sm"
                  className={cn(
                    'transition-all duration-300 bg-gradient-to-r from-aha-red to-aha-darkred hover:from-aha-darkred hover:to-aha-red text-white font-gotham font-medium',
                    scrollState ? 'lg:inline-flex opacity-100 scale-100' : 'hidden opacity-0 scale-95'
                  )}
                  onClick={() => router.push('/signup')}
                >
                  <span>Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
