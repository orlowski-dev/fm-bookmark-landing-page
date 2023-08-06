'use client'

import { logo, logoWhite } from '@/assets/logos'
import { default as navLinksData } from '@/data/navLinksData.json'
import '@/styles/MainHeader.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Button, LinkButton } from './Buttons'
import { closeIcon, facebookIcon, hamburgerIcon, twitterIcon } from '@/assets/icons'
import { useRef } from 'react'

export const MainHeader = () => {
  let isNavVisible = false;
  const mobileNavRef = useRef<HTMLElement>(null)

  const showMobileMenu = () => {
    mobileNavRef.current?.classList.add('visible')
    document.body.classList.add('prevent-scroll')
    isNavVisible = true
  }

  const hideMobileMenu = () => {
    mobileNavRef.current?.classList.remove('visible')
    document.body.removeAttribute('class')
    isNavVisible = false
  }

  const handleNavBtnClick = () => {
    if (!isNavVisible) {
      showMobileMenu()
    } else {
      hideMobileMenu()
    }
  }

  return (
    <>
      <header className="main-header">
        <div className="container p-v p-h d-fl ai-c jc-sb">
          <div className="logo-area">
            <Image src={logo} width={149} height={25} alt='logo' />
          </div>
          <nav id="desktop-nav" className="desktop desktop-nav">
            <ul className="us-ul">
              {
                navLinksData.map(link => (
                  <li
                    key={link.id}
                    className='li-desktop-nav'
                  >
                    <Link href={link.path}>{link.textContent}</Link>
                  </li>
                ))
              }
            </ul>
            <Button
              textContent='Login'
              classList={['button', 'red', 'sh', 'desktop-login-btn']}
            />
          </nav>
          <div className="mobile button-area">
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
              attrs={{ "onClick": handleNavBtnClick }}
            />
          </div>
        </div>
      </header>
      <nav id="mobile-nav" className="mobile mobile-nav" ref={mobileNavRef}>
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
            attrs={{ onClick: handleNavBtnClick }}
          />
        </header>
        <div className="nav-links">
          <ul className="us-ul">
            {
              navLinksData.map(link => (
                <li
                  key={link.id}
                  className='li-border-h'
                  onClick={() => hideMobileMenu()}
                >
                  <Link href={link.path}>{link.textContent}</Link>
                </li>
              ))
            }
          </ul>
          <div className="button-area">
            <LinkButton
              textContent='Login'
              href='/'
              attrs={{ onClick: hideMobileMenu }}
              classList={['button', 'mobile-login-btn']}
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
            attrs={{ onClick: hideMobileMenu }}
          />
          <LinkButton
            textContent='Twitter'
            href='/'
            onlyIcon
            icon={{ path: twitterIcon, alt: 'twitter icon' }}
            target='_blank'
            attrs={{ onClick: hideMobileMenu }}
          />
        </div>
      </nav>
    </>
  )
}