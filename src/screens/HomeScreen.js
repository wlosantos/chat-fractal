import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const openAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View className='flex-1 justify-center items-center bg-blue-300'>
      <Text className='text-2xl font-bold'>Home Page</Text>
      <TouchableOpacity
        className='bg-blue-500 px-5 py-2 rounded-md mt-5'
        onPress={openAbout}
      >
        <Text className='text-white font-semibold'>Go to About</Text>
      </TouchableOpacity>
    </View>
  )
};

export default HomeScreen;