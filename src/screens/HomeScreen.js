import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [randomJoke, setRandomJoke] = useState();

  const getARandomJoke = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      setRandomJoke(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getARandomJoke();
  }, []);

  if (!randomJoke) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView>
      <Card>
        <Text style={{ textAlign: "center" }}>
          Welcome to Crack a Joke.{"\n"}Smile, laugh and enjoy the app.
        </Text>
      </Card>
      <Card title="Here's a Joke">
        <Text style={styles.setup}>{randomJoke.setup}</Text>
        <Text style={styles.punchline}>{randomJoke.punchline}</Text>
        <Button
          type="clear"
          style={styles.button}
          title="Crack Another"
          onPress={getARandomJoke}
        />
      </Card>
      <Card>
        <Button
          type="clear"
          title="Give me 10 Jokes"
          onPress={() => navigation.navigate("JokesList")}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  setup: {
    fontSize: 16,
    textAlign: "center",
  },
  punchline: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
});

export default HomeScreen;
