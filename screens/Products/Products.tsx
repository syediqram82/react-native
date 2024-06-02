import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Products({navigation, route}: any) {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button title="Go to Home Page" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
