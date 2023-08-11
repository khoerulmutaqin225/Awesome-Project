
import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function VerifDetailScreen({ navigation }) {
  return (
    <>
      {console.log('Anda Masuk ke Verif screen')}
      {/* <View style={{ flex:1 , alignItems:'center', justifyContent:'center'}}>  
        <TouchableOpacity onPress={()=>navigation.navigate('News')}>
            <Text>Verif Detail Screen</Text>
        </TouchableOpacity>
    </View> */}

      {/* Latihan 1 {flex} */}
      {/* Parent bernilai 1 artinya layar dibaca menjadi satu kesatuan */}
      {/* Child terdiri dari 4 anak, dimana ada yang bernilai 1,2,3,4
    artinya semua anak jika dijumlahkan menjadi 10,
    so = anak pertama {1/10}
    so = anak kedua {2/10}
    so = anak pertama {3/10}
    so = anak pertama {4/10}
     */}

      {/* Batas atas latihan 1 */}

      {/* <View style={{ flex:1 }}> 
      <View style={ { flex:1, backgroundColor:'red' }}></View>
      <View style={ { flex:2, backgroundColor:'green' }}></View>
      <View style={ { flex:3, backgroundColor:'blue' }}></View>
      <View style={ { flex:4, backgroundColor:'yellow' }}></View>
    </View> */}

      {/* Batas bawah latihan 1 */}



      {/* Latihan 2 {flexDirection}*/}
      {/* 
          # flexDirection ditempatkan pada parent atau container
          # flexDirection bernilai default = column 
          # atribut flexDirection = row-reverse, ros, solumn, column-reverse,

      */}

      {/* Batas atas latihan 2 */}

      {/* <View style={{ flex: 1, flexDirection: 'row'}}>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
      </View> */}

      {/* Batas atas latihan 2 */}


      
      {/* Latihan 3 {justifyContent}*/}
      {/* 
          # justifyContent ditempatkan pada parent atau container
          # justifyContent bernilai default = flex-start 
          # atribut justifyContent = flex-start, flex-end, center,, space-beetween, space-around, space-evenly

      */}

      {/* Batas atas latihan 3 */}

      {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
      </View> */}

      {/* Batas atas latihan 3 */}

      
      {/* Latihan '4' {Align Items}*/}
      {/* 
          # Align Items sama seperti justifyContent cuma beda absis
          # jika Flex direction row, justifyContent (absis == x)
          # jika Flex direction column, justifyContent (absis == y)
          # jika Flex direction row, AlignItems (absis == y)
          # jika Flex direction column, AlignItems (absis == x)          
          # Align Items ditempatkan pada parent atau container
          # Align Items bernilai default = stretch
          # atribut Align Items = stretch, flex-start, flex-end, center, baseline
      */}

      {/* Batas atas latihan '4' */}

      {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems:'center' }}>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
      </View> */}

      {/* Batas atas latihan '4' */}


      {/* Latihan 5 {alignSelf}*/}
      {/* 
          # alignSelf mirip alignItems 
            @alignItems ditempatkan di parent
            @alignSelf ditempatkan di anak
          # alignSelf bernilai default = column 
          # atribut alignSelf = stretch, flex-start, flex-end, center, baseline
   
      */}

      {/* Batas atas latihan 5 */}

       {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green', alignSelf:'center' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
      </View> */}

      {/* Batas atas latihan 5 */}


      {/* Latihan 6 {flexWrap}*/}
      {/* 
          # flexWrap ditempatkan di parent
          # flexWrap bernilai default = no-wrap 
          # atribut flexWrap = wrap, wrap-reverse, no-wrap

      */}

      {/* Batas atas latihan 6 */}

       <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>

        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'black' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'orange' }}></View>

        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'black' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'orange' }}></View>

        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'black' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'orange' }}></View>

        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'black' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'orange' }}></View>

        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'black' }}></View>
        <View style={{ width: 50, height: 50, margin: 5, backgroundColor: 'orange' }}></View>



      </View>

      {/* Batas atas latihan 6 */}




    </>
  )
}