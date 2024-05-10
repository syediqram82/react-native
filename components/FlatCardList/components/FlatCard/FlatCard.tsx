import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type FlatCardProps = {
  color: string;
};

export default function FlatCard(props: FlatCardProps) {
  return (
    <View style={styles.flatCard}>
      <Text>{props.color}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flatCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'plum',
  },
});
