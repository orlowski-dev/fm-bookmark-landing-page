'use client'
import '@/styles/sections.scss'
import { Button } from './Buttons'
import React, { useRef } from 'react'

export const NewsletterSection = () => {
  const inputContainer = useRef<HTMLDivElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const validRegex = RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')
  const validateForm = (): boolean => {
    if (!emailInputRef.current) return false

    const emailInputValue = emailInputRef.current.value
    if (emailInputValue.length < 3) return false
    if (!validRegex.test(emailInputValue)) return false

    return true
  }
  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const validate = validateForm()
    console.log(validate)
    validate ? inputContainer.current?.classList.remove('error') : inputContainer.current?.classList.add('error')
  }
  return (
    <section className="newsletter-section">
      <div className="container p-v p-h">
        <div className="content mw-540 block-c">
          <h3>35.000+ Already joined</h3>
          <h2>Stay up-to-date with what we`re doing</h2>
          <form onSubmit={formSubmit}>
            <div className="custom-input" ref={inputContainer}>
              <label>
                <span className="visually-hidden">Email:</span>
                <input type="email" name="email" ref={emailInputRef} placeholder='Enter your email address' />
              </label>
              <span className="error">Whoops, make sure it`s an email</span>
            </div>
            <div className="button-area">
              <Button textContent='Contact Us' classList={['button', 'sh', 'red']} />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}