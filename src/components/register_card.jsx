import React from 'react'
import Link from 'next/link'
import dayjs, { Dayjs } from 'dayjs';
import { Box, Card, Typography, TextField, Button, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function RegisterCard() {
  const [value, setValue] = React.useState(
    dayjs('2022-12-06T16:00:00')
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
      <Typography variant='h4' tabIndex='0'> Crie sua conta </Typography>

      <Formik
        initialValues={{ name: '', cpf: '', phone: '', email: '', password: '' }}
        validate={values => {
          const errors = {};

          const email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
          if (!email_regex.test(values.email)) {
            errors.email = 'Digite um e-mail válido; Ex: pessoa@exemplo.com';
          }

          const cpf_regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
          if (!cpf_regex.test(values.cpf)) {
            errors.cpf = 'Digite um CPF válido; Ex: 123.456.789-10';
          }

          const phone_regex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
          if (!phone_regex.test(values.phone)) {
            errors.phone = 'Digite um telefone válido; Ex: 11912345678';
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
              <TextField required label='Nome Completo' variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              padding: '12px',
              alignItems: 'center',
            }}>
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" tabIndex='0'>Gênero</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  sx={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  <FormControlLabel value="female" tabIndex='0' control={<Radio />} label="Feminino" />
                  <FormControlLabel value="male" tabIndex='0' control={<Radio />} label="Masculino" />
                  <FormControlLabel value="other" tabIndex='0' control={<Radio />} label="Não Responder" />
                </RadioGroup>
              </Box>
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              padding: '12px'
            }}>
              <TextField required label='CPF' name="cpf" variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
              <ErrorMessage name="cpf" component="div" />
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              padding: '12px'
            }}>
              <TextField required label='Telefone' name="phone" variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
              <ErrorMessage name="phone" component="div" />
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              padding: '12px'
            }}>
              <TextField required label='E-mail' name="email" variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
              <ErrorMessage name="email" component="div" />
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              padding: '12px'
            }}>
              <TextField required label='Senha' name="password" variant="outlined" size="small" sx={{ width: '98%' }}></TextField>
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
                <Typography variant='h6'>Acessar a conta</Typography>
              </Button>
            </Link>
          </Form>
        )}
      </Formik>
    </Card>
  )
}
