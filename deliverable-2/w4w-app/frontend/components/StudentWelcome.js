import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListRoomsAPI from '../apis/ListRoomsAPI';
import JoinRoomAPI from '../apis/JoinRoomAPI';

export default function StudentWelcome({ navigation }) {
  const [enteredHRCode, setEnteredHRCode] = useState('');
  const [hrList, setHRList] = useState(['cool']);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await ListRoomsAPI();
      setHRList(data)
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])

  function codeInputHandler(enteredText) {
    setEnteredHRCode(enteredText);
  };
  function clickJoinHandler() {
    setHRList(currentHRList => [
      ...currentHRList,
      {text: enteredHRCode, id: Math.random().toString() }, 
    ])
    setEnteredHRCode('');
  };

  return (
    <View style={styles.background}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
            Welcome Student! </Text>
      </View> 

      <View style={styles.listContainer}>
        <Text style={styles.listText}>Join a Homeroom</Text>
        
        <FlatList data={hrList} renderItem={(itemData) => {
          return (
            <View style={styles.codeItem}>
              <Pressable onPress={async() => {
                let user = await AsyncStorage.getItem('user');  
                let parsed = JSON.parse(user);  
                var email = parsed.email;
                var delta = await JoinRoomAPI(email, itemData["item"]["homeroom_id"]);
                if(delta === 0){
                  navigation.navigate("Pre questionnaire 1");
                } }}>
                <Text style={styles.codeText}>
                  homeroom: {itemData["item"]["homeroom_id"]}
                </Text>
                <Text style={styles.codeText}>
                  teacher: {itemData["item"]["teacher_id"]}
                </Text>
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(itemData, index) => 'key' + index} alwaysBounceVertical={false}/>
      </View>

      <View style={styles.skipContainer}>
        <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Pre questionnaire 1")}>
          <Text style={styles.textButton}>
            Skip to Pre-Questionnaire
          </Text>
          <View style={styles.arrow} >
            <Icon name='angle-right' color='#03DAC5' size={15}/>
          </View>
        </Pressable>
      </View>
      
      <StatusBar style="auto" />
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
  textContainer: {
    margin:14,
    width: '120%',
    height: '10%',
    borderWidth: 2,
    borderColor: '#22B7A8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252525',
  },
  inputContainer: {
    margin:14,
    padding: 1,
    flex: 1,
    width: 250,
    marginStart: "-20%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#22B7A8',
    borderRadius: 8,
    width: '103%',
    height: '100%',
    marginRight: 16,
    padding: 6,
    backgroundColor: '#AFEFEA',
    alignItems: 'center',
  },
  listContainer: {
    flex: 7,
  },
  listText:{
    fontSize:20,
    color:'#9ED9D4',
    paddingLeft: 5
  },
  codeItem: {
    margin: 6,
    padding: 6, 
    width: Dimensions.width,
    borderRadius: 5,
    backgroundColor: "#22B7A8",
  },
  codeText: {
    color: 'black',
  },
  welcomeText: {
    fontSize:28,
    color: '#9ED9D4',
    fontWeight: 'bold'
  },
  welcomeContainer: {
    flex: 1,
    paddingTop: '20%',
  },
  skipContainer: {
    flex: 2
  },
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'
  },
  button2: {
    width:  Dimensions.get('window').width / 2,
    flexDirection: 'row',
    padding: 12,
    // marginLeft: Dimensions.get('window').width / -26,
    // marginTop: Dimensions.get('window').height / -30,
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
