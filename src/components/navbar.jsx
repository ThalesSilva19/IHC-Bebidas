import React from 'react'

import { Toolbar, Typography } from '@mui/material'

import Link from 'next/link'

export default function Navbar() {
    return (
        <Toolbar
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                minHeight: '0px !important',
                padding: '8px',
                backgroundColor: '#FFB600',
            }}
        >
            <Link href="/product_list">
                <Typography sx={{
                    padding: '4px 8px 4px 8px',
                    borderLeft: 'solid 1px #000',
                    
                    "&:hover": {
                        cursor: 'pointer !important',
                        textDecoration: 'underline',
                    },
                }}>Cervejas</Typography>
            </Link>
            <Link href="/product_list">
                <Typography sx={{
                    padding: '4px 8px 4px 8px',
                    borderLeft: 'solid 1px #000',

                    "&:hover": {
                        cursor: 'pointer !important',
                        textDecoration: 'underline',
                    },
                }}>Kits</Typography>
            </Link>
            <Link href="/product_list">
                <Typography sx={{
                    padding: '4px 8px 4px 8px',
                    borderLeft: 'solid 1px #000',

                    "&:hover": {
                        cursor: 'pointer !important',
                        textDecoration: 'underline',
                    },
                }}>Marcas</Typography>
            </Link>
            <Link href="/product_list">
                <Typography sx={{
                    padding: '4px 8px 4px 8px',
                    borderLeft: 'solid 1px #000',

                    "&:hover": {
                        cursor: 'pointer !important',
                        textDecoration: 'underline',
                    },
                }}>Outras Bebidas</Typography>
            </Link>
            <Link href="/product_list">
                <Typography sx={{
                    padding: '4px 8px 4px 8px',
                    borderLeft: 'solid 1px #000',

                    "&:hover": {
                        cursor: 'pointer !important',
                        textDecoration: 'underline',
                    },
                }}>Promoções</Typography>
            </Link>
            <Link href="/product_list">
                <Typography sx={{
                    padding: '4px 8px 4px 8px',
                    borderLeft: 'solid 1px #000',
                    borderRight: 'solid 1px #000',

                    "&:hover": {
                        cursor: 'pointer !important',
                        textDecoration: 'underline',
                    },
                }}>Presentes</Typography>
            </Link>
        </Toolbar>
    )
}
