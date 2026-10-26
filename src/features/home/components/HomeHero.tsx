
import Link from 'next/link';
import { ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';







export default function HomeHero() {




  return (
    <section className="relative overflow-hidden bg-[#fbf6f0]">
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#ead6c5]/40 blur-3xl" />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e7d6c5] bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-[#9a714e]">
            <Sparkles size={15} /> Your beauty sanctuary
          </div>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.12] tracking-tight text-[#49372d] sm:text-6xl lg:text-7xl">
            Beauty begins with a moment <span className="italic text-[#b48660]">for you.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#806d5f] sm:text-lg">
            Step into a world of thoughtful beauty rituals, expert care and little luxuries designed to help you feel your very best.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/appointments" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#a47753] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#896343]">
              Book Your Appointment <ArrowRight size={17} />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9c5b2] px-7 py-4 text-sm font-medium text-[#604a3a] transition hover:bg-white">
              Explore Services <ArrowDownRight size={17} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#e8d9cc] pt-7">
            <div><p className="font-serif text-2xl text-[#49372d]">Personalised</p><p className="mt-1 text-xs text-[#806d5f]">Beauty experiences</p></div>
            <div><p className="font-serif text-2xl text-[#49372d]">Expert care</p><p className="mt-1 text-xs text-[#806d5f]">Thoughtful treatments</p></div>
            <div><p className="font-serif text-2xl text-[#49372d]">Your time</p><p className="mt-1 text-xs text-[#806d5f]">Your moment to unwind</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
  <div className="absolute -inset-4 rotate-3 rounded-[48%_48%_12px_12px] border border-[#d9c1aa]" />

  <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_12px_12px] bg-[#eadbd0]">

    {/* Hero Image */}
    <Image
      src="/images/hero_img/hero.png"
      alt="Maison Belle Beauty and Wellness"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover object-center"
    />

    {/* Image Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#49372d]/70 via-transparent to-transparent" />

    {/* Everyday Badge */}
    <div className="absolute left-6 top-8 rounded-full bg-[#fffdf9]/90 px-4 py-2 text-xs tracking-wide text-[#604a3a]">
      A little luxury, every day
    </div>

    {/* Bottom Text */}
    <div className="absolute bottom-8 left-7 right-7 text-white">
      <p className="font-serif text-3xl sm:text-4xl">
        Feel beautifully you.
      </p>

      <p className="mt-3 max-w-xs text-sm leading-6 text-white/90">
        A calmer space. A thoughtful touch. A moment that is yours.
      </p>
    </div>
  </div>

  {/* Floating Card */}
  <div className="absolute -bottom-5 -left-2 rounded-2xl border border-[#e8d8c9] bg-[#fffdf9] px-5 py-4 shadow-lg sm:-left-8">
    <p className="font-serif text-lg text-[#49372d]">
      Made for you
    </p>

    <p className="mt-1 text-xs text-[#806d5f]">
      Your self-care ritual starts here
    </p>
  </div>
</div>
{/* 
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-4 rotate-3 rounded-[48%_48%_12px_12px] border border-[#d9c1aa]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_12px_12px] bg-[#eadbd0]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e7d4c3] via-[#d6b9a2] to-[#9f7d65]" />
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#49372d]/65 to-transparent" />
            <div className="absolute left-6 top-8 rounded-full bg-[#fffdf9]/90 px-4 py-2 text-xs tracking-wide text-[#604a3a]">
              A little luxury, every day
            </div>
            <div className="absolute bottom-8 left-7 right-7 text-white">
              <p className="font-serif text-3xl sm:text-4xl">Feel beautifully you.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/85">A calmer space. A thoughtful touch. A moment that is yours.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-2 rounded-2xl border border-[#e8d8c9] bg-[#fffdf9] px-5 py-4 shadow-lg sm:-left-8">
            <p className="font-serif text-lg text-[#49372d]">Made for you</p>
            <p className="mt-1 text-xs text-[#806d5f]">Your self-care ritual starts here</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
