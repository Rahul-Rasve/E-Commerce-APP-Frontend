import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Footer = () => {
	return (
		<View className="flex-row m-5 mb-2 justify-between">
			<TouchableOpacity className="items-center gap-y-1">
				<FontAwesome5 name="home" size={25} />
				<Text>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity className="items-center gap-y-1">
				<FontAwesome5 name="plus-circle" size={25} />
				<Text>Post</Text>
			</TouchableOpacity>

			<TouchableOpacity className="items-center gap-y-1">
				<FontAwesome5 name="info-circle" size={25} />
				<Text>About</Text>
			</TouchableOpacity>

			<TouchableOpacity className="items-center gap-y-1">
				<FontAwesome5 name="user-alt" size={25} />
				<Text>Account</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Footer;
