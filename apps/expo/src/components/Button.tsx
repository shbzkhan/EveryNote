import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const CustomButton = ({title="", containerStyle="", tintColor, loading=false, icons, textStyle="", logo=true, handlePress}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    disabled={loading}
    className={`w-full min-h-[52px] bg-black rounded-full flex-row gap-3 justify-center items-center ${containerStyle} ${loading && "opacity-50"}`}
    >
       
            <Image
             source={icons}
            resizeMode="contain"
            tintColor={tintColor}
            className='w-6 h-6'
        
            />
    
        <Text className={` font-rubik-bold text-lg font-semibold ${textStyle?"":"text-white"}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton