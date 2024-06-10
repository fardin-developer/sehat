import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function _layout() {
  const Colors = {
    bgColor: '#f8f8f8' 
  };

  return (
    <Tabs screenOptions={{
        tabBarStyle: {
            backgroundColor: Colors.bgColor
        }
    }}>
        <Tabs.Screen 
          name='index' 
          options={{ 
            tabBarIcon: ({ color }) => (
              <Ionicons name='home-outline' size={28} color={color} />
            )
          }}
        />
        <Tabs.Screen 
          name='doctoravailability' 
          options={{ 
            tabBarIcon: ({ color }) => (
              <Ionicons name='medkit-outline' size={28} color={color} />
            )
          }} 
        />
        <Tabs.Screen 
          name='search' 
          options={{ 
            tabBarIcon: ({ color }) => (
              <Ionicons name='search-outline' size={28} color={color} />
            )
          }} 
        />
        <Tabs.Screen 
          name='profile' 
          options={{ 
            tabBarIcon: ({ color }) => (
              <Ionicons name='person-outline' size={28} color={color} />
            )
          }} 
        />
    </Tabs>
  );
}
