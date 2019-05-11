import React, {Component} from 'react';
import {Text, Image, Button, View, Alert} from 'react-native';

import styles from '../../styles/CharacterCard.component.style'

class CharacterCard extends Component {

    showLearnMoreAlert() {
        Alert.alert(this.props.headerText, this.props.description);
    }


    render() {
        return (
            <View style={ styles.card }>
                <View style={ styles.cardTop }>
                    <View style={ styles.imageContainer }>
                        <Image
                            source={ {uri: this.props.imageSource} }
                            style={ styles.image }/>
                    </View>
                    <View style={ styles.textContainer }>
                        <Text style={ styles.headerText }>{ this.props.headerText }</Text>
                        <Text>{ this.props.description }</Text>
                    </View>
                </View>
                <View style={ styles.cardBottom }>
                    <Button
                        onPress={ () => this.showLearnMoreAlert() }
                        title='Learn More'
                        color='#2551ff'
                    />
                </View>
            </View>
        )
    }
}

export default CharacterCard;
