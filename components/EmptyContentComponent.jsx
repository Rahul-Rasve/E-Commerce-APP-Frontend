import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const EmptyContentComponent = () => {
	return (
		<View className=" items-center justify-center mt-10 ">
			<Text className="text-base font-semibold mb-1 ">No Posts Yet!</Text>

			<Text className="text-base font-semibold mb-6">
				Start by creating one 😀
			</Text>

			<TouchableOpacity
				onPress={() => navigation.push("Post")}
				className=" w-[300px] py-1 bg-black items-center justify-center border-[3px] border-orange-400 rounded-2xl ">
				<Text className=" text-xl font-semibold text-slate-300 ">
					Create a Post
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default EmptyContentComponent;
