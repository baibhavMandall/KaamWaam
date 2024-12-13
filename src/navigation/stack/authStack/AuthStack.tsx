import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../../../screens/auth/login/Login";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}