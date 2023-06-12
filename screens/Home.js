import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from "tailwind-react-native-classnames";
import Navbar from "../components/Nav";

const Home = () => {
    return (
        <SafeAreaView>
            <View>
                <Navbar />
            </View>
        </SafeAreaView>
    );
}

export default Home

const styles = StyleSheet.create({});
