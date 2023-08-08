import { DownloadSection } from "@/components/DownloadSection"
import { FAQSection } from "@/components/FAQSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { HeroSection } from "@/components/HeroSection"
import { MainHeader } from "@/components/MainHeader"
import { NewsletterSection } from "@/components/NewsletterSection"

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <FAQSection />
        <NewsletterSection />
      </main>
    </>
  )
}

export default App