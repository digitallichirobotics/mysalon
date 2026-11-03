import Link from 'next/link';
import { salon } from '../../data/salon';

type LegalSection = { title: string; text: string };

export default function LegalPage({ title, introduction, sections }: {
  title: string;
  introduction: string;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-[#fffdf9]">
      <header className="border-b border-[#e8dbce] bg-[#f7f1e9] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">Gilli Gilli Salon and Spa</p>
          <h1 className="mt-4 font-serif text-4xl text-[#49372d] sm:text-5xl">{title}</h1>
          <p className="mt-5 text-sm leading-7 text-[#806d5f]">{introduction}</p>
          <p className="mt-4 text-xs text-[#907c6d]">Last updated: 3 November 2026</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="On this page" className="mb-10 rounded-2xl border border-[#e8dbce] bg-white p-6">
          <p className="text-sm font-semibold text-[#49372d]">On this page</p>
          <ol className="mt-4 grid list-inside list-decimal gap-3 text-sm text-[#79583e] sm:grid-cols-2">
            {sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`} className="underline-offset-4 hover:underline">{section.title}</a></li>)}
          </ol>
        </nav>
        <div className="space-y-9">
          {sections.map((section, index) => (
            <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-28">
              <h2 className="font-serif text-2xl text-[#49372d]">{index + 1}. {section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#806d5f]">{section.text}</p>
            </section>
          ))}
        </div>
        <section className="mt-12 rounded-2xl bg-[#f7f1e9] p-6">
          <h2 className="font-serif text-2xl text-[#49372d]">Contact us</h2>
          <p className="mt-3 text-sm leading-7 text-[#806d5f]">Gilli Gilli Salon and Spa<br />{salon.address}</p>
          <a href={salon.phoneHref} className="mt-3 inline-block text-sm font-semibold text-[#79583e] underline underline-offset-4">{salon.phone}</a>
        </section>
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#79583e]">
          <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>
          <Link href="/terms" className="underline underline-offset-4">Terms &amp; Conditions</Link>
          <Link href="/contact" className="underline underline-offset-4">Contact the salon</Link>
        </div>
      </div>
    </main>
  );
}
