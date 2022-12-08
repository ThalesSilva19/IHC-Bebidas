import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Card, Typography, TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  email: yup
    .string('Digite seu email')
    .email('Digite um email válido')
    .required('Email é obrigatório'),
  password: yup
    .string('Digite sua senha')
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .required('Senha é obrigatória'),
});

export default function LoginCard() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      router.push('/');
    },
  })

  return (

    <Card sx={{
      width: '50%',
      padding: 'calc((8px + 1.5625vw)*2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: "center",
      justifyContent: 'center',
      gap: 'calc(8px + 1.5625vw)',
    }}>
      <Typography variant='h4' tabIndex='0'> Acesse sua conta </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: '12px'
        }}>
          <TextField
            required
            label="E-mail"
            name="email"
            variant="outlined"
            size="small"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ width: '80%' }}>
          </TextField>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: '12px'
        }}>
          <TextField
            required
            label="Senha"
            name="password"
            variant="outlined"
            size="small"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ width: '80%' }}>
          </TextField>
        </Box>

        <Button variant='contained' type="submit" sx={{
          backgroundColor: '#FFB600',
          color: '#000000',
          width: '80%',
          height: '32px',
          margin: '12px'
        }}>
          <Typography variant='h5' sx={{fontSize:'1.25em'}}>Continuar</Typography>
        </Button>

        <Link href='/auth/register'>
          <Button variant='contained'
            sx={{
              backgroundColor: '#EFEFEF',
              color: '#000000',
              width: '80%',
              height: 'auto',
              margin: '12px'
            }}>
            <Typography variant='h5' sx={{fontSize:'1.25em'}}>Criar Conta</Typography>
          </Button>
        </Link>
      </form>

    </Card>
  )
}
