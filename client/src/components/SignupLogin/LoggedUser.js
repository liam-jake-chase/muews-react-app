import React from 'react'
import { useAuth } from '../../Context/AuthContext'

export default function LoggedUser() {

    const { currentUser } = useAuth()

    if(currentUser === null) {
        return null
    }

    return (
        <div>
            {currentUser.email}
        </div>
    )
}
