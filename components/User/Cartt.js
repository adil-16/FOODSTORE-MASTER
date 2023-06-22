import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable,FlatList } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db, firestore } from '../../firebase/firebase-config';
import { getDocs, collection, query,where,addDoc,updateDoc,setDoc} from 'firebase/firestore';
import { DocumentReference } from 'firebase/firestore';





export default function Cartt({ navigation }) {
  
    const [dishes, setDishes] = useState([]);
    const [counts, setCounts] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const deliveryCharges = 300;
    const getDataa = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) {
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('userId', '==', storedUserId));
          const querySnapshot = await getDocs(q);
    
          if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            const cart = userData.cart || [];
    
            // Update the component state with the new cart data
            setDishes(cart);
            setCounts(cart.map((item) => item.quantity || 0));
    
            console.log('Cart data:', cart);
          } else {
            console.log('User document does not exist');
          }
        } else {
          console.log('userId not found in AsyncStorage');
        }
      } catch (error) {
        console.log('Error retrieving cart data:', error);
      }
    };
    
    useEffect(() => {
      const getData = async () => {
        try {
          const storedUserId = await AsyncStorage.getItem('userId');
          if (storedUserId) {
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("userId", "==", storedUserId));
            const querySnapshot = await getDocs(q);
    
            if (!querySnapshot.empty) {
              const userData = querySnapshot.docs[0].data();
              const cart = userData.cart || [];
              console.log('Cart data:', cart);
              setDishes(cart);
              setCounts(cart.map((item) => item.quantity || 0));
            } else {
              console.log('User document does not exist');
            }
          } else {
            console.log('userId not found in AsyncStorage');
          }
        } catch (error) {
          console.log('Error retrieving cart data:', error);
        }
      }
    
      getData();
    }, []);
    

    const deleteCartItem = async (id) => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) {
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('userId', '==', storedUserId));
          const querySnapshot = await getDocs(q);
    
          if (!querySnapshot.empty) {
            const userDocRef = querySnapshot.docs[0].ref;
            const userData = querySnapshot.docs[0].data();
            const cart = userData.cart || [];
    
            // Filter out the item with the matching id
            const updatedCart = cart.filter((item) => item.id !== id);
    
            await updateDoc(userDocRef, { cart: updatedCart });
            console.log('Item deleted from cart successfully');
    
            // Update the dishes state with the updated cart data
            setDishes(updatedCart);
    
            // Update the counts state with the updated item quantities
            const updatedCounts = updatedCart.map((item) => item.quantity || 0);
            setCounts(updatedCounts);
          } else {
            console.log('User document does not exist');
          }
        } else {
          console.log('userId not found in AsyncStorage');
        }
      } catch (error) {
        console.log('Error deleting item from cart:', error);
      }
    };
    
    

    const updateCartItemQuantity = async (id, newQuantity,getData) => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) {
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('userId', '==', storedUserId));
          const querySnapshot = await getDocs(q);
    
          if (!querySnapshot.empty) {
            const userDocRef = querySnapshot.docs[0].ref;
            const userData = querySnapshot.docs[0].data();
            const cart = userData.cart || [];
    
            // Find the item in the cart with the matching id
            const updatedCart = cart.map((item) => {
              if (item.id === id) {
                // Update the quantity with newQuantity value
                return {
                  ...item,
                  quantity: newQuantity,
                };
              }
              return item;
            });
    
            await updateDoc(userDocRef, { cart: updatedCart });
            console.log('Item quantity updated in cart successfully');
    
            // Call getData to update the UI with the new cart data
            getDataa();
          } else {
            console.log('User document does not exist');
          }
        } else {
          console.log('userId not found in AsyncStorage');
        }
      } catch (error) {
        console.log('Error updating item quantity in cart:', error);
      }
    };
    
    
    
    
    
    
  
    useEffect(() => {
      const newSubTotal = dishes.reduce(
        (acc, dish, index) => acc + dish.price * counts[index],
        0
      );
      setSubTotal(newSubTotal);
      setTotal(newSubTotal + deliveryCharges);
    }, [dishes, counts]);
  
    const storeData = async (key, value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (error) {
        console.log(error);
      }
    };

    
  
  
  
    const handleNavigation = (screenName) => {
      navigation.navigate(screenName);
    };
    const nnn= ()=>{

    }
    const [isToggled, setIsToggled] = useState(false);

    const toggleVariable = () => {
        setIsToggled(!isToggled);
    };
    // Rest of the component code...
  
  
  
    return (
      
      <ScrollView style={styles.main}>
        <View style={styles.upper}>
          <Text style={[styles.txt, { fontSize: 32 }]}>Order Details</Text>
          <Pressable
            style={{ backgroundColor: '#252525', borderRadius: 80, width: 120 }}
            onPress={toggleVariable}
          >
            <Text style={[styles.txt, { color: '#F76106' }]}>Edit</Text>
          </Pressable>
        </View>
  
        <View style={{ marginBottom: '5%' }}>
          {dishes.map((dish, index) => (
            <View key={dish.id} style={styles.pressable}>
              <View style={{}}>
                <Text style={styles.txt}>{dish.name}</Text>
                <Text style={[styles.txt, { color: '#F76106', marginTop: 10 }]}>
                  RS: {dish.price}
                </Text>
                {/* <Button
  onPress={() => deleteCartItem(dish.itemId)}
  title={<Text>Delete</Text>}
/>
<Button
  onPress={() => updateCartItemQuantity(dish.itemId, dish.quantity + 1)}
  title={<Text>Increase Quantity</Text>}
/>
<Button
  onPress={() => updateCartItemQuantity(dish.itemId, dish.quantity - 1)}
  title={<Text>Decrease Quantity</Text>}
/> */}
              </View>
  
              <View style={{ flexDirection: 'row' }}>
                <Pressable
                  style={{ justifyContent: 'center', marginRight: 10 }}
                  onPress={()=>updateCartItemQuantity(dish.id, dish.quantity - 1)}
                >
                  <Text
                    style={[
                      styles.txt,
                      {
                        color: '#F76106',
                        height: 30,
                        width: 30,
                        backgroundColor: 'black',
                        justifyContent: 'center',
                        paddingLeft: 11,
                      },
                    ]}
                  >
                    -
                  </Text>
                </Pressable>
                <Text style={styles.txt}>{counts[index]}</Text>
                <Pressable
                  style={{ justifyContent: 'center', marginLeft: 10 }}
                  onPress={()=>updateCartItemQuantity(dish.id, dish.quantity + 1)}
                >
                  <Text
                    style={[
                      styles.txt,
                      {
                        color: '#F76106',
                        height: 30,
                        width: 30,
                        backgroundColor: 'black',
                        justifyContent: 'center',
                        paddingLeft: 11,
                      },
                    ]}
                  >
                    +
                  </Text>
                </Pressable>
              
                      </View>
                      <View>

                {isToggled && <View style={{marginBottom:5}}>
     <Text style={[styles.txt,{color:"#F76106" ,backgroundColor:"black",paddingHorizontal:60,paddingVertical:3,borderRadius:10}]} onPress={()=>del(index)}>Delete</Text>
 </View>} 
              </View>
            </View>
          ))}
  
          <View style={[styles.pressablee, { height: 70, marginBottom: 2 }]}>
            <Text style={styles.txt}>Sub-Total</Text>
            <Text style={[styles.txt, { color: '#F76106' }]}>RS {subTotal}</Text>
          </View>
          <View style={[styles.pressablee, { height: 70 }]}>
            <Text style={styles.txt}>Delivery Charges</Text>
            <Text style={[styles.txt, { color: '#F76106' }]}>RS {deliveryCharges}</Text>
          </View>
          <View style={[styles.pressablee, { height: 70 }]}>
            <Text style={styles.txt}>Total</Text>
            <Text style={[styles.txt, { color: '#F76106' }]}>RS {total}</Text>
          </View>
        </View>
  
        <Pressable
          style={{
            backgroundColor: '#252525',
            borderRadius: 80,
            width: 320,
            height: 40,
            alignSelf: 'center',
            marginBottom: '10%',
          }}
          onPress={() => handleNavigation('Payment')}
        >
          <Text style={[styles.txt, { color: '#F76106' }]}>Proceed to Payment</Text>
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
