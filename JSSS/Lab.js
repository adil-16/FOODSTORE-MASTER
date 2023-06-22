/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


export default function Lab() {


  const [isDarkMode, setIsDarkMode] = useState(false);
  const [text, setText] = React.useState('');

  function toggleColorMode() {
    setIsDarkMode(!isDarkMode);

  }



  
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [disc, setdisc] = useState('60');

    function handleInputChange(text) {
      setInputValue(text);
    }


    function calculateDiscount(price, discountPercentage) {
      const discountAmount = price * (discountPercentage / 100);
      const discountedPrice = price - discountAmount;
      const myString = discountedPrice.toString();
      console.log("CAL"+price);
      console.log(discountPercentage);
      console.log(discountedPrice);

      return setdisc ("50");
    }


    // function handlePress(a,b) {
    //   // call function 2
    //   // console.log("a"+a);
    //   // calculateDiscount(a,b);
    //   // // call function 1
    //   // console.log("b"+b);
    //   createTwoButtonAlert(a,b);
  
    // }

    const createTwoButtonAlert = (price, discountPercentage) =>{

      const discountAmount = price * (discountPercentage / 100);
      const discountedPrice = price - discountAmount;

    console.log("dis"+discountedPrice);
      Alert.alert('Discounted Amount', discountPercentage, [
        {
          text: 'Save',
          onPress: () => console.log('Save Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log(disc) },
      ]
      );}

    return (
      <View>
        <View style={[styles.header, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
          <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#333' }]}> BargainBuddy</Text>
          <TouchableOpacity onPress={toggleColorMode}>
            <Text style={[styles.button, { color: isDarkMode ? '#fff' : '#333' }]}>
              {isDarkMode ? 'Light' : 'Dark'} Mode
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <TextInput style={styles.data}
            label="Original Amount"
            keyboardType="numeric"
            // onChangeText={handleInputChange}
            value={inputValue}
        onChangeText={setInputValue}


          />
          <TextInput style={styles.data}
            label="Discount %"
            keyboardType="numeric"
            // onChangeText={handleInputChange}
            value={inputValue2}
        onChangeText={setInputValue2}

          />
          <Button style={styles.btn} mode="contained" onPress={()=>createTwoButtonAlert(inputValue,inputValue2) }
 >
   {
    // calculateDiscount(inputValue,inputValue2)
   }
            Calculate
          </Button>

          <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
            Save
          </Button>

        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 80,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    button: {
      fontSize: 16,
    },
    data: {
      width: 330,
      fontSize: 16,
      // marginTop: 15,
      backgroundColor: "white",
      marginVertical: 15
    },
    btn: {
      marginVertical: 10,
      width: 200,
      backgroundColor: "black",
    },
    form: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
  });

