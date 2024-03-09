import React from 'react'
import { aboutPageSections, founders } from './Data'

const AboutSections = () => {
  return (
    <div id='about-section'>
      {aboutPageSections.map((section) => {
        return (
            <section key={section.id}>
                <div class="section-text">
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                </div>
                <img src={section.image_url} alt={section.title}/>
            </section>
        )
      })}
    </div>
  )
}

export const AboutHeader = () =>{
    return (
        <div id='about'>
            <img src="images/about.png"/>
            <h2>Know more About Us</h2>
        </div>

    )
}

export const AboutForm = () => {
  return (
    <section id="form">
        <form action=""> 
            <span>Leave a Message</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea placeholder="Your Message" rows="5" col="5"></textarea>
            <button>Submit</button>
        </form>
        <div id="people">
            {founders.map((founder) => {
                return (
                    <div key={founder.id} className="contact-person">
                        <img src={founder.url} alt={founder.name}/>
                        <div className="des">
                            <h3>{founder.name}</h3>
                            <p>Founder</p>
                            <p>Phone : {founder.phone_no}</p>
                            <p>Email : {founder.email}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default AboutSections
