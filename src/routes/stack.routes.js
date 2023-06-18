import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const { Screen, Navigator } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator initialRouteName='Home'>
      <Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name='About'
        component={AboutScreen}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
};

export default StackRoutes;