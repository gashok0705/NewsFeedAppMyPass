import React, { useState, useEffect } from 'react';
import { FlatList, Platform, Alert} from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import FeedItem from '../../components/feed/FeedItem';

import * as commentsActions from '../../store/actions/comments';
import { useDispatch } from 'react-redux';


//Home page of our App. 
const PostsOverviewScreen = props => {

  const dispatch = useDispatch();
  const [error, setError] = useState();

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const getCommentsHandler = async (id) => {
     let action = commentsActions.comments(
      id,
      );
    setError(null);
    //setIsLoading(true);
    try {
      await dispatch(action);
      //props.navigation.navigate('Feed');
      props.navigation.navigate('PostDetail', {
        postID: id
      });
    } catch (err) {
      setError(err.message);
      //setIsLoading(false);
    }
  };

  
  const feeds = useSelector(state => state.feeds.availablePosts);
  //console.log('feeds are', feeds);
  return (
    <FlatList
      data={feeds}
      keyExtractor={item => item.id.toString()}
      renderItem={itemData => (
        <FeedItem
          title={itemData.item.title}
          body={itemData.item.body}
          onViewDetail={() => {
            // props.navigation.navigate('ProductDetail', {
            //   productId: itemData.item.id,
            //   productTitle: itemData.item.title
            // });
            getCommentsHandler(itemData.item.id);
            //console.log('selected id is', itemData.item.id);
          }}

        />
      )}
    >
      </FlatList>
  );
};

PostsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Posts',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
          onPress={() => {
            console.log('logout');
            navData.navigation.navigate('Auth');
          }}
        />
      </HeaderButtons>
    )
  };

};

export default PostsOverviewScreen;
