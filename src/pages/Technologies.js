import React, { Fragment } from "react";
import { FaDatabase, FaReact, FaTools } from "react-icons/fa";
import styled from "styled-components";

const ContainerTechnologies = styled.div`
    height: 100vh;
    padding: 4rem;
`;
const WrapperTechnologies = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const BoxTechnologies = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 2rem;
    background: var(--Black-Color);
    border: 3px solid var(--Main-Color);
    border-radius: 2rem;
    color: var(--White-Color);
`;
const SectionHeader = styled.p`
    display: grid;
    justify-items: center;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 25px;
`;
const MainParagraph = styled.p`
    font-size: 1.8rem;
    color: var(--Main-Color);
    &:hover {
        letter-spacing: 0.2rem;
        transition: 0.6s;
    }
`;
const Paragraph = styled.p`
    text-align: center;
    font-size: 1.5rem;
    margin-top: 1.2rem;
    color: var(--White-Color);
`;

const ParagraphStyled = styled.p`
    font-size: 1.8rem;
    padding-top: 1rem;
    color: var(--Main-Color);
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
                        development world. <br />
                        From Front-End to Back-end plus Design
                    </Paragraph>
                </SectionHeader>

                <WrapperTechnologies>
                    <BoxTechnologies>
                        <FaReact style={{ color: "blue", fontSize: 50 }} />
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
                    </BoxTechnologies>
                    <BoxTechnologies>
                        <FaDatabase style={{ color: "green", fontSize: 50 }} />
                        <ParagraphStyled>
                            Back-End Experience with:
                        </ParagraphStyled>
                        <li>Sqlite</li>
                        <li>SQL Database</li>
                        <li>ORM</li>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>Python</li>
                        <li>VPS</li>
                        <li>APT</li>
                        <li>WSGI and Gunicorn</li>
                    </BoxTechnologies>
                    <BoxTechnologies>
                        <FaTools style={{ color: "red", fontSize: 50 }} />
                        <ParagraphStyled>
                            Tools Experience with:
                        </ParagraphStyled>
                        <li>Github</li>
                        <li>Figma</li>
                        <li>Visual Studio code</li>
                        <li>Slack</li>
                        <li>POSTman</li>
                    </BoxTechnologies>
                </WrapperTechnologies>
            </ContainerTechnologies>
        </Fragment>
    );
}
