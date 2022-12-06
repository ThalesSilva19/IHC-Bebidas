import React from 'react'

import { Box } from '@mui/material';

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
                marginLeft: '50px',
                fontSize: '20px'
            }}>
                <h4>Home {'>'} Cadastro</h4>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '64px',
            }}>
                <RegisterCard />
            </Box>
            <Footer />
        </Box>
    )
}