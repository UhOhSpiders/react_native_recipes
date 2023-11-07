import {
  View
} from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import RecipeDetails from "../../../components/RecipeDetails";

const RecipeDetailPage = () => {
  const params = useLocalSearchParams();

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
     <RecipeDetails id={params.id}/>
    </View>
  );
};

export default RecipeDetailPage;
