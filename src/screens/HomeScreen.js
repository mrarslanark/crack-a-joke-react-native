import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import axios from "axios";

const HomeScreen = () => {
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

  return (
    <>
      {!randomJoke ? (
        <Card>
          <ActivityIndicator size="large" />
        </Card>
      ) : (
        <View style={styles.container}>
          <Card title="Jokes">
            <Text style={styles.setup}>{randomJoke.setup}</Text>
            <Text style={styles.punchline}>{randomJoke.punchline}</Text>
            <Button
              style={styles.button}
              title="Crack Another"
              onPress={getARandomJoke}
            />
          </Card>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
