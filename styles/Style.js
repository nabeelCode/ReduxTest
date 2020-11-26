import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

export const Style = StyleSheet.create(
    {
        mainStyle : {
            flex : 1,
            justifyContent : 'center',
            alignItems:'center'
        },

        textStyle : {
            paddingLeft:wp('4%'),
            paddingRight:wp('4%'),
            paddingTop:hp('1%'),
            paddingBottom:hp('1%'),
            fontSize : hp('4%')
        },

        rowStyle:{
            flexDirection: 'row',
            paddingBottom:hp('4%')
        },

        countStyle:{
            fontSize: hp('5%')
        },

        textInputStyle:{
            backgroundColor:'#ededed',
            paddingRight:wp('5%'),
            paddingLeft:wp('5%'),
            borderWidth:1
        }
    }
)