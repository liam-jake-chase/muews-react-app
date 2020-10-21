import React from 'react'
// import { Link } from 'react-router-dom'
import './NewsSection.scss'

export default function NewsSection(props) {
    return (
        <div>            
            <p className="news__article-title">{props.title}</p>
             <a href={props.url} className="news__article-link">Link to Article</a>
             
        </div>
    )
}
