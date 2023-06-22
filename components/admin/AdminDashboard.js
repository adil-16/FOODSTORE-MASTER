import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {db} from '../../firebase/firebase-config';
import { collection, getDocs, query, where,serverTimestamp } from "firebase/firestore";
// import { startOfDay, endOfDay, Timestamp } from 'date-fns';





export default function AdminDashboard({ navigation }) {

    const [totalOrder, setTotalOrders] = useState(0);
    const [todayOrders, setTodayOrders] = useState([]);
    const [totalRevenues, setTotalRevenue] = useState(0);

    useEffect(() => {
        // console.log('useEffect called');
        fetchOrdersFromFirestore();
        fetchTodayOrders();
        calculateTotalRevenue();
      }, []);

  

    const handleNavigation = (screenname) => {
        console.log(screenname);
        navigation.navigate(screenname);
    }

    const fetchOrdersFromFirestore = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "orders"));
          const totalOrders = querySnapshot.size;
          console.log("Total orders:", totalOrders);
          setTotalOrders(totalOrders);
          console.log(totalOrder);
         
        } catch (error) {
          console.error("Error fetching orders: ", error);
        }
      };

      const fetchTodayOrders = async () => {
        try {
          const today = new Date();
          const startOfToday = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            0,
            0,
            0
          );
          const endOfToday = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            23,
            59,
            59
          );
      
          const ordersRef = collection(db, "orders");
          const todayOrdersQuery = query(
            ordersRef,
            where("orderDate", ">=", startOfToday),
            where("orderDate", "<=", endOfToday)
          );
      
          const querySnapshot = await getDocs(todayOrdersQuery);
          const todayOrders = querySnapshot.size;
          console.log("Today's orders:", todayOrders);
          setTodayOrders(todayOrders);
          
        } catch (error) {
          console.log("Error fetching today's orders:", error);
        }
      };

      const calculateTotalRevenue = async () => {
        try {
          const ordersRef = collection(db, "orders");
          const querySnapshot = await getDocs(ordersRef);
      
          let totalRevenue = 0;
          querySnapshot.forEach((doc) => {
            const order = doc.data();
            const orderPrice = order.orderPrice || 0;
            totalRevenue += orderPrice;
          });
      
          console.log("Total Revenue:", totalRevenue);
          setTotalRevenue(totalRevenue);
        } catch (error) {
          console.log("Error calculating total revenue:", error);
        }
      };

      


    return (

        <ScrollView style={styles.main}>

            <View style={styles.upper}>
                <Image style={styles.img} source={require('./logo.png')} />
         

            </View>


<View style={{marginBottom:"19%"}}>

            <Pressable 
                style={styles.pressable}>
                <Text style={styles.txt}>Total Orders</Text>
                <Text style={styles.txt}>{totalOrder}</Text>
            </Pressable>

            <Pressable 
                 style={styles.pressable}>
                <Text style={styles.txt}>Today's Orders</Text>
                <Text style={styles.txt}>{todayOrders}</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
                <Text style={styles.txt}>Total Revenue</Text>
                <Text style={styles.txt}>{totalRevenues}</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress= 
            {()=>handleNavigation("AdminOrders")}
            >
                <Text style={styles.txt}>View Orders</Text>

            </Pressable>
            <Pressable style={styles.pressable} onPress={()=>handleNavigation("AdminAddDish")}
            >
                <Text style={styles.txt}> Add Dish</Text>

            </Pressable>
</View>

        </ScrollView>


    );

}


const styles = StyleSheet.create({

    main: {

        flex: 1,
        padding: 20,
        paddingBottom:300,
        backgroundColor: "black",
    },
    upper: {
        paddingTop: 40,
        color: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // marginBottom:30,
    },
    txt: {
        color: "white",
        fontSize: 24,
        alignSelf: "center",
        fontFamily: 'cursive',
        fontWeight: "bold",
        // padding:"4%"
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
        marginTop: "10%",
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
