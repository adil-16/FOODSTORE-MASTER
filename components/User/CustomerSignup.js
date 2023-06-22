import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity,TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable, ScrollView } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import {authentication} from '../../firebase/firebase-config';
import {db} from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firestore } from '@react-native-firebase/firestore';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import uuid from 'react-native-uuid';
import { doc, setDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';



const userCollectionRef = collection(db, 'users');



export default function App({navigation}) {
  const userId=uuid.v4();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

const [fullNameError, setFullNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [contactError, setContactError] = useState('');
const [addressError, setAddressError] = useState('');
const [passwordError, setPasswordError] = useState('');

const validateFullName = (fullName) => {
  if (!fullName) {
    return 'Full Name is required';
  }
  return '';
};

const validateEmail = (email) => {
  if (!email) {
    return 'Email is required';
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email format';
  }
  return '';
};

const validateContact = (contact) => {
  if (!contact) {
    return 'Contact is required';
  }
  // Check if the contact is in a valid format using a regular expression
  const contactRegex = /^\d{11}$/;
  if (!contactRegex.test(contact)) {
    return 'Invalid contact format';
  }
  return '';
};

const validateAddress = (address) => {
  if (!address) {
    return 'Address is required';
  }
  return '';
};

const validatePassword = (password) => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    return 'Password must contain at least one uppercase letter, one lowercase letter and one number';
  }
  return '';
};


const handleFormSubmit = async() => {
  const fullNameErrorMsg = validateFullName(fullName);
  const emailErrorMsg = validateEmail(email);
  const contactErrorMsg = validateContact(contact);
  const addressErrorMsg = validateAddress(address);
  const passwordErrorMsg = validatePassword(password);


  setFullNameError(fullNameErrorMsg);
  setEmailError(emailErrorMsg);
  setContactError(contactErrorMsg);
  setAddressError(addressErrorMsg);
  setPasswordError(passwordErrorMsg);

  if (fullNameErrorMsg || emailErrorMsg || contactErrorMsg || addressErrorMsg || passwordErrorMsg) {

   return;
  }
    try{
    await setDoc(doc(userCollectionRef,userId), {
      fullName: fullName,
      email: email,
      contact: contact,
      address: address,
      password: password,
      userId:userId,
      cart:[],
    });
    await AsyncStorage.setItem('userId', userId);
    console.log('id stored in async')
  }
  
  catch(err){
    console.log(err);
  }
  
  

  handleNavigation("Dashboard")
};


  const handleFullNameChange = (text) => {
    setFullName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleContactChange = (text) => {
    setContact(text);
  };

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };


  const handleNavigation=(screenname)=>{
    console.log(screenname);
    navigation.navigate(screenname);
}


return (
  <View style={styles.main}>
    <ScrollView>
      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>Taste is not only Bio-Chemical</Text>
        <Text style={styles.txt}>It's also psychological</Text>
      </View>

      <View style={styles.txtfld}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#F76106"
          value={fullName}
          onChangeText={handleFullNameChange}
        />
        {fullNameError ? <Text style={styles.errorText}>{fullNameError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#F76106"
          value={email}
          onChangeText={handleEmailChange}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Contact"
          placeholderTextColor="#F76106"
          value={contact}
          onChangeText={handleContactChange}
        />
        {contactError ? <Text style={styles.errorText}>{contactError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#F76106"
          value={address}
          onChangeText={handleAddressChange}
        />
        {addressError ? <Text style={styles.errorText}>{addressError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#F76106"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>

      <View style={styles.sec}>
        <Pressable onPress={handleFormSubmit} style={styles.pressable}>
          <Text style={styles.txt}>Sign-Up</Text>
        </Pressable>
      </View>
    </ScrollView>
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
    fontSize: 20,
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
    marginBottom:30,
  },

  sec: {
    marginTop: 50,
  },

  txtfld:{
    marginTop:30
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
  errorText: {
    color: 'red',
    marginLeft: 25,
    marginTop: 5,
  },

});