import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
      <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Items',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome name="list-ul" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="camera"
          options={{
            title: 'Camera',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome name="camera" size={24} color={color} />,
          }}
        />
      </Tabs>
    );
  }