import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';




export default function OrderHistory({ navigation }) {

    const [count, setcount] = useState(0);

    const handleNavigation = (screenname) => {
        console.log(screenname);
        navigation.navigate(screenname);
    }

    

    const [isToggled, setIsToggled] = useState(false);

    const toggleVariable = () => {
        setIsToggled(!isToggled);
    };


    const dishes = [
        { name: 'Spaghetti Bolognese', price: 12.99 },
        { name: 'Chicken Curry', price: 9.99 },
        { name: 'Margherita Pizza', price: 8.49 },
        { name: 'Chicken Karahi', price: 8.49 },
        { name: 'Mango Shake', price: 12.49 },
        { name: 'Sprite', price: 11.49 },
        { name: 'Peproni Pizza', price: 8.49 }
    ];


    return (

        <ScrollView style={styles.main}>

            <View style={styles.upper}>

                <Text style={[styles.txt, { fontSize: 32, ali:"center" }]}>Order History</Text>
               

            </View>


            <View style={{ marginBottom: "5%",marginTop:8 }}>

                {dishes.map((dish, index) => (

                    <View key={index } style={{backgroundColor:'#252525', marginVertical:7,borderRadius:10}} >
                        <View style={[styles.pressable,{marginTop:5}]}>

                            <View style={{ width: "100%",flexDirection:"row",justifyContent:"space-between" }}>
                                <Text style={styles.txt}>{dish.name}</Text>
                                <Text style={[styles.txt, { color: "#F76106", marginTop: 10 }]}>RS: {dish.price}</Text>
                            </View>

                            
                        </View>

                       


                    </View>
                ))

                }
               


            </View>
           

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
        justifyContent: "center",
        marginBottom:50,
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
        height: 100,
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
