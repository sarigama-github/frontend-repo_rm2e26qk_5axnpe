import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-slate-800">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(154,197,232,0.15),transparent),radial-gradient(800px_circle_at_100%_0%,rgba(237,231,219,0.25),transparent)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Works />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
