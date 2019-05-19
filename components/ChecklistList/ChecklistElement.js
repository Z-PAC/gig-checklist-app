import React from 'react'
import { View,
         Text,
         Image,
         TouchableOpacity
        } from 'react-native'
import images from 'GigChecklist/assets/images'

export default (props) => {
    return (
        <View>
            <View>
                <Text>{props.title}</Text>
                <Text>{props.date}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image source={images.editIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.deleteIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}