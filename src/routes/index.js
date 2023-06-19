import { NavigationContainer } from '@react-navigation/native';
import AuthContext from '../contexts/auth';
import { useContext } from 'react';

import StackRoutes from './stack.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { signed } = useContext(AuthContext);
  console.log(signed);

  return (
    <NavigationContainer>
      { signed ? <StackRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  )
};

export default Routes;