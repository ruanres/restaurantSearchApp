import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
  <View style={styles.container}>
    <Feather name="search" style={styles.icon} />
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      placeholder="Search"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3e1e1',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default SearchBar;
