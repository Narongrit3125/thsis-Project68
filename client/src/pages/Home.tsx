import Header from "@/components/Header";
import WelcomeBanner from "@/components/WelcomeBanner";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import InfoCards from "@/components/InfoCards";
import CampusCarousel from "@/components/CampusCarousel";
import Departments from "@/components/Departments";
import NewsSection from "@/components/NewsSection";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <WelcomeBanner />
      <AnnouncementBanner />
      <main>
        <InfoCards />
        <CampusCarousel />
        <Departments />
        <NewsSection />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
