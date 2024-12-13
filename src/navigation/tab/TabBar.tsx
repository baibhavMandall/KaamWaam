import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator>
        <Tab.Screen name={'Home'} component={Home}  />
    </Tab.Navigator>
  )
}