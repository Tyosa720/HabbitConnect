import React from 'react';
import { useRouter } from 'expo-router';
import AuthForm from '@/src/components/auth/AuthForm';
import { auth } from '@/src/utils/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupScreen: React.FC = () => {
  const router = useRouter();

  const handleSignup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthForm
      onSubmit={handleSignup}
      buttonText="Signup"
      navigationText="Go to Login"
      onNavigate={() => router.push('/auth/login')}
    />
  );
};

export default SignupScreen;
