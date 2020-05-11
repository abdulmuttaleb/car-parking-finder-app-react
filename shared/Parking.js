import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Parking({item}){
    return(
        <View style={styles.parking}>
            <Text>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    parking:{
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 12,
        marginHorizontal: 24
    }
})
