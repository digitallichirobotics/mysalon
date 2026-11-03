import type { Metadata } from 'next';
import LegalPage from '../../../components/layout/LegalPage';

export const metadata: Metadata = { title: 'Terms & Conditions', description: 'Website use, appointment information, offers, and review terms for Gilli Gilli Salon and Spa.' };

const sections = [
  { title: 'Using our website', text: 'This website provides information about Gilli Gilli Salon and Spa, its services, offers, and contact details. Please use it lawfully and do not attempt to disrupt the site or misuse its forms. These terms describe the current website; specific treatment arrangements should be agreed directly with the salon.' },
  { title: 'Appointments and availability', text: 'The online appointment flow is currently a demonstration. Dates, time slots, stylist profiles, and confirmation numbers do not represent a confirmed reservation. No real appointment is saved or sent to the salon through this form. Please call 097762 43077 to confirm your service, stylist, date, time, and availability.' },
  { title: 'Prices and promotional offers', text: 'Menu prices and promotional packages are provided for reference and must be confirmed with the salon before booking. Offer availability, inclusions, hair length, and the treatment selected may affect the final price. Please ask for the full price and any applicable charges before agreeing to a service. The website does not currently collect online payments.' },
  { title: 'Changes, cancellations, and refunds', text: 'Please contact the salon directly if you need to change or cancel an appointment. Any deposit, cancellation, refund, or rescheduling conditions should be explained and agreed when a real booking or payment is made. This website does not impose a cancellation fee or refund schedule.' },
  { title: 'Treatment suitability', text: 'Before a treatment, tell your salon professional about allergies, sensitivities, previous reactions, or other circumstances relevant to the service. Ask about any recommended consultation or patch test. Results vary depending on the treatment and individual circumstances. Website content is general salon information and does not replace advice from an appropriate healthcare professional.' },
  { title: 'Reviews and illustrative content', text: 'Please write honest feedback based on your own experience and avoid sharing other people’s private information. The website review form saves entries only in your browser and does not publish them or send them to Google. The displayed Google review excerpt, rating, and review count were supplied by the salon owner and are not updated automatically. Some team profiles and stock photos are illustrative, as identified on the site.' },
  { title: 'Third-party links and your rights', text: 'Google Maps, Facebook, and other linked services operate under their own terms and policies. Please check current information with the salon if a detail matters to your visit. Nothing in these terms excludes rights or remedies that cannot lawfully be excluded under applicable consumer law. Contact us if you have a concern about the website or a service.' },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" introduction="Helpful information about using our website, arranging a salon visit, and understanding our current online features." sections={sections} />;
}
