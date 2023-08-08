import { logoBlueWhite } from '@/assets/logos'
import '@/styles/Footer.scss'
import Image from 'next/image'
import { default as navLinks } from '@/data/navLinksData.json'
import { LinkButton } from './Buttons'
import { facebookIcon, twitterIcon } from '@/assets/icons'

export const Footer = () => (
  <footer className="main-footer">
    <div className="container p-h">
      <div className='logo-n-links'>
        <Image src={logoBlueWhite} width={148} height={25} alt='logo' />
        <div className="links">
          <ul className="us-ul">
            {
              navLinks.map(data => (
                <li
                  key={data.id}
                  className='link-upp'
                >
                  <LinkButton href='/' textContent={data.textContent} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="social-media-links">
        <LinkButton
          textContent='Facebook'
          href='/'
          onlyIcon
          icon={{ path: facebookIcon, alt: 'facebook icon' }}
          target='_blank'
        />
        <LinkButton
          textContent='Twitter'
          href='/'
          onlyIcon
          icon={{ path: twitterIcon, alt: 'twitter icon' }}
          target='_blank'
        />
      </div>
    </div>
  </footer>
)