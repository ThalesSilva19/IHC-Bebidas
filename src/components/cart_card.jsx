import React from 'react'
import Link from 'next/link'
import { Box, Card, Typography, TextField, Button } from '@mui/material';
import CartItem from './cart_item';
import PriceTable from './price_table';

export default function CartCard() {
    return (
        <Card sx={{
            width: '75%',
            padding: 'calc(8px + 1.5625vw)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'calc((8px + 1.5625vw)/2)'
        }}>
            {/* Título */}
            <Typography variant='h4' tabIndex='0'>Meu Carrinho</Typography>

            {/* Produtos */}
            <Box sx={{
                width: '100%',
                marginRight: 'calc(8px + 1.5625vw)',
                marginBottom: 'calc(8px + 1.5625vw)'
            }}> 
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: 'solid 1px #000',
                    height: 'calc((8px + 1.5625vw)*2)',
                    width: '100%',
                    paddingLeft: 'calc((8px + 1.5625vw)/2)',
                    paddingRight: 'calc((8px + 1.5625vw)/2)',
                    columnGap: 'calc((8px + 1.5625vw)/2)'
                }}> 
                    <Box sx={{
                        width: 'calc(45px + 0.67em*15)'
                    }}>
                        <Typography variant='h5'>Produto</Typography>
                    </Box>
                    <Typography variant='h5'>Preço</Typography>
                    <Typography variant='h5'>Qtde.</Typography>
                    <Typography variant='h5'>Subtotal</Typography>
                    <Typography variant='h5'>Remover</Typography>
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
                        gap: 'calc((8px + 1.5625vw)/2)',
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
                    <Link href='/'>
                        <Button variant='text'>
                            <Typography variant='h8' sx={{
                                textDecoration: 'underline',
                            }}>Escolher mais produtos</Typography>
                        </Button>
                    </Link>

                </Box>
                {/* PriceTable */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'auto',
                    justifyContent: 'space-between',
                    gap: 'calc((8px + 1.5625vw)/4)'
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
                            <Typography variant='h6' tabIndex='0'>Continuar</Typography>
                        </Button>
                    </Link>
                </Box>

            </Box>

        </Card>
    )
}
