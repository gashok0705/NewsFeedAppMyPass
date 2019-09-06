import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


const FeedComments = props => {

  return (
    <View style={styles.feed}>
          <View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.title}>{props.email}</Text>
            </View>
            <View style={styles.body}>
                  <Text style={styles.description}>{props.body}</Text>
            </View>
          </View>
    </View>
  );
};

//Styles for the FeedList Home page
const styles = StyleSheet.create({
    feed: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'pink',
    // height: 500,
    margin: 20
  },
  details: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  description: {
    fontSize: 14,
    color: '#888'
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10
  },
  detailItems: {
    width: '100%',
  }
});

export default FeedComments;
