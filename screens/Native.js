import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Navbar from "../components/Navv";
import Main from '../components/Mainn';

const Native = () => {
    return (
        <SafeAreaView>
            <View>
                <Navbar />
                <Main />
            </View>
        </SafeAreaView>
    );
}

export default Native

const styles = StyleSheet.create({});
