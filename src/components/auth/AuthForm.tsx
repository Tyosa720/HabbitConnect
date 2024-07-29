import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native';

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  buttonText: string;
  navigationText: string;
  onNavigate: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  buttonText,
  navigationText,
  onNavigate,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePress = async () => {
    try {
      await onSubmit(email, password);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <View className="flex-1 w-2/3">
      <TextInput
        placeholder="Email"
        value={email}
        placeholderTextColor="#ECEDEE"
        onChangeText={setEmail}
        className="text-text border h-8 mb-4 p-2 rounded border-gold w-full focus-visible:outline-8 focus-within:border-0"
      />
      <TextInput
        placeholderTextColor="#ECEDEE"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="text-text h-8 border p-2 mb-4 rounded border-gold"
      />
      {error ? <Text className="text-red-500 mt-4">{error}</Text> : null}
      <TouchableOpacity
        onPress={handlePress}
        className="rounded-full px-6 py-3 mb-2 bg-gold h-12"
      >
        <Text className="text-black text-sm text-center">{buttonText}</Text>
      </TouchableOpacity>
      <Link href="/auth/signup" asChild>
        <TouchableOpacity className="rounded-full px-6 py-3 mb-2">
          <Text className="text-gold text-sm text-center underline">
            {navigationText}
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default AuthForm;
