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
import {BackHandler} from "react-native";
import {NavigationActions} from "react-navigation";
import {connect}from 'react-redux'


type Props = {};
class HomePage extends Component<Props> {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        //if (nav.index === 0) {
        if (nav.routes[1].index === 0) {//如果RootNavigator中的MainNavigator的index为0，则不处理返回事件
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        // 缓存外部导航器
        NavigationUtil.navigation = this.props.navigation
        return <DynamicTabNavigator/>
    }
}



const mapStateToProps = state => ({
  nav: state.nav
})


export default connect(mapStateToProps)(HomePage)

