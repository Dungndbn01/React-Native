'user strict'

import React, { Component } from 'react';
import { Text, View, Navigator, TouchableOpacity } from 'react-native';

import SearchView from './SearchView.js'

export default class HomeView extends Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case "HomeView": return (<SubHomeView goToSearchView = { () => {navigator.push({name: "SearchView"})} }/>)
                case "SearchView": return (<SearchView/>)
        }

    }
    render() {
        return (
                <Navigator

                    initialRoute = {{name: "HomeView"}}
                    renderScene = {this.renderScene}
                    style={{ flex: 1 }}
                    sceneStyle={{ paddingTop: 44, backgroundColor: 'red' }}

                />
        )
    }
}

class SubHomeView extends Component {
    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress = {this.props.goToSearchView}>
                <Text>
                    Go to next scene
                </Text>
                </TouchableOpacity>
            </View>

        )
    }
}
