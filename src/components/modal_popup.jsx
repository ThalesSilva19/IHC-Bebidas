import React from 'react';

import Image from 'next/image'
import logo from '../public/images/logo.png'
import Link from 'next/link'

import { Modal, Box, Typography, Button } from '@mui/material';

export default function ModalPopup() {

    const [open, setOpen] = React.useState(true);

    React.useEffect(function () {
        if (window.localStorage.getItem('firstTime') === 'false') {
            setOpen(false)
        }
    }, []);

    const handleClose = () => {
        setOpen(false)
        window.localStorage.setItem('firstTime', 'false')
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Popup de Aviso +18"
            aria-describedby="Um popup que pergunta se o usuário é maior de 18 anos."
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '75vw',
                height: '50vh',
                backgroundColor: '#FFB600',
                padding: '32px',
                gap: '16px'
            }}>
                <Box sx={{ backgroundColor: '#FFF', borderRadius: '100%', padding: '8px', border: 'solid 1px #000' }}>
                    <Image
                        src={logo}
                        alt='Logotipo da Empresa'
                        title='Logotipo da Empresa'
                        width={'150%'}
                        height={'150%'}
                    />
                </Box>
                <Box sx={{
                    maxWidth: '40vw'
                }}>
                    <Typography variant='h2' sx={{ textAlign: 'center' }}>Você tem mais de 18 anos?</Typography>
                    <Typography variant='h4' sx={{ textAlign: 'center' }}>O consumo de bebidas alcoólicas é proibido para menores de 18 anos</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Button variant='contained' onClick={handleClose} sx={{
                            backgroundColor: '#EFEFEF',
                            color: '#000000',
                            width: '80%',
                            height: '32px',
                            margin: '12px'
                        }}>
                            <Typography variant='h5' sx={{ fontSize: '1.25em' }}>SIM</Typography>
                        </Button>
                        <Button variant='contained' type="submit" sx={{
                            backgroundColor: '#000',
                            color: '#EFEFEF',
                            width: '80%',
                            height: '32px',
                            margin: '12px'
                        }}>
                            <Link href="">NÃO</Link>
                            {/* <Typography variant='h5' sx={{ fontSize: '1.25em' }}>NÃO</Typography> */}
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Modal>
    )
}
