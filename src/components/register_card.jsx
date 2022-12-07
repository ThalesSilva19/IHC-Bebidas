import React from 'react'
import Link from 'next/link'
import dayjs, { Dayjs } from 'dayjs';
import { Box, Card, Typography, TextField, Button, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function RegisterCard() {
    const [value, setValue] = React.useState(
        dayjs('2022-12-06T16:00:00')
    );

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Card sx={{
            width: '50%',
            padding: '4em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: "center",
            justifyContent: 'center',
            gap: '2em'
        }}>
            <Typography variant='h4' tabIndex='0' sx={{fontSize:'2.5em'}}> Crie sua conta </Typography>
            <TextField label='Nome Completo' variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                rowGap: '1em'
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
            <TextField required label='CPF' type="number" variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
            <TextField required label='Telefone' type= "tel" variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
            <TextField required label='E-mail' type="email" variant="outlined"  size="small" sx={{ width: '98%' }}></TextField>
            <TextField required label='Senha' type="password" variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
            <Link href='/auth/login'>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#FFB600',
                        color: '#000000',
                        width: '98%',
                        height: 'auto'
                    }}
                >
                    <Typography variant='h6' sx={{fontSize:'1.5em'}}>Continuar</Typography>
                </Button>
            </Link>
        </Card>
    )
}
