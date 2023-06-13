import React from 'react';
import { Text, View, FlatList } from 'react-native';

const data = [
    {
        id: "123",
        title: "Fun facts about React",
        a: "Was first released in 2013",
        b: "Was originally created by Jordan Walke",
        c: "Has well over 200K stars on GitHub",
        d: "Is maintained by Meta",
        e: "Powers thousands of enterprise apps, including mobile apps"
    },
]

const Main = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            style={{ backgroundColor: "#282D35", padding: "55px", height: "100vh" }}
            renderItem={({ item }) => (
                <View>
                    <Text style={{ color: "white", fontSize: "45px", fontWeight: 700 }}>{item.title}</Text>
                    <Text style={{ paddingTop: "40px", color: "white", fontSize: "18px" }}>{item.a}</Text>
                    <Text style={{ paddingTop: "20px", color: "white", fontSize: "18px" }}>{item.b}</Text>
                    <Text style={{ paddingTop: "20px", color: "white", fontSize: "18px" }}>{item.c}</Text>
                    <Text style={{ paddingTop: "20px", color: "white", fontSize: "18px" }}>{item.d}</Text>
                    <Text style={{ paddingTop: "20px", color: "white", fontSize: "18px" }}>{item.e}</Text>
                </View>
            )
            }
        />
    );
}

export default Main