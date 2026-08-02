import Image from "next/image";
import styled from "styled-components";
import arrowIcon from "../public/assets/images/arrow.png";
import { device } from "../styles/responsive";
import { Experience as ExperienceData } from "../data";

const Experience = () => {
    return (
        <Section>
            <Title>Experience</Title>
            <SubTitle>My journey so far</SubTitle>

            <Timeline>
                {ExperienceData.map((item, index) => (
                    <TimelineItem key={index}>
                        <Dot />
                        <Content>
                            <Role>{item.role}</Role>
                            <Meta>
                                {item.companyLink ? (
                                    <Company href={item.companyLink} target="_blank" rel="noreferrer">
                                        {item.company}
                                    </Company>
                                ) : (
                                    <Company as="span">{item.company}</Company>
                                )}
                                <Durations>
                                    {item.duration}
                                    {item.location ? ` · ${item.location}` : ""}
                                </Durations>
                            </Meta>
                            {item.highlights && item.highlights.length > 0 && (
                                <Highlights>
                                    {item.highlights.map((point, i) => (
                                        <HighlightItem key={i}>
                                            <BulletIcon>
                                                <Image quality={50} src={arrowIcon} alt="" width={13} height={13} />
                                            </BulletIcon>
                                            {point}
                                        </HighlightItem>
                                    ))}
                                </Highlights>
                            )}
                            {item.techStack && item.techStack.length > 0 && (
                                <TechRow>
                                    {item.techStack.map((tech, i) => (
                                        <Tech key={i}>{tech}</Tech>
                                    ))}
                                </TechRow>
                            )}
                        </Content>
                    </TimelineItem>
                ))}
            </Timeline>
        </Section>
    );
}

export default Experience;


const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 20vh;
    font-weight: 500;
    line-height: 23vh;
    margin: 0;

    @media ${device.tabletM} {
        font-size: 13vh;
    }
    @media ${device.mobileL} {
        font-size: 11vh;
    }
    @media ${device.mobileM} {
        font-size: 8vh;
    }
`

const SubTitle = styled.p`
    font-size: 2.5vh;
    margin-top: 5px;

    @media ${device.tabletM} {
        font-size: 2vh;
        margin-top: -1vh;
    }
    @media ${device.mobileL} {
        font-size: 1.8vh;
        margin-top: -2vh;
    }
    @media ${device.mobileM} {
        font-size: 1.5vh;
        margin-top: -4vh;
    }
`

const Timeline = styled.div`
    position: relative;
    width: 55%;
    margin: 8vh auto 0;
    padding-left: 10px;

    &::before {
        content: "";
        position: absolute;
        top: calc(1.8726vh + 1px);
        bottom: 8px;
        left: 17px;
        width: 2px;
        background: #e6e6e6;
    }

    @media ${device.tabletL} {
        width: 70%;
    }
    @media ${device.tabletM} {
        width: 85%;
        margin-top: 5vh;

        &::before {
            top: calc(1.5215vh + 1px);
        }
    }
    @media ${device.mobileL} {
        width: 90%;
    }
    @media ${device.mobileM} {
        &::before {
            top: calc(1.2874vh + 1px);
        }
    }
`

const TimelineItem = styled.div`
    position: relative;
    padding-left: 20px;
    padding-bottom: 7vh;
    text-align: left;

    &:last-child {
        padding-bottom: 0;
    }
`

const Dot = styled.div`
    position: absolute;
    left: 0;
    top: calc(1.8726vh - 7px);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #111111;
    border: 3px solid #ffffff;
    box-shadow: 0 0 0 2px #111111;
    transition: all 0.3s ease-in-out;

    @media ${device.tabletM} {
        top: calc(1.5215vh - 7px);
    }
    @media ${device.mobileM} {
        top: calc(1.2874vh - 7px);
    }

    ${TimelineItem}:hover & {
        background: #111111;
        box-shadow: 0 0 0 2px #111111;
        transform: scale(1.15);
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 32px;
`

const Role = styled.h2`
    font-size: 3.2vh;
    font-weight: 700;
    margin: 0;

    @media ${device.tabletM} {
        font-size: 2.6vh;
    }
    @media ${device.mobileM} {
        font-size: 2.2vh;
    }
`

const Meta = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 12px;
    margin: 6px 0 12px;
`

const Company = styled.a`
    font-size: 2.3vh;
    font-weight: 600;

    @media ${device.mobileM} {
        font-size: 1.9vh;
    }
`

const Durations = styled.span`
    font-size: 2vh;
    color: #777777;

    @media ${device.mobileM} {
        font-size: 1.6vh;
    }
`

const Highlights = styled.ul`
    margin: 4px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const HighlightItem = styled.li`
    position: relative;
    font-size: 2.2vh;
    line-height: 3.4vh;
    text-align: left;

    @media ${device.mobileM} {
        font-size: 1.8vh;
        line-height: 3vh;
    }
`

const BulletIcon = styled.span`
    position: absolute;
    left: -32px;
    top: calc((3.4vh - 13px) / 2);
    line-height: 0;

    @media ${device.mobileM} {
        top: calc((3vh - 13px) / 2);
    }
`

const TechRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px 10px;
    margin-top: 14px;
`

const Tech = styled.span`
    font-size: 1.7vh;
    padding: 4px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    color: #444444;
    transition: all 0.3s ease-in-out;

    &:hover {
        border-color: #111111;
        color: #111111;
    }

    @media ${device.mobileM} {
        font-size: 1.5vh;
        padding: 3px 10px;
    }
`