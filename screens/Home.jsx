import { View, ScrollView, RefreshControl, FlatList } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";
import { PostContext } from "../context/postContext";
import PostCard from "../components/PostCard";
import EmptyContentComponent from "../components/EmptyContentComponent";
import LoadingWidget from "../components/LoadingWidget";

const Home = () => {
	//global context
	const [state] = useContext(AuthContext);
	const [posts, setPosts, getAllPosts, loading] = useContext(PostContext);
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

			{loading && !refresh ? (
				<LoadingWidget />
			) : (
				<FlatList
					data={posts}
					keyExtractor={(item) => item._id}
					initialNumToRender={10}
					removeClippedSubviews={true}
					renderItem={({ item }) => <PostCard post={item} />}
					ListEmptyComponent={() => <EmptyContentComponent />}
					refreshControl={
						<RefreshControl refreshing={refresh} onRefresh={onRefresh} />
					}
				/>
			)}

			<View className="  bg-[#ffffff] ">
				<Footer />
			</View>
		</SafeAreaView>
	);
};

export default Home;
