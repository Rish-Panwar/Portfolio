import React, { useState, useSyncExternalStore } from 'react'
import emailjs from '@emailjs/browser'
import { useSurfaceSampler } from '@react-three/drei'
import Alert from '../components/Alert'
import { Particles } from '../components/Particles'

const Contact = () => {
  const [formData, setformData] = useState({name:"", email:"", message:""})
  const handleChange = (e) => {
    setformData({...formData, [e.target.name]: e.target.value})
  }
  const [isLoading, setisLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")
  const showAlertMessage = (type, message) =>{
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(()=>{
      setShowAlert(false)
    }, 5000)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setisLoading(true)
    try {
      console.log("From submitted:", formData)
      await emailjs.send("service_tf4ptga","template_ia2cuyy",{
       from_name: formData.name,
       to_name: "Rishabh",
       from_email: formData.message,
      }, "-e1EglXNZeTl7-1zV")
    setisLoading(false)
    setformData({name:"", email:"", message:""})
    showAlertMessage("success","Your Message has been sent")
    } catch (error) {
      setisLoading(false)
      console.log(error)
      showAlertMessage("danger","Something went wrong!")
    }    
  }
  return (
   <section className='relative flex item-center c-space section-spacing'>
    <Particles   className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh/>
    {showAlert && <Alert type={alertType} text={alertMessage}/>}
    <div className='flex flex-col items-center justiify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
      <div className='flex flex-col items-start w-full gap-5 mb-10'>
        <h2 className='text-heading'>Let's Connect</h2>
        <p className='font-normal text-neutral-400'>Got a fresh idea, a site that needs love, or a dream project in mind? Let’s build something awesome together.</p>
      </div>
      <form className='w-full' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label htmlFor="name" className='field-label'>Full Name</label>
          <input type="text" name="name" id="name" className='field-input field-input-focus' placeholder='Enter your Name' required autoComplete='name' value={formData.name} onChange={handleChange}/>
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='field-label'>Email</label>
          <input type="email" name="email" id="email" className='field-input field-input-focus' placeholder='Enter your Email' required autoComplete='email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='mb-5'>
          <label htmlFor="message" className='field-label'>Message</label>
          <textarea type="text" name="message " id="message" className='field-input field-input-focus' placeholder='Share your Thoughts' required autoComplete='message' value={formData.message} onChange={handleChange} rows="4"/>
        </div>
        <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
          {!isLoading ? "Send" : "Sending..."}
        </button>
      </form>
    </div>
   </section>
  )
}

export default Contact
