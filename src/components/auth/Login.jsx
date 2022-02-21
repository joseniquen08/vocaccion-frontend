import styled from '@emotion/styled';
import { ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, createTheme, IconButton, InputAdornment, TextField, ThemeProvider, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  }

  const login = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm">
          <Card variant="outlined" sx={{ borderRadius: 4 }} className='space-y-10 px-6 py-16'>
            <div>
              <Typography variant="h4" component="p" gutterBottom align='center' fontWeight={800} color="#0F4C81">
                Iniciar Sesión
              </Typography>
            </div>
            <form className="mt-8 space-y-6" onSubmit={login}>
              <div className="space-y-4">
                <div>
                  <InputFormField
                    label="Correo Electrónico"
                    type="email"
                    inputRef={emailRef}
                    autoFocus
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </div>
                <div>
                  <InputFormField
                    label="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                    inputRef={passwordRef}
                    required
                    InputProps={{
                      disableUnderline: true,
                      endAdornment:
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleShowPassword}
                            edge="start"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a href="https://google.com.pe" className="font-medium text-indigo-600 hover:text-indigo-500">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <SubmitButton variant="contained" type="submit" fullWidth disableElevation>Ingresar</SubmitButton>
            </form>
            <div>
              <BackButton>Regresar</BackButton>
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: '"Manrope", sans-serif',
  },
  palette: {
    primary: {
      main: '#0F4C81',
    },
  },
});

const InputFormField = styled(props => (
  <TextField fullWidth required variant="filled" size="medium" {...props}/>
))(({ theme }) => ({
  '& label': {
    fontSize: 15,
    fontWeight: 600,
    marginTop: 2,
    padding: '0 5px',
    '&.Mui-focused': {
      color: '#0F4C81',
    },
  },
  '& .MuiFilledInput-root': {
    border: '1px solid #aaaaaa',
    borderRadius: 12,
    backgroundColor: 'white',
    padding: '2px 5px',
    fontSize: 14,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'white',
      borderColor: '#0F4C81',
    },
    '&.Mui-focused': {
      backgroundColor: 'white',
      borderColor: '#0F4C81',
    },
  },
}));

const SubmitButton = styled(Button)({
  backgroundColor: '#0F4C81',
  textTransform: 'none',
  fontSize: 18,
  borderRadius: 10,
  '&:hover': {
    backgroundColor: '#09375E'
  }
});

const BackButton = styled(props => (
  <Button component={Link} to="/" color="primary" size="medium" startIcon={<ArrowBack/>} {...props}>Ir a Inicio</Button>
))(({ theme }) => ({
  fontWeight: 600,
  borderRadius: 8,
  textTransform: 'none',
  fontSize: 15,
  '& .MuiSvgIcon-root': {
    fontSize: 18,
  },
}));

export default Login;