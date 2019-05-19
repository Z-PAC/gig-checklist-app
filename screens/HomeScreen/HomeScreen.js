import React from 'react'
import { View, Text } from 'react-native'

import ChecklistList from 'GigChecklist/components/ChecklistList'
import AddChecklistButton from 'GigChecklist/components/AddChecklistButton'

import styles from './HomeScreen.styles'

class HomeScreen extends React.Component {

    render() {
        return (
            <View>
                <ChecklistList />
                <AddChecklistButton navigation={this.props.navigation} />
            </View>
        )
    }
}

export default HomeScreen