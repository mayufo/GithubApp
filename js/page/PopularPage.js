/**
 * 详情页面
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
import NavigationUtil from '../navigation/NavigationUtil'

type Props = {};
export default class PopularPage extends Component<Props> {
    constructor(props) {
        super(props)
        this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP']
    }

    _getTabs () {
        const tabs = {}
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item}/>,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs
    }
    render() {
        const TabNavigator = createMaterialTopTabNavigator(
            this._getTabs(),
            {
                tabBarOptions: {
                    tabStyle: styles.tabStyle,
                    upperCaseLabel: false,  // 标签是否大写
                    scrollEnabled: true,  // 选项卡滚动
                    style: {
                        backgroundColor: '#678'
                    },
                    indicatorStyle: styles.indicatorStyle,   // 标签指示器样式
                    labelStyle: styles.labelStyle    // 文字样式
                }
            }
            )
        const Top = createAppContainer(TabNavigator)
        return (
            <View style={{flex: 1, marginTop: 30}}>
                <Top/>
            </View>
        )
    }
}

class PopularTab extends Component<Props> {
    render() {
        const {tabLabel} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, 'DetailPage')
                }}>跳转的详情页</Text>
            </View>
        );
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
    tabStyle: {
        minWidth: 50
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
        color: 'red'
    }
});
