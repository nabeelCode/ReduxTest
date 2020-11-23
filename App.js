import React,{useState} from 'react'
import {View,TextInput,Text} from 'react-native'
import {Style} from './styles/Style'

export default App = () => {
    const [c,setC] = useState('Enter in Celsius')
    const [f,setF] = useState('Enter in Fahrenheit')
    var [boilStatus,setBoilStatus]=useState('Water will not Boil')

    const fChangeText = (temp) => {
        temp >= 100 ? setBoilStatus('Water will Boil') : setBoilStatus('Water will not Boil')

        if(temp == '')
            return 'Enter in Fahrenheit'
        else{
            return ((temp * 9 / 5) + 32).toString()
        }
    }

    const cChangeText = (temp) => {
        const celsius = (temp - 32) * 5 / 9
        celsius >= 100 ? setBoilStatus('Water will Boil') : setBoilStatus('Water will not Boil')
        if(temp == '')
            return 'Enter in Celcius'
        else{
            return (celsius.toString())
        }
    }  



    return(
        <View style={Style.mainStyle}>
            <View style={Style.inputView}>
                <TextInput 
                    style={Style.inputStyle} 
                    placeholder={c.toString()}
                    onChangeText={(temp)=>{
                        setF(fChangeText(temp))
                    }}
                />
                <View style={Style.line}/>
            </View>
            <View style={Style.inputView}>
                <TextInput 
                    style={Style.inputStyle} 
                    placeholder={f.toString()}
                    onChangeText={(temp)=>{
                        setC(cChangeText(temp))
                    }}
                />
                <View style={Style.line}/>
            </View>
            <View style={Style.boilTextView}>
                <Text>Boiling Status:</Text>
                <Text style={Style.boilTextStyle}> {boilStatus} </Text>
            </View>
        </View>
    )
}