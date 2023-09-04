import "./App.css";
import About from "./Components/About";
import Education from "./Components/Education";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <main className="px-10 bg-white">
      <section className="min-h-screen">
        <Navbar />
        <Introduction />
        <About />
        <div className="mb-16 md:flex md:justify-center md:gap-20 lg:gap-36 md:items-start">
          <Education />
          <Skills />
        </div>
        <Projects />
      </section>
    </main>
  );
}

export default App;
