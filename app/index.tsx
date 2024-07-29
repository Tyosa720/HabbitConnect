import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import AuthForm from '@/src/components/auth/AuthForm';
import { auth } from '@/src/utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    router.replace('/(tabs)');
  };

  return (
    <View className="items-center">
      <View className="items-center mb-8">
        <Image
          contentFit="contain"
          source={require('@/src/assets/logo.png')}
          className="w-2/3 aspect-square"
        />
        <Text className="text-text text-center italic font-bold text-xl mt-4">
          HabitConnect
        </Text>
      </View>
      <AuthForm
        onSubmit={handleLogin}
        buttonText="Login"
        navigationText="Go to Sign-up"
        onNavigate={() => router.push('/sign-up')}
      />
    </View>
  );
}
