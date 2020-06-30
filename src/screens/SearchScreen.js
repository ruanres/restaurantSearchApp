import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        {
          [
            ['Cost Effective', '$'],
            ['Bit Pricier', '$$'],
            ['Big Spender', '$$$'],
          ].map(([title, price]) => (
            <ResultsList
              title={title}
              key={title}
              results={filterResultsByPrice(price)}
            />
          ))
        }
      </ScrollView>
    </>
  );
};

export default SearchScreen;
