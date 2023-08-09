import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React from 'react'

const App = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <ScrollView>
      <Text>Halo Ini Aplikasi Pertama Saya</Text>
      <Text>Hello Wold</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </ScrollView>
      
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    // alignItems: cente
  },
});