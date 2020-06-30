import React from 'react';
import {
  Text, View, FlatList, Image, StyleSheet,
} from 'react-native';
import useResult from '../hooks/useResult';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, errorMessage] = useResult(id);

  return (
    <View style={styles.container}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 10,
  },
});

export default ResultsShowScreen;
