import { StyleSheet, Alert } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
import ThemedLogo from "../components/ThemedLogo"
import ThemedButton from "../components/ThemedButton"
import Spacer from "../components/Spacer"
import { Colors } from '../constants/Colors'
import { account } from '../lib/appwrite'

const Home = () => {
  const [loading, setLoading] = useState(false)

  const handlePing = async () => {
    setLoading(true)
    try {
      const response = await account.get()
      Alert.alert('Success!', `Connected to Appwrite!\nNo user logged in yet.`)
    } catch (error) {
      if (error.code === 401) {
        Alert.alert('Success!', 'Connected to Appwrite!\nNo user logged in (expected).')
      } else {
        Alert.alert('Error', error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      <ThemedButton 
        title={loading ? "Connecting..." : "Send a Ping"} 
        onPress={handlePing}
        disabled={loading}
      />

      <Spacer />

      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>

      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
})