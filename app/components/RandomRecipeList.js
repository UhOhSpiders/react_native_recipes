import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import RecipeCard from "./RecipeCard";
import dummy_api_response from "../../dummy_api_response.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import appStyles from "../styles/appStyles";
import axios from "axios";

const RandomRecipeList = () => {
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [searchSent, setSearchSent] = useState(false);
  const rapidApiKey = process.env.RAPID_API_KEY

  useEffect(() => {
    search();
  }, []);

  const params =  { number: "10" };

  const search = async () => {
    setSearchLoader(true);
    setSearchResult([]);
    try {
      const options = {
        method: "GET",
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random`,
        params: { ...params },
        headers: {
          "X-RapidAPI-Key": rapidApiKey,
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      setSearchResult(response.data.recipes);
      setSearchSent(true);
    } catch (error) {
      setSearchError(error);
      console.log("error: " + error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handleSearch = () => {
    search();
  };
  
  return (
    <View
      style={{
        justifyContent: "space-between",
        backgroundColor: "#fcf9e6",
        flex: 1,
      }}
    >
      <View style={{position:"absolute", zIndex:1, width: "100%"}}>
        <TouchableOpacity style={appStyles.button} onPress={handleSearch}>
          <MaterialCommunityIcons
            name="refresh"
            size={28}
            style={{ marginRight: 10 }}
          />
          <Text>Load more recipes</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        {searchLoader ? (
          <ActivityIndicator />
        ) : searchError ? (
          <Text>Error</Text>
        ) : (
          <FlatList
          ListHeaderComponent={<View style={{height:55}}></View>}
            data={searchResult}
            renderItem={({ item }) => <RecipeCard item={item} linkPath={"random"} />}
            keyExtractor={(item) => item.id}
            style={{flex:1 }}
          />
        )}
      </View>
    </View>
  );
};

export default RandomRecipeList;
