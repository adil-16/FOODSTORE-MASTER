import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable, ScrollView } from 'react-native';
import { Modal, Portal, Button, Provider, Badge } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';




export default function Dishes({ navigation, route }) {


    const { item } = route.params;
    const itemValue = item;

    console.log({ itemValue });


    const handleNavigation = (screenname) => {
        console.log(screenname);
        navigation.navigate(screenname);
    }



    const isFocused = useIsFocused();
    const [pressCount, setPressCount] = useState(0);

    useEffect(() => {
        if (!isFocused) {
            // Reset pressCount when screen is not focused
            setPressCount(0);
        }
    }, [isFocused]);

    const handlePress = () => {
        setPressCount(prevCount => prevCount + 1);

        if (pressCount === 2) {
            // Call your function here
            navigation.navigate('AdminCustomer');

        }
    };







    const orders = [
        // South Asian category
        { name: 'Butter Chicken', price: 250, source: './SouthAsian/karahi.jpg', category: 'South Asian' },
        { name: 'Biryani', price: 300, source: './Categories/Biryani.jpg', category: 'South Asian' },
        { name: 'Tandoori Chicken', price: 200, source: './Categories/TandooriChicken.jpg', category: 'South Asian' },
        { name: 'Naan Bread', price: 150, source: './Categories/NaanBread.jpg', category: 'South Asian' },
        { name: 'Mutton Curry', price: 280, source: './Categories/MuttonCurry.jpg', category: 'South Asian' },
        { name: 'Palak Paneer', price: 280, source: './Categories/PalakPaneer.jpg', category: 'South Asian' },
        { name: 'Rogan Josh', price: 270, source: './Categories/RoganJosh.jpg', category: 'South Asian' },
        { name: 'Chicken Korma', price: 260, source: './Categories/ChickenKorma.jpg', category: 'South Asian' },
        { name: 'Chole Bhature', price: 240, source: './Categories/CholeBhature.jpg', category: 'South Asian' },
        { name: 'Gulab Jamun', price: 200, source: './Categories/GulabJamun.jpg', category: 'South Asian' },

        // Chinese category
        { name: 'Fried Rice', price: 220, source: './Categories/FriedRice.jpg', category: 'Chinese' },
        { name: 'Sweet and Sour Chicken', price: 240, source: './Categories/SweetSourChicken.jpg', category: 'Chinese' },
        { name: 'Spring Rolls', price: 180, source: './Categories/SpringRolls.jpg', category: 'Chinese' },
        { name: 'Hot and Sour Soup', price: 150, source: './Categories/HotSourSoup.jpg', category: 'Chinese' },
        { name: 'Kung Pao Shrimp', price: 280, source: './Categories/KungPaoShrimp.jpg', category: 'Chinese' },
        { name: 'General Tso\'s Chicken', price: 280, source: './Categories/GeneralTsosChicken.jpg', category: 'Chinese' },
        { name: 'Dim Sum', price: 270, source: './Categories/DimSum.jpg', category: 'Chinese' },
        { name: 'Beef and Broccoli', price: 260, source: './Categories/BeefBroccoli.jpg', category: 'Chinese' },
        { name: 'Mapo Tofu', price: 240, source: './Categories/MapoTofu.jpg', category: 'Chinese' },
        { name: 'Egg Drop Soup', price: 200, source: './Categories/EggDropSoup.jpg', category: 'Chinese' },

        // Thai category
        { name: 'Pad Thai', price: 230, source: './Categories/PadThai.jpg', category: 'Thai' },
        { name: 'Green Curry', price: 240, source: './Categories/GreenCurry.jpg', category: 'Thai' },
        { name: 'Tom Yum Soup', price: 190, source: './Categories/TomYumSoup.jpg', category: 'Thai' },
        { name: 'Massaman Curry', price: 170, source: './Categories/MassamanCurry.jpg', category: 'Thai' },
        { name: 'Pineapple Fried Rice', price: 260, source: './Categories/PineappleFriedRice.jpg', category: 'Thai' },
        { name: 'Tom Kha Gai', price: 260, source: './Thai/SpringRolls.jpg.jpg', category: 'Thai' },
        { name: 'Panang Curry', price: 250, source: './Categories/PanangCurry.jpg', category: 'Thai' },
        { name: 'Thai Fish Cakes', price: 250, source: './Categories/ThaiFishCakes.jpg', category: 'Thai' },
        { name: 'Mango Sticky Rice', price: 240, source: './Categories/MangoStickyRice.jpg', category: 'Thai' },
        { name: 'Red Curry', price: 220, source: './Categories/RedCurry.jpg', category: 'Thai' },

        // Japanese category
        { name: 'Sushi Roll', price: 280, source: './Categories/SushiRoll.jpg', category: 'Japanese' },
        { name: 'Ramen', price: 280, source: './Categories/Ramen.jpg', category: 'Japanese' },
        { name: 'Tempura', price: 220, source: './Categories/Tempura.jpg', category: 'Japanese' },
        { name: 'Sashimi', price: 200, source: './Categories/Sashimi.jpg', category: 'Japanese' },
        { name: 'Miso Soup', price: 240, source: './Categories/MisoSoup.jpg', category: 'Japanese' },
        { name: 'Teriyaki Chicken', price: 260, source: './Categories/TeriyakiChicken.jpg', category: 'Japanese' },
        { name: 'Gyoza', price: 270, source: './Categories/Gyoza.jpg', category: 'Japanese' },
        { name: 'Udon Noodles', price: 230, source: './Categories/UdonNoodles.jpg', category: 'Japanese' },
        { name: 'Tonkatsu', price: 260, source: './Categories/Tonkatsu.jpg', category: 'Japanese' },
        { name: 'Matcha Ice Cream', price: 200, source: './Categories/MatchaIceCream.jpg', category: 'Japanese' },


        //Sweet Dishes
        { name: 'Gulab Jamun', price: 100, category: 'Sweet Dish', source: './Categories/GulabJamun.jpg' },
        { name: 'Rasgulla', price: 120, category: 'Sweet Dish', source: './Categories/Rasgulla.jpg' },
        { name: 'Jalebi', price: 80, category: 'Sweet Dish', source: './Categories/Jalebi.jpg' },
        { name: 'Kheer', price: 150, category: 'Sweet Dish', source: './Categories/Kheer.jpg' },
        { name: 'Gajar Halwa', price: 180, category: 'Sweet Dish', source: './Categories/GajarHalwa.jpg' },
        { name: 'Rasmalai', price: 130, category: 'Sweet Dish', source: './Categories/Rasmalai.jpg' },
        { name: 'Ladoo', price: 90, category: 'Sweet Dish', source: './Categories/Ladoo.jpg' },
        { name: 'Shahi Tukda', price: 160, category: 'Sweet Dish', source: './Categories/ShahiTukda.jpg' },
        { name: 'Rice Pudding', price: 140, category: 'Sweet Dish', source: './Categories/RicePudding.jpg' },
        { name: 'Gulab Jamun', price: 100, category: 'Sweet Dish', source: './Categories/GulabJamun.jpg' },


        //Beverages
        { name: 'Coca-Cola', price: 50, category: 'Beverages', source: './Categories/CocaCola.jpg' },
        { name: 'Coffee', price: 60, category: 'Beverages', source: './Categories/Coffee.jpg' },
        { name: 'Mango Shake', price: 70, category: 'Beverages', source: './Categories/MangoShake.jpg' },
        { name: 'Orange Juice', price: 40, category: 'Beverages', source: './Categories/OrangeJuice.jpg' },
        { name: 'Lemonade', price: 55, category: 'Beverages', source: './Categories/Lemonade.jpg' },
        { name: 'Iced Tea', price: 65, category: 'Beverages', source: './Categories/IcedTea.jpg' },
        { name: 'Mojito', price: 75, category: 'Beverages', source: './Categories/Mojito.jpg' },
        { name: 'Strawberry Smoothie', price: 80, category: 'Beverages', source: './Categories/StrawberrySmoothie.jpg' },
        { name: 'Pineapple Juice', price: 45, category: 'Beverages', source: './Categories/PineappleJuice.jpg' },
        { name: 'Coca-Cola', price: 50, category: 'Beverages', source: './Categories/CocaCola.jpg' },


    ];







    return (

        <View style={styles.main}>
            <ScrollView>

                <View style={styles.upper}>
                </View>

                <Text style={{
                    fontFamily: "cursive", color: "white", fontSize: 50, marginHorizontal: 50,
                    marginTop: 20, alignSelf: "center"
                }}>{item}</Text>
                <Text style={{
                    fontFamily: "cursive", color: "white", fontSize: 30, marginHorizontal: 50,
                    marginTop: 20, alignSelf: "center"
                }}> Menu </Text>


                <View style={styles.middle}>


                    <ScrollView style={styles.main}>
                        <View style={styles.upper}>
                            {/* <Image style={styles.img} source={require('./logo.png')} /> */}
                        </View>
                        {/* <Text style={[styles.txt]}>{propKey}</Text> */}

                        <View style={styles.middle}>


                            {orders
                                .filter(order => order.category == itemValue)
                                .map((order, index) => (
                                    <View style={styles.itemm}>

                                        <Pressable key={index} >
                                            <Image style={styles.imgitem} source={require(order.source)} />

                                            <Text style={styles.txt}>{order.name}</Text>
                                            <Text style={styles.txt}>Price: {order.price} Rupees</Text>

                                        </Pressable>

                                        <Pressable style={{ marginTop: 5, backgroundColor: 'rgba(247, 97, 6, 0.7)', borderRadius: 50, justifyContent: "center", paddingBottom: 6, width: 130, marginLeft: "6%" }}>
                                            <Text style={styles.txt}>Add to Cart </Text>
                                        </Pressable>
                                    </View>
                                ))}

                        </View>

                    </ScrollView>


                </View>

                <View style={styles.footer}>


                    <View style={styles.footerleft}>

                        <Pressable onPress={() => handleNavigation("Help")}>

                            <Image style={{ marginTop: 11, width: 42, height: 42, }} source={require("./Categories/support.png")}
                            />
                        </Pressable>

                        <Pressable style={{ marginLeft: 1 }} onPress={() => handleNavigation("Feedback")} >
                            <Image style={{ marginTop: 10, width: 40, height: 40, marginLeft: 9, marginBottom: 2, }} source={require("./Categories/feedback.png")}
                            />

                        </Pressable>

                    </View>

                    <View style={styles.footerright}>
                        <Pressable onPress={handlePress}>
                            {<Image style={{
                                marginRight: 5,
                                marginTop:1,
                                width: 48,
                                height: 48,
                                borderRadius: 50,
                            }} source={require('./logo.png')} />}
                        </Pressable>

                    </View>
                    
                </View>
            </ScrollView>
        </View>




    );

}


const styles = StyleSheet.create({

    main: {

        flex: 1,
        // padding: 20,
        backgroundColor: "black",
    },




    middle: {
        justifyContent: "center",
        marginTop: 15,
        marginHorizontal: "2%",
        flexDirection: "row",
        flexWrap: "wrap"

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
        justifyContent: "center",
        // alignContent:"center",
        margin: 9,
        width: 145,
        height: 180,
        paddingTop: 2,
        backgroundColor: 'rgba(247, 97, 6, 0.7)', // Semi-transparent white background
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        paddingBottom: "4%",
    },

    imgitem: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 115,
        borderRadius: 15,
    },

    txt: {
        alignSelf: "center",
        marginTop: 9,
        color: "white",
        fontSize: 20,
        fontFamily: 'cursive',
        fontWeight: "bold"
    },

    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
        backgroundColor: 'rgba(247, 97, 6, 0.7)',
        width: 380,
        height: 50,
        borderRadius: 20,
        marginLeft: 7,
        marginBottom:"5%",

    },
    footerleft: {

        width: 30,
        flexDirection: "row",
        alignItems: "flex-end",
        // justifyContent:"flex-end",
        direction: "rtl",
        paddingBottom: 5,
        paddingLeft: 15,
    },

    footerright: {
        marginBottom: 15,

    },



    img: {
        margin: 8,
        width: 50,
        height: 50,
        borderRadius: 50,
        // paddingBottom:5,
    },

    pressable: {
        justifyContent: "center",
        backgroundColor: '#F76106',
        padding: 10,
        borderRadius: 50,
        height: 50,
        color: "white",
        marginTop: 5,
        marginHorizontal: 80,
        marginBottom: 30,
    },

    sec: {
        marginTop: 50,
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
