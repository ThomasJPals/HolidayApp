import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './components/Home';
import SettingsScreen from './components/Settings';
import CalendarScreen from './components/Calendar';
import AboutUsScreen from './components/AboutUs';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar />
            <Tab.Navigator
                initialRouteName="Feed"
                activeColor="whitesmoke"
                barStyle={{ backgroundColor: '#043464' }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Calendar"
                    component={CalendarScreen}
                    options={{
                        tabBarLabel: 'Calendar',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="calendar" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="AboutUs"
                    component={AboutUsScreen}
                    options={{
                        tabBarLabel: 'About Us',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account-group-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
