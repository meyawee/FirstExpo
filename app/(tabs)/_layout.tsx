import { Tabs } from "expo-router";
import TabBarIcon from "@/components/navigation/TabBarIcon ";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "grey",
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", color: "black" },
        tabBarStyle: {   backgroundColor: "white", height:90, marginBottom: 0,paddingTop: 5,
        },      

        tabBarActiveTintColor: "black",
        tabBarInactiveBackgroundColor: "white",
    }}>
    <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({color,focused}) => (
            <TabBarIcon name="home" color={color} />
        ),
      }}
    />
    <Tabs.Screen name="contact" options={{
        title: "Contact",
        tabBarIcon: ({color,focused}) => (
            <TabBarIcon name="phone" color={color} />
        ),
      }}
    />
    <Tabs.Screen name="(admin)" options={{
        title: "Admin",
        tabBarIcon: ({color,focused}) => (
            <TabBarIcon name="users" color={color} />
        ),
      }}
    />
    </Tabs>

      
   );
}

