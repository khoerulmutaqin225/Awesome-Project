import {Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './HomeStyle'

export default function DetailScreen({navigation}) {
  return (
    <>
    {console.log('Anda Masuk ke detail screen')}
    {/* stylsheet beda folder */}
    <View style={styles.TextDetail}>
        <TouchableOpacity onPress={()=>navigation.navigate('Verify')}>
            <Text>Detail Screen</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}