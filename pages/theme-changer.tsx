import React, { ChangeEvent, FC, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/layouts';
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import Cookies from 'js-cookie';

const ThemeChangerPage: FC = (props) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme); //5MB - No send to server.
    Cookies.set('theme', selectedTheme); //4Kb - AutoSend to server in requestTime.
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

// La parge no va a ser estatica, por lo tanto defino:
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Cuando se renderiza la page, se hace la request.
  const { theme = 'light', name = 'No name' } = req.cookies;
  return {
    props: {
      theme,
      name,
    },
  };
};

// Objetivo de las cookies: Cuando el cliente haga una solicitud, se pueda regresar informacion especializada basado en dicha peticion.
// Otro objetivo: Para que vayan en los headers de la peticion (ex. token de autenticacion).

export default ThemeChangerPage;
