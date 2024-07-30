import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Keyboard,
} from "react-native";
import React, { useState } from "react";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const Register = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [loading, setLoading] = useState(false);

	const submit = async () => {
		if (form.name === "" || form.email === "" || form.password === "") {
			alert("Please fill out all fields");
			return;
		}

		setLoading(true);
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
				<TouchableOpacity>
					<Text className="text-gray-500 font-semibold ml-2 text-lg">
						Login
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Register;
