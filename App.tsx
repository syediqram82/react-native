import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
import FlatCardList from './components/FlatCardList/FlatCardList';
import {Login} from './components/Login';
import {ApolloProvider} from '@apollo/client';
import {client} from './utils/apolloClient';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/HomeScreen';
import Details from './screens/Details/Details';
import Products from './screens/Products/Products';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Products" component={Products} />
        </Drawer.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              tabBarBadge: 5,
              headerLeft: () => <Button title="Hello" />,
            })}
          />
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Details" component={Details} />
          {/* <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator> */}
        </Tab.Navigator>
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
