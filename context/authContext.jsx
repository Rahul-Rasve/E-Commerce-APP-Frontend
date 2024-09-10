import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//context
const AuthContext = createContext();

//provider
const AuthProvider = ({ children }) => {
	//golbal state
	const [state, setState] = useState({
		user: null,
		token: "",
	});

	// initial local storage data
	useEffect(() => {
		const loadLocalStorageUserData = async () => {
			let data = await AsyncStorage.getItem("@auth");
			let loginData = JSON.parse(data);

			setState({ ...state, user: loginData?.user, token: loginData?.token });
		};
		loadLocalStorageUserData();
	}, []);

	//defualt axios settings
	axios.defaults.headers.common["Authorization"] = `Bearer ${state?.token}`;
	axios.defaults.baseURL =
		"https://thoughts-and-quotes-app-backend.onrender.com/api/v1/";
	// axios.defaults.baseURL = "http://192.168.0.103:8080/api/v1/";

	return (
		<AuthContext.Provider value={[state, setState]}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
