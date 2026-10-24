
import Link from 'next/link';
import { ArrowRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya S.',
    service: 'Hair Styling',
    review: 'A lovely experience from start to finish. The atmosphere was calming, and I loved how carefully my stylist understood what I wanted.',
    initials: 'AS',
  },
  {
    name: 'Priya M.',
    service: 'Facial & Skincare',
    review: 'The treatment felt relaxing and personalised. The whole experience made me feel refreshed and well cared for.',
    initials: 'PM',
  },
  {
    name: 'Kavya R.',
    service: 'Makeup',
    review: 'Beautiful attention to detail and such a welcoming experience. I felt comfortable throughout my appointment.',
    initials: 'KR',
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-[#fffdf9] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">Kind words, lovely moments</p>
          <h2 className="mt-4 font-serif text-4xl text-[#49372d] sm:text-5xl">A little love from our clients</h2>
          <p className="mt-4 text-sm leading-7 text-[#806d5f] sm:text-base">
            Every visit is an opportunity to make someone feel special. Here is what a great salon experience can feel like.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="flex flex-col rounded-3xl border border-[#eee2d7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7c5b42]/5 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-[#b48660]" aria-label="Illustrative five-star rating">
                  {Array.from({ length: 5 }, (_, i) => <Star key={i} size={15} fill="currentColor" strokeWidth={1.5} />)}
                </div>
                <Quote size={25} className="text-[#dfc9b5]" />
              </div>

              <p className="mt-6 flex-1 font-serif text-lg leading-8 text-[#604a3a]">“{item.review}”</p>

              <div className="mt-7 flex items-center gap-3 border-t border-[#f0e7df] pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e3d8] font-serif text-sm text-[#9a714e]">
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#49372d]">{item.name}</h3>
                  <p className="mt-1 text-xs text-[#907c6d]">{item.service}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Link href="/reviews" className="inline-flex items-center gap-2 rounded-full border border-[#d9c5b2] px-6 py-3 text-sm font-medium text-[#79583e] transition hover:bg-[#f7f0e8]">
            Explore Reviews <ArrowRight size={16} />
          </Link>
          <p className="max-w-lg text-xs leading-5 text-[#907c6d]">
            These are illustrative sample testimonials for the design preview, not verified customer reviews. Replace them with genuine customer feedback before publishing.
          </p>
        </div>
      </div>
    </section>
  );
}
