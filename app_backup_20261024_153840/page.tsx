
'use client';

import { useState } from 'react';
import {
  CalendarDays, Users, Scissors, IndianRupee, LayoutDashboard,
  CalendarCheck, Settings, Search, Bell, Plus, Clock, ArrowUpRight,
  Menu, X, Sparkles, ChevronDown
} from 'lucide-react';

const appointments = [
  { name: 'Aarohi Sharma', service: 'Hair Styling & Blowout', time: '10:00 AM', staff: 'Priya', status: 'Confirmed', color: 'bg-rose-100 text-rose-700' },
  { name: 'Meera Kapoor', service: 'Signature Facial', time: '11:30 AM', staff: 'Ananya', status: 'In progress', color: 'bg-amber-100 text-amber-800' },
  { name: 'Isha Verma', service: 'Manicure & Pedicure', time: '01:00 PM', staff: 'Neha', status: 'Upcoming', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Riya Malhotra', service: 'Bridal Makeup', time: '02:30 PM', staff: 'Priya', status: 'Upcoming', color: 'bg-emerald-100 text-emerald-700' },
];


const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Appointments', icon: CalendarDays },
  { label: 'Customers', icon: Users },
  { label: 'Services', icon: Scissors },
  { label: 'Payments', icon: IndianRupee },
  { label: 'Settings', icon: Settings },
];

export default function Home() {
  const [active, setActive] = useState('Overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState('');

  const metrics = [
    { label: "Today's Revenue", value: '₹24,850', change: '+12.8%', icon: IndianRupee, bg: 'bg-rose-50', fg: 'text-rose-700' },
    { label: 'Appointments', value: '18', change: '+8.2%', icon: CalendarCheck, bg: 'bg-amber-50', fg: 'text-amber-700' },
    { label: 'Total Customers', value: '1,284', change: '+16.4%', icon: Users, bg: 'bg-emerald-50', fg: 'text-emerald-700' },
    { label: 'Active Services', value: '24', change: '+4.5%', icon: Scissors, bg: 'bg-violet-50', fg: 'text-violet-700' },
  ];

  const sidebar = (
    <div className="flex h-full flex-col bg-[#fffdf9]">
      <div className="flex items-center gap-3 border-b border-[#eee7de] px-6 py-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#a76b63] text-white">
          <Sparkles size={23} />
        </div>
        <div>
          <h1 className="font-serif text-xl font-semibold tracking-wide text-[#4c3934]">Maison Belle</h1>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.24em] text-[#a28d82]">Beauty & Wellness</p>
        </div>
      </div>

      <div className="px-4 pt-7">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b2a096]">Workspace</p>
        <nav className="space-y-1">
          {navigation.map(({ label, icon: Icon }) => (
            <button key={label} onClick={() => { setActive(label); setMobileOpen(false); }}
              className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm transition ${active === label ? 'bg-[#a76b63] text-white shadow-md shadow-rose-900/10' : 'text-[#77675f] hover:bg-[#f5eee7]'}`}>
              <Icon size={18} strokeWidth={1.8} />
              <span className="flex-1">{label}</span>
              {active === label && <ArrowUpRight size={15} />}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4">
        <div className="rounded-2xl bg-[#f5eee7] p-4">
          <div className="mb-2 flex items-center gap-2 text-[#9a625a]">
            <Sparkles size={16} />
            <span className="text-xs font-semibold">Maison Belle Pro</span>
          </div>
          <p className="text-xs leading-5 text-[#847168]">Your beauty business, beautifully organized.</p>
          <button onClick={() => setActive('Settings')} className="mt-3 text-xs font-semibold text-[#9a625a]">Explore settings →</button>
        </div>
        <p className="px-2 pt-5 text-[10px] text-[#b4a59b]">MAISON BELLE · SALON STUDIO</p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#443732]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[260px] border-r border-[#eee7de] lg:block">
        {sidebar}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Close navigation" onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/30" />
          <aside className="absolute inset-y-0 left-0 w-[280px] shadow-xl">{sidebar}</aside>
        </div>
      )}

      <section className="min-h-screen lg:pl-[260px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#eee7de] bg-[#fffdf9]/95 px-4 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(true)} className="rounded-lg p-2 hover:bg-[#f5eee7] lg:hidden" aria-label="Open navigation">
              <Menu size={21} />
            </button>
            <div>
              <p className="text-xs text-[#a18d82]">Maison Belle / {active}</p>
              <h2 className="mt-1 text-lg font-semibold sm:text-xl">{active === 'Overview' ? 'Good morning, Abhishek' : active}</h2>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <label className="hidden items-center gap-2 rounded-xl border border-[#eee7de] bg-white px-3 py-2.5 md:flex">
              <Search size={16} className="text-[#a18d82]" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search appointments..." className="w-36 bg-transparent text-xs outline-none lg:w-48" />
            </label>
            <button aria-label="Notifications" className="relative rounded-xl border border-[#eee7de] bg-white p-2.5">
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#b86e64]" />
            </button>
            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8d2c8] text-sm font-semibold text-[#87584e]">A</div>
              <div className="hidden md:block">
                <p className="text-xs font-semibold">Abhishek</p>
                <p className="text-[10px] text-[#a18d82]">Salon Admin</p>
              </div>
              <ChevronDown size={14} className="text-[#a18d82]" />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] p-4 sm:p-8">
          {active === 'Overview' ? (
            <>
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm text-[#a18d82]">Saturday, October 24, 2026</p>
                  <h3 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">Your salon at a glance</h3>
                  <p className="mt-2 text-sm text-[#95847a]">Here&apos;s what&apos;s happening at your salon today.</p>
                </div>
                <button onClick={() => setActive('Appointments')} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#a76b63] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-900/10 transition hover:bg-[#8f5750]">
                  <Plus size={17} /> New appointment
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
                {metrics.map(({ label, value, change, icon: Icon, bg, fg }) => (
                  <article key={label} className="rounded-2xl border border-[#eee7de] bg-[#fffdf9] p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-stone-900/5">
                    <div className="flex items-start justify-between">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg} ${fg}`}><Icon size={20} /></div>
                      <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700"><ArrowUpRight size={13} />{change}</span>
                    </div>
                    <p className="mt-5 text-sm text-[#95847a]">{label}</p>
                    <p className="mt-1 font-serif text-3xl font-medium text-[#443732]">{value}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.65fr_1fr]">
                <section className="overflow-hidden rounded-2xl border border-[#eee7de] bg-[#fffdf9]">
                  <div className="flex items-center justify-between border-b border-[#eee7de] px-5 py-5 sm:px-6">
                    <div>
                      <h4 className="font-semibold">Today&apos;s appointments</h4>
                      <p className="mt-1 text-xs text-[#a18d82]">Your upcoming salon schedule</p>
                    </div>
                    <button onClick={() => setActive('Appointments')} className="text-xs font-semibold text-[#a76b63]">View all →</button>
                  </div>
                  <div className="divide-y divide-[#f0e9e2]">
                    {appointments.filter(a => `${a.name} ${a.service} ${a.staff}`.toLowerCase().includes(search.toLowerCase())).map((appointment, i) => (
                      <div key={appointment.name} className="flex flex-col gap-3 px-5 py-4 transition hover:bg-[#fdf9f4] sm:flex-row sm:items-center sm:px-6">
                        <div className="flex items-center gap-3 sm:w-[42%]">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1e2d8] text-sm font-semibold text-[#986c60]">{appointment.name.split(' ').map(n => n[0]).join('')}</div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{appointment.name}</p>
                            <p className="mt-1 truncate text-xs text-[#a18d82]">{appointment.service}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 sm:flex-1">
                          <div>
                            <p className="flex items-center gap-1.5 text-xs font-medium"><Clock size={13} className="text-[#a18d82]" />{appointment.time}</p>
                            <p className="mt-1 text-xs text-[#a18d82]">with {appointment.staff}</p>
                          </div>
                          <span className={`rounded-full px-2.5 py-1.5 text-[10px] font-medium ${appointment.color}`}>{appointment.status}</span>
                        </div>
                      </div>
                    ))}
                    {appointments.filter(a => `${a.name} ${a.service} ${a.staff}`.toLowerCase().includes(search.toLowerCase())).length === 0 && <p className="p-8 text-center text-sm text-[#95847a]">No appointments found.</p>}
                  </div>
                </section>

                <section className="rounded-2xl border border-[#eee7de] bg-[#fffdf9] p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Popular services</h4>
                      <p className="mt-1 text-xs text-[#a18d82]">Most booked this week</p>
                    </div>
                    <Scissors size={19} className="text-[#a76b63]" />
                  </div>
                  <div className="mt-6 space-y-6">
                    {[{ name: 'Signature Facial', count: 42, width: '85%', price: '₹1,499' }, { name: 'Hair Styling', count: 35, width: '70%', price: '₹899' }, { name: 'Manicure & Pedicure', count: 28, width: '56%', price: '₹1,199' }, { name: 'Bridal Makeup', count: 16, width: '32%', price: '₹4,999' }].map(service => (
                      <div key={service.name}>
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <span className="text-xs font-medium">{service.name}</span>
                          <span className="shrink-0 text-xs text-[#a18d82]">{service.price}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-[#f0e9e2]"><div className="h-full rounded-full bg-[#bd887e]" style={{ width: service.width }} /></div>
                        <p className="mt-1.5 text-[10px] text-[#a18d82]">{service.count} bookings</p>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setActive('Services')} className="mt-7 w-full rounded-xl border border-[#eadbd1] py-3 text-xs font-semibold text-[#9b665d] transition hover:bg-[#fbf3ed]">Manage services</button>
                </section>
              </div>

              <section className="mt-6 flex flex-col justify-between gap-4 rounded-2xl bg-[#a76b63] p-6 text-white sm:flex-row sm:items-center sm:p-8">
                <div>
                  <div className="flex items-center gap-2 text-rose-100"><Sparkles size={17} /><span className="text-xs font-medium uppercase tracking-[0.15em]">Your salon, your success</span></div>
                  <h4 className="mt-3 font-serif text-2xl">Make every visit memorable.</h4>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-rose-100">Keep track of your customers, appointments and services in one beautiful workspace.</p>
                </div>
                <button onClick={() => setActive('Customers')} className="shrink-0 rounded-xl bg-[#fffdf9] px-5 py-3 text-sm font-semibold text-[#925c54] transition hover:bg-white">Explore customers <ArrowUpRight size={15} className="ml-1 inline" /></button>
              </section>
            </>
          ) : (
            <section className="rounded-2xl border border-[#eee7de] bg-[#fffdf9] p-8 sm:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e5dc] text-[#a76b63]"><Sparkles size={26} /></div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#a76b63]">Maison Belle Workspace</p>
              <h3 className="mt-2 font-serif text-3xl">{active}</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#95847a]">The {active.toLowerCase()} workspace is ready for the next implementation step. This area will use the same premium design system and responsive layout.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => setActive('Overview')} className="rounded-xl bg-[#a76b63] px-5 py-3 text-sm font-medium text-white">Back to overview</button>
                <button onClick={() => setActive('Settings')} className="rounded-xl border border-[#eadbd1] px-5 py-3 text-sm font-medium text-[#925c54]">Settings</button>
              </div>
            </section>
          )}
          <footer className="py-8 text-center text-[11px] text-[#b0a095]">© 2026 Maison Belle · Beauty & Wellness Management</footer>
        </div>
      </section>
    </main>
  );
}
