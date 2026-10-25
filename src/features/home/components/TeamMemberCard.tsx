
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { TeamMember } from '../types/team.types';

type TeamMemberCardProps = {
  member: TeamMember;
};

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#eee2d7] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#76543d]/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#ead8c7] via-[#dfc4ad] to-[#c9a58a]">
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-[center_25%] transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full items-center justify-center font-serif text-7xl text-white/90">
            {member.initials}
          </span>
        )}

        {member.featured && (
          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#79583e]">
            <Sparkles size={12} /> Featured
          </span>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a47753]">
          {member.role}
        </p>
        <h3 className="mt-2 font-serif text-2xl text-[#49372d]">
          {member.name}
        </h3>
        <p className="mt-2 text-sm text-[#907c6d]">{member.experience}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {member.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-[#f7f1e9] px-3 py-1.5 text-xs text-[#79583e]"
            >
              {specialty}
            </span>
          ))}
        </div>

        <Link
          href={`/book?staff=${encodeURIComponent(member.id)}`}
          className="mt-6 inline-flex items-center gap-2 border-t border-[#f0e7df] pt-5 text-sm font-semibold text-[#79583e] transition hover:text-[#49372d]"
        >
          Book with this stylist <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
