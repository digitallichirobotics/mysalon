"use client"
import Link from 'next/link';
import { ArrowUpRight, Clock3,  MapPin, Phone, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Our Gallery', href: '/#gallery' },
  { label: 'Contact Us', href: '/#contact' },
];

const services = [
  'Hair Styling & Colour',
  'Skin & Facial Treatments',
  'Nail Care',
  'Makeup & Special Occasions',
  'Relaxation & Wellness',
];

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

useEffect(() => {
  setYear(new Date().getFullYear());
}, []);

  return (
    <footer className="bg-[#49372d] text-[#f7f1e9]">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a17e]/60 text-[#d7b494]">
                <Sparkles size={21} />
              </span>
              <span>
                <span className="block font-serif text-2xl tracking-wide">Maison Belle</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[3px] text-[#d7b494]">Beauty · Care · You</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Your personal sanctuary for beauty, confidence and care. Discover thoughtful treatments and little moments of luxury made just for you.
            </p>
            <Link href="/appointments" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d7b494] px-5 py-3 text-sm font-semibold text-[#49372d] transition hover:bg-[#ead7c5]">
              Book an appointment <ArrowUpRight size={16} />
            </Link>
          </div>

          <div>
            <h3 className="font-serif text-xl">Explore</h3>
            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map((item) => (
                <Link key={item.label} href={item.href} className="w-fit text-sm text-white/65 transition hover:translate-x-1 hover:text-[#d7b494]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl">Our Services</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <li key={service} className="text-sm leading-5 text-white/65">{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl">Visit Our Salon</h3>
            <div className="mt-6 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#d7b494]" />
                <p className="text-sm leading-6 text-white/65">Add your salon address here</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#d7b494]" />
                <p className="text-sm leading-6 text-white/65">Add your contact number</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 size={18} className="mt-0.5 shrink-0 text-[#d7b494]" />
                <p className="text-sm leading-6 text-white/65">Mon – Sun · Add salon timings</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#d7b494] transition hover:border-[#d7b494] hover:bg-white/5">
                
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Maison Belle. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition hover:text-[#d7b494]">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-[#d7b494]">Terms & Conditions</Link>
          </div>
          <p>Made with care <span className="text-[#d7b494]">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
