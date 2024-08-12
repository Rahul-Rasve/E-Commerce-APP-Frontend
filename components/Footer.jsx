import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Footer = () => {
	return (
		<View className="flex-row m-5 justify-between">
			<TouchableOpacity>
				<FontAwesome5 name="home" size={25} style={styles.iconStyle} />
				<Text>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<FontAwesome5 name="plus-circle" size={25} style={styles.iconStyle} />
				<Text>Post</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<FontAwesome5 name="info-circle" size={25} style={styles.iconStyle} />
				<Text>About</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<FontAwesome5 name="user-alt" size={25} style={styles.iconStyle} />
				<Text>Account</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		marginBottom: 3,
		alignSelf: "center",
	},
});

export default Footer;
