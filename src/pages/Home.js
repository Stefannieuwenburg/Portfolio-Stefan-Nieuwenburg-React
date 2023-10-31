import React, { Fragment } from "react";
import { ContainerHome, Button, MainParagraph, ParagraphStyled, ParagraphHeader } from "../styles/style.Home";


export default function Home() {
    return (
        <Fragment>
            <ContainerHome id="Home">
                <ParagraphHeader>Hi,</ParagraphHeader>
                <MainParagraph>I'm Stefan!</MainParagraph>
                <MainParagraph>Welcome to my portfolio page</MainParagraph>
                <ParagraphStyled>
                    I have 3 years of experience building and desgining software.<br/>
                    Currently, I love to work on web application using technologies like <br/>
                    React.js, Tailwind, Next.js, Node.js, Outsystem.
                </ParagraphStyled>
                <br />
                <a href="#Projects">
                    <Button>my projects</Button>
                </a>
            </ContainerHome>
        </Fragment>
    );
}
