import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="listening"
        options={{
          title: "Listening",
          tabBarIcon: ({ color, size }) => (<MaterialIcons name='headphones' size={size} color={color} />)
        }} />
      <Tabs.Screen
        name="speaking"
        options={{
          title: "Speaking",
          tabBarIcon: ({ color, size }) => (<MaterialIcons name='mic' size={size} color={color} />)
        }} />
      <Tabs.Screen
        name="vocabulary"
        options={{
          title: "Vocabulary",
          tabBarIcon: ({ color, size }) => (<MaterialIcons name='book-online' size={size} color={color} />)
        }} />
        <Tabs.Screen
        name="writing"
        options={{
          title: "Writing",
          tabBarIcon: ({ color = "black", size = 24 }) => (<Feather name="pen-tool" size={size} color={color} />)
        }} />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color = "black", size = 24 }) => (<Feather name="user" size={size} color={color} />)
        }} />
    </Tabs>
  );
}