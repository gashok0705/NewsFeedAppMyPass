import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import feedsReducer from './store/reducers/posts';
import commentsReducer from './store/reducers/feedcomments';
import FeedNavigator from './navigation/FeedNavigator';

const rootReducer = combineReducers({
  feeds: feedsReducer,
  comments: commentsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <FeedNavigator />
    </Provider>
  );
}
