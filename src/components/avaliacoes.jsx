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
            padding: 'calc((8px + 1.5625vw)/2)',
            gap: 'calc((8px + 1.5625vw)/2)',
        }}>
            <Avaliacao />
            <Avaliacao />
            <Button variant='contained'
                sx={{
                    backgroundColor: '#FFB600',
                    color: '#000000'
                }}
            >
                <Typography variant='h5' sx={{fontSize: '1.2em'}}>Ver mais avaliações</Typography>
            </Button>
        </Box>
    )
}
