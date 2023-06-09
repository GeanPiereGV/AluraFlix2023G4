import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroCard from "./HeroCard"


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i class='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
const Hero = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
    <section className='upcome'>
      <div className='container'>
        <div className='heading flexSB'>
          
         
        </div>
        <div className='content'>
          <Slider {...settings}>
            {items.map((item) => {
              return (
                <>
                  <HeroCard key={item.id} item={item} />
                </>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  </>
  )
}

export default Hero;
