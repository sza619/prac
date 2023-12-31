import React from 'react';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import Navbar from "../components/Nav";
import Main from '../components/Main';

const Home = () => {
    return (
        <SafeAreaView>
            <View>
                <Navbar />
                <Main />
            </View>
        </SafeAreaView>
    );
}

export default Home

const styles = StyleSheet.create({});
