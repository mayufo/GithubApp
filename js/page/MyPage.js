/**
 * 详情页面
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect}from 'react-redux'
import actions from '../action/index'

type Props = {};
class MyPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>DetailPage</Text>
                <Button title="改变主题色"
                        onPress={() => {
                            // navigation.setParams({
                            //     theme: {
                            //         tintColor: 'red',
                            //         updateTime: new Date().getTime()
                            //     }
                            // })
                            this.props.onThemeChange('#998613')
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


const mapStateToProps = state => {
    return {}
}

const mapDispatchTopProps = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})


export default connect(mapStateToProps, mapDispatchTopProps)(MyPage)
