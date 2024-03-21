import React, { useState } from 'react'
import axios from 'axios'
import { aboutPageSections, founders } from './Data'
import { toast } from 'react-toastify'

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
            <img src="images/about.png" alt='about'/>
            <h2>Know more About Us</h2>
        </div>

    )
}

export const AboutForm = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        subject: '',
        feedback: ''
    });

    const handelSubmit = async (e) => {
        e.preventDefault()

        const name = document.forms["feedback"].name.value
        const email = document.forms["feedback"].email.value
        const subject = document.forms["feedback"].subject.value
        const feedback = document.forms["feedback"].feedback.value

        try {
            const response = await axios.post('/feedback/', {
                name, 
                email, 
                subject, 
                feedback
            })

            toast.success("Feedback Posted")
            setFormData({
                name: '',
                email: '',
                subject: '',
                feedback: ''
            });
        } catch (error) {
            if(error.response.data.message === "Feedback Failed") {
                toast.error("Feedback Failed")
            } 
            else {
                console.log(error)
                toast.error("Feedback Failed")
            }   
        }
    }

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

  return (
    <section id="form">
        <form onSubmit={handelSubmit} name="feedback"> 
            <span>Leave a Message</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handelChange}/>
            <input type="email" placeholder="E-mail" name="email" value={formData.email} onChange={handelChange}/>
            <input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handelChange}/>
            <textarea placeholder="Your Message" rows="5" cols="5" name="feedback" id="feedback" value={formData.feedback} onChange={handelChange}></textarea>
            <button>Submit</button>
        </form>
        <div id="people">
            {founders.map((founder) => {
                return (
                    <div key={founder.id} className="contact-person">
                        <img src={founder.image_url} alt={founder.name}/>
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
