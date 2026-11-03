
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Heart,
  Leaf,
  Sparkles,
} from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    title: 'Personalised Care',
    text: 'Every treatment is tailored to your individual needs.',
  },
  {
    icon: Leaf,
    title: 'Thoughtful Beauty',
    text: 'A calming experience focused on comfort and self-care.',
  },
  {
    icon: Sparkles,
    title: 'Expert Touch',
    text: 'Dedicated professionals who care about every detail.',
  },
];

export default function HomeAbout() {
  return (
    <section className="overflow-hidden bg-[#f7f0e8] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* LEFT: Image Card */}
        <div className="relative mx-auto w-full max-w-lg">

          {/* Outer Decorative Border */}
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[180px_180px_20px_20px] border border-[#d9c1aa]" />

          {/* Main Image Container */}
          <div className="relative isolate aspect-[4/5] overflow-hidden rounded-[180px_180px_20px_20px] bg-[#c9aa91]">

            {/* Salon Image */}
            <Image
              src="/images/about_img/about.jpeg"
              alt="Maison Belle Beauty and Wellness Salon"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="z-0 object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {/* Image Gradient Overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#49372d]/90 via-[#49372d]/10 to-transparent" />

            {/* Decorative Icon */}
            {/* <div className="absolute left-7 top-8 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#fffdf9]/90 text-[#9a714e] shadow-sm">
              <Sparkles size={28} />
            </div> */}

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-7 sm:p-10">

              {/* <p className="text-xs font-semibold uppercase tracking-[3px] text-white/85">
              Gilli Gilli Saloon 
              </p> */}

              <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight text-white sm:text-5xl">
                Beauty is a feeling, not a standard.
              </h2>

              <div className="mt-6 h-px w-16 bg-white/80" />

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/90">
                A space to pause, recharge and celebrate the beauty that is uniquely yours.
              </p>

            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-5 -right-2 z-20 rounded-2xl border border-[#e8d8c9] bg-[#fffdf9] px-5 py-4 shadow-lg sm:-right-6">
            <p className="font-serif text-xl text-[#49372d]">
              Your moment
            </p>

            <p className="mt-1 text-xs text-[#806d5f]">
              Always worth taking
            </p>
          </div>

        </div>

        {/* RIGHT: About Content */}
        <div className="pt-4 lg:pt-0">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
            A little about us
          </p>

          <h2 className="max-w-xl font-serif text-4xl leading-tight text-[#49372d] sm:text-5xl lg:text-6xl">
            More than a salon.{' '}
            <span className="italic text-[#b48660]">
              A feeling.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#806d5f]">
            At Maison Belle, we believe self-care should feel personal,
            peaceful and effortless. Our approach brings together
            thoughtful treatments, attentive service and an atmosphere
            where you can truly unwind.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#806d5f]">
            Whether you are refreshing your everyday look or preparing
            for a special occasion, we want every visit to leave you
            feeling confident and cared for.
          </p>

          {/* Highlights */}
          <div className="mt-9 space-y-6">

            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ead9c8] text-[#9a714e]">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#49372d]">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#806d5f]">
                    {text}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* About Button */}
          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#c9ad93] px-6 py-3 text-sm font-medium text-[#604a3a] transition-all duration-300 hover:bg-[#fffdf9] hover:shadow-md"
          >
            Discover Our Story
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </div>
    </section>
  );
}
