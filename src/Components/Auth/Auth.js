import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input';
import useStyles from './stylesAuth';

const Auth = () => {

  const classes = useStyles();
  const isSignedUp = false;
  const [showPassword, setShowPassword] = useState(false);
  
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); // previous state needed to toggle between states

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignedUp ? 'Sign up' : 'Sign in'}</Typography>
        <form classname={classes.form} onSubmit={handleSubmit}>  
          <Grid>
            {isSignedUp && (
              <>
                <Input name='firstname' label='First name' handleChange={handleChange} autoFocus half />
                <Input name='lastname' label='Last name' handleChange={handleChange} half />
              </>
            )} 
            <Input name='email' label='Email address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          </Grid>     
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;