import { View, Text, ScrollView, Alert } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";
import axios from "axios";
import PostCard from "../components/PostCard";

const MyPosts = () => {
	//global context
	const [state] = useContext(AuthContext);
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const getUserPosts = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get("post/get-user-posts");
			setPosts(data?.userPosts);
		} catch (error) {
			console.error(error);
			Alert.alert("Error", "Some error occurred");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getUserPosts();
	}, []);

	return (
		<SafeAreaView className="flex-1 justify-between ">
			<Header title="My Posts" />

			<ScrollView>
				<PostCard myPosts={posts} isEditable={true} />

				{/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
			</ScrollView>

			<View className=" bg-[#ffffff] ">
				<Footer />
			</View>
		</SafeAreaView>
	);
};

export default MyPosts;
