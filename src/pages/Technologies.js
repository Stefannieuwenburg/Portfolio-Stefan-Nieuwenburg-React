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
