import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DotSquare } from '../../components/icons';
import "./style.scss"

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='error-container'>
            <DotSquare className='error-dot-square square1'/>
            <DotSquare className='error-dot-square square2' />

            <div className='error-box'>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>as been moved or deleted. Please check the URL and try again.If you continue to experience problems, please contact our support team for assistance. Thank you for your understanding.</p>
                <div className='error-btn-grp'>
                    <button className='error-btn-home error-btn' onClick={()=>navigate("/")}>Home</button>
                    <button className='error-btn-blogs error-btn' onClick={() => navigate("/blogs")}>Read Blogs</button>
                </div>
            </div>
        </div>
    )
}

export default Error