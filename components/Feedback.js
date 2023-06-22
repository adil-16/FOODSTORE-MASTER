import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity,TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import Mailer from 'react-native-mail';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CustomerSignin() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [Dish, setDish] = useState('');
  const [DishProblem, setDishProblem] = useState('');

  const handleDishChange = (text) => {
    setDish(text);
  };

  const handleDishProblemChange = (text) => {
    setDishProblem(text);
  };


  const handlePaymentAddressChange = (text) => {
    setPaymentAddress(text);
  };
  let userEmail = "";
  const sendEmail = async() => {
    try {
      userEmail = await AsyncStorage.getItem('userEmail');
      console.log('User email:', userEmail);
      // Use the user email for further processing or display
    } catch (error) {
      console.log('Error retrieving user email:', error);
    }
  
    // Compose the email details
    const emailData = {

      subject: 'User Feedback',
      recipients: ['aarij@gmail.com'], // Email address(es) to send the feedback
      body: `
        Feedback Details:
        ------------------------------

        dish: ${Dish}
        problem:${DishProblem}
      `,
    };
  
    // Send the email
    Mailer.mail(emailData, (error, event) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent successfully');
      }
    });
  };
  
  const createTwoButtonAlert = () =>
  Alert.alert('', 'Thank you for choosing our restaurant and taking the time to provide us with your feedback. We greatly value your opinion as it helps us improve our services and enhance your dining experience.', [
    
    {text: 'X', onPress: () => console.log('OK Pressed')},
  ]);
  
  
 

  return (

    <View style={styles.main}>



      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>
          Feedback
        </Text >
       
      </View>

      <View style={styles.txtfld}>
        <Text style={styles.txt}>Enter Dish Name</Text>
      <TextInput
        style={styles.input}
  
        value={Dish}
        onChangeText={handleDishChange}
      />
      <TextInput
        style={[styles.problem ]}
        placeholder="Problem"
        placeholderTextColor="#F76106"

        value={DishProblem}
        onChangeText={handleDishProblemChange}
        
      />


      

      </View>

      <View style={styles.sec}>

        <Pressable
          style={
            styles.pressable}>
          <Text style={styles.txt} onPress={sendEmail}>Submit</Text>
        </Pressable>

      </View>
    </View>


  );

}


const styles = StyleSheet.create({

  main: {

    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  upper: {
    paddingTop: 30,
    color: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
    fontFamily: 'cursive',
    fontWeight:"bold"

  },
  img: {
    width: 188,
    height: 188,
  },

  pressable: {
    justifyContent: "center",
    backgroundColor: '#F76106',
    padding: 10,
    borderRadius: 50,
    height: 50,
    color: "white",
    marginTop: 5,
    marginHorizontal:80,
  },

  sec: {
    marginTop: 50,
  },

  txtfld:{
    marginTop:60
  },


  input:{
    
    borderWidth:2,
    borderColor:"#F76106",
    padding: 10,
    borderRadius:20,
    height: 50,
    color: "white",
    marginTop: 20,
    marginHorizontal:25,
  },

problem:{
  borderWidth:2,
  borderColor:"#F76106",
    padding: 10,
    borderRadius:20,
    height: 150,
    color: "white",
    marginTop: 20,
    marginHorizontal:25,
}

});
