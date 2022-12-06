import React from 'react';

import Image from 'next/image';
import { Card, Box, Typography, Button } from '@mui/material';
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
                padding: '16px'
            }}
        >
            <Image
                role="img"
                tabIndex="0"
                id="Garrafa de cerveja"
                src={imagem}
                aria-labelledby="Garrafa de cerveja com rótulo escrito Quilmes"
                alt='Garrafa de cerveja com rótulo escrito Quilmes'
                width={120}
                height={255}
            />
            <Box
                sx={{
                    maxWidth: '400px'
                }}
            >
                <Typography variant='h4' tabIndex="0" >Cerveja 1234</Typography>
                <Typography variant='h6' tabIndex="0" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px'
            }}>
                <Typography variant='h4' tabIndex="0" >4.9 * * * * *</Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant='h6' tabIndex="0" >R$ 9,90</Typography>
                    <Counter />
                </Box>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#FFB600',
                        color: '#000000'
                    }}
                >
                    <Typography variant='h6'>Adicionar ao carrinho</Typography>
                </Button>
            </Box>
        </Box>
    )
}
