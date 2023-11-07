import { Tabs } from "expo-router";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";
import React from "react";
export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0AA996",
        },
        tabBarLabelStyle: {
          color: "#ffc966",
          focused: "white",
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 10, color: focused ? "#ffc966": "white"  }}>
              Browse
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={28}
              style={{ marginBottom: -3 }}
              color={focused ? "#ffc966": "white"}
            />
          ),
        }}
        name="random"
      />
      <Tabs.Screen
        name="favourites"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 10, color: focused ? "#ffc966": "white" }}>
              Favourites
            </Text>
          ),
          title: "favourites",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={28}
              style={{ marginBottom: -3 }}
              name="heart"
              color={focused ? "#ffc966": "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 10, color: focused ? "#ffc966": "white" }}>
              Search
            </Text>
          ),
          title: "search",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={28}
              style={{ marginBottom: -3 }}
              name="search"
              color={focused ? "#ffc966": "white"}
            />
          ),
        }}
        
      />
    </Tabs>
  );
};
