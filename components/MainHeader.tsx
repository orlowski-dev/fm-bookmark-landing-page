import { logo, logoWhite } from '@/assets/logos'
import { default as navLinksData } from '@/data/navLinksData.json'
import '@/styles/MainHeader.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Button, LinkButton } from './Buttons'
import { closeIcon, facebookIcon, hamburgerIcon, twitterIcon } from '@/assets/icons'

export const MainHeader = () => {

  return (
    <header className="main-header">
      <div className="container p-v p-h d-fl ai-c jc-sb">
        <div className="logo-area">
          <Image src={logo} width={149} height={25} alt='logo' />
        </div>
        <nav id="desktop-nav" className="desktop desktop-nav">
          <ul className="us-ul">
            {
              navLinksData.map(link => (
                <li key={link.id}>
                  <Link href={link.path}>d {link.textContent}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <nav id="mobile-nav" className="mobile mobile-nav">
          <header className='d-fl ai-c jc-sb'>
            <Image src={logoWhite} width={149} height={25} alt='logo' />
            <Button
              textContent='close menu'
              onlyIcon
              icon={{
                path: closeIcon,
                width: 15,
                height: 15,
                alt: 'close icon'
              }}
              classList={['no-bg-br', 'iconic']}
            />
          </header>
          <div className="nav-links">
            <ul className="us-ul">
              {
                navLinksData.map(link => (
                  <li key={link.id} className='li-border-h'>
                    <Link href={link.path}>{link.textContent}</Link>
                  </li>
                ))
              }
            </ul>
            <div className="button-area">
              <LinkButton
                textContent='Login'
                href='/'
                classList={['button', 'nav-login-btn']}
              />
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
        </nav>
        <div className="button-area">
          <Button
            textContent='open menu'
            onlyIcon
            icon={{
              path: hamburgerIcon,
              width: 18,
              height: 15,
              alt: 'menu icon'
            }}
            classList={['no-bg-br', 'iconic']}
          />
        </div>
      </div>
    </header>
  )
}