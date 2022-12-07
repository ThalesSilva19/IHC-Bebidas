import React from 'react'
import Link from 'next/link'
import dayjs, { Dayjs } from 'dayjs';
import { Box, Card, Typography, TextField, Button, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import PriceTable from './price_table';

export default function Checkout() {
    const [value, setValue] = React.useState(
        dayjs('2014-08-18T21:11:54')
    );

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Card sx={{
            width: '600px',
            padding: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px'
        }}>
            <Typography variant='h4' aria-label='Pagamento' tabIndex='0'>PAGAMENTO</Typography>
            <Box sx={{
                display: 'flex'
            }}>
                <Box sx={{
                    borderRight: 'solid 1px #CBCBCB',
                    padding: '32px'
                }}>
                    <Box>
                        <FormLabel id="demo-radio-buttons-group-label" variant='h5' tabIndex='0'>Modo de pagamento</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel tabIndex='0' value="PIX" aria-label='pix' control={<Radio />} label="PIX" />
                            <FormControlLabel tabIndex='0' value="Boleto" control={<Radio />} label="Boleto" />
                            <FormControlLabel tabIndex='0' value="Cartão de crédito" control={<Radio />} label="Cartão de crédito" />
                            <FormControlLabel tabIndex='0' value="Cartão de débito" control={<Radio />} label="Cartão de débito" />
                        
                        </RadioGroup>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '32px',
                    gap: '8px'
                }}>
                    <TextField tabIndex='0' aria-label='Número do cartão'        label='Número do Cartão' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <TextField tabIndex='0' aria-label='Nome impresso no cartão' label='Nome Impresso no Cartão' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <TextField tabIndex='0' aria-label='Data de vencimento'      label='Data de Vencimento' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <TextField tabIndex='0' aria-label='CVV'                     label='CVV' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <TextField tabIndex='0' aria-label='CPF do titular'          label='CPF do Titular' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                </Box>
            </Box>
            <PriceTable/>
            <Link href='/'>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#FFB600',
                        color: '#000000',
                        width: '256px',
                        height: '32px'
                    }}
                >
                    <Typography variant='h6'>Finalizar Compra</Typography>
                </Button>
            </Link>
        </Card>
    )
}
