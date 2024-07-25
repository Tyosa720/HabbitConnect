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

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, buttonText, navigationText, onNavigate }) => {
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
    <View className="flex-1 justify-center w-2/3">
      <Text className="text-text text-2xl font-bold mb-4 text-center">{buttonText}</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="text-text border p-2 mb-4 rounded border-gold w-full"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="text-text border p-2 mb-4 rounded border-gold"
      />
      {error ? <Text className="text-red-500 mt-4">{error}</Text> : null}
      <TouchableOpacity onPress={handlePress} className="rounded-full px-6 py-3 mb-2 bg-gold">
          <Text className="text-black text-sm text-center">{buttonText}</Text>
      </TouchableOpacity>
      <Link href="/auth/signup" asChild>
        <TouchableOpacity className="rounded-full px-6 py-3 mb-2">
          <Text className="text-gold text-sm text-center underline">{navigationText}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default AuthForm;

