import BottomNav from "./components/Navbars/BottomNav";
import { DiscordNav } from "./components/Navbars/DiscordNav";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbars/Navbar";
import TopNav from "./components/TopNav";
import Project from "./components/Projects";
import Newsletter from "./components/contact/Newsletter";
import Footer from "./components/Footer/Footer";
import FixedSidebar from "./components/Navbars/FixedSidebar";
import Tech from "./components/Tech/Tech";
import ScrollToTop from "./components/Inputs/ScrollToTop";
import DevNav from "./components/Navbars/DevNav";
import Slider from "./components/Slider";

function App() {
  // window.addEventListener(
  //   'beforeunload',
  //   (e) => (
  //     e.preventDefault(),
  //     e.returnValue = ''
  //   )
  // )

  return (
    <div className="bg-orange-200 dark:bg-orange-300">
      <TopNav />

      <main className="scroll-smooth scroll-mt-32"> 
      {/* scroll-smooth solution in index.css */}
        {/* <Navbar /> */}
        {/* <DiscordNav /> */}
        {/* <BottomNav /> */}
        <Hero />
        <Tech />
        <Project />
        {/* <FixedSidebar /> */}
        <Newsletter />
      </main>
      <Slider />

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
