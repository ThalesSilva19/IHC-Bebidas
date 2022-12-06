import React from 'react'

import { Box, Card, Typography, TextField, Button } from '@mui/material';

import CartItem from './cart_item';
import PriceTable from './price_table';

export default function CartCard() {
    return (
        <Card sx={{
            width: '75%',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
        }}>
            {/* Título */}
            <Typography variant='h4'>Meu Carrinho</Typography>

            {/* Produtos */}
            <Box sx={{
                width: '100%',
                marginRight: '32px',
                marginBottom: '32px'
            }}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </Box>

            {/* Footer do Carrinho */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                width: '100%',
            }}>
                {/* CEP */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        justifyContent: 'space-between',
                        height: 'auto'
                    }}
                >
                    <TextField tabIndex='0' aria-label='CEP' label='CEP' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <Button variant='contained'
                        sx={{
                            backgroundColor: '#FFB600',
                            color: '#000000',
                            width: '256px',
                            height: '32px'
                        }}
                    >
                        <Typography variant='h6'>Calcular Frete</Typography>
                    </Button>
                    <Button variant='text'>
                        <Typography variant='h8' sx={{
                            textDecoration: 'underline',
                        }}>Escolher mais produtos</Typography>
                    </Button>

                </Box>
                {/* PriceTable */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'auto',
                    justifyContent: 'space-between',
                    gap: '8px'
                }}>
                    <PriceTable />
                    <Button variant='contained'
                        sx={{
                            backgroundColor: '#FFB600',
                            color: '#000000',
                            width: '256px',
                            height: '32px'
                        }}
                    >
                        <Typography variant='h6'>Continuar</Typography>
                    </Button>
                </Box>

            </Box>

        </Card>
    )
}
