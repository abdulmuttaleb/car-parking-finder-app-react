import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Picker } from 'react-native'
import { Ionicons} from '@expo/vector-icons'
import * as theme from '../themes/theme'
const { width, height } = Dimensions.get('screen')

export default function Parking({item, hours, setHours, setActive}){
    return(
        <TouchableWithoutFeedback onPress={() => {setActive(item.id)}}>
        <View style={[styles.parking, styles.shadow]}>
            <View style={styles.hours}>
                <Text style={styles.hoursTitle}>x {item.spots} {item.title}</Text>
                <View style={{width:100, borderRadius: 6, borderColor: theme.COLORS.gray, borderWidth: 0.5, padding: 4}}>
                    <Text style={{fontSize: theme.SIZES.font }}>05:00 hrs</Text>  
                </View>

            </View>
            <View style={styles.parkingDetails}>
                <View style={styles.parkingInfo}>
                    <View style={styles.parkingIcon}>
                        <Ionicons name='ios-pricetag' size={theme.SIZES.icon} color={theme.COLORS.gray}/>
                        <Text>${item.price}</Text>
                    </View>
                    <View style={styles.parkingIcon}>
                        <Ionicons name='ios-star' size={theme.SIZES.icon} color={theme.COLORS.gray}/>
                        <Text>{item.rating}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buy}>
                        <View style={styles.buyTotal}>
                            <Text style={styles.buyTotalPrice}>${item.price * 2}</Text>
                            <Text style={styles.buyText}>{item.price}x{hours[item.id]} hrs</Text>
                        </View>
                        <View style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}>
                            <Text style={{...styles.buyText, fontSize: theme.SIZES.base * 2}}>></Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    parking:{
        backgroundColor: theme.COLORS.white,
        borderRadius: 6,
        padding: theme.SIZES.base,
        marginHorizontal: theme.SIZES.base * 2,
        width: width - (24*2),
        flexDirection: 'row'
    },
    buy:{
        flex:1,
        flexDirection:"row",
        backgroundColor: theme.COLORS.red,
        paddingHorizontal: theme.SIZES.base * 1.5,
        paddingVertical: theme.SIZES.base,
        borderRadius: 6
    },
    buyText:{
        color: 'white'
    },
    shadow:{
        elevation: 9,
        shadowColor: theme.COLORS.black,
        shadowOffset:{
            width: 0,
            height: theme.SIZES.base,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    hours:{
        flex:1,
        flexDirection:'column',
        marginLeft: theme.SIZES.base /2,
        justifyContent: 'space-evenly'
    },
    hoursTitle:{
        fontSize: theme.SIZES.font,
        fontWeight: '500' 
    },
    parkingDetails:{
        flex:1.5,
        flexDirection: 'row'
    },
    parkingInfo:{
        justifyContent: "space-evenly", 
        marginHorizontal:theme.SIZES.base * 1.5
    },
    parkingIcon:{
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    buyTotal:{
        flex: 1, 
        justifyContent: "center"
    },
    buyTotalPrice:{
        fontSize:theme.SIZES.base * 2,
        color: theme.COLORS.white
    }
})
