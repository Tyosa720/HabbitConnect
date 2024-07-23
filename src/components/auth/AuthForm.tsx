import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
    <View className="flex-1 justify-center p-4">
      <Text className="text-2xl font-bold mb-4">{buttonText}</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border p-2 mb-4 rounded"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border p-2 mb-4 rounded"
      />
      <Button title={buttonText} onPress={handlePress} />
      {error ? <Text className="text-red-500 mt-4">{error}</Text> : null}
      <Button title={navigationText} onPress={onNavigate} />
    </View>
  );
};

export default AuthForm;
