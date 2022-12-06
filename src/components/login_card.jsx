import React from 'react'
import Link from 'next/link'
import { Card, Typography, FormLabel, TextField, Button } from '@mui/material';

export default function LoginCard() {
    return (
        <Card sx={{
            width: '50%',
            padding: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: "center",
            justifyContent: 'center',
            gap: '32px'
        }}>
            <Typography variant='h4' tabIndex='0'> Acesse sua conta </Typography>
            <TextField label='E-mail' variant="outlined" size="small" sx={{ width: '80%'}}></TextField>
            <TextField label='Senha' variant="outlined" size="small" sx={{ width: '80%'}}></TextField>
            <Link href='/'>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#FFB600',
                        color: '#000000',
                        width: '80%',
                        height: '32px'
                    }}
                >
                    <Typography variant='h6'>Continuar</Typography>
                </Button>
            </Link>
            <Link href='/auth/register'>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#EFEFEF',
                        color: '#000000',
                        width: '80%',
                        height: '32px'
                    }}
                >   
                    <Typography variant='h6'>Criar Conta</Typography>
                </Button>
            </Link>

        </Card>
    )
}
