import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'

import images from 'GigChecklist/assets/images'

export default ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('NewChecklistScreen')}
        >
            <Image source={images.addChecklistIcon} />
            <Text>Add checklist</Text>
        </TouchableOpacity>
    )
}
