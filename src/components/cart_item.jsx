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
            paddingLeft: '16px',
            paddingRight: '16px',
            columnGap: '16px'
        }}>
            {/* Imagem e Nome do Produto */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px'
            }}>
                <Image
                    role="img"
                    tabIndex="0"
                    id="Garrafa de cerveja"
                    src={imagem}
                    aria-labelledby="Garrafa de cerveja com rótulo escrito Quilmes"
                    alt='Garrafa de cerveja com rótulo escrito Quilmes'
                    width={45}
                    height={96}
                />
                <Typography variant='h6' tabIndex='0'>Nome do Produto</Typography>
            </Box>

            {/* Preço unitário do Produto */}
            <Typography variant='h6' tabIndex='0'>R$ 9,90</Typography>

            {/* Quantidade */}
            <Counter/>

            {/* Subtotal */}
            <Typography variant='h6' tabIndex='0'>R$ 9,90</Typography>

            {/* Subtotal */}
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
