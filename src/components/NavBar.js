import React, { Fragment, useState } from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";


const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const Link = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    color: whitesmoke;
    transition: all 0.3s ease-in;
    font-size: 1.3rem;
    font-weight:bold;
    &:hover {
        color: var(--main-color);
        letter-spacing: 0.2rem;
        transition: 0.3s;
        
    }
`;


const Logo = styled.a`
    padding: 1rem;
    color: white;
    text-decoration:uppercase;
    font-weight: 800;
    font-size: 1.5rem;
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`;

const Menu = styled.div`
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
        border-radius:20px;
    }
`;

const Hamburger = styled.div`
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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <Nav>
                <a href="#Home">
                    <Logo>Portfolio</Logo>
                </a>
                
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu
                        style={{ color: "white", fontSize: "30px" }}
                    />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <Link href="#Home" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="#Technologies" onClick={() => setIsOpen(false)}>
                        Technologies
                    </Link>
                    <Link href="#Projects" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                </Menu>
            </Nav>
        </Fragment>
    );
};

export default Navbar;


