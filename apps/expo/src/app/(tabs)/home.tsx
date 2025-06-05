import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { RichText, Toolbar, useEditorBridge } from '@10play/tentap-editor';

import { category } from '~/constant/category';
import { useState } from 'react';
import icons from '~/constant/icons';

const Home = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('To-Do');
  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent: 'Start editing!',
  });

  return (
    
    <SafeAreaView className='h-full pt-10 bg-white px-4'>
      <View className='flex flex-row  justify-between items-center' >
        <View className=' w-64 bg-gray-200 flex flex-row  items-center rounded-full px-4'>
          <Image
            source={icons.search}
            resizeMode="contain"
            className='w-5 h-5'
          />
          <TextInput
          placeholder='Search anything'
          className='text-lg'
          />
        </View>
        <Image
            source={icons.calendar}
            resizeMode="contain"
            className='w-10 h-10'
          />
          <Image
            source={icons.profile}
            resizeMode="contain"
            className='w-10 h-10'
          />
      </View>
      <View className='flex flex-row justify-between pt-6 pb-2'>
      {
        category.map((cat)=>(
          <TouchableOpacity
          key={cat.id}
          className={`px-4 py-2 rounded-full border ${selectedCategory=== cat.title &&"bg-black"} `}
            onPress={() => setSelectedCategory(cat.title)}
          >
            <Text
            className={`font-semibold ${selectedCategory=== cat.title &&"text-white"}`}
            >{cat.title}</Text>
          </TouchableOpacity>
        ))
      }
      </View>
      <RichText editor={editor} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}
      >
        <Toolbar editor={editor} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home