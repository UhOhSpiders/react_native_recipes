import { Text, View, ActivityIndicator, ScrollView } from "react-native";

import useFetch from "../../hook/useFetch";
import RecipeStep from "./RecipeStep";
import InfoPill from "./InfoPill";
import IngredientListItem from "./IngredientListItem";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import appStyles from "../styles/appStyles";
import FavouriteButton from "./FavouriteButton";

const RecipeDetails = ({ id }) => {
  const { data, isLoading, error } = useFetch(`${id}/information`);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>Error</Text>
      ) : (
        <View style={{ flex: 1,  }}>
          <View style={{  flexDirection: "row", justifyContent:"space-between", alignItems:"center" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#031C30",
                fontSize:20
              }}
            >
              {data.data.title}
            </Text>
            <FavouriteButton id={id} />
          </View>
          <InfoPill
            icon={
              <AntDesign
                name="clockcircle"
                size={24}
                color="black"
                style={appStyles.cardDetailIcon}
              />
            }
            info={data.data.readyInMinutes}
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
            info={data.data.servings}
            text={"servings"}
          />
          <View style={appStyles.cardDetailText}>
            {data.data.extendedIngredients.map((item) => (
              <IngredientListItem item={item} key={item.id} />
            ))}
          </View>

          <ScrollView style={{ flex: 1 }}>
            {data.data.analyzedInstructions[0].steps.map((item) => (
              <RecipeStep item={item} key={item.id} />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default RecipeDetails;
