import { View, ScrollView, RefreshControl } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";
import { PostContext } from "../context/postContext";
import PostCard from "../components/PostCard";

const Home = () => {
	//global context
	const [state] = useContext(AuthContext);
	const [posts, setPosts, getAllPosts] = useContext(PostContext);
	const [refresh, setRefresh] = useState(false);

	// refresh control
	const onRefresh = useCallback(() => {
		setRefresh(true);
		getAllPosts();
		setTimeout(() => {
			setRefresh(false);
		}, 2000);
	}, []);

	return (
		<SafeAreaView className="flex-1 h-full ">
			<Header title="Home" />

			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refresh} onRefresh={onRefresh} />
				}>
				<PostCard myPosts={posts} />

				{/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
			</ScrollView>

			<View className="  bg-[#ffffff] ">
				<Footer />
			</View>
		</SafeAreaView>
	);
};

export default Home;
