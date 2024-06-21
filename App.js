import 'react-native-gesture-handler'; // Ensure you have this import

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookListScreen from './Components/BookListScreen';
import BookIndexScreen from './Components/BookIndex'; 
import StoryScreen from './Components/StoryScreen'; 
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookList">
        <Stack.Screen name="BookList" component={BookListScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="BookIndex" component={BookIndexScreen} options={{ title: "અનુક્રમણિકા" }}/>
        <Stack.Screen name="Story" component={StoryScreen} options={{ title: "Loading..." }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
