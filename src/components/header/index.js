import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { isHeaderHidden } from '../../utils/checkHeaderHidden';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isPreHeaderHidden = isHeaderHidden(location.pathname);
    useEffect(()=>{
        isHeaderHidden(location.pathname)
    },[location])
  return (
    <div>
        {isPreHeaderHidden ? null: <div>
            header is visible
            <button onClick={()=>navigate("/login")}>login</button>
              <button onClick={() => navigate("/signup")}>signup</button>
        </div> }
    </div>
  )
}

export default Header;