import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

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
        padding: 24,
        marginHorizontal: 24,
        width: width - (24*2),

    }
})
