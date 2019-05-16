/**
 * 实现可配置的导航
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

import PopularPage from '../page/PopularPage'
import MyPage from '../page/MyPage'
import TrendingPage from '../page/TrendingPage'
import FavoritePage from '../page/FavoritePage'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntIcons from 'react-native-vector-icons/AntDesign'
import NavigationUtil from "../navigation/NavigationUtil";

type Props = {};

const TABS = {  // 配置路由页面
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'trending-up'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }

    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <AntIcons
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
}
export default class DynamicTabNavigator extends Component<Props> {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }
    _tabNavigator() {
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS
        const tabs = {PopularPage, TrendingPage, FavoritePage}   // 根据需要定制显示的tab
        const BottomNavigator = createBottomTabNavigator(tabs)
        return createAppContainer(BottomNavigator)
    }

    render() {
        // 缓存外部导航器
        NavigationUtil.navigation = this.props.navigation
        const Tab = this._tabNavigator()
        return <Tab/>
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
