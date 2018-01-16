/**
 * chon_den
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// import TabBar from 'react-native-xtabbar';
import TabBar from './TabBar.js';
import SearchView from './SearchView.js';
import HomeView from './HomeView.js';
import EditView from './EditView.js';
import FollowView from './FollowView.js';
import MeView from './MeView.js';

export class TabComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: 7,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height:20}}/>

                <TabBar style={styles.content}>
                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        onPress={() => {
                            console.log("first onPress");
                        }}
                        badge={this.state.badge}
                        title='Home'>
                        <HomeView/>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        badge={200}
                        title='Search'>
                        <SearchView />
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        point={false}
                        title='Edit'>
                        <EditView/>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        badge = ''
                        title='Follow'>
                        <FollowView/>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        title='Me'>
                        <MeView/>
                    </TabBar.Item>
                </TabBar>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

AppRegistry.registerComponent('TabBarController', () => TabComponentDemo);
