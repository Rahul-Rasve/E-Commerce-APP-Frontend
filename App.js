import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./context/authContext";
import Home from "./screens/Home";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<AuthProvider>
				<Stack.Navigator initialRouteName="Login">
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
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
				<StatusBar style="dark" />
			</AuthProvider>
		</NavigationContainer>
	);
}
