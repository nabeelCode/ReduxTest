import React from 'react'
import {View,TextInput} from 'react-native'

export const TemperatureInput = (props) => {
    return(
        <View style={Style.inputView}>
            <TextInput 
                style={Style.inputStyle} 
                placeholder={c.toString()}
                onChangeText={(temp)=>{
                    setF(changeText(temp,"celsius"))
                }}
            />
            <View style={Style.line}/>
        </View>
    )
}