import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const responsiveCSS = `
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-14px); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  @media (max-width: 960px) {
    .hero-grid      { grid-template-columns: 1fr !important; }
    .hero-terminal  { display: flex; justify-content: center; }
    .about-grid     { grid-template-columns: 1fr !important; gap: 56px !important; }
    .services-grid  { grid-template-columns: 1fr !important; }
    .contact-grid   { grid-template-columns: 1fr !important; gap: 48px !important; }
    .skill-row      { flex-direction: column !important; gap: 10px !important; }
    .nav-desktop    { display: none !important; }
    .nav-mobile-btn { display: flex !important; }
  }

  @media (min-width: 961px) {
    .nav-mobile-btn { display: none !important; }
  }
`

export default function App() {
  return (
    <>
      <style>{responsiveCSS}</style>
      <div style={{ background: "#04080f", minHeight: "100vh" }}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
