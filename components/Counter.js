import React,{useState} from 'react'
import {View,TextInput,Pressable} from 'react-native'
import {Style} from '../styles/Style'
import {useSelector, useDispatch} from 'react-redux'
import {countSelector} from '../redux/CounterSlice'
import {increment,decrement,incrementByAmount,incrementAsync} from '../redux/CounterSlice'
import {TextComponent as Text} from '../components/TextComponent'
import {ButtonComponent as Button} from '../components/ButtonComponent'


export const Counter = () => {
    const dispatch = useDispatch()
    const [count,setCount] = useState('2')
    return(
        <View style = {Style.mainStyle}>
            <View style = { Style.rowStyle }>
                <Pressable onPress={()=>{ dispatch(increment()) }}>
                    <Text text='+'/>
                </Pressable>
                <Text text={useSelector(countSelector)}/>
                <Pressable onPress={()=>{dispatch(decrement())}}>
                    <Text text='-'/>
                </Pressable>
            </View>
            <View style={Style.rowStyle}>
                <TextInput 
                    style={Style.textInputStyle} 
                    placeholder='Number'
                    onChangeText={item => setCount(item)}
                />
            </View>
            <View style={Style.rowStyle}>
                <Button title='Add Amount' onPress={()=>{dispatch(incrementByAmount(Number(count)))}}/>
                <Button title='Add Async' onPress={()=>{dispatch(incrementAsync(Number(count)))}}/>
            </View>
        </View>
    )
}