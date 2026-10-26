
import Link from 'next/link';
import { ArrowRight, Clock3, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit our salon',
    detail: 'Add your salon address here',
  },
  {
    icon: Phone,
    title: 'Give us a call',
    detail: '+91 XXXXX XXXXX',
  },
  {
    icon: Mail,
    title: 'Email us',
    detail: 'hello@maisonbelle.com',
  },
];

export default function HomeContact() {
  return (
    <section className="bg-[#f7f1e9] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">
              <Sparkles size={15} /> We would love to meet you
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#49372d] sm:text-5xl">
              Your next favourite salon experience starts here.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#806d5f] sm:text-base">
              Have a question about a treatment or need help choosing the right service? Get in touch with our team.
            </p>

            <div className="mt-9 space-y-6">
              {contactDetails.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#e7d7c8] bg-white text-[#a47753]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#49372d]">{title}</h3>
                    <p className="mt-1 text-sm text-[#806d5f]">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#79583e] transition hover:text-[#49372d]">
              Contact our team <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-[#eee2d7] bg-white p-7 shadow-sm shadow-[#76543d]/5 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4e6d8] text-[#a47753]">
                <Clock3 size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a47753]">Plan your visit</p>
                <h3 className="mt-1 font-serif text-2xl text-[#49372d]">Opening hours</h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                ['Monday – Friday', '10:00 AM – 8:00 PM'],
                ['Saturday', '10:00 AM – 8:00 PM'],
                ['Sunday', '11:00 AM – 6:00 PM'],
              ].map(([day, hours]) => (
                <div key={day} className="flex flex-wrap justify-between gap-2 border-b border-[#f0e7df] pb-4 text-sm">
                  <span className="text-[#604a3a]">{day}</span>
                  <span className="font-medium text-[#907c6d]">{hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-[#f7f1e9] p-5">
              <p className="font-serif text-xl text-[#49372d]">A little time just for you.</p>
              <p className="mt-2 text-sm leading-6 text-[#806d5f]">
                Reserve your preferred treatment and make your next visit something special.
              </p>
              <Link href="/appointments" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#76543d] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#5d402e]">
                Book your appointment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-[#e8dbce] pt-6 text-center text-xs leading-5 text-[#907c6d]">
          Please replace the sample contact details and opening hours with your salon’s actual information before launch.
        </p>
      </div>
    </section>
  );
}
