import {Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    // align item (baris ke samping)
    // justifyContent (Kolom ke tengah)
    <View style={{ flex:1 , alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
            <Text>Home Screen</Text>
        </TouchableOpacity>
    </View>
  )
}