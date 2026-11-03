
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import salonBackground from '../../../../public/images/services/salon-background.jpg';
import hairStylingImage from '../../../../public/images/services/hair-styling.jpg';
import hairColourImage from '../../../../public/images/services/hair-colour.jpg';
import facialImage from '../../../../public/images/services/facial.jpg';
import pedicureImage from '../../../../public/images/services/pedicure.jpg';
import hairTreatmentImage from '../../../../public/images/services/hair-treatment.jpg';
import globalColourImage from '../../../../public/images/services/global-colour.jpg';
import lotusFacialImage from '../../../../public/images/services/lotus-facial.jpg';
import premiumFacialImage from '../../../../public/images/services/premium-facial.jpg';
import hairSpaImage from '../../../../public/images/services/hair-spa.jpg';
import { ArrowRight, Clock3, Sparkles, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Festival Combo Offers | Gilli Gilli Salon and Spa',
  description:
    'Explore exclusive festival beauty combo offers at Gilli Gilli Salon and Spa. Haircuts, facials, waxing, pedicure and hair treatments at special prices.',
};

const categories = [
  {
    name: 'Hair Combo Offers',
    id: 'hair-combos',
    subtitle: 'Style, refresh and transform your hair',
    services: [
      {
        name: 'Hair Cut + Shampoo + Blow Dry',
        image: hairStylingImage,
        description:
          'Complete hair care with a fresh haircut, refreshing shampoo and professional blow dry.',
        oldPrice: '₹580',
        price: '₹299',
      },
      {
        name: 'Colour Touch-up + Hair Cut + Full Arm Waxing',
        image: hairColourImage,
        description:
          'Refresh your hair colour, get a stylish haircut and enjoy full arm waxing.',
        oldPrice: '₹1,400',
        price: '₹799',
      },
      {
        name: 'Global Hair Colouring + Hair Cut + Full Arm Waxing',
        image: globalColourImage,
        description:
          'Complete global hair colouring with a beautiful haircut and full arm waxing.',
        oldPrice: '₹2,850',
        price: '₹1,499',
      },
    ],
  },
  {
    name: 'Waxing & Pedicure',
    id: 'waxing-pedicure',
    subtitle: 'Feel fresh from head to toe',
    services: [
      {
        name: 'Full Arm + Half Leg Waxing + Pedicure',
        image: pedicureImage,
        description:
          'Enjoy smooth skin with full arm waxing, half leg waxing and a relaxing normal pedicure.',
        oldPrice: '₹1,050',
        price: '₹599',
      },
    ],
  },
  {
    name: 'Facial & Beauty Combos',
    id: 'facial-beauty',
    subtitle: 'Your moment to glow',
    services: [
      {
        name: 'Glow Facial + Oxy Bleach + Full Hand Waxing',
        image: facialImage,
        description:
          'A glow facial combined with face oxy bleach and full hand waxing for a refreshing beauty experience.',
        oldPrice: '₹1,800',
        price: '₹1,199',
      },
      {
        name: 'Lotus Normal Facial + Oxy Bleach + Waxing + Pedicure + Threading',
        image: lotusFacialImage,
        description:
          'Lotus normal facial, face oxy bleach, full arm and half leg waxing, normal pedicure and threading.',
        oldPrice: '₹2,580',
        price: '₹1,599',
      },
      {
        name: 'Shahnaz Gold / Diamond Facial Combo',
        image: premiumFacialImage,
        description:
          'Premium Shahnaz Gold or Diamond facial with haircut, full arm and half leg waxing and threading.',
        oldPrice: '₹3,830',
        price: '₹2,999',
      },
    ],
  },
  {
    name: 'Hair Treatments',
    id: 'hair-treatments',
    subtitle: 'Give your hair the care it deserves',
    services: [
      {
        name: 'Hair Spa + Hair Cut + Full Arm Waxing',
        image: hairSpaImage,
        description:
          'A nourishing hair spa treatment with a fresh haircut and full arm waxing.',
        oldPrice: '₹1,850',
        price: '₹1,199',
      },
      {
        name: 'Hair Straightening / Smoothening / Rebonding',
        image: hairTreatmentImage,
        description:
          'Choose your preferred hair transformation with a haircut and full arm waxing. Pricing depends on hair length.',
        oldPrice: '',
        price: '₹2,999 / ₹3,999',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fffdf9]">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#49372d] px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-36">
        <Image src={salonBackground} alt="" fill sizes="100vw" className="-z-20 object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#21170f]/75 via-[#21170f]/65 to-[#21170f]/85" />
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#f0d4b7]">
          <Sparkles size={15} />
          Special Festival Collection
        </p>

        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
          Beauty that feels{' '}
          <span className="italic text-[#f0d4b7]">
            special.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
          Celebrate the season with exclusive beauty packages.
          From hair transformations to luxurious facials,
          enjoy your favourite treatments at special festival prices.
        </p>

        <Link
          href="/appointments"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f0d4b7] px-7 py-3.5 text-sm font-semibold text-[#49372d] transition hover:bg-white"
        >
          Explore Our Offers
          <ArrowRight size={17} />
        </Link>
      </section>

      {/* Festival Offer Banner */}
      <section className="px-5 pt-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-3xl border border-[#ead9c8] bg-white p-7 text-center sm:flex-row sm:text-left sm:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
              Limited Time Collection
            </p>

            <h2 className="mt-2 font-serif text-2xl text-[#49372d] sm:text-3xl">
              More Beauty. More Care. More Savings.
            </h2>

            <p className="mt-2 text-sm text-[#806d5f]">
              Explore our exclusive festival combo packages.
            </p>
          </div>

          <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full bg-[#f7f1e9] text-[#76543d]">
            <Tag size={20} />
            <span className="mt-1 text-xs font-semibold">Special</span>
            <span className="text-xs font-semibold">Offers</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">

        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
            Discover Our Menu
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#49372d] sm:text-5xl">
            Festival Combo Offers
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#806d5f]">
            Handpicked beauty combinations designed to make
            you look and feel your best.
          </p>
        </div>

        <div className="space-y-16">

          {categories.map((category, index) => (
            <div key={category.name} id={category.id} className="scroll-mt-28">

              {/* Category Heading */}
              <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a47753]">
                    0{index + 1} / Our Menu
                  </p>

                  <h2 className="mt-2 font-serif text-3xl text-[#49372d] sm:text-4xl">
                    {category.name}
                  </h2>
                </div>

                <p className="text-sm text-[#907c6d]">
                  {category.subtitle}
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {category.services.map((service) => (
                  <article
                    key={service.name}
                    className="group relative isolate flex flex-col overflow-hidden rounded-3xl border border-[#eee2d7] bg-[#30231c] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#76543d]/15 sm:p-7"
                  >
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
                      className="-z-20 object-cover object-center motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
                    />
                    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#17100b]/80 via-[#17100b]/90 to-[#17100b]/95" />

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-[#f0d4b7] backdrop-blur-sm">
                      <Sparkles size={21} />
                    </div>

                    {/* Service Name */}
                    <h3 className="mt-5 font-serif text-2xl leading-snug text-white">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 flex-1 text-sm leading-6 text-white/85">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mt-6 border-t border-white/20 pt-5">

                      <div className="flex flex-wrap items-center gap-3">

                        {service.oldPrice && (
                          <span className="text-sm text-white/65 line-through">
                            {service.oldPrice}
                          </span>
                        )}

                        <span className="font-serif text-2xl font-semibold text-[#f0d4b7]">
                          {service.price}
                        </span>

                      </div>

                      <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#f0d4b7]">
                        <Tag size={13} />
                        Special Festival Price
                      </p>

                      {/* Booking Button */}
                      <Link
                        href={`/appointments?service=${encodeURIComponent(service.name)}`}
                        aria-label={`Book ${service.name}`}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#f0d4b7] px-5 py-3 text-sm font-semibold text-[#49372d] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        Book This Combo
                        <ArrowRight size={17} />
                      </Link>

                    </div>
                  </article>
                ))}

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#604735] px-6 py-12 text-center sm:px-12 sm:py-16">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#e4c5a5]">
            Your Beauty, Our Passion
          </p>

          <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
            Ready for your beauty transformation?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#eadbd0]">
            Not sure which combo is right for you?
            Get in touch with our team and let us help you
            choose the perfect beauty package.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4e6d8] px-7 py-3.5 text-sm font-semibold text-[#604735] transition hover:bg-white"
            >
              Book Appointment
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c0aa] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="px-5 pb-10 text-center">
        <p className="text-xs text-[#907c6d]">
          * Conditions apply. Hair treatment prices depend on hair length.
          Please confirm offer availability while booking.
        </p>
      </section>

    </main>
  );
}
