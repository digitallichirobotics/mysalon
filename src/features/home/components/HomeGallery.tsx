
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Expand, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { title: 'Hair transformations', category: 'Hair', label: 'HAIR STYLING', image: '/images/gallery/hair.jpeg' },
  { title: 'A moment of calm', category: 'Skin', label: 'SKINCARE', image: '/images/gallery/skincare.jpeg' },
  { title: 'Little beauty details', category: 'Nails', label: 'NAIL CARE', image: '/images/gallery/nail.jpeg' },
  { title: 'Your special occasion', category: 'Makeup', label: 'MAKEUP', image: '/images/gallery/makeup.jpeg' },
  { title: 'Relax and recharge', category: 'Wellness', label: 'WELLNESS', image: '/images/gallery/relax.jpeg' },
  { title: 'Beauty in every detail', category: 'Salon', label: 'SALON MOMENTS', image: '/images/gallery/moment.jpeg' },
];

const filters = ['All', 'Hair', 'Skin', 'Nails', 'Makeup', 'Wellness', 'Salon'];

export default function HomeGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => activeFilter === 'All' || item.category === activeFilter);
  const activeItem = activeIndex === null ? null : filteredItems[activeIndex];

  const changeImage = (direction: number) => {
    if (activeIndex === null || !filteredItems.length) return;
    setActiveIndex((activeIndex + direction + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="bg-[#f7f1e9] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
              <Sparkles size={15} /> The beauty edit
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#49372d] sm:text-5xl">
              Moments worth <span className="italic text-[#a47753]">remembering.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#806d5f] sm:text-base">
              A glimpse into the little details, thoughtful treatments and beautiful moments that make every salon visit special.
            </p>
          </div>
          <Link href="/book" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#76543d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5d402e]">
            Book your visit <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-9 flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setActiveIndex(null);
              }}
              className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition ${activeFilter === filter ? 'bg-[#76543d] text-white' : 'border border-[#dfcdbb] bg-white/60 text-[#79583e] hover:bg-white'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <button
              key={item.category}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${item.title}`}
              className="group relative isolate aspect-[4/5] overflow-hidden rounded-2xl bg-[#e8d7c5] text-left sm:rounded-3xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#35251d]/80 via-transparent to-black/10" />
              <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/20 font-serif text-sm text-white backdrop-blur-sm sm:left-6 sm:top-6">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-100 backdrop-blur-sm transition sm:opacity-0 sm:group-hover:opacity-100">
                <Expand size={16} />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-4 sm:p-7">
                <span className="block text-[9px] font-semibold tracking-[2px] text-white/75 sm:text-[10px]">{item.label}</span>
                <span className="mt-2 block font-serif text-lg text-white sm:text-2xl">{item.title}</span>
                <span className="mt-3 block h-px w-8 bg-white/70 transition-all duration-300 group-hover:w-14" />
              </span>
            </button>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-[#907c6d]">
          Add your salon's real photographs to the gallery folder to display your work.
        </p>
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveIndex(null)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setActiveIndex(null);
            if (event.key === 'ArrowRight') changeImage(1);
            if (event.key === 'ArrowLeft') changeImage(-1);
          }}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211812]/90 p-4 backdrop-blur-sm"
        >
          <button onClick={() => setActiveIndex(null)} aria-label="Close gallery" className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
            <X size={22} />
          </button>
          <button onClick={(event) => { event.stopPropagation(); changeImage(-1); }} aria-label="Previous image" className="absolute left-3 top-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6">
            <ChevronLeft size={24} />
          </button>
          <div onClick={(event) => event.stopPropagation()} className="relative w-full max-w-4xl">
            <div className="relative h-[65vh] max-h-[720px] min-h-[280px] overflow-hidden rounded-2xl">
              <Image src={activeItem.image} alt={activeItem.title} fill sizes="90vw" className="object-contain" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[10px] font-semibold tracking-[3px] text-[#d7b494]">{activeItem.label}</p>
              <h3 className="mt-2 font-serif text-2xl text-white">{activeItem.title}</h3>
              <p className="mt-2 text-xs text-white/60">{activeIndex! + 1} of {filteredItems.length}</p>
            </div>
          </div>
          <button onClick={(event) => { event.stopPropagation(); changeImage(1); }} aria-label="Next image" className="absolute right-3 top-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
