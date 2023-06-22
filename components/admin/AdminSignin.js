import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';




export default function AdminSignin({ navigation }) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };


  const handleNavigation = (screenname) => {
    console.log(screenname);
    navigation.navigate(screenname);
  }







  return (

    <View style={styles.main}>



      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>
          Admin Use Only
        </Text >

      </View>

      <View style={styles.txtfld}>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder="Enter PassCode"
          placeholderTextColor="#F76106"

          value={email}
          onChangeText={handleEmailChange}
        />



      </View>

      <View style={styles.sec}>

        <Pressable onPress={() => { (2580 == email) && handleNavigation("AdminDashboard") }}
          style={
            styles.pressable}>
          <Text style={styles.txt}>Sign-In</Text>
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
    paddingTop: 60,
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
    fontWeight: "bold"
  },
  img: {
    width: 188,
    height: 188,
    marginBottom:18
  },

  pressable: {
    justifyContent: "center",
    backgroundColor: '#F76106',
    padding: 10,
    borderRadius: 50,
    height: 50,
    color: "white",
    marginTop: 5,
    marginHorizontal: 80,
  },

  sec: {
    marginTop: 50,
  },

  txtfld: {
    marginTop: 60
  },


  input: {

    // backgroundColor: '#B9B2AD',
    padding: 10,
    borderRadius: 20,
    height: 50,
    color: "white",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#F76106",
    marginHorizontal: 25,
  },



});
