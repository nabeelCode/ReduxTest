import React,{useState} from 'react'
import {View,TextInput,Text} from 'react-native'
import {Style} from './styles/Style'

export default App = () => {
    const [c,setC] = useState('Enter in Celsius')
    const [f,setF] = useState('Enter in Fahrenheit')
    const [boilStatus,setBoilStatus]=useState('Water will not Boil')
    

    const changeText = (temp,mode) => {
        var celsiusToBoil = 0
        var temperature = 0
        /**
         *  parameters : temp - onChangeText data, mode - to check whether the temperature is given
            in celsius field or fahrenheit field.
         *  local data celsiusToBoil includes celsius data to check whether water will boil or not
         *  local data temperature in celsius mode will calculate correponding fahrenheit and celsius 
         *  in fahrenheit mode will calculate corresponsing celsius data.
         */
        if(temp == '')
            return 'Enter in Fahrenheit'
        else{
            if(mode == 'celsius'){
                celsiusToBoil = temp
                temperature = ((temp * 9 / 5) + 32).toString()
            }
            else if(mode == 'fahrenheit'){
                celsiusToBoil = (temp - 32) * 5 / 9
                temperature = celsiusToBoil.toString() 
            }
            celsiusToBoil >= 100 ? setBoilStatus('Water will Boil') : setBoilStatus('Water will not Boil')
            return temperature
        }
    }



    return(
        <View style={Style.mainStyle}>
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
            <View style={Style.inputView}>
                <TextInput 
                    style={Style.inputStyle} 
                    placeholder={f.toString()}
                    onChangeText={(temp)=>{
                        setC(changeText(temp,"fahrenheit"))
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