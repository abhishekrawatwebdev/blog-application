/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { isHeaderHidden } from '../../utils/checkHeaderHidden';
import mixedbag from "../../resources/mixedbag.png"
import "./styles.scss"
import { CloseIcon, MenuIcon } from '../icons';


const Header = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const isPreHeaderHidden = isHeaderHidden(location.pathname);
    const [isMobileHeader,setIsMobileHeader]= useState(false);
    useEffect(() => {
        isHeaderHidden(location.pathname)
    }, [location]);

    const handleItemClick = (index) => {
        setActiveItemIndex(index);
    };

    return (
        <div>
            {isPreHeaderHidden ? null :
                <div className='header-container'>
                    <div className='header-logo-container' >
                        <div className="logo-header">
                            <img src={mixedbag} alt=""/>
                        </div>
                    </div>
                    <div className='header-links-container'>
                        <ul className='header-links-list'>
                            <li onClick={() => {navigate("/");handleItemClick(0)}} className={activeItemIndex === 0 ? 'active-li' : ''}>Home</li>
                            <li onClick={() => {navigate("/blogs");handleItemClick(1)}}  className={activeItemIndex === 1 ? 'active-li' : ''}>Blogs</li>
                            <li onClick={() => {navigate("/my-blogs");handleItemClick(2)}} className={activeItemIndex === 2 ? 'active-li' : ''}>My Blogs</li>
                            <li onClick={() => {navigate("/contact");handleItemClick(3)}} className={activeItemIndex === 3 ? 'active-li' : ''}>Contact Us</li>
                        </ul>
                    </div>
                    <div className="header-toggle-menu" onClick={() => setIsMobileHeader(true)} >
                        <MenuIcon/>
                    </div>
                    <div className='header-search-container' onClick={()=>navigate("/profile")}>
                        <div className="avatar-user"></div>
                        <div className="user-name">Usersvdsdsdhsfdsjksjk</div>
                    </div>

                    <div className={`header-mobile-container ${isMobileHeader ? "active-mobile-header" : ""}`} onClick={(e) => {e.preventDefault();e.stopPropagation();setIsMobileHeader(false)}}>
                        <div className="header-mobile">
                            <div className='header-links-container-mobile'>
                                <div className='close-header' onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsMobileHeader(false) }}>
                                    <CloseIcon />
                                </div>
                                <ul className='header-links-list'>
                                    <li onClick={() => { navigate("/"); handleItemClick(0) }} className={activeItemIndex === 0 ? 'active-li' : ''}>Home</li>
                                    <li onClick={() => { navigate("/blogs"); handleItemClick(1) }} className={activeItemIndex === 1 ? 'active-li' : ''}>Blogs</li>
                                    <li onClick={() => { navigate("/my-blogs"); handleItemClick(2) }} className={activeItemIndex === 2 ? 'active-li' : ''}>My Blogs</li>
                                    <li onClick={() => { navigate("/contact"); handleItemClick(3) }} className={activeItemIndex === 3 ? 'active-li' : ''}>Contact Us</li>
                                    <li onClick={() => { navigate("/profile"); handleItemClick(4) }} className={activeItemIndex === 4 ? 'active-li' : ''}>Profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

//logo
//home tab
//Blogs
//Profile
//search filter

export default Header;