import React from 'react';
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
      <Box
        sx={{
          width: '120px',
          height: '255px'
        }}
      >
        <Image
          src={imagem}
          alt='Imagem de Cerveja'
          width={120}
          height={255}
        />
      </Box>
      <Typography variant='h5'>Nome do Produto</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '60%'
        }}
      >
        <Typography variant='subtitle1'>Preço</Typography>
        <Counter/>
      </Box>
      <Button variant='contained'
        sx={{
          backgroundColor: '#FFB600',
          color: '#000000'
        }}
      >
        <Typography variant='h6'>Adicionar</Typography>
      </Button>

    </Card>
  )
}
