import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../Context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './SignupLogin.scss'
import FooterTwo from '../Footer/FooterTwo';
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

export default function Dashboard(props) {

    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    const pageTransition = {
        in: {
            opacity: 1,

        },
        out: {
            opacity: 0,
        }
    };

    return (
        <>
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} transition={{ ease: "easeOut", duration: 2 }}>
        <IconContext.Provider value={{ color: 'white' }}>
                <h2 className="text-center mb-4 mt-4">DASHBOARD</h2>
            <div className="profile__card-wrapper">
                <motion.div className="profile__card" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <h3 className="text-center mb-4 mt-4">FAVORITES</h3>
                <AiIcons.AiFillHeart className="profile__icon-two"/>
                <ul>
                    <li>The Killers</li>
                    <li>Avril Lavigne</li>                 
                    <li>Aqua</li>
                    <li>Backstreet Boys</li>
                </ul>

                </motion.div>

 
                <motion.div className="profile__card" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                
                <h3 className="text-center mb-4 mt-4">PROFILE</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong>  {currentUser.email}
                <AiIcons.AiFillProfile className="profile__icon"/>
                    <Link to="/update-profile" className='btn-update forgot-pass'>Update Profile</Link>

                    <div className="w-100 text-center mt-2">
                        <Button variant="link" className="btn-login" onClick={handleLogout}>Log Out</Button>
                    </div>
                </motion.div>
                <motion.div className="profile__card" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                
                <h3 className="text-center mb-4 mt-4">HISTORY</h3>
                <AiIcons.AiFillEye className="profile__icon-two"/>
                <ul>
                    <li>The Killers</li>
                    <li>Avril Lavigne</li>
                    <li>Coldplay</li>
                    <li>The Beatles</li>
                    <li>Aqua</li>
                    <li>Backstreet Boys</li>
                </ul>
                </motion.div>
                
            </div>
            </IconContext.Provider>
            </motion.div>
            <div className="footer__main">
          
            </div>
        </>
    )
}

