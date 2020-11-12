import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert}  from "react-bootstrap"
import { useAuth } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'
import FooterTwo from '../Footer/FooterTwo';
import './SignupLogin.scss';
import { motion } from 'framer-motion';
import Header from "../Header/Header";


export default function ForgotPassword() {
  
  const emailRef = useRef()
  
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  

  async function handleSubmit (e) {
    e.preventDefault()
    

    try {
        setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")

    } catch {
      setError('Failed to reset password')
    }

    setLoading(false)

  }
  
 

 
  return (
    <>
    <Header />
          <h2 className="header-login">PASSWORD RESET</h2> 
    <motion.div className="profile__card-two" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}       
          <Form onSubmit={handleSubmit}> 
            <Form.Group id="email">
              <div className="label-header">
              <Form.Label className='label-header'>Email  </Form.Label></div>
              <Form.Control type="email" ref={emailRef} className="email-style-two" required />
            </Form.Group>                     
            <Button disabled={loading} className="btn-login" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
              <Link to="/login" className="forgot-pass-two">Log In</Link>
          </div>
        
      <div className="forgot__need-two">
        Need an account?  </div><Link to="/signup" className="forgot-pass-two">Sign Up</Link>
     
      </motion.div>
      <div className="footer__main">
        <FooterTwo />
        </div>   
    </>
  )
}