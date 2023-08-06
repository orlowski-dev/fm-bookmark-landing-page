import '@/styles/sections.scss'
import { Slider } from './Slider'

export const FeaturesSection = () => (
  <section className="features-section">
    <div className="container p-v p-h">
      <div className="content mw-540 block-c">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>
      <div className="slider-container">
        <Slider />
      </div>
    </div>
  </section>
)