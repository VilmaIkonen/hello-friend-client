import React from 'react';
import { Route } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';
import Content from '../Content/Content'
import useStyles from './stylesLanding';

const Landing = () => {
  return (
    <Container maxWidth='lg'>
      <Typography variant='h1' component='h1'>Hello Friends!</Typography>
    </Container>
  );
};

export default Landing;