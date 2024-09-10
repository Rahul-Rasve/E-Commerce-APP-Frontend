import { View, ScrollView, RefreshControl, FlatList } from "react-native";
import React, { useCallback, useContext, useState, useRef } from "react";
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
	const [posts, setPosts, getAllPosts, loading, setLoading, page, setPage] =
		useContext(PostContext);
	const [refresh, setRefresh] = useState(false);

	// refresh control
	const onRefresh = useCallback(() => {
		setRefresh(true);
		setPage(1);
		setPosts([]);
		getAllPosts();
		setTimeout(() => {
			setRefresh(false);
		}, 2000);
	}, []);

	//increment page
	const handleLoadMorePosts = () => {
		if (!loading) {
			setPage(page + 1);
		}
	};

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
					onEndReachedThreshold={0.7}
					onEndReached={handleLoadMorePosts}
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
