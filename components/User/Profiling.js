import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, ScrollView, View } from 'react-native';
import { TextInput, List, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Profiling({ navigation }) {
    const handleNavigation = (screenname) => {
        console.log(screenname);
        navigation.navigate(screenname);
    }

    const [Fname, setFname] = useState('Muhammad ');
    const [Lname, setLname] = useState('Aarij');
    const [email, setEmail] = useState('aarij@gmail.com');
    const [selectedValue, setSelectedValue] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [dob, setDob] = useState(new Date());

    const [isToggled, setIsToggled] = useState(false);

    const toggleVariable = () => {
        setIsToggled(!isToggled);
        console.log(isToggled);
    };

    const dropdownOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ];

    const handleValueChange = (value) => {
        setSelectedValue(value);
    }

    return (
        <ScrollView style={styles.main}>
            <View style={styles.upper}>
                <Text style={[styles.txt, { fontSize: 32 }]}>Account Details</Text>
                <Pressable style={{ backgroundColor: '#252525', borderRadius: 80, width: 120, }} onPress={toggleVariable}>
                    <Text style={[styles.txt, { color: "#F76106" }]}>{isToggled==false ?  "Edit":"Done"}</Text>
                </Pressable>
            </View>

            <View style={{ marginBottom: "5%", marginTop: 8 }}>
                <TextInput
                    outlineColor="#F76106"
                    activeUnderlineColor="#F76106"
                    style={styles.input}
                    label="First Name"
                    value={Fname}
                    onChangeText={text => setFname(text)}
                    editable={isToggled} // Set editable based on isToggled
                />

                <TextInput
                    outlineColor="#F76106"
                    activeUnderlineColor="#F76106"
                    style={styles.input}
                    label="Last Name"
                    value={Lname}
                    onChangeText={text => setLname(text)}
                    editable={isToggled} // Set editable based on isToggled
                />

                <TextInput
                    outlineColor="#F76106"
                    activeUnderlineColor="#F76106"
                    style={styles.input}
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    editable={isToggled} // Set editable based on isToggled
                />

                <Text style={[styles.txt, { justifyContent: "flex-end", marginVertical: 15 }]}>OPTIONAL</Text>

                
                    <List.Accordion
                        style={styles.lst}
                        title={selectedValue ? selectedValue : 'Select Category'}
                        titleStyle={{ color: "#F76106" }}
                        placeholderTextColor="#F76106"
                        expanded={isDropdownVisible}
                        onPress={() => setIsDropdownVisible(!isDropdownVisible)}
                    >
                        { isToggled && dropdownOptions.map((option) => (
                            <List.Item
                                key={option.value}
                                title={option.label}
                                titleStyle={isToggled ? { color: "#F76106" } : { color: "grey" }}
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
                
            </View>

            <Pressable style={styles.pressable}>
                <Text>Log Out</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingBottom: 300,
        backgroundColor: "black",
    },
    upper: {
        paddingTop: 40,
        color: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 50,
        paddingHorizontal: 18,
    },
    txt: {
        color: "white",
        fontSize: 24,
        alignSelf: "center",
        fontFamily: 'cursive',
        fontWeight: "bold",
    },
    input: {
        padding: 10,
        height: 50,
        color: "white",
        marginTop: 20,
        borderColor: "#F76106",
    },
    lst: {
        marginTop: 20,
        marginVertical: 10,
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
});
