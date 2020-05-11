import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'

export default function Header(){
    return(
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 0.5,
        justifyContent: 'center'
    }
})