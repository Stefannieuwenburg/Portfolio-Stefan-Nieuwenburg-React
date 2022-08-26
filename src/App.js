import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Technologies from "./pages/Technologies"
import Projects from "./pages/Projects"

const App = ()=> {
  return (
    <Fragment>
        <GlobalStyle />
        <NavBar />
        <Home />
        <Technologies />
        <Projects />
      </Fragment>
    );
}

export default App;
