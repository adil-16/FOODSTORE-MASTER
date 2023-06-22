// import React, {useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import {
//     Alert,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     TextInput,
//     View,
//     FlatList,
//     Image,
//     Pressable,
//     SafeAreaView,
//     ActivityIndicator,
//     Touchable,
//     ScrollView,
    
//   } from 'react-native';
//   import Modal from 'react-native-modal';
//   import { Portal, Button, Provider, Badge} from 'react-native-paper';
//   import {useNavigation, useIsFocused} from '@react-navigation/native';
  
//   export default function Dishes({navigation, route, data, onPressItem}) {
//     const {item} = route.params;
//     const itemValue = item;
  
//     console.log({itemValue});
  
//     const handleNavigation = screenname => {
//       console.log(screenname);
//       navigation.navigate(screenname);
//     };
  
//     const isFocused = useIsFocused();
//     const [pressCount, setPressCount] = useState(0);
//     const [isModalVisible, setIsModalVisible] = useState(false);
  
//     useEffect(() => {
//       if (!isFocused) {
//         // Reset pressCount when screen is not focused
//         setPressCount(0);
//       }
//     }, [isFocused]);
  
//     const handlePress = () => {
//       setPressCount(prevCount => prevCount + 1);
  
//       if (pressCount === 2) {
//         // Call your function here
//         navigation.navigate('AdminCustomer');
//       }
//     };
//     const [cart, setCart] = useState([]);
//     const storeData = async (value) => {
//         try {
          
//           const obj = JSON.parse(value);
//           console.log(`strigify value: ${value}`)
//           await AsyncStorage.setItem('Cart', value);
//           console.log(`This is the data sent: ${value}`);
//         } catch (error) {
//           console.log('Error storing data: ', error);
//         }
//       };
//       const closeModal = () => {
//         setIsModalVisible(false); // Hide the custom modal
//       };
      
//       const handleAddToCart = async (item) => {
//         // Clear previous cart data from AsyncStorage
//         setIsModalVisible(true);
//         await AsyncStorage.removeItem('Cart');
//         console.log('Previous cart data removed from AsyncStorage!');
      
//         // Append the item to the cart array
//         const newCart = [...cart, item];
//         const cartToJson = JSON.stringify(newCart);
      
//         // Store the new cart array in AsyncStorage
//         storeData(cartToJson);
        
      
//         // Update the state with the new cart array
//         setCart(newCart);
//         console.log(`cart to json ${cartToJson}`);
//       };
  
//     const orders = [
//       // South Asian category
//       {
//         id: 1,
//         name: 'Butter Chicken',
//         price: 250,
//         source: require('./SouthAsian/Karahi.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 2,
//         name: 'Biryani',
//         price: 300,
//         source: require('./SouthAsian/Karahi.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 3,
//         name: 'Tandoori Chicken',
//         price: 200,
//         source: require('./SouthAsian/BeefCurry.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 4,
//         name: 'Naan Bread',
//         price: 150,
//         source: require('./SouthAsian/Naan.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 5,
//         name: 'Mutton Curry',
//         price: 280,
//         source: require('./SouthAsian/BeefCurry.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 6,
//         name: 'Palak Paneer',
//         price: 280,
//         source: require('./SouthAsian/Karahi.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 7,
//         name: 'Rogan Josh',
//         price: 270,
//         source: require('./SouthAsian/Naan.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 8,
//         name: 'Chicken Korma',
//         price: 260,
//         source: require('./SouthAsian/Tikka.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 9,
//         name: 'Chole Bhature',
//         price: 240,
//         source: require('./SouthAsian/Karahi.jpg'),
//         category: 'South Asian',
//       },
//       {
//         id: 10,
//         name: 'Gulab Jamun',
//         price: 200,
//         source: require('./SouthAsian/Roti.jpg'),
//         category: 'South Asian',
//       },
  
//       // Chinese category
//       {
//         id: 11,
//         name: 'Fried Rice',
//         price: 220,
//         source: require('./Chinese/dumplings.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 12,
//         name: 'Sweet and Sour Chicken',
//         price: 240,
//         source: require('./Chinese/Hot-and-Sour-Soup-3.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 13,
//         name: 'Spring Rolls',
//         price: 180,
//         source: require('./Chinese/Potato.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 14,
//         name: 'Hot and Sour Soup',
//         price: 150,
//         source: require('./Chinese/Hot-and-Sour-Soup-3.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 15,
//         name: 'Kung Pao Shrimp',
//         price: 280,
//         source: require('./Chinese/Spicy-Tofu-Stirfry.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 16,
//         name: "General Tso's Chicken",
//         price: 280,
//         source: require('./Chinese/dumplings.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 17,
//         name: 'Dim Sum',
//         price: 270,
//         source: require('./Chinese/Potato.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 18,
//         name: 'Beef and Broccoli',
//         price: 260,
//         source: require('./Chinese/Spicy-Tofu-Stirfry.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 19,
//         name: 'Mapo Tofu',
//         price: 240,
//         source: require('./Chinese/Kung-Pao-Chicken.jpg'),
//         category: 'Chinese',
//       },
//       {
//         id: 20,
//         name: 'Egg Drop Soup',
//         price: 200,
//         source: require('./Chinese/REDSNAPPER.jpg'),
//         category: 'Chinese',
//       },
  
//       // Thai category
//       {
//         id: 21,
//         name: 'Pad Thai',
//         price: 230,
//         source: require('./Thai/SpringRolls.jpg'),
//         category: 'Thai',
//       },
//       {
//         id: 22,
//         name: 'Green Curry',
//         price: 240,
//         source: require('./Thai/GreenBeefCurry.jpg'),
//         category: 'Thai',
//       },
//       {
//         id: 23,
//         name: 'Tom Yum Soup',
//         price: 190,
//         source: require('./Thai/SweetandSourFish.jpeg'),
//         category: 'Thai',
//       },
//       {
//         id: 24,
//         name: 'Massaman Curry',
//         price: 170,
//         source: require('./Thai/GreenBeefCurry.jpg'),
//         category: 'Thai',
//       },
//       {
//         id: 25,
//         name: 'Pineapple Fried Rice',
//         price: 260,
//         source: require('./Thai/PrawnNoodleStirFry.jpg'),
//         category: 'Thai',
//       },
//       {
//         id: 26,
//         name: 'Tom Kha Gai',
//         price: 260,
//         source: require('./Thai/SpringRolls.jpg'),
//         category: 'Thai',
//       },
//       {
//         id: 27,
//         name: 'Panang Curry',
//         price: 250,
//         source: require('./Thai/GreenBeefCurry.jpg'),
//         category: 'Thai',
//       },
//       {
//         id: 28,
//         name: 'Thai Fish Cakes',
//         price: 250,
//         source: require('./Thai/SweetandSourFish.jpeg'),
//         category: 'Thai',
//       },
//       {
//         id: 29,
//         name: 'Mango Sticky Rice',
//         price: 240,
//         source: require('./Thai/SpringRolls.jpg'),
//         category: 'Thai',
//       },
//       {
//         id: 30,
//         name: 'Red Curry',
//         price: 220,
//         source: require('./Thai/GreenBeefCurry.jpg'),
//         category: 'Thai',
//       },
  
//       // Japanese category
//       {
//         id: 31,
//         name: 'Sushi Roll',
//         price: 280,
//         source: require('./Japanese/Ramen1.jpg'),
//         category: 'Japanese',
//       },
//       {
//         id: 32,
//         name: 'Ramen',
//         price: 280,
//         source: require('./Japanese/Ramen2.jpg'),
//         category: 'Japanese',
//       },
//       {
//         id: 33,
//         name: 'Tempura',
//         price: 220,
//         source: require('./Japanese/Sushi.jpg'),
//         category: 'Japanese',
//       },
//       {
//         id: 34,
//         name: 'Sashimi',
//         price: 200,
//         source: require('./Japanese/Oyakodon.jpg'),
//         category: 'Japanese',
//       },
//       {
//         id: 35,
//         name: 'Miso Soup',
//         price: 240,
//         source: require('./Japanese/AssortedTempura.jpeg'),
//         category: 'Japanese',
//       },
//       {
//         id: 36,
//         name: 'Teriyaki Chicken',
//         price: 260,
//         source: require('./Japanese/Ramen1.jpg'),
//         category: 'Japanese',
//       },
//       {
//         id: 37,
//         name: 'Gyoza',
//         price: 270,
//         source: require('./Japanese/Ramen2.jpg'),
//         category: 'Japanese',
//       },
//       {
//         id: 38,
//         name: 'Udon Noodles',
//         price: 230,
//         source: require('./Japanese/Oyakodon.jpg'),
//         category: 'Japanese',
//       },
//       {
//         id: 39,
//         name: 'Tonkatsu',
//         price: 260,
//         source: require('./Japanese/Sushi.jpg'),
//         category: 'Japanese',
//       },
//       {
//         id: 40,
//         name: 'Matcha Ice Cream',
//         price: 200,
//         source: require('./Japanese/TeriyakiSalmon.jpg'),
//         category: 'Japanese',
//       },
  
//       //Sweet Dishes
//       // {
//       //   name: 'Gulab Jamun',
//       //   price: 100,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/GulabJamun.jpg'),
//       // },
//       // {
//       //   name: 'Rasgulla',
//       //   price: 120,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/Rasgulla.jpg'),
//       // },
//       // {
//       //   name: 'Jalebi',
//       //   price: 80,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/Jalebi.jpg'),
//       // },
//       // {
//       //   name: 'Kheer',
//       //   price: 150,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/Kheer.jpg'),
//       // },
//       // {
//       //   name: 'Gajar Halwa',
//       //   price: 180,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/GajarHalwa.jpg'),
//       // },
//       // {
//       //   name: 'Rasmalai',
//       //   price: 130,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/Rasmalai.jpg'),
//       // },
//       // {
//       //   name: 'Ladoo',
//       //   price: 90,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/Ladoo.jpg'),
//       // },
//       // {
//       //   name: 'Shahi Tukda',
//       //   price: 160,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/ShahiTukda.jpg'),
//       // },
//       // {
//       //   name: 'Rice Pudding',
//       //   price: 140,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/RicePudding.jpg'),
//       // },
//       // {
//       //   name: 'Gulab Jamun',
//       //   price: 100,
//       //   category: 'Sweet Dish',
//       //   source: require('./Categories/GulabJamun.jpg'),
//       // },
  
//       //Beverages
//       // {
//       //   name: 'Coca-Cola',
//       //   price: 50,
//       //   category: 'Beverages',
//       //   source: require('./Categories/CocaCola.jpg'),
//       // },
//       // {
//       //   name: 'Coffee',
//       //   price: 60,
//       //   category: 'Beverages',
//       //   source: require('./Categories/Coffee.jpg'),
//       // },
//       // {
//       //   name: 'Mango Shake',
//       //   price: 70,
//       //   category: 'Beverages',
//       //   source: require('./Categories/MangoShake.jpg'),
//       // },
//       // {
//       //   name: 'Orange Juice',
//       //   price: 40,
//       //   category: 'Beverages',
//       //   source: require('./Categories/OrangeJuice.jpg'),
//       // },
//       // {
//       //   name: 'Lemonade',
//       //   price: 55,
//       //   category: 'Beverages',
//       //   source: require('./Categories/Lemonade.jpg'),
//       // },
//       // {
//       //   name: 'Iced Tea',
//       //   price: 65,
//       //   category: 'Beverages',
//       //   source: require('./Categories/IcedTea.jpg'),
//       // },
//       // {
//       //   name: 'Mojito',
//       //   price: 75,
//       //   category: 'Beverages',
//       //   source: require('./Categories/Mojito.jpg'),
//       // },
//       // {
//       //   name: 'Strawberry Smoothie',
//       //   price: 80,
//       //   category: 'Beverages',
//       //   source: require('./Categories/StrawberrySmoothie.jpg'),
//       // },
//       // {
//       //   name: 'Pineapple Juice',
//       //   price: 45,
//       //   category: 'Beverages',
//       //   source: require('./Categories/PineappleJuice.jpg'),
//       // },
//       // {
//       //   name: 'Coca-Cola',
//       //   price: 50,
//       //   category: 'Beverages',
//       //   source: require('./Categories/CocaCola.jpg'),
//       // },
//     ];
  
//     return (
//       <SafeAreaView style={styles.main}>
//         <Text
//           style={{
//             fontFamily: 'cursive',
//             color: 'white',
//             fontSize: 50,
//             marginHorizontal: 50,
//             marginTop: 20,
//             alignSelf: 'center',
//           }}>
//           {item}
//         </Text>
//         <Text
//           style={{
//             fontFamily: 'cursive',
//             color: 'white',
//             fontSize: 30,
//             marginHorizontal: 50,
//             marginTop: 20,
//             alignSelf: 'center',
//           }}>
//           {' '}
//           Menu{' '}
//         </Text>
  
//         <FlatList
//   data={orders.filter(order => order.category === itemValue)}
//   keyExtractor={(order, index) => index.toString()}
//   renderItem={({item}) => (
//     <View style={styles.itemm}>
//       <Image style={styles.imgitem} source={item.source} />

//       <View
//         style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//         <View>
//           <Pressable>
//             <Text style={styles.txt}>{item.name}</Text>
//             <Text style={styles.txt}>Price: {item.price} Rupees</Text>
//           </Pressable>
//         </View>
//         <View>
//           <Pressable
//             onPress={() => handleAddToCart(item)}
//             style={{
//               backgroundColor: 'brown',
//               borderRadius: 50,
//               justifyContent: 'center',
//               paddingBottom: 6,
//               width: 130,
//               marginLeft: '6%',
//               marginTop: 6,
//             }}>
//             <Text
//               style={{
//                 alignSelf: 'center',
//                 color: 'white',
//                 fontSize: 20,
//                 fontFamily: 'cursive',
//                 fontWeight: 'bold',
//               }}>
//               Add to Cart
//             </Text>
//             <Modal isVisible={isModalVisible}>
//         <View style={modalStyles.modalContainer}>
//           <Text style={modalStyles.modalText}>Item added to the cart!</Text>
//           <TouchableOpacity style={modalStyles.modalButton} onPress={closeModal}>
//             <Text style={modalStyles.modalButtonText}>OK</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
            
//           </Pressable>

//         </View>
//       </View>
//     </View>
//   )}

//         />
  
//         <View style={styles.footer}>
//           <View style={styles.footerleft}>
//             <Pressable onPress={() => handleNavigation('Help')}>
//               <Image
//                 style={{marginTop: 11, width: 42, height: 42}}
//                 source={require('./Categories/support.png')}
//               />
//             </Pressable>
  
//             <Pressable
//               style={{marginLeft: 1}}
//               onPress={() => handleNavigation('Feedback')}>
//               <Image
//                 style={{
//                   marginTop: 10,
//                   width: 40,
//                   height: 40,
//                   marginLeft: 9,
//                   marginBottom: 2,
//                 }}
//                 source={require('./Categories/feedback.png')}
//               />
//             </Pressable>
//           </View>
  
//           <View style={styles.footerright}>
//             <Pressable onPress={handlePress}>
//               {
//                 <Image
//                   style={{
//                     marginRight: 5,
//                     marginTop: 1,
//                     width: 48,
//                     height: 48,
//                     borderRadius: 50,
//                   }}
//                   source={require('./logo.png')}
//                 />
//               }
//             </Pressable>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }


  
//   const styles = StyleSheet.create({
//     main: {
//       flex: 1,
//       // padding: 20,
//       backgroundColor: 'black',
//       justifyContent: 'center',
//       alignContent: 'center',
//     },
  
//     middle: {
//       justifyContent: 'center',
//       marginTop: 15,
//       marginHorizontal: '2%',
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//     },
//     // item: {
//     //   borderRadius: 15,
//     //   margin: 9,
//     //   width: 154,
//     //   height: 150,
//     //   backgroundColor: '#F76106',
//     //   borderWidth: 2,
//     //   borderColor: "#F76106",
  
//     // },
//     item: {
//       margin: 9,
//       width: 152,
//       height: 150,
//       paddingTop: 1,
//       backgroundColor: 'rgba(247, 97, 6, 0.7)', // Semi-transparent white background
//       borderRadius: 15,
//       shadowColor: '#000',
//       shadowOffset: {width: 0, height: 4},
//       shadowOpacity: 0.3,
//       shadowRadius: 6,
//       elevation: 8,
//     },
  
//     itemm: {
//       justifyContent: 'center',
//       alignContent: 'center',
//       margin: 9,
//       width: 345,
//       height: 199,
//       paddingTop: 2,
//       marginLeft: '6%',
//       backgroundColor: 'rgba(247, 97, 6, 0.9)', // Semi-transparent white background
//       borderRadius: 15,
//       shadowColor: '#000',
//       shadowOffset: {width: 0, height: 4},
//       shadowOpacity: 0.3,
//       shadowRadius: 6,
//       elevation: 8,
//       padding: '2%',
//       // flexDirection: "row",
//     },
  
//     imgitem: {
//       alignSelf: 'center',
//       justifyContent: 'center',
//       alignItems: 'center',
//       alignSelf: 'center',
//       width: 340,
//       height: 115,
//       borderRadius: 15,
//       // marginTop: "3%",
//     },
  
//     txt: {
//       alignSelf: 'center',
//       marginTop: 6,
//       color: 'white',
//       fontSize: 20,
//       fontFamily: 'cursive',
//       fontWeight: 'bold',
//     },
//     txtt: {
//       alignSelf: 'center',
//       marginTop: 6,
//       color: 'white',
//       marginLeft: '15%',
//       fontSize: 20,
//       fontFamily: 'cursive',
//       fontWeight: 'bold',
//     },
  
//     footer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginTop: 25,
//       backgroundColor: 'rgba(247, 97, 6, 0.7)',
//       width: 380,
//       height: 50,
//       borderRadius: 20,
//       marginLeft: 7,
//       marginBottom: '5%',
//     },
//     footerleft: {
//       width: 30,
//       flexDirection: 'row',
//       alignItems: 'flex-end',
//       // justifyContent:"flex-end",
//       direction: 'rtl',
//       paddingBottom: 5,
//       paddingLeft: 15,
//     },
  
//     footerright: {
//       marginBottom: 15,
//     },
  
//     img: {
//       margin: 8,
//       width: 50,
//       height: 50,
//       borderRadius: 50,
//       // paddingBottom:5,
//     },
  
//     pressable: {
//       justifyContent: 'center',
//       backgroundColor: '#F76106',
//       padding: 10,
//       borderRadius: 50,
//       height: 50,
//       color: 'white',
//       marginTop: 5,
//       marginHorizontal: 80,
//       marginBottom: 30,
//     },
  
//     sec: {
//       marginTop: 50,
//     },
  
//     txtfld: {
//       marginTop: 30,
//     },
  
//     input: {
//       backgroundColor: '#B9B2AD',
//       padding: 5,
//       borderRadius: 20,
//       height: 30,
//       color: 'white',
//       marginTop: 6,
//       marginHorizontal: 7,
//     },
// })
// const modalStyles = {
//   modalContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color:"black"
//   },
//   modalButton: {
//     backgroundColor: '#f76206',
//     padding: 10,
//     borderRadius: 8,
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// };
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  import Modal from 'react-native-modal';
  import { Portal, Button, Provider, Badge} from 'react-native-paper';
  import {useNavigation, useIsFocused} from '@react-navigation/native';
  import { firestore } from '@react-native-firebase/firestore';
  import {authentication} from '../../firebase/firebase-config';
import {db} from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDocs, collection, query,where,addDoc,updateDoc } from 'firebase/firestore';

  
  export default function Dishes({navigation, route, data, onPressItem}) {
    // console.log(`route params : ${route.params.item}`)
    // const {item} = route.params;
    // const itemValue = item;
    const { item } = route.params || {};
    const itemValue = item;

  
    console.log({itemValue});
  
    const handleNavigation = screenname => {
      console.log(screenname);
      navigation.navigate(screenname);
    };
  
    const isFocused = useIsFocused();
    const [pressCount, setPressCount] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
  
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
    const [cart, setCart] = useState([]);
    const storeData = async (value) => {
        try {
          
          const obj = JSON.parse(value);
          console.log(`strigify value: ${value}`)
          await AsyncStorage.setItem('Cart', value);
          console.log(`This is the data sent: ${value}`);
        } catch (error) {
          console.log('Error storing data: ', error);
        }
      };
      const closeModal = () => {
        setIsModalVisible(false); // Hide the custom modal
      };
      
      const handleAddToCart = async (item) => {
  try {
    const storedUserId = await AsyncStorage.getItem('userId');
    if (storedUserId) {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('userId', '==', storedUserId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const userCart = userData.cart;

        // Check if the item already exists in the cart
        const existingItem = userCart.find((cartItem) => cartItem.id === item.id);
        
        if (existingItem) {
          
          // If the item already exists, increase its quantity
          const updatedCart = userCart.map((cartItem) => {
            if (cartItem.id === item.id) {
              console.log(`cartItem: ${cartItem}`)
        console.log(`item: ${item}`)
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1, // Increase the quantity
              };
            }
            return cartItem;
          });

          // Update the cart field in Firestore
          await updateDoc(querySnapshot.docs[0].ref, { cart: updatedCart });

          console.log('Quantity increased for item in cart');
        } else {
          // If the item does not exist, add it to the cart
          const newItem = {
            
            ...item,
            quantity: 1, // Set initial quantity to 1
          };
          const updatedCart = [...userCart, newItem];

          // Update the cart field in Firestore
          await updateDoc(querySnapshot.docs[0].ref, { cart: updatedCart });

          console.log('Item added to cart successfully');
        }
      } else {
        console.log('User not found in Firestore');
      }
    } else {
      console.log('userId not found in AsyncStorage');
    }
  } catch (error) {
    console.log('Error adding item to cart:', error);
  }
};

      
  
    const orders = [
      // South Asian category
      {
        id: 1,
        name: 'Butter Chicken',
        price: 250,
        source: require('./SouthAsian/Karahi.jpg'),
        category: 'South Asian',
      },
      {
        id: 2,
        name: 'Biryani',
        price: 300,
        source: require('./SouthAsian/Karahi.jpg'),
        category: 'South Asian',
      },
      {
        id: 3,
        name: 'Tandoori Chicken',
        price: 200,
        source: require('./SouthAsian/BeefCurry.jpg'),
        category: 'South Asian',
      },
      {
        id: 4,
        name: 'Naan Bread',
        price: 150,
        source: require('./SouthAsian/Naan.jpg'),
        category: 'South Asian',
      },
      {
        id: 5,
        name: 'Mutton Curry',
        price: 280,
        source: require('./SouthAsian/BeefCurry.jpg'),
        category: 'South Asian',
      },
      {
        id: 6,
        name: 'Palak Paneer',
        price: 280,
        source: require('./SouthAsian/Karahi.jpg'),
        category: 'South Asian',
      },
      {
        id: 7,
        name: 'Rogan Josh',
        price: 270,
        source: require('./SouthAsian/Naan.jpg'),
        category: 'South Asian',
      },
      {
        id: 8,
        name: 'Chicken Korma',
        price: 260,
        source: require('./SouthAsian/Tikka.jpg'),
        category: 'South Asian',
      },
      {
        id: 9,
        name: 'Chole Bhature',
        price: 240,
        source: require('./SouthAsian/Karahi.jpg'),
        category: 'South Asian',
      },
      {
        id: 10,
        name: 'Gulab Jamun',
        price: 200,
        source: require('./SouthAsian/Roti.jpg'),
        category: 'South Asian',
      },
  
      // Chinese category
      {
        id: 11,
        name: 'Fried Rice',
        price: 220,
        source: require('./Chinese/dumplings.jpg'),
        category: 'Chinese',
      },
      {
        id: 12,
        name: 'Sweet and Sour Chicken',
        price: 240,
        source: require('./Chinese/Hot-and-Sour-Soup-3.jpg'),
        category: 'Chinese',
      },
      {
        id: 13,
        name: 'Spring Rolls',
        price: 180,
        source: require('./Chinese/Potato.jpg'),
        category: 'Chinese',
      },
      {
        id: 14,
        name: 'Hot and Sour Soup',
        price: 150,
        source: require('./Chinese/Hot-and-Sour-Soup-3.jpg'),
        category: 'Chinese',
      },
      {
        id: 15,
        name: 'Kung Pao Shrimp',
        price: 280,
        source: require('./Chinese/Spicy-Tofu-Stirfry.jpg'),
        category: 'Chinese',
      },
      {
        id: 16,
        name: "General Tso's Chicken",
        price: 280,
        source: require('./Chinese/dumplings.jpg'),
        category: 'Chinese',
      },
      {
        id: 17,
        name: 'Dim Sum',
        price: 270,
        source: require('./Chinese/Potato.jpg'),
        category: 'Chinese',
      },
      {
        id: 18,
        name: 'Beef and Broccoli',
        price: 260,
        source: require('./Chinese/Spicy-Tofu-Stirfry.jpg'),
        category: 'Chinese',
      },
      {
        id: 19,
        name: 'Mapo Tofu',
        price: 240,
        source: require('./Chinese/Kung-Pao-Chicken.jpg'),
        category: 'Chinese',
      },
      {
        id: 20,
        name: 'Egg Drop Soup',
        price: 200,
        source: require('./Chinese/REDSNAPPER.jpg'),
        category: 'Chinese',
      },
  
      // Thai category
      {
        id: 21,
        name: 'Pad Thai',
        price: 230,
        source: require('./Thai/SpringRolls.jpg'),
        category: 'Thai',
      },
      {
        id: 22,
        name: 'Green Curry',
        price: 240,
        source: require('./Thai/GreenBeefCurry.jpg'),
        category: 'Thai',
      },
      {
        id: 23,
        name: 'Tom Yum Soup',
        price: 190,
        source: require('./Thai/SweetandSourFish.jpeg'),
        category: 'Thai',
      },
      {
        id: 24,
        name: 'Massaman Curry',
        price: 170,
        source: require('./Thai/GreenBeefCurry.jpg'),
        category: 'Thai',
      },
      {
        id: 25,
        name: 'Pineapple Fried Rice',
        price: 260,
        source: require('./Thai/PrawnNoodleStirFry.jpg'),
        category: 'Thai',
      },
      {
        id: 26,
        name: 'Tom Kha Gai',
        price: 260,
        source: require('./Thai/SpringRolls.jpg'),
        category: 'Thai',
      },
      {
        id: 27,
        name: 'Panang Curry',
        price: 250,
        source: require('./Thai/GreenBeefCurry.jpg'),
        category: 'Thai',
      },
      {
        id: 28,
        name: 'Thai Fish Cakes',
        price: 250,
        source: require('./Thai/SweetandSourFish.jpeg'),
        category: 'Thai',
      },
      {
        id: 29,
        name: 'Mango Sticky Rice',
        price: 240,
        source: require('./Thai/SpringRolls.jpg'),
        category: 'Thai',
      },
      {
        id: 30,
        name: 'Red Curry',
        price: 220,
        source: require('./Thai/GreenBeefCurry.jpg'),
        category: 'Thai',
      },
  
      // Japanese category
      {
        id: 31,
        name: 'Sushi Roll',
        price: 280,
        source: require('./Japanese/Ramen1.jpg'),
        category: 'Japanese',
      },
      {
        id: 32,
        name: 'Ramen',
        price: 280,
        source: require('./Japanese/Ramen2.jpg'),
        category: 'Japanese',
      },
      {
        id: 33,
        name: 'Tempura',
        price: 220,
        source: require('./Japanese/Sushi.jpg'),
        category: 'Japanese',
      },
      {
        id: 34,
        name: 'Sashimi',
        price: 200,
        source: require('./Japanese/Oyakodon.jpg'),
        category: 'Japanese',
      },
      {
        id: 35,
        name: 'Miso Soup',
        price: 240,
        source: require('./Japanese/AssortedTempura.jpeg'),
        category: 'Japanese',
      },
      {
        id: 36,
        name: 'Teriyaki Chicken',
        price: 260,
        source: require('./Japanese/Ramen1.jpg'),
        category: 'Japanese',
      },
      {
        id: 37,
        name: 'Gyoza',
        price: 270,
        source: require('./Japanese/Ramen2.jpg'),
        category: 'Japanese',
      },
      {
        id: 38,
        name: 'Udon Noodles',
        price: 230,
        source: require('./Japanese/Oyakodon.jpg'),
        category: 'Japanese',
      },
      {
        id: 39,
        name: 'Tonkatsu',
        price: 260,
        source: require('./Japanese/Sushi.jpg'),
        category: 'Japanese',
      },
      {
        id: 40,
        name: 'Matcha Ice Cream',
        price: 200,
        source: require('./Japanese/TeriyakiSalmon.jpg'),
        category: 'Japanese',
      },
  
      //Sweet Dishes
      // {
      //   name: 'Gulab Jamun',
      //   price: 100,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/GulabJamun.jpg'),
      // },
      // {
      //   name: 'Rasgulla',
      //   price: 120,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/Rasgulla.jpg'),
      // },
      // {
      //   name: 'Jalebi',
      //   price: 80,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/Jalebi.jpg'),
      // },
      // {
      //   name: 'Kheer',
      //   price: 150,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/Kheer.jpg'),
      // },
      // {
      //   name: 'Gajar Halwa',
      //   price: 180,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/GajarHalwa.jpg'),
      // },
      // {
      //   name: 'Rasmalai',
      //   price: 130,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/Rasmalai.jpg'),
      // },
      // {
      //   name: 'Ladoo',
      //   price: 90,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/Ladoo.jpg'),
      // },
      // {
      //   name: 'Shahi Tukda',
      //   price: 160,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/ShahiTukda.jpg'),
      // },
      // {
      //   name: 'Rice Pudding',
      //   price: 140,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/RicePudding.jpg'),
      // },
      // {
      //   name: 'Gulab Jamun',
      //   price: 100,
      //   category: 'Sweet Dish',
      //   source: require('./Categories/GulabJamun.jpg'),
      // },
  
      //Beverages
      // {
      //   name: 'Coca-Cola',
      //   price: 50,
      //   category: 'Beverages',
      //   source: require('./Categories/CocaCola.jpg'),
      // },
      // {
      //   name: 'Coffee',
      //   price: 60,
      //   category: 'Beverages',
      //   source: require('./Categories/Coffee.jpg'),
      // },
      // {
      //   name: 'Mango Shake',
      //   price: 70,
      //   category: 'Beverages',
      //   source: require('./Categories/MangoShake.jpg'),
      // },
      // {
      //   name: 'Orange Juice',
      //   price: 40,
      //   category: 'Beverages',
      //   source: require('./Categories/OrangeJuice.jpg'),
      // },
      // {
      //   name: 'Lemonade',
      //   price: 55,
      //   category: 'Beverages',
      //   source: require('./Categories/Lemonade.jpg'),
      // },
      // {
      //   name: 'Iced Tea',
      //   price: 65,
      //   category: 'Beverages',
      //   source: require('./Categories/IcedTea.jpg'),
      // },
      // {
      //   name: 'Mojito',
      //   price: 75,
      //   category: 'Beverages',
      //   source: require('./Categories/Mojito.jpg'),
      // },
      // {
      //   name: 'Strawberry Smoothie',
      //   price: 80,
      //   category: 'Beverages',
      //   source: require('./Categories/StrawberrySmoothie.jpg'),
      // },
      // {
      //   name: 'Pineapple Juice',
      //   price: 45,
      //   category: 'Beverages',
      //   source: require('./Categories/PineappleJuice.jpg'),
      // },
      // {
      //   name: 'Coca-Cola',
      //   price: 50,
      //   category: 'Beverages',
      //   source: require('./Categories/CocaCola.jpg'),
      // },
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
          }}>
          {item}
        </Text>
        <Text
          style={{
            fontFamily: 'cursive',
            color: 'white',
            fontSize: 30,
            marginHorizontal: 50,
            marginTop: 20,
            alignSelf: 'center',
          }}>
          {' '}
          Menu{' '}
        </Text>
  
        <FlatList
  data={orders.filter(order => order.category === itemValue)}
  keyExtractor={(order, index) => index.toString()}
  renderItem={({item}) => (
    <View style={styles.itemm}>
      <Image style={styles.imgitem} source={item.source} />

      <View
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Pressable>
            <Text style={styles.txt}>{item.name}</Text>
            <Text style={styles.txt}>Price: {item.price} Rupees</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => handleAddToCart(item)}
            style={{
              backgroundColor: 'brown',
              borderRadius: 50,
              justifyContent: 'center',
              paddingBottom: 6,
              width: 130,
              marginLeft: '6%',
              marginTop: 6,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: 20,
                fontFamily: 'cursive',
                fontWeight: 'bold',
              }}>
              Add to Cart
            </Text>
            <Modal isVisible={isModalVisible}>
        <View style={modalStyles.modalContainer}>
          <Text style={modalStyles.modalText}>Item added to the cart!</Text>
          <TouchableOpacity style={modalStyles.modalButton} onPress={closeModal}>
            <Text style={modalStyles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
            
          </Pressable>

        </View>
      </View>
    </View>
  )}

        />
  
        <View style={styles.footer}>
          <View style={styles.footerleft}>
            <Pressable onPress={() => handleNavigation('Help')}>
              <Image
                style={{marginTop: 11, width: 42, height: 42}}
                source={require('./Categories/support.png')}
              />
            </Pressable>
  
            <Pressable
              style={{marginLeft: 1}}
              onPress={() => handleNavigation('Feedback')}>
              <Image
                style={{
                  marginTop: 10,
                  width: 40,
                  height: 40,
                  marginLeft: 9,
                  marginBottom: 2,
                }}
                source={require('./Categories/feedback.png')}
              />
            </Pressable>
          </View>
  
          <View style={styles.footerright}>
            <Pressable onPress={handlePress}>
              {
                <Image
                  style={{
                    marginRight: 5,
                    marginTop: 1,
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                  }}
                  source={require('./logo.png')}
                />
              }
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }


  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      // padding: 20,
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
      width: 152,
      height: 150,
      paddingTop: 1,
      backgroundColor: 'rgba(247, 97, 6, 0.7)', // Semi-transparent white background
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
    },
  
    itemm: {
      justifyContent: 'center',
      alignContent: 'center',
      margin: 9,
      width: 345,
      height: 199,
      paddingTop: 2,
      marginLeft: '6%',
      backgroundColor: 'rgba(247, 97, 6, 0.9)', // Semi-transparent white background
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
      padding: '2%',
      // flexDirection: "row",
    },
  
    imgitem: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: 340,
      height: 115,
      borderRadius: 15,
      // marginTop: "3%",
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
      // justifyContent:"flex-end",
      direction: 'rtl',
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
      justifyContent: 'center',
      backgroundColor: '#F76106',
      padding: 10,
      borderRadius: 50,
      height: 50,
      color: 'white',
      marginTop: 5,
      marginHorizontal: 80,
      marginBottom: 30,
    },
  
    sec: {
      marginTop: 50,
    },
  
    txtfld: {
      marginTop: 30,
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
})
const modalStyles = {
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"black"
  },
  modalButton: {
    backgroundColor: '#f76206',
    padding: 10,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
};
