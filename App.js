// In App.js in a new project

import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './components/lendingpages/Firstt';
import Second from './components/lendingpages/Second';
import Sec from './components/lendingpages/Sec';
import Thrd from './components/lendingpages/Thrd';
import Fourth from './components/lendingpages/Fourth';
import Lendingpg from './components/lendingpages/Lendingpg';
import CustomerSignin from './components/User/CustomerSignin';
import CustomerSignup from './components/User/CustomerSignup';
import Categorypg from './components/User/Categorypg';
import HelipSupport from './components/HelipSupport';
import Feedback from './components/Feedback';
import AdminCustomer from './components/admin/AdminCustomer';
import AdminSignin from './components/admin/AdminSignin';
import AdminDashboard from './components/admin/AdminDashboard'
import AdminOrders from './components/admin/AdminOrders';
import AdminOrderProcessing from './components/admin/AdminOrderProcessing';
import AdminAddDish from './components/admin/AdminAddDish';
import Dishes from './components/User/Dishes'
import Cartt from './components/User/Cartt';
import Payment from './components/User/Payment';
import Dashboard  from './components/User/Dashboard';
import Profiling  from './components/User/Profiling';
import OrderHistory  from './components/User/OrderHistory';
import Discount  from './components/User/Discount';
import { authentication } from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppRegistry } from 'react-native';
import { firebase } from '@react-native-firebase/app';

// firebase.initializeApp(firebaseConfig);




// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AJ" component={First} options={{ headerShown: false }} />
        <Stack.Screen name="AN" component={Second} options={{ headerShown: false }} />
        <Stack.Screen name="1" component={Sec} options={{ headerShown: false }} />
        <Stack.Screen name="2" component={Thrd} options={{ headerShown: false }} />
        <Stack.Screen name="3" component={Fourth} options={{ headerShown: false }} />
        <Stack.Screen name="4" component={Lendingpg} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />


        <Stack.Screen name="Profiling" component={Profiling} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />

        <Stack.Screen name="CustomerSignin" component={CustomerSignin} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />



        <Stack.Screen name="CustomerSignup" component={CustomerSignup} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="Payment" component={Payment} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="Cartt" component={Cartt} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="Discount" component={Discount} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="OrderHistory" component={OrderHistory} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        }  />

        <Stack.Screen
          name="Categorypg"
          component={Categorypg}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'black',
              opacity: 100,
              marginTop: 50,
            },
            headerTitleStyle: {
              color: 'black',
              alignSelf: 'center',
            },
            headerTitle: null,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 6 }}
              >
                <Image
                  source={require('./Categories/back.png')}
                  style={{ width: 32, height: 32, marginTop: 18 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Cartt')} // Navigate to "Cart" screen
                style={{ marginRight: 6 }}
              >
                <Image
                  source={require('./Categories/cart.png')}
                  style={{ width: 42, height: 42, marginTop: 18 }}
                />
              </TouchableOpacity>
            ),
          })}
        />


        <Stack.Screen
          name="Dishes"
          component={Dishes}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'black',
              opacity: 100,
              marginTop: 50,
            },
            headerTitleStyle: {

              color: "black",
              alignSelf: 'center', // Align the header title to the center
            },
            headerTitle: null, // Hide the title

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 6 }}
              >
                <Image
                  source={require("./Categories/back.png")}
                  style={{ width: 32, height: 32, marginTop: 18 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Cartt")}
                style={{ marginRight: 6 }}
              >
                <Image
                  source={require("./Categories/cart.png")}
                  style={{ width: 42, height: 42, marginTop: 18 }}
                />
              </TouchableOpacity>
            ),
          })}
        />







        <Stack.Screen name="Feedback" component={Feedback} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />



        <Stack.Screen name="Help" component={HelipSupport} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />


        <Stack.Screen name="AdminCustomer" component={AdminCustomer} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminSignin" component={AdminSignin} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminOrders" component={AdminOrders} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminOrderProcessing" component={AdminOrderProcessing} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminAddDish" component={AdminAddDish} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;