import { Stack} from "expo-router"

export default function _AdminLayout() {
  return (
    <Stack 
          screenOptions={{
           headerShown: false,
           headerTitleAlign: "center",
           headerStyle: {
            backgroundColor: "black",
           },
           headerTintColor: "white",
    }}>


        <Stack.Screen name="user/[id]" options= {{ title: "User Detail"}} />
        <Stack.Screen name="user/profile" options= {{ title: "User Profile"}} />
     
    </Stack>
  )
}

