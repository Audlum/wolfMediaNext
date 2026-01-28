"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import css from './index.module.css';
import { SLIDER, SliderType } from './models';

const NextArrow = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24L20 16L12 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PrevArrow = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 24L12 16L20 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const carouselImages = [];
    const totalVisible = 4; 
    const totalCarousel = 8; 
    
    for (let i = 0; i < totalCarousel; i++) {
        const index = i % SLIDER.length;
        carouselImages.push(SLIDER[index]);
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % SLIDER.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + SLIDER.length) % SLIDER.length);
    };

    const handleThumbnailClick = (index: number) => {
        const originalIndex = index % SLIDER.length;
        setActiveIndex(originalIndex);
    };

    const getCarouselActiveIndex = () => {
        for (let i = 0; i < carouselImages.length; i++) {
            const originalIndex = i % SLIDER.length;
            if (originalIndex === activeIndex) {
                return i;
            }
        }
        return 0;
    };

    const activeCarouselIndex = getCarouselActiveIndex();

    return (
        <div className={css.sliderContainer}>

            <div className={css.sliderMain}>
                <Image
                    src={SLIDER[activeIndex].img}
                    alt={`Slide ${activeIndex + 1}`}
                    width={770}
                    height={433}

                    priority={activeIndex === 0}
                />
            </div>


            <div className={css.carouselContainer}>
                <div className={css.carouselTrack}>
                    {carouselImages.map((item, index) => {
                        const originalIndex = index % SLIDER.length;
                        const isActive = originalIndex === activeIndex;
                        
                        return (
                            <div 
                                key={index}
                                className={css.carouselItem}
                                onClick={() => handleThumbnailClick(index)}
                            >
                                <Image
                                    src={item.img}
                                    alt={`Carousel ${index + 1}`}
                                    width={194}
                                    height={109}
                                    className={`${css.carouselImage} ${
                                        isActive ? css.carouselActive : css.carouselInactive
                                    }`}
                                />
                                
                                {/* Плавный переход для крайней правой картинки */}
                                {index === totalVisible - 1 && (
                                    <div className={css.fadeTransition} />
                                )}
                                
                                {/* Белая стрелка поверх 4-й картинки */}
                                {index === totalVisible - 1 && (
                                    <div 
                                        className={css.carouselArrow}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNext();
                                        }}
                                    >
                                        <NextArrow />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};