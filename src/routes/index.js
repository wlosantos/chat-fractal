import { NavigationContainer } from '@react-navigation/native';

// import StackRoutes from './stack.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
};

export default Routes;