import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider, TextInput } from 'react-native-paper';




export default function AdminCustomer({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
 
  const handleNavigation=(screenname)=>{
    console.log(screenname);
    navigation.navigate(screenname);
}
  return (

    <View style={styles.main}>



      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>
          Taste is not only Bio-Chronicle
        </Text >
        <Text style={styles.txt}>It's also psychological</Text>

      </View>

      <View style={styles.sec}>

        <Pressable onPress={()=>{handleNavigation("CustomerSignin")}}
          style={
            styles.pressable}>
          <Text style={styles.txt}>Customer</Text>
        </Pressable>



        <Pressable onPress={()=>{handleNavigation("AdminSignin")}}
          style={
            styles.pressable}>
          <Text style={styles.txt}>Admin</Text>
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
    marginTop: 20,
    marginHorizontal:15,
  },

  sec: {
    marginTop: 100,
  }
});
