import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import logo from './../../assets/img/logo.png'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer_top">
          <div className="footer_content">
            <div className="overview_content">
              <div className="logo">
                <Link className='logo_text'>
                  <img src={logo} className='logo_icon' />
                  Fruit<span>Wala</span>
                </Link>
              </div>
              <p>Harvesting Happiness: Fruitwala – Where Freshness Meets Flavor in Every Bite. Your Daily Dose of Nature's Best Delivered!</p>
              <a href="mailto:Fruitwala@google.com">Email: Fruitwala@google.com</a>
            </div>
            <ul className="sub_menu">
              <h3>Home</h3>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
            </ul>
            <ul className="sub_menu">
              <h3>about</h3>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
            </ul>
            <ul className="sub_menu">
              <h3>work</h3>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
              <li><Link>Home</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <p>made by ritu raj</p>
          <p>version 1.1.1</p>
        </div>
      </footer>

    </>
  )
}

export default Footer
