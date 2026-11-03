import type { Metadata } from 'next';
import LegalPage from '../../../components/layout/LegalPage';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'How Gilli Gilli Salon and Spa handles website information, browser storage, and third-party services.' };

const sections = [
  { title: 'About this policy', text: 'This policy explains the current features of the Gilli Gilli Salon and Spa website. It covers the appointment preview, review form, and links to external services. If we introduce online booking submission or other data collection, we will update this policy to describe those changes.' },
  { title: 'Appointment information', text: 'The appointment form lets you enter your name, email address, phone number, selected service, stylist, date, time, and optional notes. The current form is a demonstration: these details are held in the open page and are not submitted to a salon booking server. Its confirmation does not reserve an appointment. Avoid entering sensitive personal or medical information in the notes. Call the salon to arrange a real appointment.' },
  { title: 'Reviews and browser storage', text: 'The website review form saves your name, chosen service, star rating, and review text in local storage on your device under the key mysalon-reviews. These entries are not sent to the salon, published to other visitors, or posted to Google. They remain in that browser until removed or replaced; the form retains up to 50 entries. Anyone using the same browser profile may be able to access them. You can remove them through your browser’s site-data settings.' },
  { title: 'Maps and external websites', text: 'Pages containing the embedded Google map connect to Google when the map loads. Google may receive technical information such as your IP address, browser information, and information controlled by your Google or browser settings. Google Maps, Google reviews, and Facebook links open services with their own privacy policies. Reviews posted directly on Google are handled by Google rather than this website.' },
  { title: 'Technical information', text: 'Your browser connects to the website hosting service to load pages and images. That service may process technical request information such as IP addresses, requested pages, and timestamps under its own settings. The current application does not include an advertising tracker or analytics integration. It uses local storage for the review feature described above.' },
  { title: 'Your choices and questions', text: 'You can choose not to enter information, clear saved reviews through your browser settings, and contact the salon by phone about privacy concerns or information you have shared directly with us. We will discuss requests to access, correct, or delete that information and any applicable requirements. Clearing this website’s data does not delete reviews posted on Google or information held by Facebook.' },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" introduction="A clear explanation of the information used by this website and the choices available to you." sections={sections} />;
}
