import { StyleSheet, Dimensions } from 'react-native'
import colors from 'GigChecklist/styles/colors'

const width = Dimensions.get('window').width

export default StyleSheet.create({
    header: {
        backgroundColor: colors.lightBlack,
    },
    mainContainer: {
        backgroundColor: colors.greenishBlue,
        height: '100%',
        width: '100%',
    },
    marginedContainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 10,
    },
    titleLabelContainer: {
        marginVertical: 10,
        alignSelf: 'flex-start',
    },
    titleLabelText: {
        fontSize: 24,
        marginBottom: 5,
        color: colors.black,
    },
    titleInput: {
        width: width - 30,
        margin: 0,
        padding: 0,
        fontSize: 20,
        borderBottomColor: colors.transparentGray,
        borderBottomWidth: 1,
    },
    datePickerContainer: {
        marginVertical: 10,
        alignSelf: 'flex-start',
    },
    datePickerLabel: {
        fontSize: 24,
        marginBottom: 5,
        color: colors.black,
    },
    datePicker: {
        justifyContent: 'center',
        width: width - 30,
    },
    createButton: {
        alignSelf: 'center',
        backgroundColor: colors.green,
        width: 177,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        marginBottom: 30,
    },
    createButtonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
    }
})