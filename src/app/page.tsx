import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
export default function Index() {
  return (
      <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-blue-950 to-purple-400 via-black/95">
        <Navbar/>
        <main>
          <Hero/>
        </main>
      </div>
  )
}