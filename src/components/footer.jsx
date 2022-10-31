import React from 'react';
import Counter from './counter';
import { Card, Box, Typography, Button } from '@mui/material';

import Image from 'next/image'

import logo from '../public/images/logo.png'
import celularIcon from '../public/images/celular.png'
import formasPagamento from '../public/images/bandeiras-cartoes.png'
import logoFacebook from '../public/images/facebook.png'
import logoInstagram from '../public/images/instagram.png'
import { fontWeight } from '@mui/system';

export default function ProductCard(props) {

    return (
        <Card variant='outlined' sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            Width: '100%',
            height: '310px',
            backgroundColor: '#CBCBCB',
        }}>
          <Box
            sx={{
                width: '275px',
                height: '190px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
          >
            <Typography variant='subtitle1'><b>Ajuda e Suporte</b></Typography>
            <Typography variant='p'>FAQ</Typography>
            <Typography variant='p'>Prazo de Entrega</Typography>
            <Typography variant='p'>Taxas de Entrega</Typography>
            <Typography variant='p'>Formas de Pagamento</Typography>
          </Box>
          <Box
            sx={{
                width: '300px',
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
              width: '495px',
              height: '130px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
          }}>
            <Typography variant='subtitle1'><b>Formas de Pagamento</b></Typography>
            <Image
            src={formasPagamento}
            alt='Ícone de celular'
            width={290}
            />
          </Box>

          <Box
            sx={{
                  width: '495px',
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
              <Image
                src={logoFacebook}
                alt='Ícone do Facebook'
                width={50}
                height={50}
              />

              <Image
                src={logoInstagram}
                alt='Ícone do Instagram'
                width={50}
                height={50}
              />
            </Box>
          </Box>

          <Box>
            <Image
                  src={logo}
                  alt='Logotipo da Empresa'
                  width={150}
                  height={150}
            />
          </Box>
    
        </Card>
      )
}