import React, { Component, useState} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import Header from '../shared/header'
import Parkings from '../shared/Parkings'

export default function Map() {
    const [parkings, setParkings] = useState([
        {id: 1, title: 'Parking 1', price: 5, rating: 4.2, spots: 20, free: 1},
        {id: 2, title: 'Parking 2', price: 6, rating: 3.5, spots: 15, free: 13},
        {id: 3, title: 'Parking 3', price: 4, rating: 5, spots: 10, free: 8},
        {id: 4, title: 'Parking 4', price: 3, rating: 3, spots: 23, free: 12},
        {id: 5, title: 'Parking 4', price: 3, rating: 3, spots: 23, free: 12},
        {id: 6, title: 'Parking 4', price: 3, rating: 3, spots: 23, free: 12},
    ])

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
          <Parkings parkings={parkings}/>
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
