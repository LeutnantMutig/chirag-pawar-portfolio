import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { profile } from '../data/profile';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'LEADERSHIP', href: '#leadership' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const listener = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', listener);

    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarsePointer) return () => mq.removeEventListener('change', listener);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mq.removeEventListener('change', listener);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#') || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string, o?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(href, { offset: 0 });
    } else {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black md:cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR (desktop only) ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 hidden md:flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED VIDEO LAYER ================= */}
      {/* Mobile & tablet: full-bleed object-cover centered on the subject. lg+: original right-anchored cinematic crop. */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-center lg:justify-end">
        <video
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          aria-label="Chirag Pawar walking confidently toward camera in a cinematic studio setting"
          className="h-full w-full object-cover object-[62%_center] lg:h-screen lg:w-auto lg:max-w-none lg:object-contain lg:object-center origin-center lg:origin-right lg:scale-95 xl:scale-100"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Mobile & tablet: bottom gradient so foreground text stays readable */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none lg:hidden" />

        {/* Desktop: Seamless Soft Left Edge Blend */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">

        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-lg sm:text-xl lg:text-[1.4rem] xl:text-2xl font-semibold tracking-[0.28em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity whitespace-nowrap"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {profile.name.toUpperCase()}.
          </a>

          {/* Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-[10px] xl:text-[10.5px] tracking-[0.2em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action — desktop */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden lg:flex group items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm hover:cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>

          {/* Hamburger — mobile/tablet */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 border border-[#8C6D4F]/50 hover:border-[#D4AF37] transition-colors duration-300 ml-auto"
          >
            <span className="block w-5 h-[1.5px] bg-[#EAD8C7]" />
            <span className="block w-5 h-[1.5px] bg-[#EAD8C7]" />
            <span className="block w-3.5 h-[1.5px] bg-[#EAD8C7] self-center" />
          </button>
        </header>

        {/* Mobile navigation drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black lg:hidden pointer-events-auto flex flex-col"
            >
              <div className="flex items-center justify-between px-6 pt-6">
                <span
                  className="text-lg font-semibold tracking-[0.28em] uppercase text-[#EAD8C7]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {profile.name.toUpperCase()}.
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-11 h-11 flex items-center justify-center border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#D4AF37] transition-colors text-xl"
                >
                  ✕
                </button>
              </div>

              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
                className="flex-1 flex flex-col justify-center gap-1 px-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      document.body.style.overflow = '';
                      handleNavClick(e, item.href);
                    }}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="py-4 text-2xl tracking-wide uppercase text-[#E0D3C5] hover:text-[#D4AF37] transition-colors border-b border-[#8C6D4F]/15"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.nav>

              <div className="px-6 pb-10 pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = '';
                    handleNavClick(e, '#contact');
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-4 border border-[#8C6D4F] text-[#EAD8C7] text-xs tracking-[0.24em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>LET&apos;S TALK</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">

          {/* LEFT: Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[34rem] xl:max-w-[42rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] tracking-tight uppercase leading-[0.9]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  {profile.heroHeadline[0]}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  {profile.heroHeadline[1]}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  {profile.heroHeadline[2]}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Positioning */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <div
                className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="whitespace-nowrap">{profile.title.toUpperCase()}</span>
                <span className="whitespace-nowrap">
                  <span className="text-[#8C6D4F] mr-2">•</span>
                  {profile.secondaryTitles[0].toUpperCase()}
                </span>
                <span className="whitespace-nowrap">
                  <span className="text-[#8C6D4F] mr-2">•</span>
                  {profile.secondaryTitles[1].toUpperCase()}
                </span>
              </div>
            </motion.div>

            {/* Supporting Statement */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>{profile.heroSupporting}</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.a
                href="#work"
                onClick={(e) => handleNavClick(e, '#work')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="group relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Chirag Pawar's resume (opens PDF in a new tab)"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            <span className="text-2xl text-[#C99E5D] leading-none font-serif mb-2">“</span>

            <div
              className="text-[13px] xl:text-[14px] font-medium tracking-[0.16em] uppercase text-[#E0D3C5] space-y-1.5 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {profile.heroPhilosophy.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />

            <div
              className="text-[2.4rem] text-[#D8AB64] font-normal leading-none -ml-0.5"
              style={{
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              {profile.shortName}
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;
