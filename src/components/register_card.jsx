import React from 'react'
import { useRouter } from 'next/router' 
import Link from 'next/link'
import * as yup from 'yup';
import "yup-phone-lite";
import  {cpf as cpf1} from "cpf-cnpj-validator";
import { Box, Card, Typography, TextField, Button, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  email: yup
    .string('Digite seu Nome Completo')
    .required('Nome Completo é obrigatório'),
  email: yup
    .string('Digite seu email')
    .email('Digite um email válido')
    .required('Email é obrigatório'),
  cpf: yup
    .string('Digite o CPF')
    .required('CPF é obrigatório')
    .test("aaa", value => cpf1.isValid(value)),
  phonenumber: yup
    .string('Digite um telefone')
    .phone("BR", "Digite um número de telefone válido")
    .required('Telefone é obrigatório'),
  password: yup
    .string('Digite sua senha')
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .required('Senha é obrigatória'),
});

export default function RegisterCard() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      phonenumber: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      router.push('/auth/login')
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
      gap: 'calc(8px + 1.5625vw)'
    }}>
      <Typography variant='h4' tabIndex='0'> Crie sua conta </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: 'calc((8px + 1.5625vw)/2)'
        }}>
          <TextField
            required
            label='Nome Completo'
            name='name'
            variant="outlined"
            size="small"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ width: '98%' }}>
          </TextField>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: 'calc((8px + 1.5625vw)/2)',
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
          padding: 'calc((8px + 1.5625vw)/2)'
        }}>
          <TextField
            required
            label='CPF'
            name="cpf"
            variant="outlined"
            size="small"
            value={formik.values.cpf}
            onChange={formik.handleChange}
            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
            helperText={formik.touched.cpf && formik.errors.cpf}
            sx={{ width: '98%' }}> 
          </TextField>
        </Box>
        
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: 'calc((8px + 1.5625vw)/2)'
        }}>
          <TextField
            required
            label='Telefone'
            name="phonenumber"
            variant="outlined"
            size="small"
            value={formik.values.phonenumber}
            onChange={formik.handleChange}
            error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
            helperText={formik.touched.phonenumber && formik.errors.phonenumber}
            sx={{ width: '98%' }}>
          </TextField>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: 'calc((8px + 1.5625vw)/2)'
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
            sx={{ width: '98%' }}>
          </TextField>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: 'calc((8px + 1.5625vw)/2)'
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
            sx={{ width: '98%' }}>
          </TextField>
        </Box>
        <Button variant='contained' type="submit" sx={{
          backgroundColor: '#FFB600',
          color: '#000000',
          width: '80%',
          height: 'auto',
          margin: 'calc((8px + 1.5625vw)/2)'
        }}>
          <Typography variant='h5' sx={{fontSize: '1.25em'}}>Continuar</Typography>
        </Button>

        <Link href='/auth/login'>
          <Button variant='contained'
            sx={{
              backgroundColor: '#EFEFEF',
              color: '#000000',
              width: '80%',
              height: 'auto',
              margin: 'calc((8px + 1.5625vw)/2)'
            }}>
            <Typography variant='h5' sx={{fontSize: '1.25em'}}>Acessar a conta</Typography>
          </Button>
        </Link>
      </form>
    </Card>
  )
}
