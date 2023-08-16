// import { View, Text } from 'react-native'
// import React from 'react'

// export default function account() {
//   return (
//     <View>
//       <Text>account</Text>
//     </View>
//   )
// }

import { Image, Text, View, TouchableOpacity, Dimensions, TextInput, Platform } from 'react-native'
import React, { Component } from 'react'
import styles from './HomeStyle'

const { width, height } = Dimensions.get('window');

const instruction = Platform.select({
  ios: ' press Cmd +R to reload. \n' + 'cmd+D or shake for dev menu',
  android:
    ' Double tap Ron your keyboard to reload to reload. \n' +
    'shake or press menu button for dev menu'
})


// type Props ={};

// class account  extends Component {
//   static navigationOptions = {header:null}
// }

export default function account({ Props, navigation }) {
  // static  
  navigationOptions = {
    header: null
  }

  return (
    <>
      {console.log('Anda Masuk ke login screen')}
      {/* alt + arah untuk memindahkan */}
      <View style={styles.container}>
        <View >
          <Text style={{
            padding: 10,
            // fontSize: , // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
            textAlign: 'center', // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
            fontFamily: "verdana",   // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
            color: '#fff',
            fontWeight: '',
          }} >KHOERUL MUTAQIN</Text>
          <Image
            source={require('../assets/images/heru.png')}
            style={{ width: 100, height: 100, alignSelf: 'center' }} />
        </View>

        <Text style={{
          padding: 10,
          // fontSize: , // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
          textAlign: 'center', // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
          fontFamily: "verdana",   // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
          color: '#fff',
          fontWeight: 'bold',

        }} >------------------------</Text>
        <Text style={{
          // padding: 10,
          // fontSize: , // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
          textAlign: 'center', // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
          fontFamily: "verdana",   // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
          color: '#fff',
          fontWeight: '',

        }} >Software Engineer</Text>

      </View>
    </>
  )
}