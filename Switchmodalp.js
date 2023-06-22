import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View ,Switch } from 'react-native';
import { Modal, Portal, Button, Provider,TextInput } from 'react-native-paper';



export default function Switchmodalp() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [text,setText]=useState("");

return(


  <View style={{flex:1,backgroundColor:"black"}}>
    <Text>Good Morning</Text>
 <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

  </View>
);
  
  
}

