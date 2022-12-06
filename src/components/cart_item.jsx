import React from 'react';

import { Box, Typography } from '@mui/material';
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
                <Typography variant='h6'>Nome do Produto</Typography>
            </Box>

            {/* Preço unitário do Produto */}
            <Typography variant='h6'>R$ 9,90</Typography>

            {/* Quantidade */}
            <Counter/>

            {/* Subtotal */}
            <Typography variant='h6'>R$ 9,90</Typography>
        </Box>
    )
}
