import { StyleSheet } from 'react-native'
import React from 'react'


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
        height: 50, // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        width:50,
        backgroundColor:'red'
    },
    kotakkuning:{
        height: 50, // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        width:50,   // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu
        
        backgroundColor:'blue'
    },
  
});

export default styles 