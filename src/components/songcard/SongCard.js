import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.style';

const SongCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.imageUrl}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.artist}>{data.artist}</Text>
          <Text style={styles.year}>{data.year}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.album}>{data.album}</Text>
          {data.isSoldOut && (
            <View style={styles.soldOutContainer}>
              <Text style={styles.soldOut}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
