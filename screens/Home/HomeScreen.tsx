import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Home Screen</Text>
      <Button
        title="Go to Details Page"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 87,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 30,
  },
});
