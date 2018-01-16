'use strict'

import React, { Component } from 'react'
import {
    StyleSheet,
    ListView,
    Text
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});

        this.array = []
        for (let i = 0; i < 100; i ++ ) {
            this.array[i] = i;
        }
    }

    render () {
        return (
            <ListView
                style = {styles.container}
                contentContainerStyle = {{alignItems: 'center'}}
                dataSource = {this.ds.cloneWithRows(this.array)}
                renderRow = {(rowData) => <Text style = {{padding: 10, color: 'red'}}>  Mr. {rowData} </Text>}
            />
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
        }
    }
)

