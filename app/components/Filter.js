import React from "react";
import { View } from "react-native";
import FilterList from "./FilterList";

const Filter = ({ handleNewParams }) => {
  const diets = ["vegetarian", "pescetarian", "vegan"];
  const allergies = [
    "dairy",
    "egg",
    "gluten",
    "grain",
    "peanut",
    "seafood",
    "sesame",
    "shellfish",
    "soy",
    "sulfite",
    "tree Nut",
    "wheat",
  ];
  const mealType = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink",
  ];
  return (
    <View>
      <FilterList
        data={diets}
        filterTitle={"diet"}
        handleNewParams={handleNewParams}
      />
      <FilterList
        data={allergies}
        filterTitle={"allergy"}
        handleNewParams={handleNewParams}
      />
      <FilterList
        data={mealType}
        filterTitle={"type"}
        handleNewParams={handleNewParams}
      />
    </View>
  );
};

export default Filter;
