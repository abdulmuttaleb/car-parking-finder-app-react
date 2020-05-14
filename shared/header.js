import React from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableWithoutFeedback } from 'react-native'
import * as theme from '../themes/theme'
import { Ionicons} from '@expo/vector-icons'

export default function Header(){
    return(
        <View style={styles.header}>
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <Text style={styles.headerTitle}>Detected Location</Text>
                <Text style={styles.headerLocation}>San Francisco, US</Text>    
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems:'flex-end'}}>
                <TouchableWithoutFeedback>
                    <Ionicons name='ios-menu' size={theme.SIZES.icon * 1.5}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: theme.SIZES.base * 2,
        paddingTop: theme.SIZES.base * 2.5,
        paddingBottom: theme.SIZES.base * 1.5
    },
    headerTitle:{
        color: theme.COLORS.gray
    },
    headerLocation:{
        fontSize: theme.SIZES.font,
        fontWeight: "500",
        paddingVertical: theme.SIZES.base / 3
    }
})