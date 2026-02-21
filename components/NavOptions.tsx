import { Image } from "expo-image";
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import AntDesign from "@expo/vector-icons/AntDesign";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "    Order food",
    image: "https://links.papareact.com/4pn",
    screen: "AnotherScreen",
  },
];
export const NavOptions = () => {
  return (
    <View style={tw`flex flex-row justify-between mt-4`}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                }}
                source={{ uri: item.image }}
              />
            </View>
            <Text style={tw`text-lg mt-2 font-semibold`}>{item.title}</Text>
            <View
              style={{
                backgroundColor: "black",
                padding: 8,
                borderRadius: 999,
                marginTop: 16,
                alignSelf: "flex-start",
              }}
            >
              <AntDesign name="arrow-right" size={24} color="white" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
