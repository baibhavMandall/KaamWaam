import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/auth/splash/SplashScreen';
import AuthStack from './authStack/AuthStack';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name='AuthStack' component={AuthStack} options={{headerShown: false, animation: 'slide_from_right' }}/>
      
    </Stack.Navigator>
  )
}