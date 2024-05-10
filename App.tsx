import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import FlatCardList from './components/FlatCardList/FlatCardList';
import {Login} from './components/Login';
import {ApolloProvider} from '@apollo/client';
import {client} from './utils/apolloClient';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={} options={{title: 'Welcome'}} />
          {/* <SafeAreaView style={style.container}> */}
          {/* <ScrollView> */}
          {/* <FlatCardList /> */}
          <Login />
          {/* </ScrollView> */}
          {/* </SafeAreaView> */}
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
