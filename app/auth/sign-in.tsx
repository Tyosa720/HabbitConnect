import React from 'react';
import AuthForm from '@/src/components/auth/AuthForm';
import { auth } from '@/src/utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function SignInScreen() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    router.replace('/(tabs)');
  };

  return (
    <View className="">
      <AuthForm
        onSubmit={handleLogin}
        buttonText="Login"
        navigationText="Go to Signup"
        onNavigate={() => router.push('/sign-up')}
      />
    </View>
  );
}
