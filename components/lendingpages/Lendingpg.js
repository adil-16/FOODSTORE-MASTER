import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable, ScrollView, ImageBackground } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CustomerSignin from './CustomerSignin';



export default function Lendingpg({navigation}) {



    const handleNavigation=(screenname)=>{
        console.log(screenname);
        navigation.navigate(screenname);
    }
    
    


    return (

        <ImageBackground style={styles.img} source={require('./spice_indian.png')} >
            <View style={styles.sec}>


                <Pressable onPress={()=>handleNavigation("CustomerSignup")}
                    style={
                        styles.pressable}>

                    <Text style={{fontSize:20,fontWeight:"bold",color:"white", fontFamily: 'cursive',
    fontWeight:"bold"}}   > START USING TARRAGON</Text>
                </Pressable>
                    <Text style={styles.txt} >ALREADY HAVE AN ACCOUNT ?</Text>
                    <Text style={[styles.txt,{marginBottom:40,fontWeight:"bold",color:"#F76106"}]} onPress={()=>handleNavigation("CustomerSignin")} >LOG IN HERE</Text>

            </View>
        </ImageBackground>

    );

}


const styles = StyleSheet.create({

    main: {

        flex: 2,
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
        width: "100%",
        height: "100%",
    },

    pressable: {
        justifyContent: "center",
        backgroundColor: '#F76106',
        padding: 10,
        borderRadius: 20,
        height: 50,
        color: "white",
        marginTop: 5,
        marginHorizontal: 30,
        marginBottom: 30,
        alignItems:"center",
        
        
    },

    sec: {
        flex:1,
        justifyContent:"flex-end",
    },

    txtfld: {
        marginTop: 30
    },


    input: {

        backgroundColor: '#B9B2AD',
        padding: 10,
        borderRadius: 20,
        height: 50,
        color: "white",
        marginTop: 20,
        marginHorizontal: 25,
    },



});
