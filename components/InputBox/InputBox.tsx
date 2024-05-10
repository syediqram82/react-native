import {useField} from 'formik';
import {StyleSheet, View, Text, TextInput} from 'react-native';

type InputBoxProps = {
  name: string;
  label: string;
  placeholder: string;
};
export const InputBox: React.FC<InputBoxProps> = ({
  name,
  label,
  placeholder,
}) => {
  const [field, meta, helpers] = useField(name);
  const handleChange = (value: string) => {
    helpers.setValue(value);
  };
  return (
    <>
      <View style={styles.inputBoxContainer}>
        <View>
          <Text style={styles.label}>{label}</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={handleChange}
          autoCapitalize="none"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputBoxContainer: {
    gap: 15,
  },
});
