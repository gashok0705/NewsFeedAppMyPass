# NewsFeedAppMyPass
Sample News Feed App Done with React Native and Redux

# Project Setup: 
Just give 'npm install' to install all the dependencies & give 'npm run i' for the execution. 
You can also view how-to-use.txt file from the project directory to view why exactly certain dependencies were needed and their uses.

# Technology stack used:
--> React Native with additional Native components
--> Redux Thunk has been integrated for the Redux store & also for async as well as for handling synchronous updates by dispatching an action

# API's Consumed:
https://jsonplaceholder.typicode.com/posts?userId=1 --> This will give all the posts corresponds to the userId = 1
https://jsonplaceholder.typicode.com/comments?postId=1 --> To fetch the comments for the particular postID. PostId can be derived from the previous api response's key 'id'

# App Flow:
User will be prompted with Login screen where user can enter their userID as input.
In this case, userID will be as either '1', '2', '3' and so on. 
If you try to login by entering '100' or '1000' or any value which is not supported from the api, the JsonPlaceholder api will return an empty array & user will be prompted with alert 'User Not Found'

Once the user logged into the application, he/she can view the post's in tiles which corresponds to the loggedIn userID. 
User can tap on any POST's tile to view the POST in detail screen with all the corresponding comments for the respective posts. 

User can view each POST's comments on tapping corresponding Feed tile. 

At any time, user can logout from the application by tapping on the top right Logout icon shown in header of Feed's page. 

Feel free to login as different user by giving their userID's and view their posts and comments. 

# Design Pattern for the project:
--> Have used two actions and reducers. One for getting the POSTS and other for getting the COMMENTS. You can find the files under 'Store' folder from the project. 

--> Whenever the user taps on Login, a dispatch reducer is fired which will map the 'auth.js' file from the 'Actions' folder inside 'Store' folder. 

--> Once the api response is obtained, correcponding reducer is mapped to hold the states of the response. For 'auth.js', the reducer is 'posts.js' under 'reducer' folder.

--> If the response is OK and doesn't have any empty array, then the user will be navigated to 'PostsOverviewScreen.js' located under 'screens' --> 'posts' folder. I have used 'createStackNavigator' component to navigate to next screen. 

The same flow pattern is followed to get the list of comments for the corresponding posts when it is tapped. 

--> 'comments.js' under 'store' folder is dispatched whenever the user taps on the Feeds tile and it's corresponding reducer 'feedcomments.js' is mapped from the 'reducer' folder. 

This is the overall major flow of this application. Other folders is simple component creation and you can easily understand by viewing those. 


Happy Coding :)
