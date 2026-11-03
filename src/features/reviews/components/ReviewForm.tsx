'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import type { Review } from '../types/review.types';

const storageKey = 'mysalon-reviews';
const services = ['Hair Styling', 'Facial & Skincare', 'Makeup', 'Bridal Makeup', 'Nail Care', 'Other'];

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const [savedReview, setSavedReview] = useState<Review | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const service = String(data.get('service') ?? '');
    const message = String(data.get('message') ?? '').trim();
    if (!rating || name.length < 2 || message.length < 10 || !services.includes(service)) {
      setError('Choose a star rating, enter your name, select a service, and write at least 10 characters.');
      return;
    }
    const review: Review = { id: crypto.randomUUID(), name, service, rating, message };
    try {
      const stored: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
      const previous = Array.isArray(stored) ? stored : [];
      localStorage.setItem(storageKey, JSON.stringify([...previous.slice(-49), review]));
      setSavedReview(review);
      form.reset();
      setRating(0);
    } catch {
      setError('Your browser could not save this review. Please allow browser storage and try again.');
    }
  }

  const fieldClass = 'mt-2 w-full rounded-xl border border-[#dfcdbb] bg-[#fffdf9] px-4 py-3 text-sm text-[#49372d] outline-none focus:border-[#76543d] focus:ring-2 focus:ring-[#76543d]/20';

  return (
    <section id="write-review" aria-labelledby="review-heading" className="bg-[#f7f1e9] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#a47753]">Your experience matters</p>
          <h2 id="review-heading" className="mt-4 font-serif text-4xl leading-tight text-[#49372d] sm:text-5xl">Share a little<br /><span className="italic text-[#a47753]">salon love.</span></h2>
          <p className="mt-5 text-sm leading-7 text-[#806d5f]">Tell us about your treatment, your favourite moment, and how you felt after your visit.</p>
          <p id="review-storage-note" className="mt-5 text-xs leading-6 text-[#806d5f]">Reviews are saved only in this browser. They are not sent to the salon or published for other visitors.</p>
        </div>
        <div className="rounded-3xl border border-[#e7d7c8] bg-white p-6 shadow-sm sm:p-9">
          {savedReview && (
            <div role="status" className="mb-6 rounded-2xl border border-[#d4dfcf] bg-[#f3f7ef] p-5 text-[#40543a]">
              <p className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 size={18} /> Review saved in this browser</p>
              <p className="mt-3 text-sm font-medium">{savedReview.name} · {savedReview.service} · {savedReview.rating}/5</p>
              <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6">{savedReview.message}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} aria-describedby="review-storage-note" className="space-y-6">
            <fieldset>
              <legend className="text-sm font-semibold text-[#49372d]">Your rating <span className="text-[#a47753]">*</span></legend>
              <div className="mt-3 flex gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} className="relative cursor-pointer rounded-lg p-1.5 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-[#76543d]">
                    <input type="radio" name="rating" value={value} checked={rating === value} onChange={() => setRating(value)} required className="sr-only" aria-label={`${value} ${value === 1 ? 'star' : 'stars'}`} />
                    <Star size={30} aria-hidden="true" className={value <= rating ? 'fill-[#b48660] text-[#b48660]' : 'text-[#d9c5b2]'} />
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-[#49372d]">Your name *<input name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="Enter your name" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-[#49372d]">Service *<select name="service" required defaultValue="" className={fieldClass}><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
            </div>
            <label className="block text-sm font-semibold text-[#49372d]">Your review *<textarea name="message" required minLength={10} maxLength={1500} rows={5} placeholder="How was your salon experience?" className={`${fieldClass} resize-y font-normal`} /></label>
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            <button type="submit" className="w-full rounded-full bg-[#76543d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5d402e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76543d]">Save review</button>
          </form>
        </div>
      </div>
    </section>
  );
}
