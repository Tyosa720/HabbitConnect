import React from 'react';
import { useRouter } from 'expo-router';
import AuthForm from '@/src/components/auth/AuthForm';
import { auth } from '@/src/utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen: React.FC = () => {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthForm
      onSubmit={handleLogin}
      buttonText="Login"
      navigationText="Go to Signup"
      onNavigate={() => router.push('/auth/signup')}
    />
  );
};

export default LoginScreen;
