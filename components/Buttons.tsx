import '@/styles/Buttons.scss'
import { arrayToStringWithSpaces } from '@/utils'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IButtonPropsTypes {
  textContent: string,
  onlyIcon?: boolean,
  icon?: {
    path: string,
    alt: string,
    width?: number,
    height?: number,
  }
  classList?: string[],
  attrs?: object
}

interface ILinkButtonPropsTypes extends IButtonPropsTypes {
  href: string,
  target?: string
}

export const Button = ({
  textContent,
  onlyIcon,
  icon,
  classList,
  attrs
}: IButtonPropsTypes) => (
  <button
    {...attrs}
    className={classList && arrayToStringWithSpaces(classList)}
  >
    {
      icon ? <Image
        src={icon.path}
        width={icon.width || 24}
        height={icon.height || 24}
        alt={icon.alt}
      /> : undefined
    }
    {
      onlyIcon ? <span className='visually-hidden'>{textContent}</span> : textContent
    }
  </button>
)

export const LinkButton = ({
  href,
  target,
  textContent,
  onlyIcon,
  icon,
  classList,
  attrs
}: ILinkButtonPropsTypes) => (
  <Link
    href={href}
    target={target ? target : undefined}
    rel={target ? 'noreferrer noopener' : undefined}
    className={classList ? arrayToStringWithSpaces(classList) : undefined}
    {...attrs}
  >
    {
      icon ? <Image
        src={icon.path}
        width={icon.width || 24}
        height={icon.height || 24}
        alt={icon.alt}
      /> : undefined
    }
    {
      onlyIcon ? <span className='visually-hidden'>{textContent}</span> : textContent
    }
  </Link>
)