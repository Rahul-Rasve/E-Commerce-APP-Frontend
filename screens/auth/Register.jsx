import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import axios from "axios";

const Register = ({ navigation }) => {
	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const submit = async () => {
		try {
			if (!form.name || !form.email || !form.password) {
				Alert.alert("All fields are mandatory!");
				setLoading(false);
				return;
			}
			setLoading(true);
			const { data } = await axios.post(
				"http://192.168.0.100:8080/api/v1/auth/register",
				{ ...form }
			);

			Alert.alert(data && data.message);
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
				Register
			</Text>

			<View className="m-5">
				<InputField
					title="Name"
					placeholder="Enter your name"
					value={form.name}
					handleChange={(text) => setForm({ ...form, name: text })}
				/>
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

			<CustomButton title="Sign Up" handlePress={submit} isLoading={loading} />

			<View className="flex flex-row justify-center mt-5">
				<Text className="text-gray-500 text-lg">Already have an account?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text className="text-gray-500 font-semibold ml-2 text-lg">
						Login
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Register;
