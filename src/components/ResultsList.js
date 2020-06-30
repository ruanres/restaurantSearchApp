import React from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {
      id: item.id,
    })}
    >
      <ResultsDetail result={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

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

export default withNavigation(ResultsList);
