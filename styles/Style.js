import {StyleSheet} from 'react-native'
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'

export const Style=StyleSheet.create(
    {
      mainStyle:{
        flex:1
      },
      counterMain:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1
      },
      textStyle:{
        fontSize:hp('7%'),
        paddingRight:wp('10%'),
        paddingLeft:wp('10%'),
        paddingBottom:wp('2%'),
        paddingTop:wp('2%')
      }
    }
  )