import '@/styles/Buttons.scss'
import { arrayToStringWithSpaces } from '@/utils'
import React from 'react'
import Image from 'next/image'

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
  attrs?: React.HTMLAttributes<HTMLButtonElement>[]
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