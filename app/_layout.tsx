import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack 
          screenOptions={{
           headerShown: true,
           headerTitleAlign: "center",
           headerStyle: {
            backgroundColor: "black",
           },
           headerTintColor: "white",
    }}>

        <Stack.Screen name="(tabs)" options={{ headerShown : false }} />
        <Stack.Screen name="(admin)" options={{ headerShown : false }} />
        <Stack.Screen name="index" options={{title: "Home"}} />
        <Stack.Screen name="contact" options={{title: "Contact"}} />
        <Stack.Screen name="+not-found" options={{title: "Not Found"}} />
        <Stack.Screen name="textinputdmo" options={{title: "Form",headerShown: true}} />
        <Stack.Screen name="switchdemo" options={{title: "Switch",headerShown: true}} />
        <Stack.Screen name="flatlistdemo" options={{title: "Flatlistdemo",headerShown: true}} />
        <Stack.Screen name="profile" options={{title: "Profile",headerShown: true}} />


                
    
    </Stack>
  )
}
