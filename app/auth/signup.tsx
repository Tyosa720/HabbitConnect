import React from 'react';
import { useRouter } from 'expo-router';
import AuthForm from '@/src/components/auth/AuthForm';
import { auth } from '@/src/utils/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { View } from 'react-native';

const SignupScreen: React.FC = () => {
  const router = useRouter();

  const handleSignup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
    router.replace('/(app)');
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <AuthForm
        onSubmit={handleSignup}
        buttonText="Signup"
        navigationText="Go to Login"
        onNavigate={() => router.push('/sign-in')}
      />
    </View>
  );
};

export default SignupScreen;
