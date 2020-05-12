import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Parking from './Parking'

export default function Parkings({parkings, hours}){
    return(
    <ScrollView 
        horizontal 
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={styles.parkings}
        >
        {parkings.map(parking => <Parking item={parking} key={parking.id} hours={hours}/>)}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    parkings:{
        position: 'absolute',
        right:0,
        left: 0,
        bottom:0,
        paddingBottom: 12
    }
})
