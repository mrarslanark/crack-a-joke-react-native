import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from './src/context/JokesContext'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Crack a Joke" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}