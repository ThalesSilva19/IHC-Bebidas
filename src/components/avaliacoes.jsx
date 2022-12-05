import React from 'react'

import { Box, Button, Typography } from '@mui/material'
import Avaliacao from './avaliacao'

export default function Avaliacoes() {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: 'solid 1px #000',
            padding: '16px',
            gap: '16px'
        }}>
            <Avaliacao />
            <Avaliacao />
            <Button variant='contained'
                sx={{
                    backgroundColor: '#FFB600',
                    color: '#000000'
                }}
            >
                <Typography variant='h6'>Ver mais avaliações</Typography>
            </Button>
        </Box>
    )
}
