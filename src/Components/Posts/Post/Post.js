import React from 'react';
import useStyles from './stylesPost';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Link } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'; // To set timestamp for the post --> .fromNow --> eg. '5 minutes ago'
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts'

const Post = ({post, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const preventDefault = (event) => event.preventDefault();
 
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        {/* Edit button connected to Form.js and to post update */}
        <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='default' />
          Edit
        </Button>
      </div>     
      <div className={classes.details}>
        <Typography variant='body2'>{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} variant='h4' gutterTop>{post.title}</Typography>    
      <CardContent>
        <Typography className={classes.message} variant='body1' gutterBottom>{post.message}</Typography>
      </CardContent>
      <Typography variant='h6'>
        <Link 
        href={post.link} 
        // target='_blank'
        // rel='noreferrer'
        onClick={preventDefault}>{post.link}
        </Link>      
      </Typography>
      <CardActions className={classes.cardActions}>
        <Button className={classes.likeDeleteButton} size='small' onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize='small'/>
          &nbsp;Like&nbsp;{post.likeCount}
        </Button>
        <Button className={classes.likeDeleteButton}  size='small' onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='small'/>
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post;