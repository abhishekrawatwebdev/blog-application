import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { isHeaderHidden } from '../../utils/checkHeaderHidden';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isPreHeaderHidden = isHeaderHidden(location.pathname);
    useEffect(() => {
        isHeaderHidden(location.pathname)
    }, [location])
    return (
        <div>
            {isPreHeaderHidden ? null :
                <div className='header-container'>
                    <div className='logo-container'>logo</div>
                    <div className='header-links-container'>links</div>
                    <div className='header-search-container'>filter</div>
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