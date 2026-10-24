
import Link from 'next/link';
import { ArrowRight, Expand, Sparkles } from 'lucide-react';

const galleryItems = [
  { title: 'Hair transformations', category: 'HAIR STYLING', initials: '01', background: 'from-[#ead7c5] to-[#c9a88d]' },
  { title: 'A moment of calm', category: 'SKINCARE', initials: '02', background: 'from-[#e8dfd2] to-[#c8b5a0]' },
  { title: 'Little beauty details', category: 'NAIL CARE', initials: '03', background: 'from-[#efd8d8] to-[#d3a6a2]' },
  { title: 'Your special occasion', category: 'MAKEUP', initials: '04', background: 'from-[#d9c7b7] to-[#ad8d75]' },
  { title: 'Relax and recharge', category: 'WELLNESS', initials: '05', background: 'from-[#dce0d1] to-[#a8b39a]' },
  { title: 'Beauty in every detail', category: 'SALON MOMENTS', initials: '06', background: 'from-[#e8d8c5] to-[#c9b096]' },
];

export default function HomeGallery() {
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

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article key={item.initials} className={`group relative isolate overflow-hidden rounded-2xl sm:rounded-3xl ${index === 0 || index === 5 ? 'aspect-[4/5]' : 'aspect-[4/5]'}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.background} transition duration-700 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#35251d]/75 via-transparent to-white/10" />
              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/20 font-serif text-sm text-white backdrop-blur-sm sm:left-6 sm:top-6">
                {item.initials}
              </div>
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 sm:right-6 sm:top-6">
                <Expand size={16} />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7">
                <p className="text-[9px] font-semibold tracking-[2px] text-white/75 sm:text-[10px]">{item.category}</p>
                <h3 className="mt-2 font-serif text-lg text-white sm:text-2xl">{item.title}</h3>
                <div className="mt-3 h-px w-8 bg-white/70 transition-all duration-300 group-hover:w-14" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-[#907c6d]">
          These are visual placeholders for the design preview. Replace them with real salon and treatment photographs before launch.
        </p>
      </div>
    </section>
  );
}
