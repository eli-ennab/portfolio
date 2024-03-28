'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import footer from '@/app/data/footer.json';

export function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex justify-start gap-8'>
        {footer.map((link, index) => (
          <Link
            className='hover:dark:text-gray hover:text-gray'
            href={link.href}
            key={index}
            target={link.target}
          >{link.name}</Link>
        ))}
      {isScrolled && <p onClick={scrollToTop}>up</p>}
    </div>
  );
}
