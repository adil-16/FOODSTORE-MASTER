import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity,TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';




export default function CustomerSignin() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [Problem, setProblem] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleProblemChange = (text) => {
    setProblem(text);
  };


  const handlePaymentAddressChange = (text) => {
    setPaymentAddress(text);
  };
  const createTwoButtonAlert = () =>
  Alert.alert('', 'Thank you for sending us email we will soon entertain  you query', [
    
    {text: 'X', onPress: () => console.log('OK Pressed')},
  ]);
 

  return (

    <View style={styles.main}>



      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>
          How we Can help you
        </Text >
       
      </View>

      <View style={styles.txtfld}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#F76106"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={[styles.problem ]}
        placeholder="Problem"
        placeholderTextColor="#F76106"
        value={Problem}
        onChangeText={handleProblemChange}
        
      />


      

      </View>

      <View style={styles.sec}>

        <Pressable
          style={
            styles.pressable}>
          <Text style={styles.txt} onPress={createTwoButtonAlert}>Submit</Text>
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
