import {
	View,
	Text,
	Image,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";

const Account = () => {
	//global context
	const [state] = useContext(AuthContext);

	const { user } = state;

	//user detail local states
	const [username, setUsername] = useState(user?.name);
	const [password, setPassword] = useState(user?.password);
	const [email] = useState(user?.email);

	//loading effect state
	const [loading, setLoading] = useState(false);

	return (
		<SafeAreaView className="flex-1 h-full">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<Header title="Account" showLogoutButton={true} />
				<View className="items-center mt-5">
					<Image
						className="rounded-full"
						source={{
							uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1723644291~exp=1723644891~hmac=33b5833c87fa838cec777f6e1b04cca8c34f2f9d45ca757cc423f95b2d8c957d",
						}}
						height={200}
						width={200}
					/>
				</View>

				<View className=" mt-8 mx-4 ">
					<Text className="text-base">Name</Text>
					<TextInput
						className=" bg-red-50 border-2 border-orange-400 text-base px-4 mt-1 h-10 rounded-lg"
						value={username}
						onChangeText={(value) => setUsername(value)}
					/>
				</View>
				<View className=" mt-5 mx-4 ">
					<Text className="text-base">Email</Text>
					<TextInput
						className=" bg-red-50 border-2 border-orange-400 text-base px-4 mt-1 h-10 rounded-lg"
						value={email}
						editable={false}
					/>
				</View>
				<View className=" mt-5 mx-4 ">
					<Text className="text-base">Password</Text>
					<TextInput
						className=" bg-red-50 border-2 border-orange-400 text-base px-4 mt-1 h-10 rounded-lg"
						value={password}
						secureTextEntry={true}
						onChangeText={(value) => setPassword(value)}
					/>
				</View>

				<View className="items-center justify-center">
					<TouchableOpacity className=" items-center border-2 border-orange-500 bg-orange-100 rounded-full mx-4 mt-10 w-[20vh]">
						<Text className=" text-base font-semibold py-2 ">Save Profile</Text>
					</TouchableOpacity>
				</View>

				<View className="flex-1 justify-end">
					<Footer />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Account;
