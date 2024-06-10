import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  searchDeals: (term: string) => void;
  searchTerm?: string;
}

const SearchBar: React.FC<Props> = ({ searchDeals, searchTerm = '' }) => {
  const [searchTermState, setSearchTermState] = useState(searchTerm);

  const handleChange = (text: string) => {
    setSearchTermState(text);
    searchDeals(text);
  };

  return (
    <TextInput
      placeholder="Check Near By Hospital"
      style={styles.input}
      value={searchTermState}
      onChangeText={handleChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:'80%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 8,
  },
});

export default SearchBar;
