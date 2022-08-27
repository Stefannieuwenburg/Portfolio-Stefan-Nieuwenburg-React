import React, { Fragment } from "react";
import styled from "styled-components";

const ContainerHome = styled.div`
    height: 100vh;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
`;

const Button = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: bold;
    margin-bottom:5rem;
    margin: 2.3rem;
    padding: 0.5rem 1rem;
    background-color: var(--Main-Color);
    color: black;
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: 0.6s;
    &:hover {
        letter-spacing: 0.2rem;
        color: var(--Black-Color);
        transition: 0.6s;
    }
`;
const MainParagraph = styled.p`
    font-size: 3rem;
    color: var(--White-Color);
`;
const ParagraphStyled = styled.p`
    margin-top: 2rem;
    font-size: 1.8rem;
    color: var(--Main-Color);
    transition: 0.6s;
    &:hover {
        letter-spacing: 0.2rem;
        transition: 0.6s;
    }
`;
const ParagraphHeader = styled.p`
    margin-top: 10rem;
    font-size: 3.8rem;
    color: var(--Main-Color);
    transition: 0.6s;
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
