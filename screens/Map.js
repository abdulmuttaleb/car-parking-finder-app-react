import React, { Component, useState, useEffect} from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import Header from '../shared/header'
import Parkings from '../shared/Parkings'
import * as theme from '../themes/theme'
export default function Map() {
    const [hours, setHours] = useState({})
    const [active, setActive] = useState(undefined)
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
              style={styles.mapStyle}>
              {parkings.map(parking => (
                  <Marker
                    key={parking.id}
                    coordinate={parking.coordinate}
                    onPress={() => {setActive(parking.id)}}
                    >
                        <View style={[styles.marker, styles.shadow, active === parking.id? styles.active:null]}>
                            <Text style={{color:theme.COLORS.red, fontWeight:'bold', fontFamily:''}}>${parking.price}</Text>
                            <Text style={{color: theme.COLORS.gray}}>  ({parking.free} / {parking.spots})</Text>
                        </View>
                    </Marker>
              ))}
            </MapView>
          <Parkings parkings={parkings} hours={hours} setHours={setHours} setActive={setActive}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.COLORS.white,
    },
    mapStyle:{
        flex: 3
    },
    marker:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'white'
    },
    shadow:{
        elevation: 9,
        shadowColor: theme.COLORS.black,
        shadowOffset:{
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    active:{
        borderColor: theme.COLORS.red
    }
})
