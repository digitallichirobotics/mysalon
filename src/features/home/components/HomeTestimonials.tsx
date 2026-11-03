import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Quote, Star } from 'lucide-react';
import { salon } from '../../../data/salon';

// Review and aggregate rating provided by the salon owner, not a live feed.
const review = {
  name: 'Nayanika Palit',
  text: 'always welcoming and warm. absolutely love how they make me look after a haircut or going global. anyways, i would definitely recommend',
};

export default function HomeTestimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-[#fffdf9] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">From our Google reviews</p>
          <h2 id="testimonials-heading" className="mt-4 font-serif text-4xl text-[#49372d] sm:text-5xl">Real visits. Lovely words.</h2>
          <p className="mt-4 text-sm leading-7 text-[#806d5f]">Discover what our clients say about Gilli Gilli Salon and Spa.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <a href={salon.googleReviews} target="_blank" rel="noreferrer" aria-label="View Gilli Gilli Salon and Spa on Google Maps" className="flex flex-col items-center justify-center rounded-3xl border border-[#e4d3c2] bg-[#f7f1e9] p-8 text-center transition hover:border-[#a47753]">
            <span className="text-sm font-semibold text-[#49372d]">Google Reviews</span>
            <span className="mt-4 flex items-center gap-3"><span className="font-serif text-6xl text-[#49372d]">4.2</span><Star size={28} fill="currentColor" className="text-[#b48660]" aria-hidden="true" /></span>
            <span className="mt-3 text-sm text-[#806d5f]">Based on 20 Google reviews</span>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#79583e]">View on Google <ArrowUpRight size={16} /></span>
          </a>
          <article className="flex flex-col rounded-3xl border border-[#eee2d7] bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-center justify-between"><span className="text-xs font-medium text-[#907c6d]">Google review</span><Quote size={28} className="text-[#dfc9b5]" aria-hidden="true" /></div>
            <blockquote className="mt-5 flex-1 font-serif text-xl leading-8 text-[#604a3a]">&ldquo;{review.text}&rdquo;</blockquote>
            <div className="mt-7 flex items-center gap-3 border-t border-[#f0e7df] pt-5">
              <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e3d8] text-sm text-[#9a714e]">NP</span>
              <div><h3 className="text-sm font-semibold text-[#49372d]">{review.name}</h3><p className="mt-1 text-xs text-[#907c6d]">Haircut &amp; hair colour</p></div>
            </div>
          </article>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={salon.googleReviews} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#76543d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5d402e]">View all reviews on Google <ArrowUpRight size={16} /></a>
          <Link href="/reviews" className="inline-flex items-center gap-2 rounded-full border border-[#d9c5b2] px-6 py-3 text-sm font-medium text-[#79583e] transition hover:bg-[#f7f0e8]">Write a Review <ArrowRight size={16} /></Link>
        </div>
        <p className="mt-5 text-center text-xs leading-5 text-[#907c6d]">Review and rating shared from our Google listing. Open Google Maps and select Reviews for the full, latest feedback.</p>
      </div>
    </section>
  );
}
