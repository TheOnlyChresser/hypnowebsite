import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer";
import Row from "@/components/row"
import RowReverse from "@/components/rowreverse";
export default function Index() {
  return (
      <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-blue-950 to-purple-400 via-black/95">
        <Navbar/>
        <main>
          <Hero/>
          <Row image="/apple.svg" heading="AI at the core" text="Our AI-driven hypnosis adapts to your needs — from stress relief to confidence, focus, and better sleep. While you rest, personalized audio sessions play at the optimal time in your sleep cycle, guided by real-time data. After each session, quick questionnaires help track your progress and refine future experiences. This isn’t just self-help — it’s research-backed transformation while you sleep." />
          <RowReverse image="/apple.svg" heading="What we stand for" text="We believe in real change through science, not guesswork. Our mission is to make mental wellness easy, accessible, and evidence-based — even while you sleep. No fluff, no gimmicks. Just AI-enhanced hypnosis sessions designed for deep impact, backed by data, and continuously improved through real user feedback. You're not just using an app — you're part of a movement for smarter self-care." />
        </main>
        <Footer/>
      </div>
  )
}