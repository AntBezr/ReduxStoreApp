import { Carousel, Image } from 'react-bootstrap';
import React, { useState } from 'react';

import FirstImg from '../assets/images/ExampleCarouselImage/first.jpg'
import SecondImg from '../assets/images/ExampleCarouselImage/second.jpg'
import ThirdImg from '../assets/images/ExampleCarouselImage/third.jpg'

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" className='Corouselbg'>
      <Carousel.Item>
        <Image src={FirstImg} fluid text="First slide" className='corouselImg' />
        <Carousel.Caption>
          <h3 >Wear what ever you like</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={SecondImg} fluid text="Second slide" className='corouselImg' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={ThirdImg} fluid text="Third slide" className='corouselImg' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;