import { Image, Text, View, TouchableOpacity,ScrollView, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function HomeScreen({ route, navigation }) {
  const { width, height } = Dimensions.get('window');

  return (
    // align item (baris ke samping)
    // justifyContent (Kolom ke tengah)
    <>
      {console.log('ini batas awal')}
      {console.log(route.params.data)}
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Title /> */}

        {/* <View style={{ 
        width: width, height: height * 0.5,
        flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text>Home Screen</Text>
        </TouchableOpacity>
      </View> */}

        {/* Pembuatan flexdirection di parent */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          style={{ width: width * 0.5, height: height * 0.25 }}
          source={{ uri: route.params.data.urlToImage }}
        />
        <Image
          style={{ width: width * 0.5, height: height * 0.25 }}
          source={{ uri: route.params.data.urlToImage }}
        />
      </View> */}

        {/* textAlign(agar Text berada Ditengah) */}
        <ScrollView style={{ flex: 1 }}>
          <View >
            {/* Untuk Menampilkan gambar */}
            <Image
              style={{ width: width, height: height * 0.5 }}
              source={{ uri: route.params.data.urlToImage }}
            />

            {/* Untk menampilkan title  */}
            <Text style={{ marginTop: height * 0.02, color: 'red', fontWeight: 'bold', textAlign: 'center' }}>
              {route.params.data.title}
            </Text>

            {/* Untuk menampilkan author / pengarang */}
            <Text style={{ marginTop: height * 0.02, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
              {route.params.data.author}
            </Text>

            {/* UntukmEnampilkan content article */}
            <Text style={{ marginTop: height * 0.02, color: 'green', textAlign: 'justify', fontSize: 16, marginHorizontal: 5, marginVertical: 15 }}>
              {route.params.data.content}
            </Text>


          </View>





          {console.log('ini batas akhir')}
        </ScrollView>
      </SafeAreaView>
    </>

  )
}