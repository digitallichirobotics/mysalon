
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { teamMembers } from '../data/team.data';
import TeamMemberCard from './TeamMemberCard';

export default function HomeTeam() {
  return (
    <section className="bg-[#fffdf9] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
              <Sparkles size={15} /> Meet your beauty experts
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#49372d] sm:text-5xl">
              Good hands. <span className="italic text-[#a47753]">Beautiful results.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#806d5f] sm:text-base">
              Meet the people behind your experience, dedicated to thoughtful service and personalised care.
            </p>
          </div>
          <Link href="/book" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#79583e] transition hover:text-[#49372d]">
            Find your perfect stylist <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[#907c6d]">
          Sample profiles for the design preview. Replace them with your actual team details before launch.
        </p>
      </div>
    </section>
  );
}
