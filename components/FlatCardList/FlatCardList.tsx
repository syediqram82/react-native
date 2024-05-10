import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard/FlatCard';

export default function FlatCardList() {
  return (
    <View style={styles.flatCardList}>
      {FlatCardData.map((item, index) => (
        <FlatCard color={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  flatCardList: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
});

const FlatCardData = ['blue', 'red', 'green'];
