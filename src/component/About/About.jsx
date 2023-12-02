import React from 'react'
import './About.scss'
import { MdHealthAndSafety } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { TbYoga } from "react-icons/tb";
import { LuActivity } from "react-icons/lu";

const About = () => {
  return (
    <>
      <div className='banner_section light'>
        <div className="section_heading">

          <h1 className='title'><span className='primary'>A</span>bout</h1>
          <p>Discover a world of freshness and flavor at Fruitwala. Committed to quality and wholesome living, we bring nature's best to your doorstep, ensuring each bite is a delightful celebration.</p>
        </div>
      </div>

      <div className="our_story">
        <div className="img">
          <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ceo" />
        </div>
        <div className="content">
          <h1 className='title'><span className='primary'>O</span>ur Story</h1>
          <p>
            Fruitwala, a beacon of freshness, is committed to redefining your culinary experience. Born from a passion for quality produce, we embark on a flavorful journey, delivering nature's bounty to your doorstep. Our vibrant selection spans succulent fruits, crisp vegetables, and premium dry fruits, ensuring every bite is a celebration of health and taste. With an unwavering commitment to excellence, Fruitwala blends innovation and tradition, fostering a community that values freshness, sustainability, and well-being. Join us in savoring the essence of wholesome living, as we cultivate a world where each fruit tells a story of quality, care, and delicious possibilities.
          </p>
          <div className="features">

            <div>
              <MdHealthAndSafety />
              <p>Health Focus</p>
            </div>

            <div>
              <LuActivity />
              <p> Wellness Priority</p>
            </div>

            <div>
              <FaUsers />
              <p>Customer Delight</p>
            </div>

            <div>
              <TbYoga />
              <p>Nutritional Wellness</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About
