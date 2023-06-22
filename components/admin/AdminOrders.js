
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text,ScrollView, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import {db} from '../../firebase/firebase-config';
import { collection, getDocs, query, where,serverTimestamp } from "firebase/firestore";



export default function AdminOrders({ navigation }) {

  const [allOrder, setAllOrders] = useState([]);
  
    const handleDishPress = (item) => {
        navigation.navigate('AdminOrderProcessing', { item });
      };
      
  
      // const fetchAllOrders = async () => {
      //   try {
      //     const ordersRef = collection(db, "orders");
      //     const querySnapshot = await getDocs(ordersRef);
      
      //     const allOrders = querySnapshot.docs.map((doc) => doc.data());
      //     console.log("All Orders:", allOrders);
      //     setAllOrders([...allOrders, {orderName, orderPrice}]);
      //     console.log("asdsaf");
      //     console.log(allOrder);
          
      //   } catch (error) {
      //     console.log("Error fetching all orders:", error);
      //   }
      // };

      const fetchAllOrders = async () => {
        try {
          const ordersRef = collection(db, "orders");
          const querySnapshot = await getDocs(ordersRef);
      
          const allOrders = querySnapshot.docs.map((doc) => {
            console.log("ran 1")
            const { orderId, orderName, orderPrice } = doc.data();
            return { orderId, orderName, orderPrice };
          });
          console.log("ran 2")
          
          console.log("All Orders:", allOrders);
          setMyOrders(allOrders);
          console.log(allOrder);
        } catch (error) {
          console.log("Error fetching all orders:", error);
        }
      };
       const setMyOrders =(text)=>{
        setAllOrders(text);
       }

      useEffect(() => {
        fetchAllOrders();
      }, []);

      return (
        <ScrollView style={styles.main}>
          <View style={styles.upper}>
            <Image style={styles.img} source={require('./logo.png')} />
          </View>
          <Text style={[styles.txt]}>Orders</Text>
          {allOrder.map((order, index) => (
            <Pressable style={styles.pressable} key={index} onPress={() => handleDishPress(order)}>
              <Text style={styles.txt}>{order.orderName}</Text>
              <Text style={styles.txt}>Price: {order.orderPrice} Rupees</Text>
            </Pressable>
          ))}
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
    },

    pressable: {
        justifyContent: "center",
        backgroundColor: '#F76106',
        padding: 10,
        borderRadius: 80,
        height: 70,
        color: "white",
        marginTop: "5%",
        marginBottom: "5%",
        marginHorizontal: "10%",
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