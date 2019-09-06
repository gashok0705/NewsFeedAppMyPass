export const LOGIN = 'LOGIN';

export const login = (useID) => {
  return async dispatch => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${useID}`,
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
    //console.log(resData);
    if (resData.length > 0) {
      dispatch({ type: LOGIN, postData: resData });
    } else {
      throw new Error('Sorry!! UserID Not found!');
    }    
  };
};
