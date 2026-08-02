import Image from 'next/image';
import styled from 'styled-components';
import gitHubIcon from '../../public/assets/images/github.png';
import webIcon from '../../public/assets/images/web.png';
import TechStackList from '../../components/TechStackList';
import ProjectsData from '../../data';
import { device } from '../../styles/responsive';
import Footer from '../../components/Footer';
import Head from 'next/head';

const ProjectDetails = ({ project }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="description" content={`${project.description}`} />
            <title>{project.name}</title>
            <meta name="robots" content="all"/>
            <link rel="canonical" href={`https://www.swaaz.dev/projects/${project.slug}`} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="swaaz" />
            <meta property="og:url" content={`https://www.swaaz.dev/projects/${project.slug}`} />
            <meta property="og:title" content={`${project.name} — Swaaz`} />
            <meta property="og:description" content={`${project.description}`} />
            <meta property="og:image" content={`https://www.swaaz.dev${project.image}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${project.name} — Swaaz`} />
            <meta name="twitter:description" content={`${project.description}`} />
            <meta name="twitter:image" content={`https://www.swaaz.dev${project.image}`} />
        </Head>
        <Section>
            <Title>{project.name}</Title>

            <Cover>
                <Image layout={'responsive'} blurDataURL width={project.width} height={project.height} src={project.image} alt={project.slug}/>
            </Cover>

            <LinkRow>
                <GitHubLink href={project.githubLink} target={'_blank'}>
                    <IconDiv>
                        <Image quality={30} width={40} height={40} src={gitHubIcon} alt={"GitHub"}/>
                    </IconDiv>
                    <p>GitHub</p>
                </GitHubLink>
                {
                    project.websiteLink &&
                    <WebLink href={project.websiteLink} target={'_blank'}>
                        <IconDiv>
                            <Image quality={30} width={30} height={30} src={webIcon} alt={"Web"} />
                        </IconDiv>
                        <p>Web</p>
                    </WebLink>
                }
            </LinkRow>

            <Description>
                <SubTitle>Description</SubTitle>
                <DescriptionText>
                    {project.description}
                </DescriptionText>
            </Description>

            <TechStack>
                <SubTitle>Tech Stack</SubTitle>
                <TechStackLists>
                    {
                        project.techStack.map((techStack, index) => (
                            <TechStackList key={index} text={techStack} />
                        ))
                    }
                </TechStackLists>
            </TechStack>
        </Section>
        <Footer />
        </>
    );
}

export default ProjectDetails;


const Section = styled.section`
    width: 80%;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobileM}{
        width: 90%;
    }
`

const Title = styled.h1`
    font-size: 15vh;
    font-weight: 500;
    line-height: 23vh;
    margin: 0;
    margin-bottom: 5vh;

    @media ${device.tabletL}{
        font-size: 12vh;
    }
    @media ${device.tabletM}{
        font-size: 10vh;
        margin-bottom: 0;
    }
    @media ${device.tabletS}{
        font-size: 7vh;
    }
    @media ${device.mobileM}{
        font-size: 6vh;
    }
`

const Cover = styled.div`
    width: 100%;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,.2));

`

const LinkRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 5vh 0;
    /* width: 100%; */
`

const GitHubLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 5vw;
    /* width: 40%; */

    p{
        @media ${device.mobileM}{
            font-size: 2vh;
        }
    }
`

const WebLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 5vw;
    /* width: 40%; */

    p{
        margin-left: 10px;

        @media ${device.mobileM}{
            font-size: 2vh;
        }
    }
`

const IconDiv = styled.div`
    width: 80%;
`

const Description = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;


`

const SubTitle = styled.h2`
    font-size: 7vh;
    font-weight: 500;
    /* line-height: 23vh; */
    margin: 5px 0;

    
    @media ${device.tabletM}{
        font-size: 4vh;
    }
    @media ${device.mobileM}{
        font-size: 3.5vh;
    }
`

const DescriptionText = styled.p`
    margin: 0 auto;
    font-size: 2.2vh;
    line-height: 3.8vh;


    @media ${device.mobileM}{
        font-size: 1.8vh;
    }

`
const TechStack = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30px 0;
`

const TechStackLists = styled.div`
    margin: 10px 0;
`



export const getStaticPaths = async () => {
    const paths = ProjectsData.map(project => {
        return {
            params: {
                name: project.slug
            }
        }
    })
    return { paths, fallback: false };
}


export const getStaticProps = async (context) => {

    const { params } = context;
    const project = ProjectsData.find(project => project.slug === params.name);


    if(!project) {
        return{
            notFound: true
        }
    }

    return {
        props:{
            project
        }
    }
}
