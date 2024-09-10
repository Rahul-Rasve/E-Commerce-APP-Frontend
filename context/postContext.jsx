import React, { useState, useEffect, createContext, useRef } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [isLastPageReceived, setIsLastPageReceived] = useState(false);

	const getAllPosts = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(`post/get-posts/${page}`);
			setIsLastPageReceived(data?.isLastPageFetched);

			setPosts([...posts, ...data?.posts]);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	//initial posts
	useEffect(() => {
		if (!isLastPageReceived) {
			getAllPosts();
		}
	}, [page]);

	return (
		<PostContext.Provider
			value={[
				posts,
				setPosts,
				getAllPosts,
				loading,
				setLoading,
				page,
				setPage,
			]}>
			{children}
		</PostContext.Provider>
	);
};

export { PostContext, PostProvider };
