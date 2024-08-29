import { View, Text } from "react-native";
import React from "react";
import moment from "moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PostCard = ({ posts }) => {
	return (
		<View>
			{posts?.map((post, index) => (
				<View className=" border border-gray-400 p-5 rounded-xl mx-4 my-2 bg-[#ffffff] " key={index} >
					<Text className=" font-bold text-2xl border-b pb-1 border-gray-500 ">
						{post?.title}{" "}
					</Text>
					<Text className="mt-2 text-base ">{post?.description} </Text>

					<View className=" flex-row mt-5 justify-between ">
						<Text>
							{" "}
							<FontAwesome5 name="user" size={17} /> {"  "}{" "}
							{post?.postedBy?.name}
						</Text>
						<Text>{moment(post?.createdAt).format("DD-MM-YYYY")}</Text>
					</View>
				</View>
			))}
		</View>
	);
};

export default PostCard;
