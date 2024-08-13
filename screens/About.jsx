import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";

const About = () => {
	//global context
	const [state] = useContext(AuthContext);

	return (
		<SafeAreaView className="flex-1 justify-between ">
			<Header title="About" />
			<Text>{JSON.stringify(state, null, 4)}</Text>
			<Footer />
		</SafeAreaView>
	);
};

export default About;
