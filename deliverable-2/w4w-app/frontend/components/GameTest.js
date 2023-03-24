import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GetTypeAPI from '../apis/GetTypeAPI';




export default function GameTest({ route, navigation }) {
    const { result } = route.params;
    return (
        <View style={styles.background}>
            <Text style={styles.textCaption}>Test Results</Text>
            <Text style={styles.subtext}>Your filter resulted in {result} water.</Text>

            <View style={styles.skipContainer}>
            <Pressable style={styles.button2} numberOfLines={1} onPress={async () => {
                let user = await AsyncStorage.getItem("user")
                if (user == null){
                    navigation.navigate("Tynl") 
                }  else {
                    let parsed = await JSON.parse(user);  
                    var email = parsed.email;
                    var type = await GetTypeAPI(email);
                        if (type == null){
                        navigation.navigate("Thank you");
                        }
                    else {navigation.navigate("Post questionnaire 1")}}
             }}>
                <Text style={styles.textButton}>
                    Continue
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Retry game
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
      </View>
      
      <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1E1E1E',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 8,
        height: Dimensions.get('window').height/7,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    icon: {
        marginTop: Dimensions.get('window').height / 10,
        flex: 1
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 36,
        textAlign: 'center',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height/2,
    },
    skipContainer: {
        flex: 1,
        marginTop: -Dimensions.get('window').height/3,
      },
      button2: {
        width:  Dimensions.get('window').width / 1.5,
        marginTop: Dimensions.get('window').height/10,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
      },
      arrow:{
        flex: 1,
        marginTop: 2
      },
      textButton:{
        color: '#03DAC5',
        textAlign:'center',
        fontSize:14,
        fontWeight: 'bold',
        flex: 5
      },
});