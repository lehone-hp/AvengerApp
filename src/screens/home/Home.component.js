import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import Header from "../../components/Header/Header.component";
import Skin from "../../components/Skin/Skin.component";

const Home = () => {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header/>
                    <Skin/>
                </ScrollView>
            </View>
        )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    },
});
export default Home;
