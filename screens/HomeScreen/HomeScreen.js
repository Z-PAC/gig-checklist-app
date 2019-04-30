import React from 'react'
import { View, Text } from 'react-native'

import styles from './HomeScreen.styles'

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>Welcome to the Gig Checklist App!</Text>
              <Text style={styles.welcome}>Home Screen Placeholder</Text>
              <Text style={styles.instructions}>Nothing works yet, we're working on it... :)</Text>
            </View>
        );
    }
}

export default HomeScreen