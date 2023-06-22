import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable, ScrollView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';




export default function Categories({ navigation }) {






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

  const handleNavigation = (screenname) => {
    console.log(screenname);
    navigation.navigate(screenname);
  };

  
  const handleDishPress = (item) => {
    console.log(item);
    navigation.navigate('Dishes', { item });
  };

  return (

    <View style={styles.main}>
      <ScrollView>



        <View style={styles.upper}>


          {/* <View style={styles.headerleft}>


            <Image style={styles.img} source={require('./logo.png')} />
            <Text style={{ color: "white", fontSize: 25, paddingTop: 20, fontFamily: 'cursive', fontWeight: "bold" }}>AJ</Text>
          </View>

          <View style={styles.headerright}>

            <Image style={{
              marginTop: 11,
              width: 47,
              height: 47,
            }} source={require("./Categories/cart.png")} />


          </View> */}

        </View>


        <Text style={{
          fontFamily: "cursive", color: "white", fontSize: 50, marginHorizontal: 100,
          marginTop: 20,
        }}>Categories</Text>


        <View style={styles.middle}>


          <Pressable style={styles.item} onPress={() => handleDishPress("South Asian")}>
            <Image style={styles.imgitem} source={require("./Categories/ButterChicken.jpg")} />
            <Text style={styles.txt}>South Asian</Text>
          </Pressable>
          <Pressable style={styles.item} onPress={() => handleDishPress( "Chinese")}>
            <Image style={styles.imgitem} source={require("./Categories/Dim.jpg")} />
            <Text style={styles.txt}>Chinese</Text>
          </Pressable>
          <Pressable style={styles.item} onPress={() => handleDishPress( "Thai")}>
            <Image style={styles.imgitem} source={require("./Categories/Noodles.png")} />
            <Text style={styles.txt}>Thai</Text>
          </Pressable>
          <Pressable style={styles.item} onPress={() => handleDishPress("Japanese")}>
            <Image style={styles.imgitem} source={require("./Categories/Sushi.jpg")} />
            <Text style={styles.txt}>Japnese</Text>
          </Pressable>
          <Pressable style={styles.item} onPress={() => handleDishPress("Beverages")}>
            <Image style={styles.imgitem} source={require("./Categories/Drinks.jpg")} />
            <Text style={styles.txt}>Beveragers</Text>
          </Pressable>
          <Pressable style={styles.item} onPress={() => handleDishPress( "Sweet Dish")}>
            <Image style={styles.imgitem} source={require("./Categories/Deserts.jpg")} />
            <Text style={styles.txt}>Sweet Treat</Text>
          </Pressable>


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
          {/* <View style={styles.footerleft}>


            <Image style={styles.img} source={require('./logo.png')} />
            <Text style={{ color: "white", fontSize: 20, paddingTop: 20 ,    fontFamily: 'cursive'}}>AJ</Text>
          </View>

          <View style={styles.footerright}>
            <Text>AJJJ</Text>
            <Image style={styles.img} source={require('./logo.png')} />

          </View> */}
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

  headerleft: {
    width: 100,
    flexDirection: "row",
    alignItems: "flex-start"
    // justifyContent:"flex-end",
    // direction:"ltr"
  },

  headerright: {
    width: 60,
    // flexDirection: "row",
    // direction: "rtl"

  },
  // upper: {
  //   backgroundColor: 'rgba(247, 97, 6, 0.7)',
  //   width: 390,
  //   height: 70,
  //   borderBottomEndRadius: 20,
  //   borderBottomLeftRadius: 20,
  //   color: "white",
  //   flexDirection: "row",
  //   justifyContent: "space-between",

  // },


  middle: {
    marginTop: 30,
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap"

  },
  // item: {
  //   borderRadius: 15,
  //   margin: 9,
  //   width: 154,
  //   height: 150,
  //   backgroundColor: '#F76106',
  //   borderWidth: 2,
  //   borderColor: "#F76106",

  // },
  item: {
    margin: 9,
    width: 154,
    height: 150,
    paddingTop: 2,
    backgroundColor: 'rgba(247, 97, 6, 0.9)', // Semi-transparent white background
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,

  },

  imgitem: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 110,
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
    width: "95%",
    height: 50,
    borderRadius: 20,
    marginLeft: 7,
    marginBottom:"5%",
    marginLeft:"3%"

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
    // width: 55,

    // direction: "rtl",
    // padding:-20
    marginBottom: 15,

  },
  // sec: {
  //   // flex: 2,
  //   backgroundColor: '#F76106',
  //   width: 390,
  //   height: 70,
  //   color: "white",
  //   flexDirection: "row",
  //   // justifyContent: "space-between",
  //   borderBottomEndRadius: 20,
  //   borderBottomLeftRadius: 20,

  // },


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

    backgroundColor: "black",
    padding: 10,
    borderRadius: 20,
    height: 50,
    color: "black",
    marginTop: 20,
    marginHorizontal: 25,
  },



});
