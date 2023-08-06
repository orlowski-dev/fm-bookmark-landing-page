import '@/styles/HeroSection.scss'
import { LinkButton } from './Buttons'
import Image from 'next/image'

export const HeroSection = () => (
  <section className="hero-section">
    <div className="container p-h p-v">
      <div className="illustration">
        <Image src={'/illustrations/illustration-hero.svg'} width={575} height={382} alt='hero illustration' />
      </div>
      <div className="content mw-540">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="buttons d-fl jc-c">
          <LinkButton
            textContent='Get it on Chrome'
            classList={['button', 'sh', 'blue']}
            href='/'
          />
          <LinkButton
            textContent='Get it on Firefox'
            classList={['button', 'sh', 'gray']}
            href='/'
          />
        </div>
      </div>
    </div>
  </section>
)