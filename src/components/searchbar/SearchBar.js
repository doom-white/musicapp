import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Ara..."
        placeholderTextColor="#747d8c"
        onChangeText={onSearch}
      />
    </View>
  );
};

export default SearchBar;
