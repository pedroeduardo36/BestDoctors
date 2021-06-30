import React from 'react';
import {
    HomeScreen,
    SearchScreen,
    ProfileScreen,
    HistoryScreen,
    DoctorDetailScreen,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBar} from '~/components';
import {createStackNavigator} from '@react-navigation/stack';

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBar={props => <BottomBar {...props} />}
            headerMode="none">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export const PatientNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={BottomNavigator} />
            <Stack.Screen name="DoctorDetail" component={DoctorDetailScreen} />
        </Stack.Navigator>
    );
};
