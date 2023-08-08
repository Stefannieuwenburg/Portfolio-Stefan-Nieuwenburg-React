import React, { Fragment, useState } from "react";
import { Nav, LogoImg , LogoText, Link, Menu, Hamburger} from "./style.navBar";
import { GiHamburgerMenu } from "react-icons/gi";
import Rlogo from "../assets/logo/github.svg"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <Nav>
                <LogoImg href="https://github.com/Stefannieuwenburg">
                    <img src={Rlogo} alt="Rlogo" />
                    <LogoText>portfolio</LogoText>
                </LogoImg>

                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu
                        style={{ color: "white", fontSize: "30px" }}
                    />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <Link href="#Home" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="#Projects" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                    <Link href="#Technologies" onClick={() => setIsOpen(false)}>
                        Technologies
                    </Link>
                </Menu>
            </Nav>
        </Fragment>
    );
};

export default Navbar;


