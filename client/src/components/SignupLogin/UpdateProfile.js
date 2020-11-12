import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert}  from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../../Context/AuthContext'
import FooterTwo from "../Footer/FooterTwo"
import './SignupLogin.scss';
import { motion } from 'framer-motion';
import Header from "../Header/Header";


export default function Signup() {
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit (e) {
    e.preventDefault()
    

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!')
    }

    const promises = []
    setLoading(true)
    setError('')
    if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
        history.push('/')
    }).catch(() => {
        setError('Failed to update account')
    }).finally(() => {
        setLoading(false)
    })

    try {
      setError('')
      setLoading(true)
    
      history.push('/')

    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)

  }
  
 

 
  return (
    <>
      
          <h2 className="header-login">UPDATE PROFILE</h2> 
          <motion.div className="profile__card-two" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
            {error && <Alert variant="danger">{error}</Alert>}         
          <Form onSubmit={handleSubmit}> 
            <Form.Group id="email">
              <div className="label-header">
              <Form.Label>Email</Form.Label></div>
              <Form.Control type="email" ref={emailRef} className="email-style-two" required defaultValue={currentUser.email} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} className="email-style-two" required placeholder="Leave blank to keep the same"/>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} className="email-style-two" required placeholder="Leave blank to keep the same"/>
            </Form.Group>
            <Button disabled={loading} className="btn-login" type="submit">
              Update
            </Button>
          </Form>
        
      <div className="w-100 text-center mt-2">
        <Link to="/dashboard" className="forgot-pass">Cancel</Link>
      </div>
      </motion.div>
      <div className="footer__main">
        <FooterTwo />
        </div>   
    </>
  )
}