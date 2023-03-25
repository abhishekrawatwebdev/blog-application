import React from 'react'
import "./styles.scss"

const Input = (props) => {
  return (
    <div className={`input-wrapper ${props.className || ""}`}>
          <label htmlFor={props.name||""}>{props.label||""}</label>
          <input placeholder={props.placeholder || ""} id={props.name || ""} type={props.name==="email"? 'email':'text'} value={props.value} onChange={props.onChange} autoComplete="off" />
          {props.children}
    </div>
  )
}

export default Input