import React from "react";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden">
      <ParticlesBackground />
      <CustomCursor />
      <Navbar />
      <main className="scroll-smooth">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
         <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}