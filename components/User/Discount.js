import React, { useState, useEffect } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    ActivityIndicator,
    Touchable,
    ScrollView,
} from 'react-native';
import { Modal, Portal, Button, Provider, Badge } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function Dishes({ navigation }) {
    const handleNavigation = (screenname) => {
        console.log(screenname);
        navigation.navigate(screenname);
    };

    const handlePress = () => {
        setPressCount((prevCount) => prevCount + 1);

        if (pressCount === 2) {
            // Call your function here
            navigation.navigate('AdminCustomer');
        }
    };

    const orders = [
        // South Asian category
        {
            name: 'Tandoori Chicken',
            price: 200,
            source: require('./Categories/Chicken.jpg'),
            category: 'South Asian',
        },
        {
            name: 'Naan Bread',
            price: 150,
            source: require('./Categories/naam.jpg'),
            category: 'South Asian',
        },
        // ... Rest of the items in the South Asian category

        // Chinese category
        {
            name: 'Spring Rolls',
            price: 180,
            source: require('./Categories/roll.jpg'),
            category: 'Chinese',
        },
        {
            name: 'Hot and Sour Soup',
            price: 150,
            source: require('./Categories/soup.jpg'),
            category: 'Chinese',
        },
        // ... Rest of the items in the Chinese category

        // Thai category
        {
            name: 'Green Curry',
            price: 240,
            source: require('./Categories/curry.jpg'),
            category: 'Thai',
        },
        {
            name: 'Tom Yum Soup',
            price: 190,
            source: require('./Categories/tom.jpg'),
            category: 'Thai',
        },
        // ... Rest of the items in the Thai category

        // Japanese category
        {
            name: 'Ramen',
            price: 280,
            source: require('./Categories/ramen.jpg'),
            category: 'Japanese',
        },
        {
            name: 'Tempura',
            price: 220,
            source: require('./Categories/tempura.jpg'),
            category: 'Japanese',
        },
        // ... Rest of the items in the Japanese category

        // Sweet Dishes category
        {
            name: 'Rasgulla',
            price: 120,
            category: 'Sweet Dish',
            source: require('./Categories/rasgulla.jpg'),
        },
        {
            name: 'Jalebi',
            price: 80,
            category: 'Sweet Dish',
            source: require('./Categories/jalebi.jpg'),
        },
        // ... Rest of the items in the Sweet Dishes category

        // Beverages category
        {
            name: 'Coffee',
            price: 60,
            category: 'Beverages',
            source: require('./Categories/coffee.jpg'),
        },
        {
            name: 'Mango Shake',
            price: 70,
            category: 'Beverages',
            source: require('./Categories/shake.jpg'),
        },
        // ... Rest of the items in the Beverages category
    ];

    return (
        <SafeAreaView style={styles.main}>
            <Text
                style={{
                    fontFamily: 'cursive',
                    color: 'white',
                    fontSize: 50,
                    marginHorizontal: 50,
                    marginTop: 20,
                    alignSelf: 'center',
                }}
            >
                Limited Time Offer
            </Text>
            <Text
                style={{
                    fontFamily: 'cursive',
                    color: 'white',
                    fontSize: 30,
                    marginHorizontal: 50,
                    marginTop: 20,
                    alignSelf: 'center',
                }}
            >
                
            </Text>
            <FlatList
                data={orders}
                keyExtractor={(order, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemm}>
                        <Image style={styles.imgitem} source={item.source} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Pressable>
                                    <Text style={styles.txt}>{item.name}</Text>
                                    <Text style={styles.txt}>Price: {item.price} Rupees</Text>
                                </Pressable>
                            </View>
                            <View>
                                <Pressable
                                    style={{
                                        backgroundColor: 'black',
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        paddingBottom: 6,
                                        width: 130,
                                        marginLeft: '6%',
                                        marginTop: "11%",
                                    }}
                                >
                                    <Text
                                        style={{
                                            alignSelf: 'center',
                                            color: 'white',
                                            fontSize: 20,
                                            fontFamily: 'cursive',
                                            fontWeight: 'bold',
                                            marginTop: "5%",
                                        }}
                                    >
                                        Add to Cart
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                )}
            />


           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
    },
    middle: {
        justifyContent: 'center',
        marginTop: 15,
        marginHorizontal: '2%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        margin: 9,
        width: 152,
        height: 150,
        paddingTop: 1,
        backgroundColor: 'rgba(247, 97, 6, 0.7)', // Semi-transparent white background
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
    itemm: {
        justifyContent: 'center',
        alignContent: 'center',
        margin: 9,
        width: 345,
        height: 259,
        paddingTop: 2,
        marginLeft: '6%',
        backgroundColor: 'rgba(247, 97, 6, 0.9)', // Semi-transparent white background
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        padding: '2%',
    },
    imgitem: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 340,
        height: 185,
        borderRadius: 15,
    },
    txt: {
        alignSelf: 'center',
        marginTop: 6,
        color: 'white',
        fontSize: 20,
        fontFamily: 'cursive',
        fontWeight: 'bold',
    },
    txtt: {
        alignSelf: 'center',
        marginTop: 6,
        color: 'white',
        marginLeft: '15%',
        fontSize: 20,
        fontFamily: 'cursive',
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        backgroundColor: 'rgba(247, 97, 6, 0.7)',
        width: 380,
        height: 50,
        borderRadius: 20,
        marginLeft: 7,
        marginBottom: '5%',
    },
    footerleft: {
        width: 30,
        flexDirection: 'row',
        alignItems: 'flex-end',
        direction: 'rtl',
        paddingBottom: 5,
        paddingLeft: 15,
    },
    footerright: {
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#B9B2AD',
        padding: 5,
        borderRadius: 20,
        height: 30,
        color: 'white',
        marginTop: 6,
        marginHorizontal: 7,
    },
});
