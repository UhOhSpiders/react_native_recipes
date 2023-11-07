import { View } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import RecipeDetails from "../../../components/RecipeDetails";

const SearchRecipeDetails = () => {
  const params = useLocalSearchParams();

  return (
    <View style={{ paddingHorizontal: 15, flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <RecipeDetails id={params.id} />
    </View>
  );
};

export default SearchRecipeDetails;
