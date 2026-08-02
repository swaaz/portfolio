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
        <link rel="canonical" href="https://www.swaaz.dev/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="swaaz" />
        <meta property="og:url" content="https://www.swaaz.dev/" />
        <meta property="og:title" content="Swasthik Shetty (Swaaz)" />
        <meta property="og:description" content="Software Engineer II at Google building Go-based microservices for high-availability and disaster recovery infrastructure." />
        <meta property="og:image" content="https://www.swaaz.dev/assets/images/swaaz.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Swasthik Shetty (Swaaz)" />
        <meta name="twitter:description" content="Software Engineer II at Google building Go-based microservices for high-availability and disaster recovery infrastructure." />
        <meta name="twitter:image" content="https://www.swaaz.dev/assets/images/swaaz.png" />

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Swasthik Shetty",
                    alternateName: "Swaaz",
                    url: "https://www.swaaz.dev/",
                    image: "https://www.swaaz.dev/assets/images/swaaz.png",
                    jobTitle: "Software Engineer II",
                    worksFor: {
                        "@type": "Organization",
                        name: "Google",
                    },
                    sameAs: [
                        "https://github.com/swaaz",
                        "https://www.linkedin.com/in/swaaz/",
                        "https://twitter.com/Swaaz07",
                    ],
                }),
            }}
        />
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