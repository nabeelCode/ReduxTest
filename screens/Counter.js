import React from 'react'
import {View,Text,Pressable} from 'react-native'
import {Style} from '../styles/Style'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {increase,decrease} from '../redux/actionCounter'
import {connect} from 'react-redux'



export const Counter=(props)=>{
    return(
        <View style={Style.counterMain}>
            <Pressable onPress={()=>{props.decreaseCounter()}}>
                <Text style={Style.textStyle}>-</Text>
            </Pressable>
            <Text style={Style.textStyle,{fontSize:hp('20%')}}>{props.counter.value}</Text>
            <Pressable onPress={()=>props.increaseCounter()}>
                <Text style={Style.textStyle}>+</Text>
            </Pressable>
        </View>
    )
}

const mapStateToProps=(state)=>{
    return {counter:state.counter}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        increaseCounter:()=>{
            dispatch(increase())
        },
        decreaseCounter:()=>{
            dispatch(decrease())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)