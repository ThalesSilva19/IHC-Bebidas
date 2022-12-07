import React from 'react'
import { Card, Typography } from '@mui/material'

export default function Avaliacao() {
  return (
    <Card sx={{
        padding: 'calc((8px + 1.5625vw)/2)',
        width: '75vw',
    }}>
        <Typography variant='h3' tabIndex='0' aria-label='5 estrelas' sx={{fontSize: '2em'}}>* * * * *</Typography>
        <Typography variant='h4' tabIndex='0' sx={{fontSize: '1.5em'}}>Maravilhoso</Typography>
        <Typography variant='h5' tabIndex='0' sx={{fontSize: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
    </Card>
  )
}
