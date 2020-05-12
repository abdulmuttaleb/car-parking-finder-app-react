import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { Ionicons} from '@expo/vector-icons'

const { width, height } = Dimensions.get('screen')

export default function Parking({item, hours}){
    return(
        <View style={styles.parking}>
            <View style={{flex:1, flexDirection:'column'}}>
                <Text style={{fontSize: 16}}>x {item.spots} {item.title}</Text>
                <View style={{width:100, borderRadius: 6, borderColor: 'grey', borderWidth: 0.5, padding: 4}}>
                    <Text style={{fontSize: 16}}>05:00 hrs</Text>  
                </View>

            </View>
            <View style={{flex:1.5, flexDirection: 'row'}}>
                <View style={{flex: 1, justifyContent: "center", marginHorizontal:24}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems: "center"}}>
                        <Ionicons name='ios-pricetag' size={16} color="#7d818a"/>
                        <Text>${item.price}</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems: "center"}}>
                        <Ionicons name='ios-star' size={16} color="#7d818a"/>
                        <Text>{item.rating}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buy}>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={{...styles.buyText,fontSize:24}}>${item.price * 2}</Text>
                            <Text style={styles.buyText}>{item.price}x{hours[item.id]} hrs</Text>
                        </View>
                        <View style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}>
                            <Text style={{...styles.buyText, fontSize:24}}>></Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parking:{
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 12,
        marginHorizontal: 24,
        width: width - (24*2),
        flexDirection: 'row'
    },
    buy:{
        flex:1,
        flexDirection:"row",
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 6
    },
    buyText:{
        color: 'white'
    }
})
