import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        borderWidth: 0.5,
        borderColor: '#000f1f',
    },
    cardTop: {
        flexDirection: 'row',
        flex: 2
    },
    imageContainer: {
        flex: 1,
    },
    textContainer: {
        flex: 2, paddingLeft: 20
    },
    headerText: {
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 50
    },
    cardBottom: {
        flex: 1,
        paddingTop: 20
    },
})
