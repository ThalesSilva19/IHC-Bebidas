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
                <div>
                    <Image
                    src={banner1}
                    alt='Logotipo da Empresa'
                    // width={200}
                    height={400}
                    />
                </div>
                <div>
                    <Image
                    src={banner2}
                    alt='Logotipo da Empresa'
                    // width={200}
                    height={400}
                    />
                </div>
                
                <div>
                <Image
                    src={banner3}
                    alt='Logotipo da Empresa'
                    // width={200}
                    height={400}
                    />
                </div>
            </Carousel>
        );
    }
};