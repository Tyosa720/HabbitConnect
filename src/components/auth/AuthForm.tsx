import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text>{buttonText}</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title={buttonText} onPress={handlePress} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title={navigationText} onPress={onNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8, width: '80%' },
  error: { color: 'red', marginTop: 10 },
});

export default AuthForm;
