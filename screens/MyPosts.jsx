import {
	View,
	Text,
	ScrollView,
	Alert,
	FlatList,
	RefreshControl,
} from "react-native";
import React, { useContext, useState, useEffect, useCallback } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";
import axios from "axios";
import PostCard from "../components/PostCard";
import EmptyContentComponent from "../components/EmptyContentComponent";
import LoadingWidget from "../components/LoadingWidget";

const MyPosts = () => {
	//global context
	const [state] = useContext(AuthContext);
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);

	// refresh control
	const onRefresh = useCallback(() => {
		setRefresh(true);
		getUserPosts();
		setTimeout(() => {
			setRefresh(false);
		}, 2000);
	}, []);

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

			{loading && !refresh ? (
				<LoadingWidget />
			) : (
				<FlatList
					data={posts}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => <PostCard post={item} isEditable={true} />}
					ListEmptyComponent={() => <EmptyContentComponent />}
					refreshControl={
						<RefreshControl refreshing={refresh} onRefresh={onRefresh} />
					}
				/>
			)}

			<View className=" bg-[#ffffff] ">
				<Footer />
			</View>
		</SafeAreaView>
	);
};

export default MyPosts;
