import { View, Text } from 'react-native';
import React from 'react';
import SideMenu from 'react-native-side-menu-updated';
import COLORS from '../constants/colors';
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "./"
import { LinearGradient } from 'expo-linear-gradient';




const home = () => {
  return (
    <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
    </LinearGradient>
    
  )
}

export default home