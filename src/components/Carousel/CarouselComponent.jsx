import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from '../../common components/Button/Button'

export default function CarouselComponent() {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/26186.jpg"
          alt="First slide"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Samsung 1</h3>  
          <Button text="Buy now" styleType="black-on-white"/>      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/hd/samsung-logo-on-galaxy-tablet-56ok21x8hx25eova.jpg"
          alt="Second slide"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Samsung 2</h3>
          <Button text="Buy now" styleType="black-on-white"/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://mobimg.b-cdn.net/v3/fetch/f6/f67d41cf37ad52cd0ed1eea59b64bb73.jpeg"
          alt="Third slide"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Samsung 3</h3>
          <Button text="Buy now" styleType="white-on-black"/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
