import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import banner1 from '../public/images/banner_1.jpg'
import banner2 from '../public/images/banner_2.jpg'
import banner3 from '../public/images/banner_3.jpg'
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Image
                    tabIndex='0'
                    src={banner1}
                    alt='Coleção de garrafas de cerveja'
                    // width={200}
                    height={400}
                />
                
                <Image
                    tabIndex='0'
                    src={banner2}
                    alt='Coleção de garrafas de cerveja'
                    // width={200}
                    height={400}
                />
            
                <Image
                    tabIndex='0'
                    src={banner3}
                    alt='Garrafa de cerveja ao fundo, com 2 canecas de vidro com cerveja'
                    // width={200}
                    height={400}
                />
            </Carousel>
        );
    }
};