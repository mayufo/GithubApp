/**
 * 详情页面
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


type Props = {};
export default class MyPage extends Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>DetailPage</Text>
                <Button title="改变主题色"
                        onPress={() => {
                            navigation.setParams({
                                theme: {
                                    tintColor: 'yellow',
                                    updateTime: new Date().getTime()
                                }
                            })
                        }}/>
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
