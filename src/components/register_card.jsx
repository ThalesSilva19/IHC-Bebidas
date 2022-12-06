import React from 'react'

import dayjs, { Dayjs } from 'dayjs';
import { Box, Card, Typography, TextField, Button, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function RegisterCard() {
    const [value, setValue] = React.useState(
        dayjs('2014-08-18T21:11:54')
    );

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Card sx={{
            width: '700px',
            padding: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px'
        }}>
            <Typography variant='h4' tabIndex='0'> Crie sua conta </Typography>
            <TextField label='Nome Completo' variant="outlined" size="small" sx={{ width: '655px' }}></TextField>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}>
                <Box>
                    <FormLabel id="demo-radio-buttons-group-label" tabIndex='0'>Gênero</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <FormControlLabel value="female" tabIndex='0' control={<Radio />} label="Feminino" />
                        <FormControlLabel value="male" tabIndex='0' control={<Radio />} label="Masculino" />
                        <FormControlLabel value="other" tabIndex='0' control={<Radio />} label="Não Responder" />
                    </RadioGroup>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label="Calendário de datas"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}

                    />
                </LocalizationProvider>
            </Box>
            <TextField label='CPF' variant="outlined" size="small" sx={{ width: '655px' }}></TextField>
            <TextField label='Telefone' variant="outlined" size="small" sx={{ width: '655px' }}></TextField>
            <TextField label='E-mail' variant="outlined" size="small" sx={{ width: '655px' }}></TextField>
            <TextField label='Senha' variant="outlined" size="small" sx={{ width: '655px' }}></TextField>
            <Button variant='contained'
                sx={{
                    backgroundColor: '#FFB600',
                    color: '#000000',
                    width: '655px',
                    height: '32px'
                }}
            >
                <Typography variant='h5'>Continuar</Typography>
            </Button>
            <Button variant='contained'
                sx={{
                    backgroundColor: '#EFEFEF',
                    color: '#000000',
                    width: '655px',
                    height: '32px'
                }}
            >
                <Typography variant='h5'>Criar Conta</Typography>
            </Button>

        </Card>
    )
}
