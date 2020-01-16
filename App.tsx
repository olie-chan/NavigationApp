import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button } from 'react-native-elements';

function HomeScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
			<Button title="Go to the details screen"
				type="outline"
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	);
}
function DetailsScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Text>Details Screen</Text>
		</View>
	);
}
const AppNavigator = createStackNavigator({
	Home: HomeScreen,
	Details: DetailsScreen,
}, {
	initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
