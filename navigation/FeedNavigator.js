import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';

import PostsOverviewScreen from '../screens/posts/PostsOverviewScreen';
import PostsDetailsScreen from '../screens/posts/PostsDetailsScreen';
import AuthScreen from '../screens/user/AuthScreen';

import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const FeedNavigator = createStackNavigator(
  {
    PostOverview: PostsOverviewScreen,
    PostDetail: PostsDetailsScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Feed: FeedNavigator
});

export default createAppContainer(MainNavigator);
