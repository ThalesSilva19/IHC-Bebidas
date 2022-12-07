import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material';
import Appbar from '../../components/appbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import RegisterCard from '../../components/register_card'

export default function Register() {
    return (
        <Box>
            <Appbar />
            <Navbar />
            <Box sx={{
                marginTop: 'calc((8px + 1.5625vw)/2)',
                marginBottom: 'calc((8px + 1.5625vw)/2)',
                marginLeft: 'calc((8px + 1.5625vw)*1.5)',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: 'calc((8px + 1.5625vw)/4)',
                    }}>
                    <Link href='/'>
                        <Typography variant='h4' tabIndex='0' sx={{
                            fontSize: '1em',
                            "&:hover": {
                                cursor: 'pointer !important'
                            },
                        }}>
                            Home
                        </Typography>
                    </Link>
                    <Typography variant='h4' sx={{fontSize: '1em'}}>{'>'}</Typography>
                    <Link href='/auth/register'>
                        <Typography variant='h4' tabIndex='0' sx={{
                            fontSize: '1em',
                            "&:hover": {
                                cursor: 'pointer !important'
                            },
                        }}>
                            Cadastro
                        </Typography>
                    </Link>
                </Box>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 'calc((8px + 1.5625vw)*2)',
            }}>
                <RegisterCard />
            </Box>
            <Footer />
        </Box>
    )
}