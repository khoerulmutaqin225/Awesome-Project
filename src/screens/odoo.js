// BATAS IMPORT
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { WARNA_ABU_ABU, WARNA_WARNING } from '../Awesome-Project/src/utils/constant'
import Title from './Title'
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// BATAS IMPORT


// {data ? (
//   data.map((item, i) => { #your code
//     ): (
//       <><Text>Loading....</Text></>
//        )
//   }

// Cara membacanya, Jika ada data lakukan mappping pada program, jika belum ada tampilkan tulisan teks

// BATAS FUNCTION
const odoo = ({ navigation }) => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          category: 'business',
          apiKey: '3bb8584f64c9477cb81cc4371fb68336'
        },
        // header
      });
      // console.log(res);
      setData(res.data.articles);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setTimeout(()=>{
    getData();
    }, 3000);
  }, [])
  // 3000 artinya 3 second
  // BATAS FUNCTION


  return (
    <>
      {console.log('Anda Masuk ke News Screen')}
      {console.log(data)}
      <SafeAreaView style={{ flex: 1 }}>
        <Title />
        <ScrollView style={{ flex: 1 }}>
          <View>
            {data ? (
              data.map((item, i) => {
                return (
                  <View key={i}>
                    <TouchableOpacity

                      style={{ flex: 1 }}
                      // data: item (berfungsi agar data yang dikirim berdasarkan id)
                      onPress={() => navigation.navigate('Home', { data: item })}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 10,
                          marginHorizontal: 5,
                          backgroundColor: 'white',
                          flex: 1
                        }}>
                        <Image
                          style={{ borderRadius: 10, width: 75, height: 75 }}
                          source={{ uri: item.urlToImage }}
                        />
                        <View style={{ justifyContent: 'space-between' }}>
                          <Text style={{ alignSelf: 'center', fontSize: 10, fontWeight: 'bold' }}>{item.title}</Text>
                          <Text style={{ fontSize: 10 }}>{item.author}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              // <><Text>Loading....</Text></>
              <SkeletonPlaceholder >

                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>

                  <View style={{ width: 100, height: 100, borderRadius: 10 }} />

                  <View style={{ marginLeft: 20 }}>
                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                    <View
                      style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }} />
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>

                  <View style={{ width: 100, height: 100, borderRadius: 10 }} />

                  <View style={{ marginLeft: 20 }}>
                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                    <View
                      style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }} />
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>

                  <View style={{ width: 100, height: 100, borderRadius: 10 }} />

                  <View style={{ marginLeft: 20 }}>
                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                    <View
                      style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }} />
                  </View>
                </View>

              </SkeletonPlaceholder>
              // <><Text>Loading....</Text></>
              //   <SkeletonPlaceholder borderRadius={4}>
              //   <SkeletonPlaceholder.Item 
              //     flexDirection="row" 
              //     alignItems="center"
              //     >
              //     <SkeletonPlaceholder.Item 
              //       width={60}
              //       height={60} 
              //       borderRadius={50}
              //     />
              //     <SkeletonPlaceholder.Item marginLeft={20}>
              //       <SkeletonPlaceholder.Item 
              //         width={120} 
              //         height={20} 
              //       />
              //       <SkeletonPlaceholder.Item 
              //         marginTop={6} 
              //         width={80} 
              //         height={20} 
              //       />
              //     </SkeletonPlaceholder.Item>
              //   </SkeletonPlaceholder.Item>
              // </SkeletonPlaceholder>
            )
            }

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default odoo


const styles = StyleSheet.create({})