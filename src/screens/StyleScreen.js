import {Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import styles from './HomeStyle'

export default function StyleScreen( ) {
  return (
    // <>
    <View >
            {/* Stylesheet 1 folder  */}
            <Text style={style.Text1}>Halo 1</Text>
            <Text style={style.Text1}>Halo 2</Text>
            <Text style={styles.Text2}>Halo 3</Text>
            <View style={styles.kotakmerah}></View>
            <View style={styles.kotakkuning}></View>
    </View>
  );
}

const style = StyleSheet.create({
  Text1: {
    fontSize:20,
    color: 'red'
  }

});

