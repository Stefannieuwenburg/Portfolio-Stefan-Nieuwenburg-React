import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100vh;
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: bold;
  margin-bottom: 5rem;
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
export const MainParagraph = styled.p`
  font-size: 3rem;
  color: var(--White-Color);
`;
export const ParagraphStyled = styled.p`
  margin-top: 2rem;
  font-size: 1.8rem;
  color: var(--Main-Color);
  transition: 0.6s;
  &:hover {
    letter-spacing: 0.2rem;
    transition: 0.6s;
  }
`;
export const ParagraphHeader = styled.p`
  margin-top: 10rem;
  font-size: 3.8rem;
  color: var(--Main-Color);
  transition: 0.6s;
  &:hover {
    letter-spacing: 0.2rem;
    transition: 0.6s;
  }
`;
