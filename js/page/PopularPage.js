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
    render() {
        const TabNavigator = createMaterialTopTabNavigator({
            PopularTab1: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'Tab1'
                }
            },
            PopularTab2: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'Tab2'
                }
            },
            PopularTab3: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'Tab3'
                }
            }
        })
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
});
