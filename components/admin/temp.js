import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';




export default function temp({ navigation }) {

    const [count, setcount] = useState(0);

    const handleNavigation = (screenname) => {
        console.log(screenname);
        navigation.navigate(screenname);
    }

    const addd = () => {
        var i = count;
        setcount(++i);
        console.log(count);
    }
    const subb = () => {
        var i = count;
        setcount(--i);
        console.log(count);
    }
    const nnn = () => {

    }

    const dishes = [
        { name: 'Spaghetti Bolognese', price: 12.99 },
        { name: 'Chicken Curry', price: 9.99 },
        { name: 'Margherita Pizza', price: 8.49 }
    ];


    return (

        <ScrollView style={styles.main}>

            <View style={styles.upper}>

                <Text style={[styles.txt, { fontSize: 32 }]}>Order Details</Text>
                <Pressable style={{ backgroundColor: '#252525', borderRadius: 80, width: 120, }}>
                    <Text style={[styles.txt, { color: "#F76106" }]}>Edit</Text>
                </Pressable>

            </View>


            <View style={{ marginBottom: "5%" }}>

                {dishes.map((dish, index) => (
                    <View key={index} style={styles.pressable}>
                        <View style={{}}>
                            <Text style={styles.txt}>{dish.name}</Text>
                            <Text style={[styles.txt, { color: "#F76106", marginTop: 10 }]}>RS: {dish.price}</Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <Pressable style={{ justifyContent: "center", marginRight: 10 }} onPress={count == 0 ? nnn : subb}>
                                <Text style={[styles.txt, { color: "#F76106", height: 30, width: 30, backgroundColor: "black", justifyContent: "center", paddingLeft: 11 }]}>-</Text>
                            </Pressable>
                            <Text style={styles.txt}>{count}</Text>
                            <Pressable style={{ justifyContent: "center", marginLeft: 10 }} onPress={count == 9 ? nnn : addd}>
                                <Text style={[styles.txt, { color: "#F76106", height: 30, width: 30, backgroundColor: "black", justifyContent: "center", paddingLeft: 11 }]}>+</Text>
                            </Pressable>
                        </View>
                    </View>
                ))

                }
                <View style={[styles.pressablee, { height: 70, marginBottom: 2 }]}>
                    <Text style={styles.txt}>Sub-Total</Text>
                    <Text style={[styles.txt, { color: "#F76106" }]}>RS {2700}</Text>
                </View>
                <View style={[styles.pressablee, { height: 70 }]}>
                    <Text style={styles.txt}>Delivery Charges</Text>
                    <Text style={[styles.txt, { color: "#F76106" }]}>RS {300}</Text>
                </View>
                <View style={[styles.pressablee, { height: 70 }]}>
                    <Text style={styles.txt}>Total</Text>
                    <Text style={[styles.txt, { color: "#F76106" }]}>RS {3000}</Text>
                </View>


            </View>
                <Pressable style={{ backgroundColor: '#252525', borderRadius: 80, width: 320, height: 40 ,alignSelf:"center",marginBottom:"10%"}} onPress={()=>handleNavigation("Payment")}>
                    <Text style={[styles.txt, { color: "#F76106" }]}>Proceed to Payment</Text>
                </Pressable>

        </ScrollView>


    );

}


const styles = StyleSheet.create({

    main: {

        flex: 1,
        padding: 15,
        paddingBottom: 300,
        backgroundColor: "black",
        // justifyContent:"center"
    },
    upper: {
        paddingTop: 40,
        color: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: '#252525',
        borderRadius: 10,
        flexDirection: "row",
        height: 110,
        color: "white",
        marginTop: "10%",
        // marginHorizontal: "1%",
    },
    pressablee: {
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: '#252525',
        borderRadius: 10,
        flexDirection: "row",
        height: 110,
        color: "white",
        marginTop: "5%",
        // marginHorizontal: "1%",
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
