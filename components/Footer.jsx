import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";

const Footer = () => {
	const navigation = useNavigation();
	const route = useRoute();

	return (
		<View className="flex-row m-5 mb-2 justify-between">
			<TouchableOpacity
				onPress={() => navigation.navigate("Home")}
				className="items-center gap-y-1">
				<FontAwesome5 name="home" size={25} color={route.name === "Home" && "orange" } />
				<Text>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate("Post")}
				className="items-center gap-y-1">
				<FontAwesome5 name="plus-circle" size={25} color={route.name === "Post" && "orange" } />
				<Text>Post</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate("About")}
				className="items-center gap-y-1">
				<FontAwesome5 name="info-circle" size={25} color={route.name === "About" && "orange" } />
				<Text>About</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate("Account")}
				className="items-center gap-y-1">
				<FontAwesome5 name="user-alt" size={25} color={route.name === "Account" && "orange" } />
				<Text>Account</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Footer;
