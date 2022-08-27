import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Technologies from "./pages/Technologies";

const App = ()=> {
  return (
      <Fragment>
          <GlobalStyle />
          <NavBar />
          <Home />
          <Projects />
          <Technologies />
      </Fragment>
  );
}

export default App;
