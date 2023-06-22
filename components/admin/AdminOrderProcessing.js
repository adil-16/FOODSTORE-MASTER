import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, ScrollView, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider, TextInput } from 'react-native-paper';
import PushNotification from 'react-native-push-notification';



export default function AdminOrderProcessing({ navigation, route }) {

  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('Registered with token:', token);
      },
      onNotification: function (notification) {
        console.log('Notification received:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  const sendNotification = () => {
    PushNotification.localNotification({
      title: 'New Notification',
      message: 'This is a notification message.',
      playSound: true,
      soundName: 'default',
      vibrate: true,
      vibration: 300,
      priority: 'high',
      visibility: 'public',
      importance: 'high',
      userInfo: {},
    });
  }
  

  const { item } = route.params;

  const handleNavigation = (screenname) => {
    console.log(screenname);
    navigation.navigate(screenname);
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
      </View>

      <View style={styles.sec}>
        <Text style={styles.txt}>Name: {item.name}</Text>
        <Text style={styles.txt}>Quantity: {item.quantity}</Text>
        <Text style={styles.txt}>Total price: {item.price}</Text>
        <Text style={{ paddingBottom: 20, }}></Text>

        <Pressable onPress={this.sendNotification} style={styles.pressable}>
          <Text style={styles.txt}>Cooking in Process</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.txt}>OFF for Delivery</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.txt}>Delivered</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({

  main: {

    flex: 1,
    padding: 20,
    backgroundColor: "black",
    // marginBottom:50,
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
    fontWeight: "bold"
  },
  img: {
    width: 188,
    width:"60%",
    height: 188,
  },

  pressable: {
    justifyContent: "center",
    backgroundColor: '#F76106',
    padding: 10,
    borderRadius: 80,
    height: 70,
    color: "white",
    marginTop: "5%",
    marginBottom: "3%",
    marginHorizontal: "10%",
  },

  sec: {
    marginTop: 50,
    marginBottom:20,
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