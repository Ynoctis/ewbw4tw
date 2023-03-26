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
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PreQ8({ navigation }) {
	return (
		<View style={styles.background}>
			<View style={styles.backinputview}>
				<Pressable
					style={styles.button}
					onPress={async () => {
						navigation.navigate('Pre questionnaire 7');
					}}
				>
					<View style={styles.arrow}>
						<Icon name="angle-left" color="#03DAC5" size={15} />
					</View>
					<Text style={styles.textButton}>Go back</Text>
				</Pressable>
				<Image
					source={require('../assets/EWB.png')}
					style={{
						width: 100,
						height: 50,
						marginTop: 10,
						alignSelf: 'center',
					}}
				/>
			</View>

			<Text style={styles.textCaption}>Global Extreme Poverty</Text>
			<Text style={styles.subtext}>
				Extreme Poverty is defined by the percentage of the population living on
				less than $2.50 a say. This map shows where most of those suffering from
				extreme poverty live. Not surprisingl with a lack of clean water and
				education, many people in Sub-Saharan Africa suffer from Extreme
				Poverty.
			</Text>

			<View style={styles.ImageContainer}>
				<Image
					source={require('../assets/globalExtremePoverty.png')}
					style={{
						width: Dimensions.get('window').width,
						height: Dimensions.get('window').height / 4,
						marginTop: Dimensions.get('window').height / 50,
						resizeMode: 'contain',
					}}
				/>
			</View>

			<Text style={styles.sourceText}>
				Srouce:{' '}
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
			<Image
				source={require('../assets/WFTW.png')}
				style={{
					width: 110,
					height: 115,
					resizeMode: 'contain',
					alignSelf: 'center',
				}}
			/>

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
		flexDirection: 'column',
	},
	bold: { fontWeight: 'bold' },
	italic: { fontStyle: 'italic' },
	underline: { textDecorationLine: 'underline' },
	textCaption: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 30,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	subtext: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 30,
		textAlign: 'center',
		fontSize: 15,
		flexDirection: 'column',
		width: Dimensions.get('window').width / 1.2,
	},
	sourceText: {
		marginTop: Dimensions.get('window').height / 60,
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
		marginTop: Dimensions.get('window').height / 10,
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
	},
});