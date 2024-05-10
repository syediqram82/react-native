import React from 'react';
import {AppRegistry} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.ml-jobs.ai/graphql',
});

// Function to retrieve token from AsyncStorage
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

// Create a new Apollo Client instance with dynamic authorization header
export const client = new ApolloClient({
  link: setContext(async (_, {headers}) => {
    // Retrieve token
    const token = await getToken();
    // Set authorization header if token is available
    if (token) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    }
    return {headers};
  }).concat(httpLink),
  cache: new InMemoryCache(),
});
