
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Check, CheckCircle2, Clock3, Scissors, Sparkles, UserRound } from 'lucide-react';
import { bookingServices, bookingStaff, bookingTimeSlots } from '../data/booking.data';
import type { BookingDetails } from '../types/appointment.types';

type BookingDate = { value: string; day: string; number: number; month: string };

const money = (amount: number) => amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const dateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const dateLabel = (value: string) => new Date(`${value}T12:00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState('');
  const [staffId, setStaffId] = useState('any');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('All');
  const [dates, setDates] = useState<BookingDate[]>([]);
  const [todayKey, setTodayKey] = useState('');
  const [details, setDetails] = useState<BookingDetails>({ customerName: '', email: '', phone: '', notes: '' });
  const [bookingNumber, setBookingNumber] = useState('');

  const service = bookingServices.find((item) => item.id === serviceId);
  const staff = bookingStaff.find((item) => item.id === staffId);
  const categories = ['All', ...Array.from(new Set(bookingServices.map((item) => item.category)))];
  const filteredServices = category === 'All' ? bookingServices : bookingServices.filter((item) => item.category === category);

  useEffect(() => {
    const today = new Date();
    setTodayKey(dateKey(today));

    const nextDates = Array.from({ length: 14 }, (_, index) => {
      const value = new Date(today);
      value.setHours(12, 0, 0, 0);
      value.setDate(value.getDate() + index);
      return {
        value: dateKey(value),
        day: value.toLocaleDateString('en-IN', { weekday: 'short' }),
        number: value.getDate(),
        month: value.toLocaleDateString('en-IN', { month: 'short' }),
      };
    });

    setDates(nextDates);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get('service');
    const requestedStaff = params.get('staff');

    if (requestedService && bookingServices.some((item) => item.id === requestedService)) setServiceId(requestedService);
    if (requestedStaff && bookingStaff.some((item) => item.id === requestedStaff)) setStaffId(requestedStaff);
  }, []);

  const updateDetails = (field: keyof BookingDetails, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  const isPastSlot = (slot: string) => {
    if (!date || date !== todayKey) return false;

    const [clock, period] = slot.split(' ');
    const [hoursText, minutesText] = clock.split(':');
    let hours = Number(hoursText) % 12;
    if (period === 'PM') hours += 12;

    const slotMinutes = hours * 60 + Number(minutesText);
    const now = new Date();
    return slotMinutes <= now.getHours() * 60 + now.getMinutes();
  };

  const canContinue = () => {
    if (step === 1) return Boolean(serviceId);
    if (step === 2) return Boolean(staffId);
    if (step === 3) return Boolean(date && time && !isPastSlot(time));
    return Boolean(
      details.customerName.trim() &&
      /^\S+@\S+\.\S+$/.test(details.email) &&
      /^[0-9+\s()-]{8,18}$/.test(details.phone.trim())
    );
  };

  const next = () => {
    if (!canContinue()) return;

    if (step === 4) {
      setBookingNumber(`MB${Date.now().toString().slice(-8)}`);
      setStep(5);
      return;
    }

    setStep((current) => Math.min(current + 1, 5));
  };

  const resetBooking = () => {
    setStep(1);
    setServiceId('');
    setStaffId('any');
    setDate('');
    setTime('');
    setCategory('All');
    setDetails({ customerName: '', email: '', phone: '', notes: '' });
    setBookingNumber('');
  };

  return (
    <main className="min-h-screen bg-[#fffdf9] px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#a47753] hover:text-[#76543d]">
            <Sparkles size={17} /> Maison Belle
          </Link>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">Your moment of beauty</p>
          <h1 className="mt-3 font-serif text-4xl text-[#49372d] sm:text-5xl">
            {step === 5 ? 'Your visit starts here' : 'Book an appointment'}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#806d5f]">
            {step === 5 ? 'Your demo booking has been created successfully.' : 'A little time for yourself. Choose your treatment and let us take care of the rest.'}
          </p>
        </header>

        {step < 5 && (
          <div className="mx-auto mb-9 grid max-w-3xl grid-cols-4 gap-2">
            {['Service', 'Stylist', 'Date & time', 'Your details'].map((label, index) => {
              const number = index + 1;
              const complete = step > number;

              return (
                <div key={label} className="min-w-0">
                  <div className={`flex h-9 items-center justify-center gap-1.5 rounded-full text-xs font-semibold ${step === number ? 'bg-[#76543d] text-white' : complete ? 'bg-[#e8d7c5] text-[#76543d]' : 'bg-[#f3ece5] text-[#9a8778]'}`}>
                    {complete ? <Check size={14} /> : String(number).padStart(2, '0')}
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                  <div className={`mt-2 h-1 rounded-full ${step >= number ? 'bg-[#b58b68]' : 'bg-[#eee3d8]'}`} />
                </div>
              );
            })}
          </div>
        )}

        {step === 5 ? (
          <section className="mx-auto max-w-2xl rounded-3xl border border-[#eadbcd] bg-white p-7 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f3e9] text-[#467a50]">
              <CheckCircle2 size={34} />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[2px] text-[#a47753]">Booking reference</p>
            <h2 className="mt-2 font-serif text-3xl text-[#49372d]">{bookingNumber}</h2>
            <p className="mt-3 text-sm text-[#806d5f]">
              Thank you, {details.customerName}. This is a frontend demo confirmation; no real appointment has been saved or sent to the salon.
            </p>

            <div className="mt-8 rounded-2xl bg-[#faf5ef] p-5 text-left">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl text-[#49372d]">{service?.name}</h3>
                  <p className="mt-1 text-sm text-[#806d5f]">{staff?.name ?? 'Any available stylist'}</p>
                </div>
                <p className="font-semibold text-[#76543d]">{service ? money(service.price) : ''}</p>
              </div>
              <div className="mt-5 grid gap-3 border-t border-[#eadbcd] pt-4 text-sm text-[#715d4e] sm:grid-cols-2">
                <p className="flex items-center gap-2"><CalendarDays size={16} /> {date ? dateLabel(date) : ''}</p>
                <p className="flex items-center gap-2"><Clock3 size={16} /> {time}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button onClick={resetBooking} className="rounded-full border border-[#ddc9b6] px-6 py-3 text-sm font-semibold text-[#76543d] hover:bg-[#faf5ef]">
                Book another appointment
              </button>
              <Link href="/" className="rounded-full bg-[#76543d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5d402e]">
                Back to home
              </Link>
            </div>
          </section>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_320px]">
            <section className="min-w-0 rounded-3xl border border-[#eee2d7] bg-white p-5 sm:p-8">
              {step === 1 && (
                <>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7f1e9] text-[#a47753]"><Scissors size={21} /></span>
                    <div>
                      <h2 className="font-serif text-2xl text-[#49372d]">Choose your service</h2>
                      <p className="mt-1 text-sm text-[#907c6d]">Select the treatment you would love today.</p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {categories.map((item) => (
                      <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${category === item ? 'bg-[#76543d] text-white' : 'bg-[#f7f1e9] text-[#79583e] hover:bg-[#eee0d2]'}`}>
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {filteredServices.map((item) => (
                      <button key={item.id} onClick={() => setServiceId(item.id)} className={`rounded-2xl border p-4 text-left transition ${serviceId === item.id ? 'border-[#a47753] bg-[#faf5ef] ring-1 ring-[#a47753]' : 'border-[#eee2d7] hover:border-[#d5bda6]'}`}>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#a47753]">{item.category}</p>
                            <h3 className="mt-2 font-serif text-lg text-[#49372d]">{item.name}</h3>
                          </div>
                          <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${serviceId === item.id ? 'border-[#76543d] bg-[#76543d] text-white' : 'border-[#ddc9b6]'}`}>
                            {serviceId === item.id && <Check size={12} />}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-5 text-[#806d5f]">{item.description}</p>
                        <div className="mt-4 flex items-center justify-between border-t border-[#eee2d7] pt-3">
                          <span className="flex items-center gap-1.5 text-xs text-[#907c6d]"><Clock3 size={13} /> {item.duration} min</span>
                          <span className="font-semibold text-[#76543d]">{money(item.price)}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7f1e9] text-[#a47753]"><UserRound size={21} /></span>
                    <div>
                      <h2 className="font-serif text-2xl text-[#49372d]">Choose your stylist</h2>
                      <p className="mt-1 text-sm text-[#907c6d]">Pick your preferred professional.</p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <button onClick={() => setStaffId('any')} className={`rounded-2xl border p-5 text-left ${staffId === 'any' ? 'border-[#a47753] bg-[#faf5ef] ring-1 ring-[#a47753]' : 'border-[#eee2d7] hover:border-[#d5bda6]'}`}>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1e3d8] text-sm font-semibold text-[#79583e]"><Sparkles size={20} /></span>
                      <h3 className="mt-4 font-serif text-xl text-[#49372d]">Any available stylist</h3>
                      <p className="mt-2 text-sm text-[#806d5f]">Let us match you with an available professional.</p>
                    </button>

                    {bookingStaff.map((item) => {
                      const selected = staffId === item.id;

                      return (
                        <button key={item.id} onClick={() => setStaffId(item.id)} className={`rounded-2xl border p-5 text-left transition ${selected ? 'border-[#a47753] bg-[#faf5ef] ring-1 ring-[#a47753]' : 'border-[#eee2d7] hover:border-[#d5bda6]'}`}>
                          <div className="flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8d7c5] font-serif text-lg text-[#79583e]">{item.initials}</span>
                            <div>
                              <h3 className="font-serif text-lg text-[#49372d]">{item.name}</h3>
                              <p className="mt-1 text-xs text-[#907c6d]">{item.role}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.specialties.map((tag) => (
                              <span key={tag} className="rounded-full bg-[#f7f1e9] px-3 py-1 text-xs text-[#79583e]">{tag}</span>
                            ))}
                          </div>
                          {selected && <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#76543d]"><Check size={14} /> Selected</p>}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7f1e9] text-[#a47753]"><CalendarDays size={21} /></span>
                    <div>
                      <h2 className="font-serif text-2xl text-[#49372d]">Date & time</h2>
                      <p className="mt-1 text-sm text-[#907c6d]">Choose a date and preferred time.</p>
                    </div>
                  </div>

                  <h3 className="mt-7 text-sm font-semibold text-[#604a3a]">Select a date</h3>
                  <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
                    {dates.map((item) => (
                      <button key={item.value} onClick={() => { setDate(item.value); setTime(''); }} className={`rounded-2xl border px-1 py-3 transition ${date === item.value ? 'border-[#76543d] bg-[#76543d] text-white' : 'border-[#eee2d7] text-[#604a3a] hover:border-[#d5bda6]'}`}>
                        <span className="block text-[11px]">{item.day}</span>
                        <span className="mt-1 block font-serif text-xl">{item.number}</span>
                        <span className={`mt-1 block text-[10px] ${date === item.value ? 'text-white/80' : 'text-[#907c6d]'}`}>{item.month}</span>
                      </button>
                    ))}
                  </div>

                  <h3 className="mt-8 text-sm font-semibold text-[#604a3a]">Available time slots</h3>
                  <p className="mt-1 text-xs text-[#907c6d]">Choose a convenient time for your visit.</p>
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {bookingTimeSlots.map((slot) => {
                      const selected = time === slot;
                      const disabled = isPastSlot(slot);

                      return (
                        <button key={slot} disabled={disabled} onClick={() => setTime(slot)} className={`rounded-xl border px-2 py-3 text-xs font-medium transition ${selected ? 'border-[#76543d] bg-[#76543d] text-white' : disabled ? 'cursor-not-allowed border-[#eee2d7] bg-[#faf7f3] text-[#c8bdb3] line-through' : 'border-[#eee2d7] text-[#604a3a] hover:border-[#a47753] hover:bg-[#faf5ef]'}`}>
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-xs leading-5 text-[#907c6d]">Demo slots only; real availability and stylist schedules are not connected yet.</p>
                </>
              )}

              {step === 4 && (
                <>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7f1e9] text-[#a47753]"><UserRound size={21} /></span>
                    <div>
                      <h2 className="font-serif text-2xl text-[#49372d]">Your details</h2>
                      <p className="mt-1 text-sm text-[#907c6d]">Where can we send your appointment details?</p>
                    </div>
                  </div>

                  <form className="mt-7 grid gap-5 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); next(); }}>
                    <label className="text-sm font-medium text-[#604a3a]">Full name *
                      <input required autoComplete="name" value={details.customerName} onChange={(event) => updateDetails('customerName', event.target.value)} className="mt-2 w-full rounded-xl border border-[#e8d9ca] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a47753]" placeholder="Your full name" />
                    </label>
                    <label className="text-sm font-medium text-[#604a3a]">Email address *
                      <input required type="email" autoComplete="email" value={details.email} onChange={(event) => updateDetails('email', event.target.value)} className="mt-2 w-full rounded-xl border border-[#e8d9ca] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a47753]" placeholder="you@example.com" />
                    </label>
                    <label className="text-sm font-medium text-[#604a3a] sm:col-span-2">Phone number *
                      <input required type="tel" autoComplete="tel" minLength={8} maxLength={18} value={details.phone} onChange={(event) => updateDetails('phone', event.target.value)} className="mt-2 w-full rounded-xl border border-[#e8d9ca] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a47753]" placeholder="+91 98765 43210" />
                    </label>
                    <label className="text-sm font-medium text-[#604a3a] sm:col-span-2">Special requests <span className="font-normal text-[#907c6d]">(optional)</span>
                      <textarea rows={3} value={details.notes} onChange={(event) => updateDetails('notes', event.target.value)} className="mt-2 w-full resize-y rounded-xl border border-[#e8d9ca] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a47753]" placeholder="Anything you'd like us to know?" />
                    </label>
                    <button type="submit" disabled={!canContinue()} className="sm:col-span-2 rounded-full bg-[#76543d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#5d402e] disabled:cursor-not-allowed disabled:opacity-40">
                      Confirm demo booking <ArrowRight className="ml-2 inline" size={16} />
                    </button>
                  </form>
                </>
              )}

              {step !== 4 && (
                <div className="mt-8 flex items-center justify-between border-t border-[#f0e7df] pt-6">
                  <button onClick={() => setStep((current) => Math.max(current - 1, 1))} disabled={step === 1} className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-[#79583e] transition hover:bg-[#f7f1e9] disabled:invisible">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button onClick={next} disabled={!canContinue()} className="inline-flex items-center gap-2 rounded-full bg-[#76543d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5d402e] disabled:cursor-not-allowed disabled:opacity-40">
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </section>

            <aside className="rounded-3xl border border-[#eee2d7] bg-[#faf5ef] p-6 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a47753]">Your appointment</p>
              <h2 className="mt-2 font-serif text-2xl text-[#49372d]">Booking summary</h2>

              {service ? (
                <div className="mt-6 border-b border-[#e8d9ca] pb-5">
                  <p className="font-serif text-lg text-[#49372d]">{service.name}</p>
                  <p className="mt-1 text-xs text-[#907c6d]">{service.category} · {service.duration} minutes</p>
                  <p className="mt-3 font-semibold text-[#76543d]">{money(service.price)}</p>
                </div>
              ) : <p className="mt-5 text-sm text-[#907c6d]">Your selected service will appear here.</p>}

              <div className="space-y-4 py-5 text-sm">
                <div className="flex gap-3">
                  <UserRound size={17} className="shrink-0 text-[#a47753]" />
                  <div><p className="text-xs text-[#907c6d]">Stylist</p><p className="mt-1 font-medium text-[#604a3a]">{staff?.name ?? 'Any available stylist'}</p></div>
                </div>
                <div className="flex gap-3">
                  <CalendarDays size={17} className="shrink-0 text-[#a47753]" />
                  <div><p className="text-xs text-[#907c6d]">Date</p><p className="mt-1 font-medium text-[#604a3a]">{date ? dateLabel(date) : 'Not selected'}</p></div>
                </div>
                <div className="flex gap-3">
                  <Clock3 size={17} className="shrink-0 text-[#a47753]" />
                  <div><p className="text-xs text-[#907c6d]">Time</p><p className="mt-1 font-medium text-[#604a3a]">{time || 'Not selected'}</p></div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#e8d9ca] pt-5">
                <span className="text-sm text-[#806d5f]">Estimated total</span>
                <span className="font-serif text-2xl text-[#76543d]">{service ? money(service.price) : '—'}</span>
              </div>
              <p className="mt-4 text-[11px] leading-5 text-[#907c6d]">No payment is collected in this demo. Prices and availability are sample data.</p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
