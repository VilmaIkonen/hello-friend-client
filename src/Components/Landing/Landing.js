import React from 'react';
import { Container, Typography } from '@material-ui/core'
import useStyles from './stylesLanding';

const Landing = () => {
  return (
    <Container maxWidth='lg'>
      <Typography variant='h1' component='h1'>Hello Friends!</Typography>

    </Container>
  );
};

export default Landing;