import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
// import LoginImage from '../../public/assets/Images/login.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMyJobs} from '../../hooks/useMyJobs';
import {useEffect, useState} from 'react';
import {InputBox} from '../InputBox';
import {Form, Formik, FormikHelpers, FormikValues} from 'formik';
import {LoginSVG} from '../../public/assets/svg';
import {useCandidateLogin} from '../../hooks/useCandidateLogin';

type LoginFormTypes = {
  email: string;
  password: string;
};

export const Login = () => {
  const data = useMyJobs();
  const {login, loading, data: LoginData, postLogin} = useCandidateLogin();
  // const [isKeyboardVisible, setIsKeyboardVisible] = useState(Boolean);
  //   console.log(data.data.myJobs);
  const [imputEmail, setInputEmail] = useState();
  //   const showChange = values => {
  //     console.log(values);
  //   };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return token;
    } catch (error) {
      console.log('Error retrieving token:', error);
      return null;
    }
  };

  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    // Call getToken function when component mounts
    getToken().then(token => {
      if (token !== null) setToken(token);
    });
  }, []);

  const handleSubmit = async (values: LoginFormTypes) => {
    try {
      const {data} = await login({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      if (data) postLogin(data.login.accessToken);
    } catch (error) {
      console.log('This is Error', error);
    }
  };

  return (
    // <KeyboardAvoidingView>
    <View style={styles.container}>
      <View style={{flex: 1}}>
        {/* <LoginSVG /> */}
        <Image
          style={styles.loginImage}
          source={require('../../public/assets/Images/login.png')}
        />
      </View>

      <View style={styles.textInputContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Become a Member</Text>
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => handleSubmit(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={styles.formContainer}>
              <InputBox
                name={'email'}
                label={'Email'}
                placeholder={'Enter your Email'}
              />
              <InputBox
                name={'password'}
                label={'Password'}
                placeholder={'Enter your Password'}
              />

              <View style={styles.button}>
                <Button
                  onPress={() => handleSubmit()}
                  title="Submit"
                  color={'white'}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    gap: 15,
  },
  button: {
    backgroundColor: '#1C1B2B',
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '400',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginImage: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    width: '100%',
    gap: 20,
  },
});
