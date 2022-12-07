import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import CompleteProductCard from '../../components/complete_product_card';
import { Box, Typography } from '@mui/material';
import Navbar from '../../components/navbar';
import Appbar from '../../components/appbar';
import Footer from '../../components/footer';
import NextJsCarousel from '../../components/carousel';
import Avaliacoes from '../../components/avaliacoes';

export default function Produto() {

  const router = useRouter()
  const { product_id } = router.query

  return (
    <Box
      sx={{
        backgroundColor: '#EFEFEF'
      }}
    >
      <Appbar />
      <Navbar />
      <Box sx={{
                marginTop: 'calc((8px + 1.5625vw)/2)',
                marginBottom: 'calc((8px + 1.5625vw)/2)',
                marginLeft: 'calc((8px + 1.5625vw)*1.5)'
            }}>
        <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: 'calc((8px + 1.5625vw)/4)'
                  }}>
                  <Link href='/'>
                      <Typography variant='h6' sx={{
                        fontSize: '1em',
                        "&:hover": {
                            cursor: 'pointer !important'
                        },
                      }}>
                          Home
                      </Typography>
                  </Link>
                  <Typography variant='h6' sx={{fontSize: '1em'}}>{'>'}</Typography>
                  <Link href='/products/product_id'>
                    <Typography variant='h6' sx={{
                      fontSize: '1em',
                      "&:hover": {
                        cursor: 'pointer !important'
                      },
                    }}>
                      Cerveja 1234
                    </Typography>
                  </Link>
              </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'calc((8px + 1.5625vw)*2)',
        gap: 'calc((8px + 1.5625vw)*2)',
      }}>
        <CompleteProductCard />
        <NextJsCarousel />
        <Avaliacoes />
      </Box>
      <Footer />
    </Box>
  )
}
