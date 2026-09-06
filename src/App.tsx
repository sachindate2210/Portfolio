import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { TechMarquee } from "./components/TechMarquee"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Skills } from "./sections/Skills"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { AIStack } from "./sections/AIStack"
import { GitHubSection } from "./sections/GitHubSection"
import { EducationCerts } from "./sections/EducationCerts"
import { Contact } from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIStack />
        <GitHubSection />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
      <TechMarquee />
    </div>
  )
}

export default App
