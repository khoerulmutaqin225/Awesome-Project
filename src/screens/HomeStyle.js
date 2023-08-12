import { StyleSheet ,Dimensions} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    Text2: {
      fontSize:20,
      fontWeight:'900',         //normal, bold, (900,800 atau bilangan ratusan)   
      fontStyle:'italic',       //normal, italic   
      color: 'green',           // red, green, blue, black   
      fontFamily: 'monospace'   //normal, notoserif, sans-serif, sans-serif-light, sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace        
    },
    TextDetail:{
        flex:1 ,
        alignItems:'center',
        justifyContent:'center'
    },
    kotakmerah:{
        height: '50%', // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        width:'50%',
        backgroundColor:'red'
    },
    kotakkuning:{
        height: 50, // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        width:50,   // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        
        backgroundColor:'blue'
    },
    container:{
        flex: 1, // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        justifyContent:'center',   // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        backgroundColor:'#1e90ff'
    },
    welcome:{
        // flex:1,
        padding:10,
        fontSize: 30, // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        textAlign: 'center', // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        fontFamily: "verdana",   // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        color:'#fff',
        fontWeight:'900', 

    },
    instruction:{
        fontSize: 10, // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        textAlign: 'center', // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        margin: 10, // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        fontFamily: "lucida grande-Bold",   // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        color:'#fff'
    },
    input:{
        // flex:1,
        alignSelf: 'center',
        width: width *0.93,
        backgroundColor: '#fff',
        padding:15,
        marginBottom:10,
        // margin: 10, 
   },
    userBtn:{
        // flex:1,
        backgroundColor: '#FFD700',
        width: width * 0.455,
        padding: 5
        // padding:10,
    },
    btnTxt:{
        fontWeight:'500',
        fontSize: 18, // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        textAlign: 'center' , // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
    },
    btnContainer:{
        // flex:1,
        alignSelf: 'center',
        width: width * 0.93,
        flexDirection: 'row',
        justifyContent: 'space-around', // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu         
    },
  
});

export default styles 