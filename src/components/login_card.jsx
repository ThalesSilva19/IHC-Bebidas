import React from 'react'
import Link from 'next/link'
import { Card, Typography, TextField, Button } from '@mui/material';

export default function LoginCard() {
    return (
        <Card sx={{
            width: '50%',
            padding: 'calc((8px + 1.5625vw)*2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: "center",
            justifyContent: 'center',
            gap: 'calc(8px + 1.5625vw)',
        }}>
            <Typography variant='h4' tabIndex='0'> Acesse sua conta </Typography>
            <TextField label='E-mail' variant="outlined" size="small" sx={{ width: '80%'}}></TextField>
            <TextField label='Senha' type="password" variant="outlined" size="small" sx={{ width: '80%'}}></TextField>
            <Link href='/'>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#FFB600',
                        color: '#000000',
                        width: '80%',
                        height: 'auto'
                    }}
                >
                    <Typography variant='h5' sx={{fontSize:'1.5em'}}>Continuar</Typography>
                </Button>
            </Link>
            <Link href='/auth/register'>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#EFEFEF',
                        color: '#000000',
                        width: '80%',
                        height: 'auto'
                    }}
                >   
                    <Typography variant='h5' sx={{fontSize:'1.5em'}}>Criar Conta</Typography>
                </Button>
            </Link>

        </Card>
    )
}
