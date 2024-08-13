import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";

const Account = () => {
	//global context
	const [state] = useContext(AuthContext);

	return (
		<SafeAreaView className="flex-1 justify-between ">
			<Header title="Account" showLogoutButton={true} />
			<View>
				<Text>{state?.user.name}</Text>
				<Text>{state?.user.email}</Text>
			</View>
			<Footer />
		</SafeAreaView>
	);
};

export default Account;
