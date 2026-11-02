
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, Tag } from 'lucide-react';

const offers = [
  {
    label: 'FIRST VISIT',
    title: 'Your First Beauty Ritual',
    description: 'Discover your favourite treatments with a special welcome offer.',
    discount: '15%',
    detail: 'OFF YOUR FIRST VISIT',
    benefits: ['Personalised consultation', 'Choose from selected services'],
    style: 'bg-[#f5e7dc]',
  },
  {
    label: 'SELF-CARE SPECIAL',
    title: 'The Perfect Pair',
    description: 'Combine two selected treatments for a little extra indulgence.',
    discount: '20%',
    detail: 'ON SELECTED COMBOS',
    benefits: ['Combine selected treatments', 'One relaxing salon visit'],
    style: 'bg-[#e9e0d5]',
  },
  {
    label: 'A LITTLE EXTRA',
    title: 'Your Birthday Treat',
    description: 'Celebrate your special month with a little beauty indulgence.',
    discount: 'SPECIAL',
    detail: 'BIRTHDAY PRIVILEGE',
    benefits: ['Available during your birthday month', 'Show your birthday details'],
    style: 'bg-[#eee5e9]',
  },
];

export default function HomeOffers() {
  return (
    <section className="bg-[#fffdf9] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
            <Sparkles size={15} /> Something special for you
          </span>
          <h2 className="mt-4 font-serif text-4xl text-[#49372d] sm:text-5xl">
            Little luxuries, lovely offers
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#806d5f] sm:text-base">
            Make room for a little self-care with thoughtfully curated salon privileges.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.label} className={`group relative overflow-hidden rounded-3xl border border-[#e8d9cc] ${offer.style} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7c5b42]/10 sm:p-8`}>
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#a47753]/15 transition group-hover:scale-110" />
              <div className="relative flex items-center justify-between gap-3">
                <span className="rounded-full border border-[#cbb29b] bg-white/50 px-3 py-2 text-[10px] font-semibold tracking-[2px] text-[#8d694b]">
                  {offer.label}
                </span>
                <Tag size={19} className="text-[#a47753]" />
              </div>

              <div className="relative mt-8">
                <p className="font-serif text-4xl text-[#9a714e] sm:text-5xl">{offer.discount}</p>
                <p className="mt-2 text-[10px] font-semibold tracking-[2px] text-[#806d5f]">{offer.detail}</p>
                <h3 className="mt-6 font-serif text-2xl text-[#49372d]">{offer.title}</h3>
                <p className="mt-3 min-h-[52px] text-sm leading-6 text-[#806d5f]">{offer.description}</p>
              </div>

              <ul className="relative mt-6 space-y-3 border-t border-[#a47753]/15 pt-5">
                {offer.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-[#68564a]">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#9a714e]" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link href="/appointments" className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#79583e] transition hover:gap-3">
                Explore & Book <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-[#907c6d]">
          Sample promotional concepts for design preview. Confirm actual discounts, eligibility and validity before publishing.
        </p>
      </div>
    </section>
  );
}
