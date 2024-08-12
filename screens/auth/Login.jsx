import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useContext } from "react";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/authContext";

const Login = ({ navigation }) => {
	//global state
	const [state, setState] = useContext(AuthContext);

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [loading, setLoading] = useState(false);

	const checkdataStrored = async () => {
		const value = await AsyncStorage.getItem("@auth");
		if (value) {
			navigation.navigate("Home");
		}
	};
	checkdataStrored();

	const submit = async () => {
		try {
			setLoading(true);
			if (!form.email || !form.password) {
				Alert.alert("Please fill out all fields");
				return;
			}

			const { data } = await axios.post("auth/login", { ...form });

			setState(data);

			//store the user data locally
			await AsyncStorage.setItem("@auth", JSON.stringify(data));
			// checkdataStrored();

			// Alert.alert(data && data.message);
			navigation.navigate("Home");
		} catch (error) {
			Alert.alert(error.response.data.message);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View className="flex-1 justify-center bg-primary_background">
			<Text className="text-3xl text-center font-bold text-primary_title">
				Login
			</Text>

			<View className="m-5">
				<InputField
					title="Email"
					placeholder="Enter your email"
					inputType="email-address"
					autoComplete="email"
					value={form.email}
					handleChange={(text) => setForm({ ...form, email: text })}
				/>
				<InputField
					title="Password"
					placeholder="Enter a secure password"
					isPassword={true}
					autoComplete="password"
					value={form.password}
					handleChange={(text) => setForm({ ...form, password: text })}
				/>
			</View>

			<CustomButton title="Login" handlePress={submit} isLoading={loading} />

			<View className="flex flex-row justify-center mt-5">
				<Text className="text-gray-500 text-lg">Don't have an account?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("Register")}>
					<Text className="text-gray-500 font-semibold ml-2 text-lg">
						Register
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;
