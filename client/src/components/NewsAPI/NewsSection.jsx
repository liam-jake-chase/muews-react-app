import React from 'react'
// import { Link } from 'react-router-dom'

export default function NewsSection(props) {
    return (
        <div>
            <p>{props.title}</p>
             <a href={props.url}>Click here to view</a>
        </div>
    )
}
