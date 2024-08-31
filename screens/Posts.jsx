import {
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Alert,
	ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";
import { StyleSheet } from "react-native";
import axios from "axios";
import { PostContext } from "../context/postContext";

const Posts = ({ navigation }) => {
	//global context
	const [state] = useContext(AuthContext);
	const [posts, setPosts] = useContext(PostContext);

	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handlePostCreate = async () => {
		try {
			if (!title || !description) {
				Alert.alert("Invalid", "All fields are required!");
				return;
			}

			setLoading(true);

			const { data } = await axios.post("post/create-post", {
				title,
				description,
			});

			setPosts([...posts, data?.post]);

			Alert.alert("Success", data?.message);
			navigation.navigate("Home");
		} catch (error) {
			console.error(error);
			Alert.alert("Error", error.response.data.message || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<SafeAreaView className="h-full">
			<Header title="Post" />

			<View className="flex-1 justify-between mt-10">
				<ScrollView>
					<View className="items-center mx-5 ">
						<Text className=" text-3xl font-semibold ">Create a Post</Text>

						<TextInput
							placeholder="Add a post title"
							value={title}
							onChangeText={(text) => setTitle(text)}
							className=" w-full bg-[#ffffff] mt-8 text-base pl-4 border border-gray-600 py-1 rounded-md "
						/>

						<TextInput
							placeholder="Add post description"
							value={description}
							onChangeText={(text) => setDescription(text)}
							multiline={true}
							numberOfLines={6}
							style={styles.multiline}
							className=" w-full pt-0 bg-[#ffffff] mt-6 text-base pl-4 border border-gray-600 py-1 rounded-md "
						/>

						<View>
							<TouchableOpacity
								onPress={handlePostCreate}
								className=" w-[300px] mt-8 py-1 bg-black items-center justify-center border-[3px] border-blue-500 rounded-2xl ">
								{loading ? (
									<ActivityIndicator />
								) : (
									<Text className=" text-xl font-semibold text-slate-300 ">
										Create Post
									</Text>
								)}
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>

				<View className="absolute bottom-0 left-0 right-0 bg-[#ffffff] ">
					<Footer />
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	multiline: {
		textAlignVertical: "top",
	},
});

export default Posts;
