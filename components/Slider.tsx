'use client'

import '@/styles/Slider.scss'
import { default as slidesData } from '@/data/slidesData.json'
import Image from 'next/image'
import { LinkButton } from './Buttons'
import React, { Children, useEffect, useRef, useState } from 'react'

interface ISlideData {
  id: number,
  title: string,
  headline: string
  content: string,
  link?: string,
  illustration: string
}

const Slide = (props: ISlideData) => (
  <article className="slide">
    <div className="illustration">
      <Image src={props.illustration} width={536} height={346} alt={`${props.title} illustration`} />
    </div>
    <div className="content">
      <h3>{props.headline}</h3>
      <p>{props.content}</p>
      {
        props.link ? <div className='button-area'>
          <LinkButton href={props.link} classList={['button', 'sh', 'blue']} textContent='More info' />
        </div> : undefined
      }
    </div>
  </article>
)


export const Slider = () => {
  const handleSlideTitleClick = (index: number): string => {
    const columnGap = sliderRef.current && getComputedStyle(sliderRef.current).getPropertyValue('column-gap').replace('px', '') || 740
    return `translate3d(calc(-${index * columnGap}px - ${index * 100}%), 0,0)`
  }
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = slidesData.map((slide: ISlideData) => <Slide key={slide.id} {...slide} />)
  const sliderRef = useRef(null)
  const [sliderTransform, setSliderTransform] = useState<string>(handleSlideTitleClick(0))
  const slidesTitles = slidesData.map((slide: ISlideData, index: number) => (
    <li
      key={slide.id}
      className={`li-border-h ${currentSlide === index ? 'active' : ''}`}
      onClick={() => {
        setCurrentSlide(index)
        setSliderTransform(handleSlideTitleClick(index))
      }}
    > {slide.title}</li >
  ))

  return (
    <section className="slider-section">
      <h2 className="visually-hidden">Slider</h2>
      <div className="slider-controls">
        <ul className="us-ul" style={{ gridTemplateColumns: `repeat(${slidesTitles.length}, 1fr)` }}>
          {slidesTitles}
        </ul>
      </div>
      <div
        className="slider-scene"
        ref={sliderRef}
        style={{
          gridTemplateColumns: `repeat(${slidesTitles.length}, 100%)`,
          transform: sliderTransform
        }}
      >
        {slides}
      </div>
    </section>
  )
}