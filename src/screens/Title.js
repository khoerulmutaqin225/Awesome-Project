import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import styles from './HomeStyle'

const { width, height } = Dimensions.get('window');

export default function Title() {
    return (
        <View>
          <Text style={{ 
            fontSize:20,
            color: 'white',
            height: height *0.08,
            textAlign:'center',
            fontWeight: 'bold',
            // backgroundColor:'#1877f2' 
            backgroundColor:'#1e90ff'
            }}>News</Text>
        </View>
    )
}