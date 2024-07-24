import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
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
    <View className="flex-1 justify-center items-center p-4">
      <Image
        style={{ width: 200, height: 200 }}
        source={require('@/src/assets/logo.png')}
        contentFit='cover'
        className='flex-1 w-full'
      />
      <AuthForm
        onSubmit={handleLogin}
        buttonText="Login"
        navigationText="Go to Sign-up"
        onNavigate={() => router.push('/sign-up')}
      />
    </View>
  );
}
