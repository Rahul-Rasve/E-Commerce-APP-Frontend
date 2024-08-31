import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PostCard = ({ posts, isEditable = false }) => {
	return (
		<View>
			{posts?.map((post, index) => (
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
							<TouchableOpacity className="border border-gray-700 py-2 px-5 rounded-full bg-[#FFF8E8]">
								<FontAwesome5 name="trash-alt" size={20} color={"red"} />
							</TouchableOpacity>
							<TouchableOpacity className="border border-gray-700 py-2 px-5 rounded-full bg-[#FFF8E8]">
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
