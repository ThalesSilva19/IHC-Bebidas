import React from 'react'
import { Typography } from '@mui/material'
import Link from 'next/link'

export default function Navitem({ text, href, active }) {
    return (
        <Link href={href}>
            <Typography className={`nav__link`}>{text}</Typography>
        </Link>
    )
}
    