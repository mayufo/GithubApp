/**
 * 详情页面
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {connect}from 'react-redux'
import actions from '../action/index'

type Props = {};
export default class FetchDemoPage extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            showText: ''
        }
    }
    loadDate () {
        // https://api.github.com/search/repositories?q=java
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text()
                }
                throw new Error('Network response was not ok')
            })
            .then(responseText => {
                this.setState({
                    showText: responseText
                })
            })
            .catch(e => {
                this.setState({
                    showText: e.toString()
                })
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Fetch 使用</Text>
                <View style={styles.inputContain}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => {
                            this.searchKey = text
                        }}
                    />
                    <Button title="获取数据"
                            onPress={() => {
                                this.loadDate()
                            }}/>
                </View>
                <Text>
                    {this.state.showText}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    input: {
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10,
        flex: 1,
    },
    inputContain: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

