import React, { Component, useState, useEffect} from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import Header from '../shared/header'
import Parkings from '../shared/Parkings'

export default function Map() {
    const [hours, setHours] = useState({})
    const [parkings, setParkings] = useState([
        {
            id: 1,
            title: "Parking 1",
            price: 5,
            rating: 4.2,
            spots: 20,
            free: 10,
            coordinate: {
              latitude: 37.78735,
              longitude: -122.4334
            },
            description: `Description about this parking lot Open year 2018 Secure with CTV`
          },
          {
            id: 2,
            title: "Parking 2",
            price: 7,
            rating: 3.8,
            spots: 25,
            free: 20,
            coordinate: {
              latitude: 37.78845,
              longitude: -122.4344
            },
            description: `Description about this parking lot Open year 2014 Secure with CTV`
          },
          {
            id: 3,
            title: "Parking 3",
            price: 10,
            rating: 4.9,
            spots: 50,
            free: 25,
            coordinate: {
              latitude: 37.78615,
              longitude: -122.4314
            },
            description: `Description about this parking lot Open year 2019 Secure with CTV`
          }
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
                    coordinate={parking.coordinate}
                    >
                        <View style={[styles.marker, styles.shadow]}>
                            <Text style={{color:'red', fontWeight:'bold', fontFamily:''}}>${parking.price}</Text>
                            <Text style={{color: '#7d818a'}}>  ({parking.free} / {parking.spots})</Text>
                        </View>
                    </Marker>
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
    },
    marker:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 24
    },
    shadow:{
        elevation: 9,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    }
})
