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
      width: {xs: '80vw', sm: '40vw', md:'20vw'},
      height: 'auto',
      borderColor: '#CBCBCB',
      borderWidth: '3px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'calc((8px + 1.5625vw)/2)',
      gap: 'calc((8px + 1.5625vw)/2)'
    }}>
      <Link href='/products/product_id'>
        <Box
          sx={{
            width: {xs: '12vw', sm: '8vw', md:'5vw'},
            height: 'auto',
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
          />
        </Box>
      </Link>
      <Typography variant='h4' tabIndex="0" sx={{fontSize:'1.5em'}}>Nome do Produto</Typography>
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
        <Typography variant='h5' tabIndex="0" sx={{fontSize:'1.2em'}}>Preço: R$</Typography>
        <Counter/>
      </Box>
      <Link href='/cart'>
        <Button variant='contained'
          sx={{
            backgroundColor: '#FFB600',
            color: '#000000'
          }}
        >
          <Typography variant='h6' sx={{fontSize:'1.25em'}}>Adicionar ao carrinho</Typography>
        </Button>
      </Link>
    </Card>
  )
}
