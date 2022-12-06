import React from 'react';
import Link from 'next/link'
import Counter from './counter';
import { Card, Box, Typography, Button } from '@mui/material';

import Image from 'next/image'

import imagem from '../public/images/cerveja.png'

export default function ProductCard(props) {

  return (
    <Card variant='outlined' sx={{
      backgroundColor: '#FFFFFF',
      width: '330px',
      height: '450px',
      borderColor: '#CBCBCB',
      borderWidth: '3px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    }}>
      <Link href='/products/product_id'>
        <Box
          sx={{
            width: '120px',
            height: '255px',
            "&:hover": {
              cursor: 'pointer !important',
              visibility: 'visible'
            },
          }}
        >
          <Image
            role="img"
            tabIndex="0"
            id="Garrafa de cerveja"
            src={imagem}
            aria-labelledby="Garrafa de cerveja com rótulo escrito Quilmes"
            alt='Garrafa de cerveja com rótulo escrito Quilmes'
            title='Garrafa de cerveja com rótulo escrito Quilmes'
            width={120}
            height={255}
          />
        </Box>
      </Link>
      <Typography variant='h4' tabIndex="0" >Nome do Produto</Typography>
      <Box
        sx={{
          htmlFontSize: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '60%'
        }}
      >
        <Typography variant='h5' tabIndex="0">Preço: R$</Typography>
        <Counter/>
      </Box>
      <Button variant='contained'
        sx={{
          backgroundColor: '#FFB600',
          color: '#000000'
        }}
      >
        <Typography variant='h6'>Adicionar ao carrinho</Typography>
      </Button>

    </Card>
  )
}
