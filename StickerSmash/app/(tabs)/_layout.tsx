import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "StickerSmash",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen name="about" />
      <Tabs.Screen name="+not-found" options={{}} />
    </Tabs>
  );
}
