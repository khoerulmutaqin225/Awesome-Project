
// BATAS IMPORT
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { WARNA_ABU_ABU, WARNA_WARNING } from '../Awesome-Project/src/utils/constant'
import Title from './Title'
import axios from 'axios';
// BATAS IMPORT

// BATAS FUNCTION
const Home = ({ navigation }) => {
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
    getData()
  }, [])
  // BATAS FUNCTION


  return (
    <>
      {console.log('Anda Masuk ke News Screen')}
      {console.log(data)}
      <SafeAreaView style={{ flex: 1 }}>
        <Title />
        <ScrollView style={{ flex: 1 }}>
          {data &&
            data.map((item, i) => {
              return (
                <View>
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
                        style={{ width: 75, height: 75 }}
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
            })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Home


const styles = StyleSheet.create({})