import { router } from 'expo-router';
import { useEffect } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '~/components/Button';
import icons from "~/constant/icons"

 import * as Google from 'expo-auth-session/providers/google';

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPO_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID,
    androidClientId: process.env.ANDROID_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      router.replace("/home")
    }
  }, [response]);

  return (
    <SafeAreaView className='h-full'>
      <ScrollView contentContainerClassName='h-full w-full px-4 py-10 flex justify-between'
      showsVerticalScrollIndicator={false}
      >
      <View className=''>
        <View>
          <Text className='text-4xl font-bold'>EveryNote</Text>
        </View>
        <View>
        <Text className='text-gray-400'>Capture your thoughts, your way</Text>
        <Text className='text-gray-400'>Text, voice, or media- EveryNote make it effortless to record your day and reflect with AI-powered clarity</Text>

        </View>
      </View>
    <View className="p-4 flex gap-5">
      <CustomButton
        title='Log in with Google'
        icons={icons.google}
        containerStyle='bg-white'
        textStyle='text-black'
        handlePress={()=>promptAsync()}
      />
      <CustomButton
        title='Log in with Github'
        icons={icons.apple}
        tintColor="white"
        handlePress={()=>promptAsync()}
      />
      <Text className='text-md text-center mt-6 text-gray-400'>By continuing, you agree to out Terms of service and privacy Policy</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
