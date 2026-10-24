
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock, Sparkles } from 'lucide-react';

export default function HomeBookingCTA() {
  return (
    <section className="bg-[#fffdf9] px-5 py-16 sm:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#604735] px-6 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#b58d69]/15 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#e4c5a5]">
              <Sparkles size={15} /> Your time, your moment
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              A little time for yourself changes everything.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#eadbd0] sm:text-base">
              Step away from the everyday and enjoy thoughtful treatments, expert care and a moment that is entirely yours.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4e6d8] px-7 py-3.5 text-sm font-semibold text-[#604735] transition hover:bg-white">
                Book an appointment <ArrowRight size={17} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
                Explore treatments
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:w-64 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <CalendarDays className="text-[#e4c5a5]" size={23} />
              <h3 className="mt-4 font-serif text-xl text-white">Made for you</h3>
              <p className="mt-2 text-sm leading-6 text-[#eadbd0]">Choose a treatment and a time that works for your day.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <Clock className="text-[#e4c5a5]" size={23} />
              <h3 className="mt-4 font-serif text-xl text-white">Your own pace</h3>
              <p className="mt-2 text-sm leading-6 text-[#eadbd0]">Make space in your schedule for a little self-care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
