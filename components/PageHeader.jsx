import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = ({ title }) => {
	//global state
	const [state, setState] = useContext(AuthContext);

	const handleLogout = async () => {
		setState({ token: "", user: null });

		await AsyncStorage.removeItem("@auth");
	};

	return (
		<View className="flex-row justify-between m-5">
			<Text className="text-xl font-semibold">{title}</Text>
			<TouchableOpacity
				className="ml-5"
				onPress={() => {
					Alert.alert(
						"Logout",
						"Are your sure you want to logout?",
						[
							{ text: "Cancel", onPress: () => null, style: "cancel" },
							{
								text: "Logout",
								onPress: handleLogout,
								style: "destructive",
							},
						],
						{ cancelable: true }
					);
				}}>
				<FontAwesome5 name="power-off" size={25} color={"red"} />
			</TouchableOpacity>
		</View>
	);
};

export default Header;
