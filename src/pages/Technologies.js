import React, { Fragment } from "react";
import { FaDatabase, FaReact, FaTools } from "react-icons/fa";
import {
  ContainerTechnologies,
  SectionHeader,
  BoxTechnologies,
  WrapperTechnologies,
  MainParagraph,
  Paragraph,
  ParagraphStyled,
} from "../styles/style.Technologies";



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
                        <li>Styled-components</li>
                        <li>Sass</li>
                        <li>Bootstrap</li>
                        <li>TailWind</li>
                        <li>React.jsx</li>
                        <li>Github</li>
                        <li>Node.js and Express</li>
                        <li>Npm packages</li>
                        <li>Rest API</li>
                        <li>Agile scrum method</li>
                        <li>Testen met Jest</li>
                    </BoxTechnologies>
                    <BoxTechnologies>
                        <FaDatabase style={{ color: "green", fontSize: 50 }} />
                        <ParagraphStyled>
                            Back-End Experience with:
                        </ParagraphStyled>
                        <li>Oracle SQL</li>
                        <li>Oracle Database</li>
                        <li>ORM</li>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>Python</li>
                        <li>PostgreSQL</li>
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
