import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-3xl font-bold mb-4">Welcome Home</Text>
      <TouchableOpacity
        className="bg-blue-500 rounded-full px-6 py-3 mb-2"
        onPress={() => router.push('/auth/sign-in')}
      >
        <Text className="text-white text-lg">Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-green-500 rounded-full px-6 py-3"
        onPress={() => router.push('/auth/signup')}
      >
        <Text className="text-white text-lg">Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
