import React, { useState, useRef, useEffect } from 'react'
import zuri from './img/zuri.jpg'
import { links, socialMedia } from './data'
import { FaBars, FaTwitter } from 'react-icons/fa'

function Navbar() {
  const [showlinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showlinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showlinks])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={zuri} alt='my image logo' className='logo' />

          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showlinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((item) => {
              const { id, url, text } = item
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {socialMedia.map((item) => {
            const { id, url, icon } = item
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
