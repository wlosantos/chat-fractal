import { View, Text, TouchableOpacity } from 'react-native';
import AuthContext from '../contexts/auth';
import { useContext } from 'react';

const SignIn = () => {

  const { signIn } = useContext(AuthContext);

  const handleSign = () => {
    signIn();
  };

  return (
    <View className='flex-1 justify-center items-center bg-gray-50'>
      <TouchableOpacity className='px-4 py-2 bg-blue-500 rounded shadow-md'>
        <Text className='text-white font-semibold' onPress={handleSign}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
};

export default SignIn;