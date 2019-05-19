import React from 'react'
import { View, 
         Text,
         TextInput,
         TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'

import styles from './NewChecklistScreen.style'

class NewChecklistScreen extends React.Component {

    static navigationOptions = {
        title: 'Create Checklist',
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }

    constructor(props){
        super(props)

        this.state = {
            title: '',
            date: undefined,
        }

        this.createChecklist = this.createChecklist.bind(this)
    }

    createChecklist() {

        alert('TODO: dispatch actions')
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.marginedContainer}>
                    <View style={styles.titleLabelContainer}>
                        <Text style={styles.titleLabelText}>Title</Text>
                        <TextInput
                            onChangeText={(title) => this.setState({ title })} 
                            style={styles.titleInput}
                            placeholder='Insert title'
                        />
                    </View>
                    <View style={styles.datePickerContainer}>
                        <Text style={styles.datePickerLabel}>Date and time</Text>
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.date}
                            showIcon={false}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => {this.setState({ date })}}
                        />
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.createButton}
                    onPress={this.createChecklist}
                >
                    <Text style={styles.createButtonText}>CREATE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewChecklistScreen