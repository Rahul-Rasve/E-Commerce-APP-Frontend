import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";

const Home = () => {
	//global context
	const [state] = useContext(AuthContext);

	return (
		<View className="flex-1 justify-between ">
			<Text>Home</Text>
			<Text>{JSON.stringify(state, null, 4)}</Text>
			<Footer />
		</View>
	);
};

export default Home;
