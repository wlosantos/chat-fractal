import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-center items-center bg-gray-50'>
        <Text className='text-2xl font-bold'>native with Tailwind!</Text>
      </View>
    </SafeAreaView>
  );
}
