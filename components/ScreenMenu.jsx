import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Home from "../screens/Home";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const ScreenMenu = () => {
	//global state
	const [state] = useContext(AuthContext);

	const authenticatedUser = state?.user && state?.token;

	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator initialRouteName="Login">
			{authenticatedUser ? (
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
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
