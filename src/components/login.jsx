import React from 'react'

import { Card, Typography, FormLabel, TextField, Button } from '@mui/material';

export default function Login() {
    return (
        <Card sx={{
            width: '300px',
            padding: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px'
        }}>
            <Typography variant='h4' tabIndex='0'> Acesse sua conta </Typography>
            <TextField label='E-mail' variant="outlined" size="small" sx={{ width: '256px'}}></TextField>
            <TextField label='Senha' variant="outlined" size="small" sx={{ width: '256px'}}></TextField>
            <Button variant='contained'
                sx={{
                    backgroundColor: '#FFB600',
                    color: '#000000',
                    width: '256px',
                    height: '32px'
                }}
            >
                <Typography variant='h5'>Continuar</Typography>
            </Button>
            <Button variant='contained'
                sx={{
                    backgroundColor: '#EFEFEF',
                    color: '#000000',
                    width: '256px',
                    height: '32px'
                }}
            >
                <Typography variant='h5'>Criar Conta</Typography>
            </Button>

        </Card>
    )
}
