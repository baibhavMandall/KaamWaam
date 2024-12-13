import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createStyleSheet } from 'react-native-unistyles'
import Colors from '../constants/colors/Colors'

const CustomButtom = (props: any) => {
  return (
    <TouchableOpacity style={[styles.button, props.Style]}>
        <Text style={{ fontSize: 18, color: '#fff' }} >{props.title || 'Button'}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtom

const styles = createStyleSheet({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
})