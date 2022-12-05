import React from 'react'

import { Card, Typography } from '@mui/material'

export default function Avaliacao() {
  return (
    <Card sx={{
        padding: '16px',
        maxWidth: '1050px',
    }}>
        <Typography variant='h3' tabIndex='0' aria-label='5 estrelas'>* * * * *</Typography>
        <Typography variant='h4' tabIndex='0'>Maravilhoso</Typography>
        <Typography variant='h5' tabIndex='0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
    </Card>
  )
}
