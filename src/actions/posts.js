// "import * as" = import everything from actions as api
import * as api from '../api'
import { FETCH_ALL, DELETE, CREATE, UPDATE, LIKE } from '../Constants/actionTypes'

// Action Creators

// Getting async data --> Redux thunk: async(dispatch) 0 dispatch(action) 8insted of: return action)
export const getPosts = () =>  async (dispatch) => {

  try {
    const {data} = await api.fetchPosts();

    dispatch ({type: FETCH_ALL, payload: data}); // payload: data where posts are stored  
  }
  catch (error) {
    console.log(error);
  }
}
// from here: action dispatched from App.js useEffect --> posts.js (reducer): handle the logic of fetching all posts

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);

    dispatch({type: CREATE, payload: data});
  } 
  catch (error) {
    console.log(error);    
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, post);

    dispatch({type: UPDATE, payload: data});

  } catch (error) {
    console.log(error);    
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({type: DELETE, payload: id});

  } catch (error) {
    console.log(error);    
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id);

    dispatch({type: LIKE, payload: data});
  } catch (error) {
    console.log(error);
  }
}