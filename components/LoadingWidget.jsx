import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";

const LoadingWidget = () => {
	return (
		<View className="flex-1 h-full items-center justify-center" >
            <ActivityIndicator size={"l"} color={"orange"} />

			<Text className="mt-2" >Loading Posts...</Text>
		</View>
	);
};

export default LoadingWidget;
