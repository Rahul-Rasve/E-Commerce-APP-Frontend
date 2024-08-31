import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PageHeader";
import { PostContext } from "../context/postContext";
import PostCard from "../components/PostCard";

const Home = () => {
	//global context
	const [state] = useContext(AuthContext);
	const [posts] = useContext(PostContext);

	return (
		<SafeAreaView className="flex-1 h-full ">
			<Header title="Home" />

			<ScrollView>
				<PostCard posts={posts} />

				{/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
			</ScrollView>

			<View className="  bg-[#ffffff] ">
				<Footer />
			</View>
		</SafeAreaView>
	);
};

export default Home;
