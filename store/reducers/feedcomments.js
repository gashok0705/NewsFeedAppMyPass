const initialState = {
    availableComments: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'COMMENTS':
          console.log('control reaches comments');
          return {
            availableComments: action.commentsData
          }
        default:
          return state;
      }    
};