import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {Component, useState} from 'react';
import { longPressHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/LongPressGestureHandler';
// import styles from './HomeStyle'

const {width, height} = Dimensions.get('window');

export default function list() {
  // useState adalah pendeklarasian sebuah array dimana dapat dipanggil dengan fungstion mapping dan harus berisi vale dankey
  const [fruit, setFruit] = useState([
    {name: 'Apel', key: 'apel'},
    {name: 'Pisang', key: 'pisang'},
    {name: 'Jeruk', key: 'jeruk'},
    {name: 'Mangga', key: 'mangga'},
    {name: 'Semangka', key: 'semangka'},
    {name: 'Melon', key: 'melon'},
    {name: 'Kiwi', key: 'kiwi'},
    {name: 'Anggur', key: 'anggur'},
    {name: 'Pepaya', key: 'pepaya'},
    {name: 'Pir', key: 'pir'},
    {name: 'Ceri', key: 'ceri'},
    {name: 'Nanas', key: 'nanas'},
    {name: 'Stroberi', key: 'stroberi'},
    {name: 'Persik', key: 'persik'},
    {name: 'Plum', key: 'plum'},
    {name: 'Alpukat', key: 'alpukat'},
    {name: 'Jambu biji', key: 'jambubiji'},
    {name: 'Delima', key: 'delima'},
    {name: 'Markisa', key: 'markisa'},
    {name: 'Durian', key: 'durian'},
    {name: 'Rambutan', key: 'rambutan'},
    {name: 'Salak', key: 'salak'},
    {name: 'Buah naga', key: 'buahnaga'},
    {name: 'Kesemek', key: 'kesemek'},
    {name: 'Belimbing', key: 'belimbing'},
    {name: 'Labu', key: 'labu'},
    {name: 'Leci', key: 'leci'},
    {name: 'Manggis', key: 'manggis'},
    {name: 'Nangka', key: 'nangka'},
    {name: 'Srikaya', key: 'srikaya'},
  ]);

  const pressHandler =(name) =>{
    console.log(name);
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={fruit}
        renderItem={({item}) =>(
        <View>
          <TouchableOpacity onPress={()=>pressHandler(item.name)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        </View>
        )}
      />
      {/* <ScrollView>
        {fruit.map(item => {
          return (
            <Vie  wkey={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
  item: {
    fontSize: 15,
    backgroundColor: 'cyan',
    marginTop: 5,
    padding: 10,
  },
});
