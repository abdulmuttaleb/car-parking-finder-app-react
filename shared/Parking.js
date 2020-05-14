import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Picker } from 'react-native'
import { Ionicons} from '@expo/vector-icons'
import * as theme from '../themes/theme'
const { width, height } = Dimensions.get('screen')

export default function Parking({item, hours, setHours, setActive}){
    return(
        <TouchableWithoutFeedback onPress={() => {setActive(item.id)}}>
        <View style={[styles.parking, styles.shadow]}>
            <View style={{flex:1, flexDirection:'column'}}>
                <Text style={{fontSize: 16}}>x {item.spots} {item.title}</Text>
                {/* <Picker
                    selectedValue={hours[item.id]}
                    style={{height: 50, widht: 200}}
                    onValueChange={(itemValue, itemIndex) => {
                        setHours({hours:{...hours, [item.id]: itemValue}})
                        console.log(itemValue)
                    }}
                >
                    <Picker.Item label="01:00" value={1}/>
                    <Picker.Item label="02:00" value={2}/>
                    <Picker.Item label="03:00" value={3}/>
                    <Picker.Item label="04:00" value={4}/>
                    <Picker.Item label="05:00" value={5}/>
                    <Picker.Item label="06:00" value={6}/>
                </Picker> */}
                <View style={{width:100, borderRadius: 6, borderColor: 'grey', borderWidth: 0.5, padding: 4}}>
                    <Text style={{fontSize: 16}}>05:00 hrs</Text>  
                </View>

            </View>
            <View style={{flex:1.5, flexDirection: 'row'}}>
                <View style={{flex: 1, justifyContent: "center", marginHorizontal:24}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems: "center"}}>
                        <Ionicons name='ios-pricetag' size={16} color={theme.COLORS.gray}/>
                        <Text>${item.price}</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems: "center"}}>
                        <Ionicons name='ios-star' size={16} color={theme.COLORS.gray}/>
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
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    parking:{
        backgroundColor: theme.COLORS.white,
        borderRadius: 6,
        padding: 12,
        marginHorizontal: 24,
        width: width - (24*2),
        flexDirection: 'row'
    },
    buy:{
        flex:1,
        flexDirection:"row",
        backgroundColor: theme.COLORS.red,
        padding: 12,
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
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    }
})
