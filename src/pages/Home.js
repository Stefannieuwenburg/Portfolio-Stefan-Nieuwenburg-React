import React, { Fragment } from "react";
import styled from "styled-components";

const ContainerHome = styled.div`
    min-height: 100vh;
    padding-top: 6rem;
    margin-left: 2rem;
    margin-right: 2rem;
`;

const Button = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: bold;
    margin: 1.2rem;
    padding: 0.5rem 1rem;
    background-color: var(--main-color);
    color: black;
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: 0.3s;
    &:hover {
        letter-spacing: 0.2rem;
        color: #000000;
        transition: 0.3s;
    }
`;
const MainParagraph = styled.div`
    font-size: 3rem;
    color: #ffffff;
`;
const ParagraphStyled = styled.div`
    font-size: 1.8rem;
    padding-top: 1rem;
    color: var(--main-color);
    &:hover {
        letter-spacing: 0.2rem;
        transition: 0.6s;
    }
`;
const ParagraphHeader = styled.div`
    font-size: 3.8rem;
    padding-top: 1rem;
    color: var(--main-color);
    &:hover {
        letter-spacing: 0.2rem;
        transition: 0.6s;
    }
`;

export default function Home() {
    return (
        <Fragment>
            <ContainerHome id="Home">
                <ParagraphHeader>Hi,</ParagraphHeader>
                <MainParagraph>I'm Stefan!</MainParagraph>
                <MainParagraph>Welcome to my portfolio page</MainParagraph>
                <ParagraphStyled>
                    I can provide clean code and perfect design. <br /> Also I
                    can make the website more interactive.
                </ParagraphStyled>
                <br />
                <a href="#Projects">
                    <Button>my projects</Button>
                </a>
               
            </ContainerHome>
        </Fragment>
    );
}
