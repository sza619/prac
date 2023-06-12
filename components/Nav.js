import React from 'react';
import { Text, View, Image, FlatList, Touchable, TouchableOpacity } from 'react-native';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        title: "ReactFacts",
        image: "../assets/navlogo.png"
    },
]

const Navbar = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={tw`flex flex-row items-center`}>
                        <Image
                            style={{ width: 50, height: 50, resizeMode: "contain" }}
                            source={require("../assets/navlogo.png")}
                        />
                        <Text>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default Navbar
