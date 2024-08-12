import React from "react";
import { AuthProvider } from "./context/authContext";
import ScreenMenu from "./components/ScreenMenu";

const RootNavigation = () => {
	return (
		<AuthProvider>
			<ScreenMenu />
		</AuthProvider>
	);
};

export default RootNavigation;
