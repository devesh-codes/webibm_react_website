import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <>


      <Helmet>
        <title>About WebIBM | Web Development & Digital Marketing Company</title>

        <meta
          name="description"
          content="Learn about WebIBM, our mission, our team, and how we help businesses grow through web development, SEO, and digital marketing."
        />

        <link
          rel="canonical"
          href="https://react.webibm.com/about"
        />
      </Helmet>

      
      <AboutHero />
      <AboutIntro />
      
      
    </>
  );
}

export default About;