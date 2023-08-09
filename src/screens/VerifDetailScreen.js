
import {Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function VerifDetailScreen({navigation}) {
  return (
    <View style={{ flex:1 , alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text>Verif Detail Screen</Text>
        </TouchableOpacity>
    </View>
  )
}