import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../../Context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './SignupLogin.scss'



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

      <h2 className="text-center mb-4">Log In</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <div className="email-style">
            <Form.Control type="email" ref={emailRef} required /></div>
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <div className="email-style">
            <Form.Control type="password" ref={passwordRef} required /></div>
        </Form.Group>
        <button disabled={loading} className="btn-login" type="submit">
          Log In
            </button>
      </Form>
      <div className="w-30 text-center mt-3">
        <Link to="/forgot-password" className="forgot">Forgot Password?</Link>
      </div>


      <div className="w-30 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}