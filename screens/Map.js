import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import Header from '../shared/header'
export default function Map() {
    return (
        <View style={styles.container}>
            <Header />
          <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={styles.mapStyle}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    mapStyle:{
        flex: 3
    }
})
