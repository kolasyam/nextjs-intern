import Image from "next/image";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Main from "./Components/Main";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import Experience from "./Components/Experience";
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Main></Main>
    <About></About>
    <Skills></Skills>
    <Experience></Experience>
    <Projects></Projects>
    <Contact></Contact>
    <ScrollToTop></ScrollToTop>
    </>
  );
}
