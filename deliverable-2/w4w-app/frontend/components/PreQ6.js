import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	Modal,
	SafeAreaView,
} from 'react-native';
import { Slider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PreQ6({ navigation }) {
	const [range, setRange] = useState('0');
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<SafeAreaView style={styles.background}>
			<Image source={require('../assets/EWB.png')} style={styles.ewblogo} />
			{/* <View style={styles.backinputview}> */}
			<Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}}
				onPress={async () => {
					navigation.navigate('Pre questionnaire 5');
				}}
			>
				<Icon name='arrow-left' color='#03DAC5' size={25} />
			</Pressable>
			{/* </View> */}
			<Text style={styles.textCaption}>Extreme Poverty</Text>
			<Text style={styles.subtext}>
				How many people in the world live on less than $2.50 a day?
			</Text>
			<Text style={styles.sliderText}>{range}</Text>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalContainer}>
						<Text style={styles.answerView}>
							{' '}
							1 Billion people in the world live in Extreme Poverty; over 1 in 8
							people in the world, many of them children. {'\n\n'}
							Think about what you could buy with $2.50 – what could you eat and
							how would your or your parents be able to pay your rent? {'\n'}
						</Text>
						<Pressable
							style={styles.button2}
							numberOfLines={1}
							onPress={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<Text style={styles.textButton}>OK</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<Slider
				style={{ width: 300, height: 50 }}
				thumbTintColor="#03DAC5"
				onValueChange={(value) =>
					setRange(parseFloat(value.toFixed(2)) + ' ' + 'billion')
				}
				minimumValue={0}
				maximumValue={2}
				value={0}
				onSlidingComplete={() => setModalVisible(!modalVisible)}
			/>

			<View style={styles.skipContainer}>
				<Pressable
					style={styles.button3}
					numberOfLines={1}
					onPress={() => navigation.navigate('Pre questionnaire 7')}
				>
					<Text style={styles.textButton}>Next</Text>
					<View style={styles.arrow}>
						<FontAwesome5 name="angle-right" color="#03DAC5" size={15} />
					</View>
				</Pressable>
			</View>
			{/* <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
        <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 870, width: 100, height:50, alignSelf: 'center'}}/> */}
			<Image source={require('../assets/WFTW.png')} style={styles.w4twlogo} />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#1E1E1E',
		// height: Dimensions.get('window').height,
		// width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center',
		// flexDirection: 'column',
		flex: 1,
	},
	bold: { fontWeight: 'bold' },
	italic: { fontStyle: 'italic' },
	underline: { textDecorationLine: 'underline' },
	textCaption: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 15,
		height: Dimensions.get('window').height / 7,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	subtext: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 36,
		textAlign: 'center',
		fontSize: 24,
		flexDirection: 'column',
		width: Dimensions.get('window').width / 1.5,
		height: Dimensions.get('window').height / 6,
	},
	skipContainer: {
		flex: 2,
		marginTop: Dimensions.get('window').height / 4,
	},
	button2: {
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		padding: 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		// marginTop: -150,
		alignItems: 'center',
	},
	button3: {
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		padding: 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		marginTop: -150,
		alignItems: 'center',
	},
	arrow: {
		flex: 1,
		marginTop: 2,
	},
	textButton: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
		flex: 5,
		// marginTop: Dimensions.get('window').height/2,
	},
	sliderText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#03DAC5',
		// height: Dimensions.get('window').height/2,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalContainer: {
		margin: 20,
		backgroundColor: '#2C2C2C',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	answerView: {
		textAlign: 'center',
		color: '#03DAC5',
		fontSize: 18,
	},
	button: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		marginLeft: Dimensions.get('window').width / -1.7,
		marginTop: Dimensions.get('window').height / 50,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
	},
	ewblogo: {
		bottom: Dimensions.get('window').height / -18,
        width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
        alignSelf: 'flex-end',
        right: "5%",
	},
	w4twlogo: {
		bottom: Dimensions.get('window').height / 60,
		alignItems: 'flex-start',
        width: Dimensions.get('window').width / 4,
    	height: Dimensions.get('window').height / 15.5,
        position: 'absolute',
        bottom: 20,
        left: 10,
	},
});