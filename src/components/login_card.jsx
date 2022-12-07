import React from 'react'
import Link from 'next/link'
import { Box, Card, Typography, FormLabel, TextField, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function LoginCard() {

  return (


    <Card sx={{
      width: '50%',
      padding: '64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: "center",
      justifyContent: 'center',
      gap: '32px'
    }}>
      <Typography variant='h4' tabIndex='0'> Acesse sua conta </Typography>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Digite um e-mail válido; Ex: pessoa@exemplo.com';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>

        {({ isSubmitting }) => (
          <Form>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              padding: '12px'
            }}>
              <TextField required label="E-mail" name="email" variant="outlined" size="small" sx={{ width: '80%' }}></TextField>
              <ErrorMessage name="email" component="div" />
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              padding: '12px'
            }}>
              <TextField required label="Senha" name="password" variant="outlined" size="small" sx={{ width: '80%' }}></TextField>
              <ErrorMessage name="password" component="div" />
            </Box>

            <Button variant='contained' disabled={isSubmitting} type="submit" sx={{
              backgroundColor: '#FFB600',
              color: '#000000',
              width: '80%',
              height: '32px',
              margin: '12px'
            }}>
              <Typography variant='h6'>Continuar</Typography>
            </Button>

            <Link href='/auth/register'>
              <Button variant='contained'
                sx={{
                  backgroundColor: '#EFEFEF',
                  color: '#000000',
                  width: '80%',
                  height: '32px',
                  margin: '12px'
                }}>
                <Typography variant='h6'>Criar Conta</Typography>
              </Button>
            </Link>
          </Form>
        )}
      </Formik>

    </Card>
  )
}
