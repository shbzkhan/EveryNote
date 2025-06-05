import "@bacons/text-decoder/install";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  return (
    <>
      
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
