// import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
// import React from 'react'

// const App = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState('');

//   return (
//     <SafeAreaView>
//       <ScrollView>
//       <Text>Halo Ini Aplikasi Pertama Saya</Text>
//       <Text>Hello Wold</Text>
//       <Image
//         style={styles.image}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//       </ScrollView>
      
//     </SafeAreaView>

//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   image: {
//     height: 50,
//     width: 50,
//     // alignItems: cente
//   },
// });

import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Dimensions } from 'react-native'
import React, {useState}  from 'react'
import { WARNA_ABU_ABU, WARNA_WARNING } from '../Awesome-Project/src/utils/constant'

const Pesanan = () => {
  const[nilai, rubahNilai]=useState(0)

  return (
    // <SafeAreaView>
      <View style={styles.header}> 
            <TouchableOpacity onPress={()=>rubahNilai(nilai+1)}>
              <View >
              {console.log('ini Tambah')}
                <Text style={{ fontSize:20, color:'blue', alignSelf:'center' }}>
                  Tambah
                </Text>
              </View>
            </TouchableOpacity>
      
              <View>
                <Text style={{ fontSize:40, color:'black', alignSelf:'center' }}>
                  {nilai}
                </Text>
              </View>   
      
            <TouchableOpacity onPress={()=>rubahNilai(nilai-1)}>
              <View>
                {console.log('ini Kurang')}
                <Text style={{ fontSize:20, color:'blue', alignSelf:'center' }}>
                  Kurang
                </Text>
              </View>
            </TouchableOpacity>
            
      
            <TouchableOpacity onPress={()=>rubahNilai(0)}>
              <View>
              {console.log('ini Null')}
                <Text style={{ fontSize:20, color:'blue', alignSelf:'center' }}>
                  Reset
                </Text>
              </View>
            </TouchableOpacity>

      </View>
    // </SafeAreaView>
  );
}

export default Pesanan

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: 'white  '
  },
  header: {
    width: windowWidth,
    height: windowHeight  ,
    // paddingHorizontal: ,
    padding: 160,
    alignSelf:'center',
    backgroundColor: WARNA_WARNING
  },

})