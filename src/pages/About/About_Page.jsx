import React from 'react'
import About from './../../component/About/About.jsx'
import Team from './../../component/Team/Team.jsx'
import Timeline from './../../component/Timeline/Timeline.jsx'
import Features from '../../component/Features/Features.jsx'
import Contact_card from '../../component/Contact/Contact_card'
const About_page = () => {
  return (
    <>
      <About />
      <section className="section _bg">
        <div class="section_heading center">
          <h2> <span>F</span>eatures</h2>
        </div>
        <Features />
      </section>
      <section className="section">
        <div class="section_heading center">
          <h2> <span>O</span>ur Team</h2>
        </div>
        <Team />
      </section>
      <section className="section _bg">
        <div class="section_heading">
          <h2> <span>O</span>ur Misson</h2>
          <p>Nourishing lives with freshness and health. Our mission at Fruitwala Delivering quality fruits, vegetables, and joy to every doorstep, One Fruit at a Time – Fostering Health, Freshness, and Happiness in Every Home and Community.</p>
        </div>
        <Timeline />
      </section>

      <section className="section">
        <Contact_card />
      </section>
    </>
  )
}

export default About_page
