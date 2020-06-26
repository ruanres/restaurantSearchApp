import React from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => <ResultsDetail result={item} />}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultsList;
