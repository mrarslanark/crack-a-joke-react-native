import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ListItem, Button } from "react-native-elements";
import axios from "axios";

const JokesListScreen = () => {
  const [randomJokes, setRandomJokes] = useState();

  const getListOfRandomJokes = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/jokes/ten"
      );
      setRandomJokes(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getListOfRandomJokes();
  }, []);

  if (!randomJokes) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button
        title="Refresh Jokes"
        type="clear"
        onPress={getListOfRandomJokes}
      />
      <FlatList
        data={randomJokes}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem bottomDivider chevron title={item.setup} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});

export default JokesListScreen;
