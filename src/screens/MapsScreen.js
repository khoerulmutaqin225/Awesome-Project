import { View, Text,StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

import React from 'react'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });


export default function MapsScreen({ Props, navigation }) {
  return (
    <>
      {console.log('Anda Masuk ke login screen')}
      {/* alt + arah untuk memindahkan */}
      <View style={styles.container}>
        <MapView
          // pr ovider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    </>
  )
}
