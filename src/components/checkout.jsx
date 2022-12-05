import React from 'react'

import dayjs, { Dayjs } from 'dayjs';
import { Box, Card, Typography, TextField, Button, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
            <Typography variant='h5'>PAGAMENTO</Typography>
            <Box sx={{
                display: 'flex'
            }}>
                <Box sx={{
                    borderRight: 'solid 1px #CBCBCB',
                    padding: '32px'
                }}>
                    <Box>
                        <FormLabel id="demo-radio-buttons-group-label">Modo de pagamento</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="other" control={<Radio />} label="Não Responder" />
                        </RadioGroup>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '32px',
                    gap: '8px'
                }}>
                    <TextField label='Número do Cartão' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <TextField label='Nome Impresso no Cartão' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <TextField label='Data de Vencimento' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <TextField label='CVV' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                    <TextField label='CPF do Titular' variant="outlined" size="small" sx={{ width: '256px' }}></TextField>
                </Box>
            </Box>
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
        </Card>
    )
}
