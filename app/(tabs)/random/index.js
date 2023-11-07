import { View } from "react-native";
import React from "react";
import RandomRecipeList from "../../components/RandomRecipeList";

const random = () => {
  return (
    <View style={{ flex: 1 }}>
      <RandomRecipeList />
    </View>
  );
};

export default random;
