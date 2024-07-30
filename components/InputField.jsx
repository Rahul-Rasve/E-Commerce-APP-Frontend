import { View, Text, TextInput } from "react-native";
import React from "react";

const InputField = ({ title, placeholder, isPassword, inputType }) => {
	return (
		<View>
			<Text>{title}</Text>
			<TextInput
				className="border-2 border-gray-500 rounded-xl mt-3 mb-5 pl-4 h-10"
				placeholder={placeholder}
			/>
		</View>
	);
};

export default InputField;
