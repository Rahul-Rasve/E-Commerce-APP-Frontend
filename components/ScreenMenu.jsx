import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Home from "../screens/Home";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Posts from "../screens/Posts";
import About from "../screens/About";
import Account from "../screens/Account";
import MyPosts from "../screens/MyPosts";

const ScreenMenu = () => {
	//global state
	const [state] = useContext(AuthContext);

	const authenticatedUser = state?.user && state?.token;

	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator initialRouteName="Login">
			{authenticatedUser ? (
				<>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Post"
						component={Posts}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="MyPosts"
						component={MyPosts}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Account"
						component={Account}
						options={{ headerShown: false }}
					/>
				</>
			) : (
				<>
					<Stack.Screen
						name="Register"
						component={Register}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
				</>
			)}
		</Stack.Navigator>
	);
};

export default ScreenMenu;
