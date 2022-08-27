import React, { Fragment } from "react";
import styled from "styled-components";

import image0 from "../assets/pictures/mulsoft.png";
import image1 from "../assets/pictures/coffee.png";
import image2 from "../assets/pictures/TeamProject.png";
import image3 from "../assets/pictures/blog.png";
import image4 from "../assets/pictures/kidsbookshop.png";
import image5 from "../assets/pictures/movie.png";

const ContainerProject = styled.div`
    padding: 1rem 4rem;
    padding-top: 3rem;
    min-height: 100vh;
`;
const Paragraph = styled.p`
    font-size: 1rem;
    margin-top: 0.2rem;
    color: var(--White-Color);
`;

const Button = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: bold;
    margin: 1.2rem;
    padding: 0.5rem 1rem;
    background-color: var(--Main-Color);
    color: black;
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: 0.3s;
    &:hover {
        letter-spacing: 0.2rem;
        color: var(--Black-Color);
        transition: 0.3s;
    }
`;

const ProjectWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ProjectBox = styled.div`
    margin: 1.2rem;
    background: var(--Black-Color);
    text-align: center;
    border: 3px solid var(--Main-Color);
    border-radius: 2rem;
    color: var--White-Color();
    img {
        border-radius:2rem;
    }
`;


export default function Projects() {
    const proj0 = () => {
        window.open("https://mulsoft-website-styled-components.netlify.app/");
    };
    const proj1 = () => {
        window.open("https://styled-coffee-shop.netlify.app/");
    };
    const proj2 = () => {
        window.open("https://styled-website-team-project.netlify.app/");
    };
    const proj3 = () => {
        window.open("https://github.com/Stefannieuwenburg/React-blog-site");
    };
    const proj4 = () => {
        window.open(
            "https://github.com/Stefannieuwenburg/React-kids-books-shop"
        );
    };
    const proj5 = () => {
        window.open(
            "https://github.com/Stefannieuwenburg/vite-react-movie-database"
        );
    };

    
    
    return (
        <Fragment>
            <ContainerProject id="Projects">
                <ProjectWrapper>
                    <ProjectBox>
                        <img src={image0} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={proj0}>View live</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image1} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={proj1}>vieuw live</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image2} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={proj2}>vieuw live</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image3} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={proj3}>vieuw code</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image4} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={proj4}>vieuw code</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image5} alt="i" />
                        <Paragraph>HTML</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={proj5}>vieuw code</Button>
                    </ProjectBox>
                </ProjectWrapper>
            </ContainerProject>
        </Fragment>
    );
}
