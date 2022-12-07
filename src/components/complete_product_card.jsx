import React from 'react';
import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import Counter from '../components/counter';

import imagem from '../public/images/cerveja.png'

export default function CompleteProductCard() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
                width: '85%',
                backgroundColor: '#FFFFFF',
                border: 'solid 1px gray',
                borderRadius: '8px',
                padding: 'calc((8px + 1.5625vw)/2)',
                rowGap: 'calc((8px + 1.5625vw)/2)',
            }}
        >   
            <Box sx={{
                display: 'flex',
                width: {xs: '15vw', sm: '10vw', md:'6vw'},
                height: 'auto',
                "&:hover": {
                    cursor: 'pointer !important',
                    visibility: 'visible'
                  },}}>
                <Image
                    role="img"
                    tabIndex="0"
                    id="Garrafa de cerveja"
                    src={imagem}
                    aria-labelledby="Garrafa de cerveja com rótulo escrito Quilmes"
                    alt='Garrafa de cerveja com rótulo escrito Quilmes'
                    title='Garrafa de cerveja com rótulo escrito Quilmes'
                />
            </Box>
            <Box
                sx={{
                    width: {xs: '70vw', md:'40vw', sm: '40vw'},
                }}
            >
                <Typography variant='h4' tabIndex="0" sx={{fontSize:'2em'}}>Cerveja 1234</Typography>
                <Typography variant='h6' tabIndex="0" sx={{fontSize:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 'calc((8px + 1.5625vw)/2)',
            }}>
                <Typography variant='h4' tabIndex="0" sx={{fontSize:'1.5em'}}>4.9 * * * * *</Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant='h6' tabIndex="0" sx={{fontSize:'1.5em'}}>R$ 9,90</Typography>
                    <Counter />
                </Box>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#FFB600',
                        color: '#000000'
                    }}
                >
                    <Typography variant='h6' sx={{fontSize:'1.25em'}}>Adicionar ao carrinho</Typography>
                </Button>
            </Box>
        </Box>
    )
}
