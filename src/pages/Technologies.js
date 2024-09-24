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
                    I'am enjoy working on developing diverse, digital products in diverse environments.<br />
                    From setting up a project to maintaining the server.<br />
                    I am the specialist and advise our customers on technical front-end and back-end issues.<br />
                    I also like to work hands-on in a Scrum team and write code myself.<br/> Because of my knowledge and experience I am not afraid to take ownership and I am able to quickly add value to the team.<br/>
                    I like to share my knowledge and experience with other Developers from the team.
                    </Paragraph>
                </SectionHeader>
                <WrapperTechnologies>
                    <BoxTechnologies>
                        <FaReact style={{ color: "blue", fontSize: 50, marginTop:20}} />
                        <ParagraphStyled>
                            Front-End Experience:
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
                        <FaDatabase style={{ color: "green", fontSize: 50, marginTop:20 }} />
                        <ParagraphStyled>
                            Back-End Experience:
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
                        <FaTools style={{ color: "red", fontSize: 50, marginTop:20,}} />
                        <ParagraphStyled>
                            Tools Experience:
                        </ParagraphStyled>
                        <li>Github</li>
                        <li>Figma</li>
                        <li>Visual Studio code</li>
                        <li>Slack</li>
                   <li>Wem low-code</li>
             <li>Thinkwise low-code</li>
                 <li>Usoft low-code</li>                                                         
                     <li>Postman</li>    
                    </BoxTechnologies>
                </WrapperTechnologies>
            </ContainerTechnologies>
        </Fragment>
    );
}
