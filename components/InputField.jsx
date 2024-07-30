import { View, Text, TextInput } from "react-native";
import React from "react";

const InputField = ({ title, placeholder, isPassword = false, inputType, autoComplete, handleChange, value }) => {
	return (
		<View>
			<Text>{title}</Text>
			<TextInput
				className="border-2 border-gray-500 rounded-xl mt-3 mb-5 pl-4 h-10"
				placeholder={placeholder}
				autoCorrect={false}
				keyboardType={inputType}
				secureTextEntry={isPassword}
				autoComplete={autoComplete}
				onChangeText={handleChange}
				value={value}
			/>
		</View>
	);
};

export default InputField;
