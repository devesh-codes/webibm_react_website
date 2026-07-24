import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <>


      <Helmet>
        <title>About WebIBM | Best Digital Marketing Agency in Delhi India</title>

        <meta
          name="description"
          content="WebIBM is a leading digital marketing agency in Delhi offering SEO, PPC, website design, social media marketing, web development, and lead generation services."
        />

        <meta
    name="keywords"
    content="Best Digital Marketing Agency in India, Digital Marketing Company in India, Web Development Company in India, Website Designing Company in India"
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