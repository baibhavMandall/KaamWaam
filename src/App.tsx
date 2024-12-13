
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/stack/RootStack';


export default function App() {
  return (
    <NavigationContainer>
      <RootStack/>    
    </NavigationContainer>
  );
}
