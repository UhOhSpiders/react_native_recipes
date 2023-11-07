import { View, Text, Pressable } from "react-native";
import React from "react";
// import { Pressable } from "react-native-gesture-handler";
import appStyles from "../styles/appStyles";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = ({ id }) => {
  const favouritesList = [296687, 1234, 1241, 124, 1245, 641896];
  const idInt = parseInt(id);
  
  const itemFavourited = (idInt) => {
    if (favouritesList.includes(idInt)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View>
      {itemFavourited(idInt) ? (
        <View>
          <Pressable
            style={[appStyles.favouriteButton, { backgroundColor: "red" }]}
          >
            <AntDesign name="star" size={28} />
          </Pressable>
        </View>
      ) : (
        <View>
          <Pressable style={appStyles.favouriteButton}>
            <AntDesign name="staro" size={28} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default FavouriteButton;
