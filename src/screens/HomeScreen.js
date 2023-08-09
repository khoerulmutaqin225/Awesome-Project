
// BATAS IMPORT
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React, {useState, useEffect}  from 'react'
import { WARNA_ABU_ABU, WARNA_WARNING } from '../Awesome-Project/src/utils/constant'
import Title from '../screens/Title'
import axios from 'axios';
// BATAS IMPORT

// BATAS FUNCTION
const HomeScreen = () => {
  const[data, setData]=useState();
  const getData = async() => {
    try {    
      const res = await axios.get('https://newsapi.org/v2/top-headlines',{
        params:{
          country: 'us',
          category:'business',
          apiKey:'3bb8584f64c9477cb81cc4371fb68336'
        },
        // header
      });
      console.log(res);
      setData(res.data.articles);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() =>{
    getData()
  },[])
// BATAS FUNCTION


  return (
    <>
    <SafeAreaView>
      <Title />
      <ScrollView>
        {data && 
          data.map((item, i)=>{
            return (
            <> 
            <View style={{ flexDirection:'row',marginVertical:10, marginHorizontal:5 }}>
            <Image 
                style={{width:75, height:75 }}
                source={{uri:item.urlToImage}}
              />
              <View style={{ justifyContent: 'space-between'}}>
                <Text style={{alignSelf:'center', fontSize:10, fontWeight:'bold' }}>{item.title}</Text>
                <Text style={{ fontSize:10 }}>{item.author}</Text>
              </View>
            </View>
          </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  </>
  );
}

export default HomeScreen


const styles = StyleSheet.create({})