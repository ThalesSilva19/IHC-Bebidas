import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Counter from './counter';
import Image from 'next/image';
import imagem from '../public/images/cerveja.png';

export default function CartItem() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: 'solid 1px #000',
            height: '128px',
            width: '100%',
            paddingLeft: 'calc((8px + 1.5625vw)/2)',
            paddingRight: 'calc((8px + 1.5625vw)/2)',
            columnGap: 'calc((8px + 1.5625vw)/2)'
        }}>
            {/* Imagem e Nome do Produto */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'calc((8px + 1.5625vw)/2)',
                width: {xs: '30vw', sm: '15vw', md:'15vw'},
                height: 'auto',
                "&:hover": {
                    cursor: 'pointer !important',
                    visibility: 'visible'
                },
            }}>
                <Image
                    role="img"
                    tabIndex="0"
                    id="Garrafa de cerveja"
                    src={imagem}
                    aria-labelledby="Garrafa de cerveja com rótulo escrito Quilmes"
                    alt='Garrafa de cerveja com rótulo escrito Quilmes'
                    title='Garrafa de cerveja com rótulo escrito Quilmes'
                    width={'40%'}
                    height={'100%'}
                />
                <Typography variant='h6' tabIndex='0' sx={{fontSize: '1.25em'}}>Nome do Produto</Typography>
            </Box>

            {/* Preço unitário do Produto */}
            <Typography variant='h6' tabIndex='0' sx={{display: {xs: 'none', sm: 'inline'}}}>R$ 9,90</Typography>
            
            <Box sx={{
                display: 'flex',
                width: {xs: '30%', sm:'40%', md:'40%'},
                justifyContent: 'space-around',
                flexDirection: {xs: 'column', sm:'row'},
            }}>
            {/* Quantidade */}
            <Counter/>

            {/* Subtotal */}
            <Typography variant='h6' tabIndex='0'>R$ 9,90</Typography>
            </Box>
            {/* Remover */}
            <Button
                sx={{
                    color: '#ff0000',
                    width: '5.83em'
                }}>
                <Typography variant='h5' tabIndex='0' aria-label='Clique para remover o produto do carrinho' color="ff0000">X</Typography>
            </Button>
        </Box>
    )
}
