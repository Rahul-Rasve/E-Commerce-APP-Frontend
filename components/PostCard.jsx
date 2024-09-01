import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useContext, useEffect } from "react";
import moment from "moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { PostContext } from "../context/postContext";
import { useNavigation } from "@react-navigation/native";

const PostCard = ({ myPosts, isEditable = false }) => {
	const [posts, setPosts] = useContext(PostContext);

	const navigation = useNavigation();

	const deletePost = async (_id) => {
		try {
			console.log(`Delete Post with ID: ${_id}`);

			const { data } = await axios.delete(`post/delete-post/${_id}`);

			setPosts((prevPosts) => prevPosts.filter((post) => post._id !== _id));

			Alert.alert("Success", data?.message);
		} catch (error) {
			console.error(error);
			Alert.alert("Error", "Some error occurred");
		}
	};

	const handleDelete = (_id) => {
		Alert.alert(
			"Delete Post",
			"Are you sure you want to delete this post?",
			[
				{ text: "Cancel", onPress: () => null, style: "cancel" },
				{
					text: "Delete",
					onPress: () => {
						deletePost(_id);
						navigation.replace("MyPosts")
					},
					style: "destructive",
				},
			],
			{ cancelable: true }
		);
	};

	const handleEdit = () => {};

	return (
		<View>
			{myPosts?.map((post, index) => (
				<View
					className=" border border-gray-400 p-5 rounded-xl mx-4 my-2 bg-[#ffffff] "
					key={index}>
					<Text className=" font-bold text-2xl border-b pb-1 border-gray-500 ">
						{post?.title}{" "}
					</Text>
					<Text className="mt-2 text-base ">{post?.description} </Text>

					<View
						className={`flex-row mt-5 ${
							isEditable ? "justify-end" : "justify-between"
						}`}>
						{!isEditable ? (
							<Text>
								{" "}
								<FontAwesome5 name="user" size={17} /> {"  "}{" "}
								{post?.postedBy?.name}
							</Text>
						) : null}
						<Text>{moment(post?.createdAt).format("DD-MM-YYYY")}</Text>
					</View>

					{isEditable ? (
						<View className=" flex-row mt-5 justify-between ">
							<TouchableOpacity
								onPress={() => {
									console.log(`Post : ${JSON.stringify(post, null, 4)}`);
									handleDelete(post?._id);
								}}
								className="border border-gray-700 py-2 px-5 rounded-full bg-[#FFF8E8]">
								<FontAwesome5 name="trash-alt" size={20} color={"red"} />
							</TouchableOpacity>

							<TouchableOpacity
								onPress={handleEdit}
								className="border border-gray-700 py-2 px-5 rounded-full bg-[#FFF8E8]">
								<FontAwesome5 name="edit" size={20} />
							</TouchableOpacity>
						</View>
					) : null}
				</View>
			))}
		</View>
	);
};

export default PostCard;
