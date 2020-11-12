import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from '../../Context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './SignupLogin.scss'
import FooterTwo from '../Footer/FooterTwo';
import Header from '../Header/Header'




export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()


    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')

    } catch {
      setError('Failed to sign in')
    }

    setLoading(false)

  }




  return (
    <>
      <Header />
      <h2 className="header-login">LOG IN</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="profile__card-two">
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
          <div className="label-header">
           
              <Form.Label className="label-header">EMAIL</Form.Label></div>

            <div className="email-style">
              <Form.Control type="email" ref={emailRef} required className="form-style" /></div>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>PASSWORD</Form.Label>
            <div className="email-style">
              <Form.Control type="password" ref={passwordRef} required className="form-style" /></div>
          </Form.Group>
          <button disabled={loading} className="btn-login" type="submit">
            Log In
            </button>
        </Form>
        <div className="w-30 text-center mt-3">
          <Link to="/forgot-password" className="forgot-pass">Forgot Password?</Link>
        </div>


        <div className="forgot__need">
          Need an account?</div> <Link to="/signup" className="forgot-pass">Sign Up</Link>
        
      </div>
      <div className="footer__main">
        <FooterTwo />
      </div>
    </>
  )
}