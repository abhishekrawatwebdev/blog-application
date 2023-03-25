import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '../icons';
import "./styles.scss"

const Password = (props) => {
    const [showPassword,setShowPassword] = useState(false);
    return (
        <div className={`password-wrapper ${props.className || ""}`}>
            <label htmlFor={props.name || ""}>{props.label || ""}</label>
            <input autoComplete="off" placeholder={props.placeholder || ""} id={props.name || ""} type={showPassword? "text":"password"} value={props.value} onChange={props.onChange} />
            <div className="show-password-icon" onClick={()=>setShowPassword(!showPassword)}>
                {showPassword ? <EyeSlashIcon className="password-icon" /> : <EyeIcon className="password-icon" />}
            </div>
            {props.children}
        </div>
    )
}

export default Password