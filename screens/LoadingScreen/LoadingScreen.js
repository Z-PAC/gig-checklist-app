import React from 'react'
import { View, Text } from 'react-native'

import styles from './LoadingScreen.styles'

class LoadingScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>Loading...</Text>
            </View>
        );
    }
}

export default LoadingScreen