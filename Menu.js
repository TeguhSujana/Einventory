import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Main';
import upload from './upload';
import Login from './Login';


const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            upload:upload,
            Login:Login,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);