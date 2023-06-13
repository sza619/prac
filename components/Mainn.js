import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
    {
        id: "123",
        title: "Fun facts about React Native",
        a: "Was first released in 2015",
        b: "Was originally created by Meta Platforms",
        c: "Is maintained by Meta",
        d: "Powers thousands of enterprise apps, including mobile apps"
    },
]

const Main = () => {
    return (
        <ScrollView
            data={data}
            keyExtractor={(item) => item.id}
            style={{ backgroundColor: "#0095be", padding: "55px", height: "100vh" }}
        >
            <View>
                <Text style={{ color: "black", fontSize: "45px", fontWeight: 700 }}>Fun facts about React Native</Text>
                <Text style={{ paddingTop: "40px", color: "black", fontSize: "18px" }}>Was first released in 2015</Text>
                <Text style={{ paddingTop: "20px", color: "black", fontSize: "18px" }}>Was originally created by Meta Platforms</Text>
                <Text style={{ paddingTop: "20px", color: "black", fontSize: "18px" }}>Is maintained by Meta</Text>
                <Text style={{ paddingTop: "20px", color: "black", fontSize: "18px" }}>Powers thousands of enterprise apps, including mobile apps</Text>
            </View>
        </ScrollView>
    );
}

export default Main