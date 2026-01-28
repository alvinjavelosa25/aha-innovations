import type { Config } from "tailwindcss";

export default {
//   darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
        'gotham-condensed': ['Gotham Condensed', 'Gotham', 'sans-serif'],
        'gotham-narrow': ['Gotham Narrow', 'Gotham', 'sans-serif'],
        'gotham-screen': ['Gotham ScreenSmart', 'Gotham', 'sans-serif'],
      },
      fontWeight: {
        'ultra': '950',
        'extra-black': '950',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        aha: {
          red: '#ea384c',
          darkred: '#c4162a',
          dark: '#1A1F2C',
          darkpurple: '#1a1525',
          gray: '#8E9196',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'rotate-slow-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'spotlight-glow': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'rotate(-25deg) scale(1)'
          },
          '50%': { 
            opacity: '0.9',
            transform: 'rotate(-25deg) scale(1.02)'
          }
        },
        'particle-float': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'rotate(-20deg) translate(0, 0)'
          },
          '25%': { 
            opacity: '0.95',
            transform: 'rotate(-20deg) translate(10px, -5px)'
          },
          '50%': { 
            opacity: '0.9',
            transform: 'rotate(-20deg) translate(5px, 10px)'
          },
          '75%': { 
            opacity: '0.95',
            transform: 'rotate(-20deg) translate(-5px, -8px)'
          }
        },
        'light-drift': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'rotate(-30deg) scale(1)'
          },
          '33%': { 
            opacity: '0.95',
            transform: 'rotate(-30deg) scale(1.01) translate(5px, 0)'
          },
          '66%': { 
            opacity: '0.9',
            transform: 'rotate(-30deg) scale(0.99) translate(-3px, 5px)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite linear',
        'spin-slow': 'spin-slow 20s linear infinite',
        'rotate-slow': 'rotate-slow 40s linear infinite',
        'rotate-slow-reverse': 'rotate-slow-reverse 50s linear infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'gradient': 'gradient var(--animation-duration, 8s) linear infinite',
        'pulse-subtle': 'pulse-subtle 5s ease-in-out infinite',
        'spotlight-glow': 'spotlight-glow 4s ease-in-out infinite',
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'light-drift': 'light-drift 8s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
