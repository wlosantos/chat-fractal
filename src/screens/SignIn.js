import { View, Text, TouchableOpacity } from 'react-native';

import { signIn } from '../services/auth';

const SignIn = () => {
  const handleSign = async() => {
    const response = await signIn();
    console.warn(response);
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