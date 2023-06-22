import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View,  Image, Pressable, TouchableOpacity, ActivityIndicator, Touchable } from 'react-native';
import { Button, List, Modal, RadioButton, TextInput } from 'react-native-paper';



export default function AdminAddDish({ navigation }) {

    const handleNavigation = (screenname) => {
        console.log(screenname);
        navigation.navigate(screenname);
    };




    const [name, setname] = useState('');

    const handlenameChange = (text) => {
        setname(text);
    };


    const [price, setprice] = useState('');

    const handlepriceChange = (text) => {
        setprice(text);
    };

    const [selectedValue, setSelectedValue] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  
    const dropdownOptions = [
      { label: 'Chinese', value: 'Chinese' },
      { label: 'Japanese', value: 'Japanese' },
      { label: 'Thai', value: 'Thai' },
      { label: 'South Asian', value: 'South_Asian' },
      { label: 'Beverages', value: 'Beverages' },
      { label: 'Drinks', value: 'Drinks' },
    ];
  
    const handleValueChange = (itemValue) => {
      setSelectedValue(itemValue);
      setIsDropdownVisible(false);
    };



    return (
        <View style={styles.main}>
            <View style={styles.upper}>
                <Image style={styles.img} source={require('./logo.png')} />
                <Text style={styles.txt}> Add New Dish</Text>
            </View>

            <View style={styles.sec}>


            <List.Accordion
          style={styles.lst}
          title={selectedValue ? selectedValue : 'Select Category'}
          titleStyle={{color:"#F76106"}} // Set the color to black

          placeholderTextColor="#F76106"
          expanded={isDropdownVisible}
          onPress={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          {dropdownOptions.map((option) => (
            <List.Item
              key={option.value}
              title={option.label}
              titleStyle={{color:"#F76106"}} // Set the color to black

              color="#F76106"
              left={(props) => (
                <RadioButton.Android
                  {...props}
                  color="#F76106"
                  status={selectedValue === option.value ? 'checked' : 'unchecked'}
                />
              )}
              onPress={() => handleValueChange(option.value)}
            />
          ))}
        </List.Accordion>   

                

                <TextInput
                    style={styles.input}
                    placeholder="Enter Dish Name"
                    placeholderTextColor="#F76106"

                    value={name}
                    onChangeText={handlenameChange}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter Price"
                    placeholderTextColor="#F76106"

                    value={price}
                    onChangeText={handlepriceChange}
                />

                <Pressable style={styles.pressable}>
                    <Text style={styles.txt}>Add</Text>
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
        marginTop:9,
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
        // back"black",
    },

    sec: {
        marginTop: 50,
        backgroundColor:"black"
    },

    txtfld: {
        marginTop: 60
    },

    input: {

        backgroundColor: 'black',
        padding: 10,
        // borderRadius: 80,
        height: 50,
        color: "white",
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#F76106",
        // marginHorizontal: 25,
    },


    lst:{
        backgroundColor:"black",
        color:"white",
        height: 80,
        color: "white",
        // marginTop: 20,
        borderWidth: 2,
        borderColor: "#F76106",
        // marginHorizontal:20

    },




});