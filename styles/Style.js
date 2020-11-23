import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

export const Style=StyleSheet.create(
    {
        mainStyle:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            paddingRight:wp('5%'),
            paddingLeft:wp('5%')
        },
        inputView:{
            width:wp('96%'),
            backgroundColor:'#eaeaea',
            marginBottom:hp('2%'),
            paddingBottom:hp('2%'),
            paddingTop:hp('1%'),
            
        },
        inputStyle:{
            width:wp('80%'),
            paddingRight:wp('5%'),
            paddingLeft:wp('5%')
        },
        boilTextView:{
            alignSelf:'flex-start'
        },
        line:{
            height:hp('.2%'),
            width:wp('92%'),
            backgroundColor:'black',
            alignSelf:'flex-end',
            marginRight:wp('1%')
        },
        boilTextStyle:{
            fontSize:hp('3%'),
            alignSelf:'flex-start'
        }
    }
)