import '@/styles/sections.scss'
import Image from 'next/image'
import { LinkButton } from './Buttons'
import { default as downloadCardsData } from '@/data/downloadCardsData.json'

interface IDownloadCardData {
  id: number,
  icon: string,
  headline: string,
  minVersion: number,
  link: string
}

const Card = (props: IDownloadCardData) => (
  <article>
    <Image src={props.icon} height={100} width={100} alt='logo' />
    <h3>{props.headline}</h3>
    <p>
      Minimum version {props.minVersion}
    </p>
    <hr />
    <LinkButton
      href='/'
      textContent='Add & Install Extension'
      classList={['button', 'sh', 'blue']}
    />
  </article>
)

export const DownloadSection = () => {
  const cards = downloadCardsData.map((card: IDownloadCardData) => (
    <Card {...card} key={card.id} />
  ))
  return (
    <section className="download-section">
      <div className="container p-v p-h">
        <div className="content block-c mw-540">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favorite you’d like us to prioritize.
          </p>
        </div>
        <div className="cards">
          {cards}
        </div>
      </div>
    </section>
  )
}