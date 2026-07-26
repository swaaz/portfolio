import CoverPage from "../components/CoverPage";
import styled from 'styled-components';
import AboutPage from "../components/AboutPage";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ProjectPage from "../components/ProjectPage";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ClubsCommunities from "../components/ClubsCommunities";
import Banner from "../components/Banner";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Swasthik Shetty (Swaaz); Software Engineer II at Google building Go-based microservices for high-availability and disaster recovery infrastructure." />
        <title>swaaz</title>
        <meta name="robots" content="all"/>
         
    </Head>

    <Section>
      <Banner />
      <CoverPage />
      <AboutPage />
      <Experience />
      <Skills />
      <ClubsCommunities />
      <ProjectPage />
      <Contact />
      <Footer />
    </Section>
    </>
  );
}

export default Home;


const Section = styled.div`
  width : 100%;
  margin: 0;
  padding: 0;
`