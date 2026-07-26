import styled from "styled-components";
import { device } from "../styles/responsive";

const AboutPage = () => {
    return (
        <Section>
            <Wrapper>
                <SectionCenter>
                    <Title>About</Title>
                    <SubTitle>Want to know me?</SubTitle>
                    <Content>
                        <ContentParagraph>
                            Hi, I'm <Highlighter>Swasthik Shetty (Swaaz)</Highlighter> — a <Highlighter>Software Engineer II at Google</Highlighter>, bridging the gap between "code that works" and "code that scales." I write Go-based microservices that keep high-availability systems from falling over, and I've debugged my fair share of haunted legacy code along the way.</ContentParagraph>
                        <ContentParagraph>
                            Before Google, I was a full-stack builder at heart — shipping apps, chatbots, and a startup's entire backend. These days, when I'm not firefighting outages or automating disaster recovery, I'm mentoring engineers, contributing to open source, or hunting for the next good hackathon.
                        </ContentParagraph>
                    </Content>
                </SectionCenter>
            </Wrapper>
        </Section>
    );
}

export default AboutPage;


const Section = styled.section`
    /* border: 2px solid red; */
    width: 100%;
    min-height: 100vh;
    display: table;
`

const Wrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align:center
`


const SectionCenter = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: space-evenly;

`
const Title = styled.h1`
    font-size: 20vh;
    font-weight: 500;
    line-height: 23vh;
    margin: 0;

    @media ${device.tabletM} {
        font-size: 15vh;
    }
    @media ${device.mobileL} {
        font-size: 11vh;
    }
`

const SubTitle = styled.p`
    font-size: 2.5vh;
    margin-top: 0;

    @media ${device.mobileL} {
        margin-top: -3vh;
    }
`

const Content = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media ${device.tabletM} {
        width: 70%;
    }
    @media ${device.mobileL} {
        width: 80%;
    }
`

const ContentParagraph = styled.p`
    font-size: 3vh;
    line-height: 4.5vh;
    text-align: justify;

    @media ${device.mobileL} {
        font-size: 2vh;
    }
    @media ${device.mobileM} {
        font-size: 1.7vh;
        line-height: 3vh;
    }
`
const Highlighter = styled.span`
    font-weight: bold;
`
