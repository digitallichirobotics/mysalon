
import HomeHero from '../../features/home/components/HomeHero';
import HomeServices from '../../features/home/components/HomeServices';
// import HomeAbout from '../../features/home/components/HomeAbout';
import HomeOffers from '../../features/home/components/HomeOffers';
import HomeTeam from '../../features/home/components/HomeTeam';
import HomeTestimonials from '../../features/home/components/HomeTestimonials';
import HomeGallery from '../../features/home/components/HomeGallery';
import HomeBookingCTA from '../../features/home/components/HomeBookingCTA';
import HomeContact from '../../features/home/components/HomeContact';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      {/* <HomeAbout /> */}
      <HomeOffers />
      <HomeTeam />
      <HomeTestimonials />
      <HomeGallery />
      <HomeBookingCTA />
      <HomeContact />
    </>
  );
}
