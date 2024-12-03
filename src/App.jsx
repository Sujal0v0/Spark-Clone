import AboutUs from "./components/about-us/AboutUs.jsx";
import CaseStudy from "./components/case-studies/CaseStudy.jsx";
import Contact from "./components/contact/Contact.jsx";
import Experience from "./components/experience/Experience.jsx";
import Faq from "./components/faq/Faq.jsx";
import Footer from "./components/footer/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import Nav from "./components/nav/Nav.jsx";
import OurTeam from "./components/our-team/OurTeam.jsx";
import Services from "./components/services/Services.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import WhyUs from "./components/why-us page/WhyUs.jsx";

function App() {
  return (
    <div className="text-textBlack bg-white">
      <Nav />
      <Hero />
      <AboutUs />
      <Experience />
      <Services />
      <CaseStudy />
      <WhyUs />
      <OurTeam />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
