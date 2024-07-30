import { View, Text, TextInput } from "react-native";
import React from "react";
import InputField from "../../components/InputField";

const Register = () => {
	return (
		<View className="flex-1 justify-center bg-primary_background">
			<Text className="text-3xl text-center font-bold text-primary_title">
				Register
			</Text>

			{/* <View className="m-5">
				<Text>Name</Text>
				<TextInput className="border-2 border-gray-500 rounded-xl mt-3 mb-5 pl-4 h-10" />
				<Text>Email</Text>
				<TextInput className="border-2 border-gray-500 rounded-xl mt-3 mb-5 pl-4 h-10" />
				<Text>Password</Text>
				<TextInput className="border-2 border-gray-500 rounded-xl mt-3 mb-5 pl-4 h-10" />
			</View> */}
            <View className="m-5">
				<InputField title="Name" placeholder="Enter your name" />
				<InputField title="Email" placeholder="Enter your email"  />
				<InputField title="Password" placeholder="Enter a secure password" />
			</View>
		</View>
	);
};

export default Register;
