import { DownloadSection } from "@/components/DownloadSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { HeroSection } from "@/components/HeroSection"
import { MainHeader } from "@/components/MainHeader"

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
      </main>
    </>
  )
}

export default App