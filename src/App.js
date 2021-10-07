import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { Layout } from "./components/layout/Layout";

function App() {  
  return (
    <Layout>
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
