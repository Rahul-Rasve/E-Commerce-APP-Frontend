import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	Alert,
	Modal,
	Text,
	Pressable,
	View,
	TextInput,
	StyleSheet,
} from "react-native";

const EditModal = ({ modalVisible, setModalVisible, post }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	//initial post data
	useEffect(() => {
		setTitle(post?.title);
		setDescription(post?.description);
	}, [post]);

	const validatePost = () => {
		if (!title) {
			Alert.alert("Error", "Please enter a title");
		} else if (!description) {
			Alert.alert("Error", "Please enter a description");
		} else if (title === post.title && description === post.description) {
			Alert.alert("Attension", "No changes detected");
			return;
		} else {
			updatePost(post?._id);
		}
	};

	const updatePost = async (id) => {
		try {
			setLoading(true);

			const { data } = await axios.put(`post/update-post/${id}`, {
				title,
				description,
			});

			Alert.alert("Success", "Post updated successfully");

			navigation.replace("MyPosts");
		} catch (error) {
			console.error(error);
			Alert.alert("Error", "Some error occurred");
		} finally {
			setLoading(false);
		}
	};

	return (
		<View className="flex-1 justify-center items-center ">
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					!loading && setModalVisible(!modalVisible);
				}}>
				<View className="flex-1 justify-center mt-6  ">
					<View
						style={styles.shadowBox}
						className=" m-5 bg-[#ffffff] rounded-xl p-6 ">
						<Text className=" mb-10 text-center text-xl font-bold ">
							Edit Post
						</Text>

						<Text>Title</Text>
						<TextInput
							placeholder="Add a post title"
							value={title}
							onChangeText={(text) => setTitle(text)}
							className=" w-full bg-[#ffffff] mt-1 text-base pl-4 border border-gray-600 py-1 rounded-md "
						/>

						<Text className=" mt-4 ">Description</Text>
						<TextInput
							placeholder="Add post description"
							value={description}
							onChangeText={(text) => setDescription(text)}
							multiline={true}
							numberOfLines={6}
							style={styles.multiline}
							className=" w-full pt-0 bg-[#ffffff] mt-1 text-base pl-4 border border-gray-600 py-1 rounded-md "
						/>

						<View className=" mt-4 flex-row justify-between ">
							<Pressable
								className="  w-28 rounded-xl mt-5 p-3 bg-[#2196F3] "
								onPress={() => {
									validatePost();
									setModalVisible(!modalVisible);
								}}>
								<Text className=" text-[#ffffff] font-bold text-center ">
									Update
								</Text>
							</Pressable>
							<Pressable
								className="  w-28 rounded-xl mt-5 p-3 bg-red-400 "
								onPress={() => !loading && setModalVisible(!modalVisible)}>
								<Text className=" text-[#ffffff] font-bold text-center ">
									Cancel
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	multiline: {
		textAlignVertical: "top",
	},

	shadowBox: {
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 5,
		},
		shadowOpacity: 0.9,
		shadowRadius: 10,
		elevation: 15,
	},
});

export default EditModal;
