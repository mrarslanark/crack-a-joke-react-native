import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import JokesListScreen from "./src/screens/JokesListScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Crack a Joke" }}
        />
        <Stack.Screen
          name="JokesList"
          component={JokesListScreen}
          options={{ title: "Jokes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
