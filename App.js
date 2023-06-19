import { SafeAreaView } from 'react-native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SafeAreaView>
  );
}
