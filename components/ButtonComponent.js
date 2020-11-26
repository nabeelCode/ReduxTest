import React from 'react'
import {View,Button} from 'react-native'
import {Style} from '../styles/Style'

export const ButtonComponent = (props) => {
    return(
        <View style={Style.textStyle}>
            <Button title={props.title} onPress={props.onPress}/>
        </View>
    )
}