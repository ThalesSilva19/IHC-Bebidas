import React from 'react'
import Link from 'next/link'
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
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: 'solid 1px #000',
                    height: '64px',
                    width: '100%',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    columnGap: '16px'
                }}> 
                    <Box sx={{
                        width: 'calc(45px + 0.67em*15)'
                    }}>
                        <Typography variant='h5'>Produto</Typography>
                    </Box>
                    <Typography variant='h5'>Preço</Typography>
                    <Typography variant='h5'>Qtde.</Typography>
                    <Typography variant='h5'>Total</Typography>
                </Box>
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
                    <Link href='/payment'>
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
                    </Link>
                </Box>

            </Box>

        </Card>
    )
}
