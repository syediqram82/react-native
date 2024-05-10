import {gql, useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CANDIDATE_LOGIN = gql(
  `mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          accessToken
        }
      }`,
);

export const useCandidateLogin = () => {
  const [login, {data, error, loading}] = useMutation(CANDIDATE_LOGIN);
  const postLogin = async (accessToken: string) => {
    try {
      AsyncStorage.setItem('token', accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    login,
    data,
    loading,
    error,
    postLogin,
  };
};
