import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import songs from './src/data/songs.json';
import SongCard from './src/components/songcard';
import SearchBar from './src/components/searchbar';

const App = () => {
  const [songList, setSongList] = useState(songs);
  const renderSong = ({item}) => <SongCard data={item} />;
  const renderKey = item => item.id;
  const renderSeparator = () => <View style={styles.separator} />;
  const handleChangeText = text => {
    if (text === 'tükendi') {
      setSongList(songs.filter(song => song.isSoldOut));
    } else {
      const filteredList = songs.filter(song => {
        const searchedText = text.toLowerCase();
        const currentTitle = song.title.toLowerCase();
        return currentTitle.indexOf(searchedText) > -1;
      });

      setSongList(filteredList);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <SearchBar onSearch={handleChangeText} />
        <FlatList
          keyExtractor={renderKey}
          data={songList}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  separator: {
    borderWidth: 0.7,
    borderColor: '#e0e0e0',
  },
});

export default App;
