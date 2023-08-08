import styled from "styled-components";

export const Nav = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
export const LogoImg = styled.a`
  display: flex;
  width: 29px;
  height: 29px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const LogoText = styled.p`
  color: var(--White-Color);
  font-size: 1.5rem;
  font-weight: bold;
  transition: 0.6s;
  &:hover {
    letter-spacing: 0.2rem;
    transition: 0.6s;
  }
`;

export const Link = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: whitesmoke;
  transition: all 0.3s ease-in;
  font-size: 1.3rem;
  font-weight: bold;
  &:hover {
    color: var(--Main-Color);
    letter-spacing: 0.2rem;
    transition: 0.3s;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background: rgba(3, 3, 3, 0.7);
    border-radius: 20px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
    color: var(--main-color);
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
