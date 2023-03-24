import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function StudentHR ({ navigation }) {
    return (
        <View style={styles.background}>
            <Text> Homeroom room </Text>
            <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
        <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 750, width: 100, height:50, alignSelf: 'center'}}/>
        </View>
    );
}


const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    background: {
      backgroundColor: '#1E1E1E',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },

});