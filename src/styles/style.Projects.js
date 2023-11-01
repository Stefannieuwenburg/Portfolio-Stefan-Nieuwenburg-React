import styled from "styled-components";

export const ContainerProject = styled.div`
  min-height: 100vh;
  padding: 5rem;
  
`;
export const Paragraph = styled.p`
  font-size: 1rem;
  margin-top: 0.2rem;
  color: var(--White-Color);
`;

export const Button = styled.button`
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
  transition: 0.6s;
  &:hover {
    letter-spacing: 0.2rem;
    color: var(--Black-Color);
    transition: 0.6s;
  }
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ProjectBox = styled.div`
  background: var(--Black-Color);
  text-align: center;
  border: 3px solid var(--Main-Color);
  border-radius: 2rem;
  color: var(--White-Color);
  img {
    margin-top: 1.2rem;
    border-radius: 2rem;
  }
`;
