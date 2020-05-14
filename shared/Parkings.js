import React from 'react'
import { ScrollView, StyleSheet, FlatList } from 'react-native'
import Parking from './Parking'

export default function Parkings({parkings, hours, setHours, setActive}){
    return(
    <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment='center'
        style={styles.parkings}
        data={parkings}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({item}) => <Parking item={item} hours={hours} setHours={setHours} setActive={setActive}/>}
        />
    )
}

const styles = StyleSheet.create({
    parkings:{
        position: 'absolute',
        right:0,
        left: 0,
        bottom:0,
        paddingBottom: 24
    }
})
