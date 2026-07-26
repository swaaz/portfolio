import styled from "styled-components";
import { device } from "../styles/responsive";
import { Skills as SkillsData } from "../data";
import TechStackList from "./TechStackList";

const Skills = () => {
    return (
        <Section>
            <Wrapper>
                <Title>Skills</Title>
                <SubTitle>Technologies I work with</SubTitle>
                <SkillsGrid>
                    {SkillsData.map((skill, index) => (
                        <Category key={index}>
                            <CategoryTitle>{skill.category}</CategoryTitle>
                            <CategoryList>
                                {skill.items.map((item, i) => (
                                    <TechStackList key={i} text={item} />
                                ))}
                            </CategoryList>
                        </Category>
                    ))}
                </SkillsGrid>
            </Wrapper>
        </Section>
    );
}

export default Skills;


const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: table;
`

const Wrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
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
    margin-top: 0;

    @media ${device.tabletM} {
        font-size: 2vh;
        margin-top: -2vh;
    }
    @media ${device.mobileL} {
        font-size: 1.8vh;
        margin-top: -3vh;
    }
    @media ${device.mobileM} {
        font-size: 1.5vh;
        margin-top: -5vh;
    }
`

const SkillsGrid = styled.div`
    width: 70%;
    margin: 8vh auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6vh 5vw;

    @media ${device.tabletM} {
        width: 85%;
        margin-top: 5vh;
        gap: 4vh 8vw;
    }
    @media ${device.mobileL} {
        width: 90%;
    }
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    min-width: 180px;

    @media ${device.mobileL} {
        min-width: 140px;
    }
`

const CategoryTitle = styled.h2`
    font-size: 3vh;
    font-weight: 700;
    margin: 0 0 1.5vh 0;

    @media ${device.tabletM} {
        font-size: 2.5vh;
    }
    @media ${device.mobileM} {
        font-size: 2.2vh;
    }
`

const CategoryList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
