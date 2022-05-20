import React, { Suspense } from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar, I18n } from "./components";
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
      <Testimonial />
      <Footer />
    </div>
  </Suspense>
);

export default App;
