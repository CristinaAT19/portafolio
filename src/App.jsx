import Header from './components/Header'
import Hero from './components/Hero'
import Specialties from './components/Specialties'
import Services from './components/Services'
import Projects from './components/Projects'
import Quote from './components/Quote'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="inicio" className="mx-auto max-w-[1160px] px-[clamp(20px,5vw,48px)]">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Services />
        <Projects />
        <Quote />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
