import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Card} from 'react-native-elements';

const SomeList = ({navigation, route}) => {
  const teaDATA = [
    {
      name: 'CheapTea',
      rating: '6/10',
      imageUrl: 'http://via.placeholder.com/160x160',
    },
    {
      name: 'MadDecentTea',
      rating: '8/10',
      imageUrl: 'http://via.placeholder.com/160x160',
    },
    {
      name: 'BestValuedTea',
      rating: '9/10',
      imageUrl: 'http://via.placeholder.com/160x160',
    },
    {
      name: 'OverPricedTea',
      rating: '5/10',
      imageUrl: 'http://via.placeholder.com/160x160',
    },
    {
      name: 'BoujeTea',
      rating: '7/10',
      imageUrl: 'http://via.placeholder.com/160x160',
    },
    {
      name: 'BestTea',
      rating: '10/10',
      imageUrl: 'http://via.placeholder.com/160x160',
    },
  ];

  return (
    <View style={{padding: 5}}>
      <FlatList
        horizontal
        keyExtractor={(tea) => tea.name}
        data={teaDATA}
        renderItem={({item}) => {
          return (
            <Card
              title={null}
              image={{uri: item.imageUrl}}
              containerStyle={styles.shopsContainer}>
              <View style={{padding: 5}} />
              <Text style={styles.titlestyle}>{item.name}</Text>
              <View style={{padding: 5}} />
              <Text style={styles.itemstyle}>Rating: {item.rating}</Text>
            </Card>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shopsContainer: {
    borderRadius: 7.5,
    borderWidth: 3,
    borderColor: 'transparent',
    width: 200,
    height: 250,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'center',
  },
  titlestyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(255,255,255)',
  },
  itemstyle: {
    color: 'rgb(255,255,255)',
  },
});

export default SomeList;
