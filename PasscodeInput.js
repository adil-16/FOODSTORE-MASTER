import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';

const PasscodeInput = () => {
    const [passcode, setPasscode] = useState('');
  
    const handleInputChange = (value) => {
      setPasscode(value);
    };
  
    const handleSubmit = () => {
      // Handle passcode submission
      console.log('Passcode:', passcode);
    };
  
    return (
      <View style={styles.container}>
        <Input
          label="Passcode"
          secureTextEntry
          value={passcode}
          onChangeText={handleInputChange}
          inputContainerStyle={styles.inputContainer}
        />
        <View style={styles.numericInputContainer}>
          <NumericInput
            digitStyle={styles.digitStyle}
            onChange={handleInputChange}
            valueType="integer"
            minValue={0}
            maxValue={9}
            totalWidth={240}
            totalHeight={50}
            separatorWidth={0}
            rounded
          />
        </View>
        <Button title="Submit" onPress={handleSubmit} containerStyle={styles.buttonContainer} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: 200,
    },
    numericInputContainer: {
      marginTop: 10,
    },
    digitStyle: {
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    buttonContainer: {
      marginTop: 20,
      width: 200,
    },
  });
  
  export default PasscodeInput;
  