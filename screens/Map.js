import React, { Component, useState, useEffect} from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import Header from '../shared/header'
import Parkings from '../shared/Parkings'

export default function Map() {
    const [hours, setHours] = useState({})
    const [parkings, setParkings] = useState([
        {id: 1, title: 'Parking 1', price: 5, rating: 4.2, spots: 20, free: 1,cooridnate:{latitude: 37.78825, longitude: -122.4324}},
        {id: 2, title: 'Parking 2', price: 6, rating: 3.5, spots: 15, free: 13, cooridnate:{latitude:37.788, longitude:-122.432}},
        {id: 3, title: 'Parking 3', price: 4, rating: 5, spots: 10, free: 8, cooridnate:{latitude:37.78835, longitude:-122.4334}},
        {id: 4, title: 'Parking 4', price: 3, rating: 3, spots: 23, free: 12, cooridnate:{latitude:37.78845, longitude:-122.4344}},
        {id: 5, title: 'Parking 5', price: 3, rating: 3, spots: 23, free: 12, cooridnate:{latitude:37.78855, longitude:-122.4354}},
        {id: 6, title: 'Parking 6', price: 3, rating: 3, spots: 23, free: 12, cooridnate:{latitude:37.78865, longitude:-122.4364}},
    ])

    useEffect(() => {
        const hours = {}
        parkings.map( parking => {
            {hours[parking.id] = 1}
        })
        setHours({hours})
    })

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
          >
              {parkings.map(parking => (
                  <Marker
                    key={parking.id}
                    coordinate={parking.cooridnate}
                    title={parking.title}
                    />
              ))}
            </MapView>
          <Parkings parkings={parkings} hours={hours} setHours={setHours}/>
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
