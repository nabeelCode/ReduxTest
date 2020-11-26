import React from 'react'
import {View,Text} from 'react-native'
import {Style} from '../styles/Style'

export const TextComponent = (props) => {
    return(
        <View>
            <Text style={Style.textStyle}>{props.text}</Text>
        </View>
    )
}