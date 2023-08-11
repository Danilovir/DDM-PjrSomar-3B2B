import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
  
  });
  const [sum, setSum] = useState(0);

  const handleInputChange = (inputName, value) => {
    setInputValues({ ...inputValues, [inputName]: value });
  };

  const handleSum = () => {
    const { input1 } = inputValues;
    const result = parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5);
    setSum(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Input 1:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input1', value)}
        value={inputValues.input1}
        keyboardType="numeric"
      />


      <Button title="Somar" onPress={handleSum} />

      <Text style={styles.result}>Resultado: {sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
