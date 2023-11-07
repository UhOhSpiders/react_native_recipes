import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Filter from "./Filter";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import appStyles from "../styles/appStyles";
import RecipeCard from "./RecipeCard";
const rapidApiKey = process.env.RAPID_API_KEY;

const Search = () => {
  const [params, setParams] = useState({
    number: "20",
    instructionsRequired: true,
    addRecipeInformation: true,
  });
  const [textInput, setTextInput] = useState("");
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchSent, setSearchSent ] = useState(false)
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const handleNewParams = (newParams, paramKey) => {
    let paramsCopy = { ...params };
    paramsCopy[paramKey] = newParams;
    setParams(paramsCopy);
  };
  const handleTextInput = (value) => {
    setTextInput(value);
    handleNewParams(value, "query");
  };

  const search = async () => {
    setSearchLoader(true);
    setSearchResult([]);
    try {
      const options = {
        method: "GET",
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch`,
        params: { ...params },
        headers: {
          "X-RapidAPI-Key": rapidApiKey,
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      console.log(params)
      setSearchResult(response.data.results);
      setSearchSent(true)
    } catch (error) {
      setSearchError(error);
      console.log("error: " + error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handleSearch = () => {
    if (textInput.length) {
      console.log("search runs");
      search();
    } else {
      console.log("bye");
    }
  };

  return (
    <View
      style={{
        justifyContent: "flex-start",
        backgroundColor: "#fcf9e6",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 10,
          
        }}
      >
        <TextInput
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 25,
            marginRight: 3,
            flex:1
          }}
          placeholder="What are you looking for?"
          onChangeText={(value) => handleTextInput(value)}
        />
        
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome name="search" size={30} color="black" style={{width:30}}/>
        </TouchableOpacity>
      
      </View>
      <Filter handleNewParams={handleNewParams} />
      <View style={{ flex: 1 }}>
        {searchLoader ? (
          <ActivityIndicator />
        ) : searchError ? (
          <Text>Error</Text>
        ) : searchResult.length < 1 && searchSent ? (
          <Text>No results</Text>
        ) : (
          <FlatList
            data={searchResult}
            renderItem={({ item }) => <RecipeCard item={item} linkPath={"search"}/>}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Search;
