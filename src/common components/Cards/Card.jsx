import React from 'react';
import Button from '../Button/Button';
import "./Card.scss"

const Card = ({imageUrl,deviceName,cardType,textColor}) => {

    const bgImage = {
        backgroundImage:`url(${imageUrl})`,
        backgroundSize:"100% 100%"  
    }
  return (
    <div className={`card ${cardType} ${textColor}`} style={bgImage}>
      <div>{deviceName}</div>
      <div className='button'><Button text="Buy now" styleType="white-on-black"/></div>
    </div>
  )
}
export default Card
