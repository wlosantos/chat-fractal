import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';

const { Screen, Navigator } = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator initialRouteName='SignIn'>
      <Screen
        name='SignIn'
        component={SignIn}
        options={{
          headerShown: true,
          title: 'Sign In',
        }}
      />
    </Navigator>
  )
};

export default AuthRoutes;