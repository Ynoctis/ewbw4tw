import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	Linking,
	SafeAreaView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PreQ8({ navigation }) {
	return (
		<SafeAreaView style={styles.background}>
			<Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
			{/* <View style={styles.backinputview}> */}
			<Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}}
					onPress={async () => {
						navigation.navigate('Pre questionnaire 7');
					}}
				>
					<Icon name='arrow-left' color='#03DAC5' size={25} />
				</Pressable>
				{/* <Image
					source={require('../assets/EWB.png')}
					style={{
						width: 100,
						height: 50,
						marginTop: 10,
						alignSelf: 'center',
					}}
				/>
			</View> */}

			<Text style={styles.textCaption}>Global Extreme Poverty</Text>
			<Text style={styles.subtext}>
				Extreme Poverty is defined by the percentage of the population living on
				less than $2.50 a day. This map shows where most of those suffering from
				extreme poverty live. Not surprisingly with a lack of clean water and
				education, many people in Sub-Saharan Africa suffer from Extreme
				Poverty.
			</Text>

			<View style={styles.ImageContainer}>
				<Image
					source={require('../assets/globalExtremePoverty.png')}
					style={{
						width: Dimensions.get('window').width,
						height: Dimensions.get('window').height / 2.75,
						marginTop: Dimensions.get('window').height / 50,
						resizeMode: 'contain',
					}}
				/>
			</View>

			<Text style={styles.sourceText}>
				Source:{' '}
				<Text
					style={styles.sourceLink}
					onPress={() =>
						Linking.openURL(
							'https://ourworldindata.org/grapher/share-of-population-in-extreme-poverty?time=2016&country=BGD~BOL~MDG~IND~CHN~ETH'
						)
					}
				>
					Our World in Data
				</Text>
			</Text>

			<Pressable
				style={styles.nextButton}
				numberOfLines={1}
				onPress={() => navigation.navigate('GameIns')}
			>
				<Text style={styles.textButton}>Next</Text>
				<View style={styles.arrow}>
					<FontAwesome5 name="angle-right" color="#03DAC5" size={15} />
				</View>
			</Pressable>
			{/* <Image
				source={require('../assets/WFTW.png')}
				style={{
					width: 110,
					height: 115,
					resizeMode: 'contain',
					alignSelf: 'center',
				}}
			/> */}
			<Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>

			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#1E1E1E',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	bold: { fontWeight: 'bold' },
	italic: { fontStyle: 'italic' },
	underline: { textDecorationLine: 'underline' },
	textCaption: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 50,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	subtext: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 20,
		textAlign: 'center',
		fontSize: 15,
		flexDirection: 'column',
		width: Dimensions.get('window').width / 1.2,
	},
	sourceText: {
		marginTop: Dimensions.get('window').height / 20,
		color: '#03DAC5',
	},
	sourceLink: {
		color: '#0044CC',
		textDecorationLine: 'underline',
	},
	nextButton: {
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		padding: 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		marginTop: Dimensions.get('window').height / 15,
		marginBottom: Dimensions.get('window').height / 15,
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
	},
	backinputview: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: Dimensions.get('window').width / 1.1,
		marginTop: Dimensions.get('window').height / 20,
		height: '10%',
	},
	button: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		alignSelf: 'flex-start',
	},
	ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
		// alignSelf: 'flex-end',
      },
      w4twlogo: {
        bottom: Dimensions.get('window').height / -150,
        alignItems: 'flex-start',
		width: Dimensions.get('window').width / 4,
    	height: Dimensions.get('window').height / 15.5,
		position: 'absolute',
        bottom: 20,
        left: 10,
      },
});
