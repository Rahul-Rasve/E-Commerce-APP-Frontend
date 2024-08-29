import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	const getAllPosts = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get("post/get-posts");

			setPosts(data?.posts);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	//initial posts
	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<PostContext.Provider value={[posts, setPosts, getAllPosts]}>
			{children}
		</PostContext.Provider>
	);
};

export { PostContext, PostProvider };
