import { Text, TextInput, View } from 'react-native'
import { createStyleSheet } from 'react-native-unistyles'
import React from 'react'

const CustomInput = (props: any) => {
  return (
    <View style={[styles.Container, props.Style]}>
      {props.Icon}

      <TextInput 
          placeholder={props.Placeholder || 'Input'}
          placeholderTextColor={props.PlaceholderTextColor  || '#000'}
          inputMode={props.Mode ||'text'}
          style={{color: '#000', width: '80%' }}
      />
    </View>
  )
}

export default CustomInput

const styles = createStyleSheet({
    Container: {
        flexDirection: 'row', 
        alignItems: "center", 
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '90%',
        gap: 10
    }
})