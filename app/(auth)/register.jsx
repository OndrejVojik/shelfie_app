import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register } = useUser();

    const handleSubmit = async () => {
        try {
            await register(email, password);
        } catch (error) {
            console.log('Registration error:', error);
        }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register an Account
      </ThemedText>

      <ThemedTextInput placeholder="Email" style={{width:'80%', marginBottom:'20'}} keyboardType="email-address" onChangeText={setEmail} value={email} />
      <ThemedTextInput placeholder="Password" style={{width:'80%', marginBottom:'20'}} secureTextEntry={true} onChangeText={setPassword} value={password} />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/login" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Login instead
        </ThemedText>
      </Link>

    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      textAlign: "center",
      fontSize: 18,
      marginBottom: 30
    },
    btn: {
      backgroundColor: Colors.primary,
      padding: 15,
      borderRadius: 5,
    },
    pressed: {
      opacity: 0.8
    }
})