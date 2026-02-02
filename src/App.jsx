import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  return (
    <main className="page">
      <Home />
      <Projects />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
