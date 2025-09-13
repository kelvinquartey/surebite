import React from 'react'
import './NotFound.css'
import { replace, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className='not-found'>
            <h2>404 | Page not found</h2>
            <br />
            <button onClick={() => navigate('/', {replace:true})}>Go to Home Page</button>
        </div>
    )
}

export default NotFound
