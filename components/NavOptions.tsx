import { Image } from "expo-image";
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/themed";
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
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                  
                } 
                } source={{uri:item.image}} />
            </View>
            <Text style={tw`text-lg mt-2 font-semibold`}>{item.title}</Text>
            <Icon  style={`p-2 bg-balck rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
