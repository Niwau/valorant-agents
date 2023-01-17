import { NavigationContainer} from '@react-navigation/native';
import { AgentsContextProvider } from './src/contexts/AgentsContext';
import { Home } from './src/screens/Home/Home';
import { createNativeStackNavigator, NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Agent } from './src/screens/Agent/Agent';

type StackParamList = {
  Home: undefined;
  Agent: { uuid: string };

}

export type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;
export type AgentScreenProps = NativeStackScreenProps<StackParamList, 'Agent'>;

const stackOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_left',
}

export default function App() {

  const Stack = createNativeStackNavigator<StackParamList>()

  return (
    <NavigationContainer>
      <AgentsContextProvider>
        <Stack.Navigator screenOptions={stackOptions} initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{ statusBarAnimation: 'fade' }}/>
          <Stack.Screen name='Agent' component={Agent} options={{ statusBarAnimation: 'fade' }}/>
        </Stack.Navigator>
      </AgentsContextProvider>
    </NavigationContainer>
  );
}