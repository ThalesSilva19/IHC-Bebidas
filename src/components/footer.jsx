import React from 'react';
import Counter from './counter';
import Link from 'next/link'
import {Card, Box, Typography} from '@mui/material';

import Image from 'next/image'

import logo from '../public/images/logo.png'
import celularIcon from '../public/images/celular.png'
import formasPagamento from '../public/images/bandeiras-cartoes.png'
import logoFacebook from '../public/images/facebook.png'
import logoInstagram from '../public/images/instagram.png'
import { fontWeight } from '@mui/system';

export default function Footer(props) {

    return (
        <Card variant='outlined' sx={{
            display: 'flex',
            flexDirection: 'row',
                 justifyContent: 'space-around',
            Width: '100%',
            height: 'auto',
            backgroundColor: '#CBCBCB',
        }}>
          <Box
            sx={{
                width: 'auto',
                height: '190px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
          >
            <Typography variant='subtitle1'><b>Ajuda e Suporte</b></Typography> 
            <Link href="/">
              <Typography variant='p' sx={{
                                
                "&:hover": {
                    cursor: 'pointer !important',
                    textDecoration: 'underline',
                },
              }}>FAQ</Typography>
            </Link>

            <Link href="/">
              <Typography variant='p' sx={{
                                
                "&:hover": {
                    cursor: 'pointer !important',
                    textDecoration: 'underline',
                },
              }}>Prazo de Entrega</Typography>
            </Link>

            <Link href="/">
              <Typography variant='p' sx={{
                padding: '4px 8px 4px 8px',                
                "&:hover": {
                    cursor: 'pointer !important',
                    textDecoration: 'underline',
                },
              }}>Taxas de Entrega</Typography>
            </Link>

            <Link href="/">
              <Typography variant='p' sx={{
                                
                "&:hover": {
                    cursor: 'pointer !important',
                    textDecoration: 'underline',
                },
              }}>Formas de Pagamento</Typography>
            </Link>

          </Box>
          <Box
            sx={{
                width: 'auto',
                height: '190px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography variant='subtitle1'><b>Atendimento</b></Typography>
            <Image
            src={celularIcon}
            alt='Ícone de celular'
            width={55}
            height={75}
            />
            <Typography variant='subtitle1'>sac@fontes.br</Typography>
            <Typography variant='subtitle1'>(16)99571-2203</Typography>
          </Box>

          <Box
          sx={{
              width: 'auto',
              height: '130px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
          }}>
            <Typography variant='subtitle1'><b>Formas de Pagamento</b></Typography>
            <Image
            src={formasPagamento}
            alt='Formas de Pagamento'
            width={280}
            />
          </Box>

          <Box
            sx={{
                  width: 'auto',
                  height: '130px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
              }}>
            <Typography variant='subtitle1'><b>Redes Sociais</b></Typography>
            <Box
              sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
              <a href="/" sx={{
                "&:hover": {
                  cursor: 'pointer !important',
                  textDecoration: 'underline',
                },
              }}>
                <Image
                  src={logoFacebook}
                  alt='Ícone do Facebook'
                  width={50}
                  height={50}
                />
              </a>

              <a href="/" sx={{
                "&:hover": {
                  cursor: 'pointer !important',
                  textDecoration: 'underline',
                },
              }}>
                <Image
                  src={logoInstagram}
                  alt='Ícone do Facebook'
                  width={50}
                  height={50}
                />
              </a>
            </Box>
          </Box>

          <Box>
            <Image
                  src={logo}
                  alt='Logotipo da Empresa'
                  width={125}
                  height={125}
            />
          </Box>
    
        </Card>
      )
}