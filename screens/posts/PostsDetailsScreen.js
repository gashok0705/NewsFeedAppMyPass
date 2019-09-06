import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';
import FeedComments from '../../components/feed/FeedComments';

const PostsDetailsScreen = props => {
  const postID = props.navigation.getParam('postID');
  const selectedPosts = useSelector(state =>
    state.feeds.availablePosts.find(posts => posts.id === postID)
  );
  const comments = useSelector(state =>
     state.comments.availableComments
  );
  console.log('available comments are', comments);


  return (
    <ScrollView>
      <View style={styles.details}>
        <Text style={styles.title}>{selectedPosts.title}</Text>
      </View>
      <Text style={styles.description}>{selectedPosts.body}</Text>
      <FlatList data={comments}
      keyExtractor={item => item.id.toString()}
      renderItem={itemData => (
        <FeedComments
          name={itemData.item.name}
          email={itemData.item.email}
          body={itemData.item.body}
        />
      )}> </FlatList>
    </ScrollView>
    
  );
};

PostsDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('postID').toString()
  };
};

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  },
  details: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  }
});

export default PostsDetailsScreen;
