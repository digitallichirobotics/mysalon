
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock3, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore hair, skincare, nail and makeup services at Maison Belle.',
};

const categories = [
  {
    name: 'Hair',
    subtitle: 'Style that feels like you',
    services: [
      { name: 'Haircut & Styling', description: 'A personalised haircut finished with a polished style.', price: '₹799', duration: '45 min' },
      { name: 'Hair Spa', description: 'A nourishing treatment for softer, healthier-looking hair.', price: '₹1,199', duration: '60 min' },
      { name: 'Hair Colour', description: 'Refresh your look with a tailored colour service.', price: '₹1,999', duration: '90 min' },
    ],
  },
  {
    name: 'Skin & Facials',
    subtitle: 'Your moment to glow',
    services: [
      { name: 'Express Facial', description: 'A refreshing facial for a clean, radiant appearance.', price: '₹999', duration: '40 min' },
      { name: 'Deep Cleansing Facial', description: 'A detailed cleansing treatment with relaxing care.', price: '₹1,499', duration: '60 min' },
      { name: 'Glow Ritual', description: 'A luxurious facial experience focused on hydration.', price: '₹1,799', duration: '75 min' },
    ],
  },
  {
    name: 'Nails & Makeup',
    subtitle: 'Details make the difference',
    services: [
      { name: 'Manicure & Pedicure', description: 'Thoughtful nail and hand-and-foot care.', price: '₹699', duration: '45 min' },
      { name: 'Party Makeup', description: 'A polished makeup look for your special occasion.', price: '₹1,499', duration: '60 min' },
      { name: 'Bridal Makeup', description: 'A personalised bridal beauty experience.', price: '₹7,999', duration: '150 min' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fffdf9]">
      <section className="bg-[#f7f1e9] px-5 py-20 text-center sm:px-8 lg:py-28">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
          <Sparkles size={15} /> Thoughtful beauty, personal care
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-tight text-[#49372d] sm:text-6xl lg:text-7xl">
          Services designed <span className="italic text-[#a47753]">around you.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#806d5f] sm:text-base">
          From everyday essentials to special-occasion treatments, discover a little time dedicated entirely to you.
        </p>
        <Link href="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#76543d] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#5d402e]">
          Book an appointment <ArrowRight size={17} />
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={category.name}>
              <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a47753]">0{index + 1} / Our menu</p>
                  <h2 className="mt-2 font-serif text-3xl text-[#49372d] sm:text-4xl">{category.name}</h2>
                </div>
                <p className="text-sm text-[#907c6d]">{category.subtitle}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <article key={service.name} className="group flex flex-col rounded-3xl border border-[#eee2d7] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#76543d]/5 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f1e9] text-[#a47753] transition group-hover:bg-[#76543d] group-hover:text-white">
                      <Sparkles size={21} />
                    </div>
                    <h3 className="mt-5 font-serif text-2xl text-[#49372d]">{service.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[#806d5f]">{service.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-[#f0e7df] pt-5">
                      <div>
                        <p className="font-serif text-2xl text-[#76543d]">{service.price}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-[#907c6d]">
                          <Clock3 size={13} /> {service.duration}
                        </p>
                      </div>
                      <Link href="/book" aria-label={`Book ${service.name}`} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7d7c8] text-[#76543d] transition hover:bg-[#76543d] hover:text-white">
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#604735] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#e4c5a5]">Need a little guidance?</p>
          <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">Let us help you find your perfect treatment.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#eadbd0]">
            Get in touch with our team to discuss your preferences and choose a service that suits you.
          </p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f4e6d8] px-7 py-3.5 text-sm font-semibold text-[#604735] transition hover:bg-white">
            Talk to our team <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
