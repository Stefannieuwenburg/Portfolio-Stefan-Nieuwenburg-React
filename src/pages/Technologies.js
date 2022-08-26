import React, { Fragment } from "react";
import { FaDatabase, FaReact, FaTools } from "react-icons/fa";
import styled from "styled-components";

const ContainerTechnologies = styled.div`
    min-height: 100vh;
    margin-left: 2rem;
    margin-right: 2rem;
`;
const SectionHeader = styled.div`
    position: relative;
    margin-bottom:2rem;
    margin-left: 6rem;
    max-width: 700px;
    font-size: 25px;
`;
const MainParagraph = styled.h1`
    font-size: 1.8rem;
    padding-top: 6rem;
    color: var(--main-color);
    &:hover {
        letter-spacing: 0.2rem;
        transition: 0.6s;
    }
`;
const Paragraph = styled.p`
    font-size: 1.5rem;
    margin-top: 1.2rem;
    color: var(--white-color);
`;
const WrapperDescription = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--main-color);
    li {
        color: var(--white-color);
    }
`;



const ParagraphStyled = styled.p`
    font-size: 1.8rem;
    padding-top: 1rem;
    color: var(--main-color);
    &:hover {
        letter-spacing: 0.2rem;
        transition: 0.6s;
    }
    
`;

export default function Technologies() {
    return (
        <Fragment>
            <ContainerTechnologies id="Technologies">
            <SectionHeader>
                <MainParagraph>Technologies</MainParagraph>

                <Paragraph>
                    I have worked with a range a technologies in the web
                    development world. From Front-End to Back-end plus Design
                </Paragraph>
            </SectionHeader>

            <WrapperDescription>
                <ul>
                    <FaReact style={{ color: "blue" }} />
                    <ParagraphStyled>
                        Front-End Experience with:
                    </ParagraphStyled>
                    <li>Html5</li>
                    <li>Css</li>
                    <li>Scss</li>
                    <li>Bootstrap</li>
                    <li>Redux</li>
                    <li>React.jsx</li>
                    <li>Github</li>
                    <li>Node</li>
                    <li>Npm</li>
                    <li>API</li>
                    <li>Scrum</li>
                    <li>Jest</li>
                </ul>
                <ul>
                    <FaDatabase style={{ color: "green" }} />
                    <ParagraphStyled>Back-End Experience with:</ParagraphStyled>
                    <li>Sqlite</li>
                    <li>SQL Database</li>
                    <li>ORM</li>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>Python</li>
                    <li>VPS</li>
                    <li>APT</li>
                    <li>WSGI and Gunicorn</li>
                </ul>
                <ul>
                    <FaTools style={{ color: "red" }} />
                    <ParagraphStyled>Tools Experience with:</ParagraphStyled>
                    <li>Github</li>
                    <li>Figma</li>
                    <li>Visual Studio code</li>
                    <li>Slack</li>
                    <li>POSTman</li>
                </ul>
            </WrapperDescription>
            </ContainerTechnologies>
        </Fragment>
    );
}
