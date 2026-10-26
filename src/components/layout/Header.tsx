
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee3d8] bg-[#fffdf9]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={() => setMenuOpen(false)} className="group flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddc7b1] text-[#9b7657]">
            <Sparkles size={21} strokeWidth={1.4} />
          </span>
          <span>
            <span className="block font-serif text-xl tracking-wide text-[#49372d] sm:text-2xl">Maison Belle</span>
            <span className="mt-0.5 block text-[8px] font-medium uppercase tracking-[2.5px] text-[#a47753] sm:text-[9px]">
              Beauty & Wellness
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`relative py-2 text-[13px] font-medium transition ${
                isActive(link.href) ? 'text-[#9b7657]' : 'text-[#715d4e] hover:text-[#a47753]'
              }`}
            >
              {link.label}
              <span className={`absolute inset-x-0 -bottom-0.5 h-px bg-[#a47753] transition-transform ${
                isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/appointments" className="inline-flex items-center gap-2 rounded-full bg-[#76543d] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#5d402e]">
            Book Appointment <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7d7c8] text-[#604735] transition hover:bg-[#f7f1e9] lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#eee3d8] bg-[#fffdf9] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`border-b border-[#f0e7df] py-4 text-sm font-medium transition ${
                  isActive(link.href) ? 'text-[#a47753]' : 'text-[#604a3a] hover:text-[#a47753]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointments"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#76543d] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5d402e]"
            >
              Book Appointment <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
