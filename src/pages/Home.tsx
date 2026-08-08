import Navbar from "@/sections/Navbar"
import Hero from "@/sections/Hero"
import Commitment from "@/sections/Commitment"
import Journey from "@/sections/Journey"
import Services from "@/sections/Services"
import Customized from "@/sections/Customized"
import Expertise from "@/sections/Expertise"
import Contact from "@/sections/Contact"
import Footer from "@/sections/Footer"
import BackToTop from "@/sections/BackToTop"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Commitment />
        <Journey />
        <Services />
        <Customized />
        <Expertise />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
