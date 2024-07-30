import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, isLoading }) => {
	return isLoading ? (
		<View className="bg-primary_button rounded-full h-12 flex justify-center items-center mx-5">
			<ActivityIndicator size="small" color="#ffffff" />
		</View>
	) : (
		<TouchableOpacity onPress={handlePress}>
			<View className="bg-primary_button rounded-full h-12 flex justify-center items-center mx-5">
				<Text className="text-gray-100 text-lg font-semibold">{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CustomButton;
