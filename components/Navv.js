import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        title: "ReactNativeFacts",
        button: "React",
        screen: "Home"
    },
]

const Navbar = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            style={{ backgroundColor: '#00607a', width: '100vw', display: 'flex' }}
            renderItem={({ item }) => (
                <View style={tw`flex flex-row items-center p-5 w-96`}>
                    <Image
                        style={{ width: 30, height: 35, resizeMode: "contain", margin: "7px" }}
                        source={require("../assets/navlogo.png")}
                    />
                    <Text style={{ color: '#61DAFB', fontWeight: 700, fontSize: '23px', marginRight: '70vw' }}>{item.title}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                    >
                        <View>
                            <Text style={{ color: '#DEEBF8', fontWeight: 600, }}>{item.button}</Text>
                        </View>
                    </TouchableOpacity>
                </View >
            )}
        />
    );
}

export default Navbar
