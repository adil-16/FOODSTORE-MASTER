import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity,TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable, ScrollView } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';




export default function About() {
 


 

  

  return (

    <View style={styles.main}>
      <ScrollView>



      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>
          Taste is not only Bio-Chronicle
        </Text >
        <Text style={styles.txt}>It's also psychological</Text>

      </View>

      <View style={styles.txtfld}>
      <Text style={{fontSize:24,color:"#F76106",alignSelf:"center",justifyContent:"center", marginVertical:5,fontFamily: 'cursive',
    fontWeight:"bold"}}>
      Welcome to our food delivery app! We're passionate about bringing you delicious meals right to your doorstep, making dining at home a convenient and enjoyable experience. Here's a bit about us:
At Tarragon, we understand that life can get busy, and finding time to cook or dine out may not always be possible. That's why we've created a platform that connects you with a diverse range of restaurants and eateries in your area, offering a wide variety of cuisines to satisfy any craving.
      </Text>
      

      </View>

      <View style={styles.sec}>

        
        <Pressable
          style={
            styles.pressable}>
          <Text style={styles.txt} >x</Text>
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
    marginHorizontal:150,
    marginBottom:30,
  },

  sec: {
    marginTop: 50,
  },

  txtfld:{
    marginTop:30
  },


  input:{
    
    backgroundColor: '#B9B2AD',
    padding: 10,
    borderRadius:20,
    height: 50,
    color: "white",
    marginTop: 20,
    marginHorizontal:25,
    
  },



});
