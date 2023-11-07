import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
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
          <TouchableOpacity
            style={[appStyles.favouriteButton, { backgroundColor: "red" }]}
          >
            <AntDesign name="star" size={28} />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity style={appStyles.favouriteButton}>
            <AntDesign name="staro" size={28} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FavouriteButton;
