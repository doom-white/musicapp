import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  innerContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  artist: {
    color: 'black',
    fontSize: 15,
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,
  },
  album: {
    fontSize: 15,
    flex: 1,
  },
  soldOutContainer: {
    borderWidth: 1,
    borderColor: 'crimson',
    padding: 5,
    borderRadius: 5,
  },
  soldOut: {
    color: 'crimson',
    fontSize: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
