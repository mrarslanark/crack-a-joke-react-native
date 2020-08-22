import * as React from "react";
import { TouchableOpacity } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
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
          options={{ title: "Crack A Joke" }}
        />
        <Stack.Screen
          name="JokesList"
          component={JokesListScreen}
          options={{ title: "Jokes List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
