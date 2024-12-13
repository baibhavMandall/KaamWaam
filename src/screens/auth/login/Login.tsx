import { StatusBar, Text, View } from 'react-native'
import React from 'react'
import { createStyleSheet } from 'react-native-unistyles'
import Colors from '../../../constants/colors/Colors'
import CustomButtom from '../../../components/CustomButtom'
import CustomInput from '../../../components/CustomInput'
import LottieView from 'lottie-react-native'

const Login = () => {
  return (
    <View style={styles.container}>

      <View style={styles.lottie}>
        <LottieView
          source={require('../../../assets/animations/Login.json')}
          loop
          autoPlay
          style={{ width: 300, height: 300 }}
        />
      </View>

      <View style={styles.title}>

        <View>
          <Text style={{ fontSize:  25 }}>Welcome to</Text>
          <Text style={{ color: Colors.primary, fontSize:  30, fontWeight: 'bold' }}>Kaam Waam</Text>
        </View>
        
        <Text style={{ fontSize: 17 }}>Sign in or log in using your mobile number</Text>

      </View>

      <View style={styles.inputView}>
        <CustomInput Placeholder={'Mobile number'} Style={{ backgroundColor: '#fff', borderColor: Colors.borderColor, width: '95%' }} Mode={'numeric'} />
      </View>

      <View style={styles.bottomView}>

        <CustomButtom title={'Get Verification Code'} Style={{ backgroundColor: Colors.primary, borderColor: Colors.borderColor, width: '95%' }}  />

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Text style={{ fontSize: 12 }}>KIndly read all the</Text>
          <Text style={{ fontSize: 10, color: Colors.primary }}>Terms & Conditions</Text>
          <Text style={{ fontSize: 10, color: Colors.primary }}>Privacy policy</Text>
        </View>

      </View>

      <StatusBar hidden/>
    </View>
  )
}

export default Login

const styles = createStyleSheet({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FD',
  },

  lottie: {
    backgroundColor: '#fff',
    height: '35%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    height: '20%',
    width: '100%',
    justifyContent: 'flex-end',
    paddingLeft: '10%',
    gap: '5%',
  },

  inputView: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    paddingVertical: '8%',
    paddingHorizontal: '10%',
  },

  bottomView: {
    height: '25%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    gap: 30
  }
})