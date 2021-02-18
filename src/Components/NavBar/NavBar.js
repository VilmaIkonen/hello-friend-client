import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import useStyles from './stylesNavBar';

const NavBar = () => {

  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.navContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant='h1' align='center'>Hello Friend!</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar 
              className={classes.avatar} 
              alt={user.result.name}
              src={user.result.imageUrl}
            >{user.result.name.charAt(0)} 
            {/* user's first name's first character as alternative avatar */}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
            <Button variant='contained' className={classes.logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained'>Sign in</Button>
        )}
      </Toolbar>
  </AppBar>

  );
};

export default NavBar;