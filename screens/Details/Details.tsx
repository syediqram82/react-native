import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Details({navigation}: any) {
  // const {itemId, otherParam} = route.params;

  return (
    <View style={styles.container}>
      <Text> hello </Text>
      <Text>This is Details Page</Text>

      <Button
        title="Go to Products Page"
        onPress={() => navigation.navigate('Products')}
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
});
