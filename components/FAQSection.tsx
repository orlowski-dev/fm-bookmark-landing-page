'use client'

import '@/styles/sections.scss'
import { default as faqData } from '@/data/faq.json'
import { arrowIcon } from '@/assets/icons'
import Image from 'next/image'
import { useRef } from 'react'

interface IFAQData {
  id: number,
  question: string,
  answer: string
}

const QuestionAndAnswer = (props: IFAQData) => {
  const artRef = useRef<HTMLElement>(null)
  return (
    <article className='qna-article' ref={artRef}>
      <header
        onClick={() => artRef.current?.classList.toggle('p-visible')}
        className='d-fl ai-c jc-sb'
      >
        <h4>{props.question}</h4>
        <Image
          src={arrowIcon}
          width={arrowIcon.width}
          height={arrowIcon.height}
          alt='arrow icon'
        />
      </header>
      <p>
        {props.answer}
      </p>
    </article>
  )
}

export const FAQSection = () => (
  <section className="faq-section">
    <div className="container p-v p-h">
      <div className="content mw-540 block-c">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>
      <div className="qna mw-540 block-c">
        {
          faqData.map((data: IFAQData) => (
            <QuestionAndAnswer key={data.id} {...data} />
          ))
        }
      </div>
    </div>
  </section>
)