import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import banner1 from '../public/images/banner_1.jpg'
import banner2 from '../public/images/banner_2.jpg'
import banner3 from '../public/images/banner_3.jpg'

import { Box } from '@mui/material';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '80vw',
                height: {xs: '20vh', sm: '20vh', md:'55vh'},
                backgroundColor: '#FFF',
                border: 'solid 1px gray',
                borderRadius: 'calc((8px + 1.5625vw)/4)',
            }}>
                <Carousel
                    autoPlay={true}
                    showArrows={true}
                    showStatus={false}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                >
                <Box sx={{
                    width: '40vw',
                    height: {xs: '20vh', sm: '20vh', md:'55vh'},
                    "&:hover": {
                        cursor: 'pointer !important',
                        visibility: 'visible'
                      },}}>
                    <Image
                        tabIndex='0'
                        src={banner1}
                        alt='Coleção de garrafas de cerveja'
                        title='Coleção de garrafas de cerveja'
                        layout="fill"
                    />
                </Box>
                <Box sx={{
                    "&:hover": {
                        cursor: 'pointer !important',
                        visibility: 'visible'
                      },
                }}>
                    <Image
                        tabIndex='0'
                        src={banner2}
                        alt='Coleção de garrafas de cerveja'
                        title='Coleção de garrafas de cerveja'
                        // width={200}
                        layout="fill"
                    />
                </Box>
                <Box sx={{
                    "&:hover": {
                        cursor: 'pointer !important',
                        visibility: 'visible'
                      },
                }}>
                    <Image
                        tabIndex='0'
                        src={banner3}
                        alt='Garrafa de cerveja ao fundo, com 2 canecas de vidro com cerveja'
                        title='Coleção de garrafas de cerveja'
                        // width={200}
                        layout="fill"
                    />
                </Box>
                </Carousel>
            </Box>
        );
    }
};