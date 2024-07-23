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
    router.replace('/(app)');
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <AuthForm
        onSubmit={handleLogin}
        buttonText="Login"
        navigationText="Go to Signup"
        onNavigate={() => router.push('/sign-up')}
      />
    </View>
  );
}
