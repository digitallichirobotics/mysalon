
import Link from 'next/link';
import { ArrowRight,  Sparkles } from 'lucide-react';

const team = [
  { name: 'Aanya Sharma', role: 'Senior Hair Stylist', specialty: 'Haircuts · Styling · Hair Care', initials: 'AS', color: 'from-[#e8d5c3] to-[#c4a38a]' },
  { name: 'Meera Kapoor', role: 'Skincare Specialist', specialty: 'Facials · Skin Rituals · Glow Care', initials: 'MK', color: 'from-[#eadbd2] to-[#c6a79b]' },
  { name: 'Riya Malhotra', role: 'Makeup Artist', specialty: 'Soft Glam · Bridal · Occasion Makeup', initials: 'RM', color: 'from-[#e8d9df] to-[#c5a6b2]' },
];

export default function HomeTeam() {
  return (
    <section className="bg-[#f7f0e8] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
              <Sparkles size={15} /> The hands behind the magic
            </p>
            <h2 className="font-serif text-4xl text-[#49372d] sm:text-5xl">Meet your beauty experts</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#806d5f] sm:text-base">
              Thoughtful professionals who bring skill, care and creativity to every appointment.
            </p>
          </div>
          <Link href="/book" className="inline-flex items-center gap-2 text-sm font-medium text-[#9a714e] hover:text-[#604a3a]">
            Book with our team <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <article key={member.name} className="group overflow-hidden rounded-3xl border border-[#e8d9cc] bg-[#fffdf9] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7c5b42]/5">
              <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${member.color}`}>
                <div className="absolute inset-6 rounded-[48%_48%_12px_12px] border border-white/40" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/60 bg-white/25 font-serif text-4xl text-white shadow-inner transition duration-500 group-hover:scale-105">
                  {member.initials}
                </div>
                <span className="absolute left-5 top-5 rounded-full bg-[#fffdf9]/85 px-3 py-2 text-[10px] uppercase tracking-[2px] text-[#79583e]">
                  Beauty expert 0{index + 1}
                </span>
                <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#fffdf9]/85 text-[#79583e]">
                  <Sparkles size={17} />
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[2px] text-[#a47753]">{member.role}</p>
                <h3 className="mt-2 font-serif text-2xl text-[#49372d]">{member.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#806d5f]">{member.specialty}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[#eee2d7] pt-5">
                  <Link href="/book" className="inline-flex items-center gap-2 text-sm font-medium text-[#79583e] hover:text-[#a47753]">
                    Book appointment <ArrowRight size={15} />
                  </Link>
                  <span aria-label="Instagram profile coming soon" title="Social profile coming soon" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8d9cc] text-[#a47753]">
                    
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-[#907c6d]">Sample team profiles for design preview. Replace names and details with your actual salon team.</p>
      </div>
    </section>
  );
}
