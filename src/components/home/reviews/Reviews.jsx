import React from 'react';
import Slider from 'react-slick';
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import './Reviews.scss';

const Arrow = ({ className, onClick }) => {
  return(
    <button
      className={className}
      onClick={onClick}
    />
  );
};

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <section className="reviews">
      <div className="reviews__wrapper">
        <Slider {...settings}>
          <blockquote className="slide">
            <p className="slide__review">This thing is so cool! Now i can play with my band even if i travelling to Hawaii! Best product in this sphere, i highly recommend you to buy premium because in free version there is a few shortages.</p>
            <cite className="slide__author">Jessie Peach, vocalist from Pinswitch Elgage</cite>
          </blockquote>
          <blockquote className="slide">
            <p className="slide__review">This thing is so cool! Now i can play with my band even if i travelling to Hawaii! Best product in this sphere, i highly recommend you to buy premium because in free version there is a few shortages.</p>
            <cite className="slide__author">Jessie Peach, vocalist from Pinswitch Elgage</cite>
          </blockquote>
          <blockquote className="slide">
            <p className="slide__review">This thing is so cool! Now i can play with my band even if i travelling to Hawaii! Best product in this sphere, i highly recommend you to buy premium because in free version there is a few shortages.</p>
            <cite className="slide__author">Jessie Peach, vocalist from Pinswitch Elgage</cite>
          </blockquote>
        </Slider>
      </div>
    </section>
  )
}

export default Reviews;
