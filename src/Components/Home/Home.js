import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts.js';
import Form from '../Form/Form';
import useStyles from './stylesHome'

const Home = () => {

  // App.js is the only common parent to Posts and Form. At the start, id = null
  // These are passed to components from here and accepted in components as props
  const [currentId, setCurrentId] = useState(0);

  // Allows dispatch of redux actions
  const dispatch = useDispatch(); 

  // useDispatch hook is used inside useEffect hook
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
    <Container>
      <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing='3'>
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form className={classes.form} currentId={currentId} setCurrentId={setCurrentId}/>
        </Grid>
      </Grid>
    </Container>
  </Grow>
  );
};

export default Home;