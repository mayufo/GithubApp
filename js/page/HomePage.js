/**
 * 主页面
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'

import PopularPage from './PopularPage'
import MyPage from './MyPage'
import TrendingPage from './TrendingPage'
import FavoritePage from './FavoritePage'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntIcons from 'react-native-vector-icons/AntDesign'
import NavigationUtil from "../navigation/NavigationUtil";
import DynamicTabNavigator from "../navigation/DynamicTabNavigator";

type Props = {};
export default class HomePage extends Component<Props> {
    render() {
        // 缓存外部导航器
        NavigationUtil.navigation = this.props.navigation
        return <DynamicTabNavigator/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
