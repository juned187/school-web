import About from "@/components/home/about/about";
import UpcomingEvents from "@/components/home/event/event";
import Footer from "@/components/home/footer/footer";
import HeroSection from "@/components/home/hero/hero";
import Navbar from "@/components/home/navbar/navbar";
import LatestNews from "@/components/home/news/news";

export default function Home() {
  return (
<>
<Navbar />
<HeroSection />
<About />

<Footer />
</>
  );
}
