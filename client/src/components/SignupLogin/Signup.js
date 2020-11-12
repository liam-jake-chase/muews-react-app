import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../../Context/AuthContext'
import FooterTwo from '../Footer/FooterTwo';
import './SignupLogin.scss';
import { motion } from 'framer-motion';
import Header from "../Header/Header";


export default function Signup() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()


    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')

    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)

  }




  return (
    <>
     <Header />
          <h2 className="header-login">Sign Up</h2> 
          <motion.div className="profile__card-two" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
            {error && <Alert variant="danger">{error}</Alert>}         
          <Form onSubmit={handleSubmit}> 
            <Form.Group id="email">
            <div className="label-header">
              <Form.Label>Email</Form.Label></div>
              <Form.Control type="email" ref={emailRef} required className="form-style"/>
            </Form.Group>
            <Form.Group id="password">
            <div className="label-header-two">
              <Form.Label>Password</Form.Label></div>
              <Form.Control type="password" ref={passwordRef} required  className="form-style"/>
            </Form.Group>
            <Form.Group id="password-confirm">
            <div className="label-header-two">
              <Form.Label>Password Confirmation</Form.Label></div>
              <Form.Control type="password" ref={passwordConfirmRef} required className="form-style"/>
            </Form.Group>
            <button disabled={loading} className="btn-login-two" type="submit">
          Sign Up
            </button>
          </Form>
      
      <div className="forgot__need-three">
        Already have an account? </div><Link to="/login" className="forgot-pass-two">Log In</Link>
      
      </motion.div>
      <div className="footer__main">
        <FooterTwo />
        </div>   
    </>
  )
}