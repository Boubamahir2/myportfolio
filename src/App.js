import React, { Suspense } from "react";

import { About, Footer, Header, Skills,Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

const App = () => (
  <Suspense fallback={loadingMarkup}>
    <div className="app">
      <Navbar  />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  </Suspense>
);

export default App;
