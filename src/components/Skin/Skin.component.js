import React from 'react'
import {StyleSheet, View} from 'react-native'
import CharacterCard from "../Character/CharacterCard.component";

const Skin = () => {
    return (
        <View style={styles.container}>
            <CharacterCard
                imageSource='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2019%2F04%2FMV5BMTYwMTUwNTAyOV5BMl5BanBnXkFtZTgwMTk1OTU5NzM%40._V1_SX1777_CR001777937_AL_-1200x675.jpg'
                headerText="Thor"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            />

            <CharacterCard
                imageSource='https://cdn.images.express.co.uk/img/dynamic/36/590x/Avengers-Endgame-Thanos-did-not-destroy-the-Infinity-Stones-1125203.webp?r=1557469956871'
                headerText="Thanos"
                description="Typesetting industry. Lorem Ipsum has been the industry"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {}
});

export default Skin;
