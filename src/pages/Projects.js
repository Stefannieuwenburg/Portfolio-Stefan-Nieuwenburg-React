import React, { Fragment } from "react";
import { ContainerProject, Button,Paragraph,ProjectBox,ProjectWrapper  }  from "../styles/style.Projects";

import image0 from "../assets/pictures/mulsoft.png";
import image1 from "../assets/pictures/coffee.png";
import image2 from "../assets/pictures/TeamProject.png";
import image3 from "../assets/pictures/blog.png";
import image4 from "../assets/pictures/kidsbookshop.png";
import image5 from "../assets/pictures/movie.png";


export default function Projects() {
    const ViewliveProj0 = () => {
        window.open("https://mulsoft-website-styled-components.netlify.app/");
    };
    const VieuwCodeProj0 = () => {
        window.open("https://github.com/Stefannieuwenburg/my-project-mulsoft-website");
    };
    const ViewliveProj1 = () => {
        window.open("https://styled-coffee-shop.netlify.app/");
    };
    const VieuwCodeProj1 = () => {
        window.open("https://github.com/Stefannieuwenburg/my-project-styled-coffee-shop-website");
    };
    const ViewliveProj2 = () => {
        window.open("https://styled-website-team-project.netlify.app/");
    };
    const VieuwCodeProj2 = () => {
        window.open("https://github.com/Stefannieuwenburg/my-project-styled-website");
    };
    const VieuwCodeProj3 = () => {
        window.open("https://github.com/Stefannieuwenburg/React-blog-site");
    };
    const VieuwCodeProj4 = () => {
        window.open("https://github.com/Stefannieuwenburg/React-kids-books-shop");
    };
    const VieuwCodeProj5= () => {
        window.open("https://github.com/Stefannieuwenburg/vite-react-movie-database");
    };

    
    
    return (
        <Fragment>
            <ContainerProject id="Projects">
                <ProjectWrapper>
                    <ProjectBox>
                        <img src={image0} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={ViewliveProj0}>View live</Button>
                        <Button onClick={VieuwCodeProj0}>vieuw code</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image1} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={ViewliveProj1}>vieuw live</Button>
                        <Button onClick={VieuwCodeProj1}>vieuw code</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image2} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={ViewliveProj2}>vieuw live</Button>
                        <Button onClick={VieuwCodeProj2}>vieuw code</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image3} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={VieuwCodeProj3}>vieuw code</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image4} alt="i" />
                        <Paragraph>React</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={VieuwCodeProj4}>vieuw code</Button>
                    </ProjectBox>

                    <ProjectBox>
                        <img src={image5} alt="i" />
                        <Paragraph>HTML</Paragraph>
                        <Paragraph>project</Paragraph>
                        <Button onClick={VieuwCodeProj5}>vieuw code</Button>
                    </ProjectBox>
                </ProjectWrapper>
            </ContainerProject>
        </Fragment>
    );
}
