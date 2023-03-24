import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetTypeAPI from '../apis/GetTypeAPI';

export default function HomePage({ navigation }) {

  return (
    <View style={styles.background}>
      <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Welcome</Text>
      <Text numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>This app supports the purpose of Water for the World Workshop- to introduce the issues surrounding clean drinking water in different parts of the world.</Text>
      
      <Text  numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>If you have been asked by your teacher instructor/teacher/presenter to login, please continue with the login button</Text>
      <Pressable style={styles.button} onPress={async () => {
                    let user = await AsyncStorage.getItem("user");
                    if (user == null){
                        navigation.navigate("Sign in") ;
                    }  else {
                        navigation.navigate("Already logged")

        }}}>
        <Text style={styles.textButton}>
          Login
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Image source={require('../assets/tap-water.gif')}  style={{position: 0, margin:30, left: 0, top: 0, width: 250, height: 250, alignSelf: 'center'}}/>
      <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Pre questionnaire 1")}>
        <Text style={styles.textButton}>
          Skip to Pre-Questionnaire
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
      <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 850, width: 100, height:50, alignSelf: 'center'}}/>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/12,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
  },
  textUnder:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/30,
    textAlign:'center',
    fontSize:18,
    marginLeft: Dimensions.get('window').width/ 12,
    marginRight: Dimensions.get('window').width/ 12,
  },
  textButton:{
    color: '#03DAC5',
    textAlign:'center',
    fontSize:14,
    fontWeight: 'bold',
    flex: 5
  },
  button: {
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 15,
    marginLeft: Dimensions.get('window').width / 3,
    marginTop: Dimensions.get('window').height / 45,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  button2: {
    width:  Dimensions.get('window').width / 2,
    flexDirection: 'row',
    padding: 15,
    marginLeft: Dimensions.get('window').width / 4,
    marginTop: Dimensions.get('window').height / 45,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  }
});
