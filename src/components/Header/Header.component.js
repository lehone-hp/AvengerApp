import React from 'react'
import { View, Text } from 'react-native'

import styles from '../../styles/Header.component.style'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Avengers Character App</Text>
        </View>
    )
};

export default Header;
