import React from 'react'

import { Box, TableContainer, TableRow, Table, TableCell, TableHead, TableBody, Paper } from '@mui/material';

export default function PriceTable() {
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: '300px' }} size="small" aria-label="a dense table">
                    <TableBody>
                        <TableRow
                            sx={{ border: 'solid 1px #000' }}
                        >
                            <TableCell component="th" scope="row">SUBTOTAL</TableCell>
                            <TableCell align="right">R$ 9,90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ border: 'solid 1px #000' }}
                        >
                            <TableCell component="th" scope="row">FRETE</TableCell>
                            <TableCell align="right">R$ 9,90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ border: 'solid 1px #000' }}
                        >
                            <TableCell component="th" scope="row">TOTAL</TableCell>
                            <TableCell align="right">R$ 9,90</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
