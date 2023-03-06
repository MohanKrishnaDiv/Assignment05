import React from 'react';
import "./Button.scss";

const Button = ({text,styleType}) => {
  return (
    <div>
      <button className={`Button ${styleType}`} >{text}</button>
    </div>
  )
}

export default Button
