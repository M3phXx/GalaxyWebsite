import React, { useEffect } from 'react';
import SliderContent from './SliderContent'
import imageSlider from './ImageSlider';
import Arrows from './Arrows';
import { useState } from 'react';
import Dots from './Dots';
import './Slider.css';

const len = imageSlider.length - 1;

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len
                ? 0
                : activeIndex + 1);
        }, 10000)
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                imageSlider={imageSlider}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Slider
