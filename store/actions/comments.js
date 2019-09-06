export const COMMENTS = 'COMMENTS';

export const comments = (postID) => {
  return async dispatch => {
    const response = await fetch(
        
      `https://jsonplaceholder.typicode.com/comments?postId=${postID}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error('No response from the server!');
    }

    const resData = await response.json();
    //console.log(resData.length);
    if (resData.length > 0) {
      dispatch({ type: COMMENTS, commentsData: resData });
    } else {
      throw new Error('Sorry!! Comments Not found for this post!');
    }    
  };
};
