import { View, StatusBar } from 'react-native'
import { createStyleSheet } from 'react-native-unistyles'
import Animated, { SlideInDown, SlideOutLeft, SlideOutRight } from 'react-native-reanimated'
import { useEffect } from 'react'

export default function SplashScreen(props: any) {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace('AuthStack')
        }, 3000)
    }, [])

  return (
    <View style={styles.container} >
            <Animated.Image source={require('../../../assets/images/KaamWaam.png')} style={styles.image} entering={SlideInDown.duration(1000).delay(500)} />

        <Animated.Text style={styles.text} entering={SlideInDown.duration(1000).delay(1000)} >
            Made in India
        </Animated.Text>

        <StatusBar hidden />
    </View>
  )
}

const styles = createStyleSheet({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        height: 200, 
        width: 200,
    },
    
    text: {
        position: 'absolute',
        bottom: 50,
    }
})
