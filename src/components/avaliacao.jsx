import React from 'react'

import { Card, Typography } from '@mui/material'

export default function Avaliacao() {
  return (
    <Card sx={{
        padding: '16px',
        maxWidth: '1050px',
    }}>
        <Typography variant='h4'>* * * * *</Typography>
        <Typography variant='h4'>Maravilhoso</Typography>
        <Typography variant='h6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
    </Card>
  )
}
