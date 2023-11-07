import { View, Text } from "react-native";
import React from "react";
import appStyles from "../styles/appStyles";

const InfoPill = ({ icon, text, info }) => {
  return (
    <View>
      <Text style={appStyles.cardDetailText}>
        {icon}
        <Text>
        {info} {text} 
        </Text>
      </Text>
    </View>
  );
};

export default InfoPill;
