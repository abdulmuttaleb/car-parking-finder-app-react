import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Parking from './Parking'

export default function Parkings({parkings}){
    return(
    <ScrollView horizontal contentContainerStyle={styles.parkings}>
        {parkings.map(parking => <Parking item={parking} key={parking.id}/>)}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    parkings:{
        flex: 1,
        position: 'absolute',
        right:20,
        left: 20,
        bottom: 10
    }
})
