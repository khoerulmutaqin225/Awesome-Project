import { Text, View, TouchableOpacity, Dimensions, TextInput, Platform } from 'react-native'
import React,{Component} from 'react'
import styles from './HomeStyle'

const { width, height } = Dimensions.get('window');

const instruction = Platform.select({
  ios:' press Cmd +R to reload. \n' + 'cmd+D or shake for dev menu',
  android:
    ' Double tap Ron your keyboard to reload to reload. \n' +
     'shake or press menu button for dev menu'
})


// type Props ={};

// class LoginScreen  extends Component {
//   static navigationOptions = {header:null}
// }

export default function LoginScreen({ Props,navigation }) {
  // static  
  navigationOptions ={
    header: null
  } 

  return (
    <>
      {console.log('Anda Masuk ke login screen')}
      {/* alt + arah untuk memindahkan */}
      <View style={styles.container}>
        <Text style={styles.welcome} >Login My App</Text>
        {/* <Text  >{instruction}</Text> */}
        {/* <Text style={styles.instruction} >To get started, edit app.js </Text> */}
        
        <TextInput
          style={styles.input}
          placeholder='Username'
          />
        <TextInput
          style={styles.input}
          placeholder='Password'
        />
        <View style={{
          // flex:1,
          alignSelf: 'center',
          width: width * 0.93,
          flexDirection: 'row',
          justifyContent: 'space-around', // 50 (artinya 50 pixel) atau 50% berarti persentase dari layar itu         
        }}>
          <TouchableOpacity 
            style={styles.userBtn}
            onPress={() => navigation.navigate('News')}
            // onPress={() => alert("Login Works")}
          >
            <Text style={styles.btnTxt}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.userBtn}
            onPress={() => alert("The 'Register' button works, but it has not been defined yet.")}
          >
          <Text style={styles.btnTxt}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}