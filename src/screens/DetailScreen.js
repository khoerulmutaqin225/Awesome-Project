import {Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DetailScreen({navigation}) {
  return (
    <View style={{ flex:1 , alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Verify')}>
            <Text>Detail Screen</Text>
        </TouchableOpacity>
    </View>
  )
}