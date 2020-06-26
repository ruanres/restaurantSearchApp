import React from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';

const ResultsList = ({ title, results }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      horizontal
    />
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
