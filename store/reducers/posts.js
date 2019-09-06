import POSTS from '../../data/dummy-data';
import LOGIN from '../actions/auth';

const initialState = {
    availablePosts: null,
    userPosts: null
    //userPosts: POSTS.filter(post => post.userId === '2') //Filtering user posts based on their ID's
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN':
          return {
            availablePosts: action.postData,
            userPosts: null
          }
        default:
          return state;
      }    
};