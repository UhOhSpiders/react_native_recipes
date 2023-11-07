import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import appStyles from "../styles/appStyles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import InfoPill from "./InfoPill";

const RecipeCard = ({ item, linkPath }) => {
  return (
    <Link href={`${linkPath}/recipe-details/${item.id}`} style={appStyles.card}>
      {/* This <View> is a workaround for an android bug with the Image component */}
      <View style={{ width: 100, height: 100, backgroundColor: "grey", borderRadius:10 }}>
        <Image
          style={appStyles.thumbnailImage}
          source={{ uri: `${item.image}` }}
          resizeMode="cover"
          width={100}
          height={100}
        />
      </View>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Text numberOfLines={2} style={appStyles.cardHeader}>
          {item.title}
        </Text>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <InfoPill
            icon={
              <AntDesign
                name="clockcircle"
                size={24}
                color="black"
                style={appStyles.cardDetailIcon}
              />
            }
            info={item.readyInMinutes}
            text={"minutes"}
          />

          <InfoPill
            icon={
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={24}
                color="black"
                style={appStyles.cardDetailIcon}
              />
            }
            info={item.servings}
            text={"servings"}
          />
        </View>
      </View>
    </Link>
  );
};

export default RecipeCard;
