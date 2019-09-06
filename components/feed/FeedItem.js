import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';


const FeedItem = props => {

  //To make sure to provide ripple effect on tapping feeds in Android app
  let TouchableCmp = TouchableOpacity;

  //iOS is well performing in Ripple effect by default. So added logic to handle only for Android
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.feed}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.body}>
                  <Text style={styles.description}>{props.body}</Text>
            </View>
          </View>
        </TouchableCmp>
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
    backgroundColor: 'yellow',
    // height: 500,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
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

export default FeedItem;
