import styled from "styled-components";

export const ContainerTechnologies = styled.div`
  height: 100vh;
  padding: 4rem;
  margin-top: 1.2rem;
`;
export const WrapperTechnologies = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const BoxTechnologies = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 2rem;
  background: var(--Black-Color);
  border: 3px solid var(--Main-Color);
  border-radius: 2rem;
  color: var(--White-Color);
`;
export const SectionHeader = styled.p`
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 25px;
`;
export const MainParagraph = styled.p`
  font-size: 1.8rem;
  color: var(--Main-Color);
  &:hover {
    letter-spacing: 0.2rem;
    transition: 0.6s;
  }
`;
export const Paragraph = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1.2rem;
  color: var(--White-Color);
`;

export const ParagraphStyled = styled.p`
  font-size: 1.8rem;
  padding-top: 1rem;
  color: var(--Main-Color);
  &:hover {
    letter-spacing: 0.2rem;
    transition: 0.6s;
  }
`;