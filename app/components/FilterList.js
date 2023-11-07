import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import appStyles from "../styles/appStyles";

const FilterList = ({ data, filterTitle, handleNewParams }) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    let newParams = filter.toString().toLowerCase();
    handleNewParams(newParams, filterTitle);
  }, [filter]);

  const updateFilter = (selectedItem) => {
    let filterCopy = [...filter];

    if (filterCopy.includes(selectedItem)) {
      let index = filterCopy.indexOf(selectedItem);
      if (index > -1) {
        filterCopy.splice(index, 1);
      }
      setFilter(filterCopy);
    } else {
      filterCopy.push(selectedItem);
      setFilter(filterCopy);
    }
  };

  const filterStyle = (item) => {
    if (filter.includes(item)) {
      return { backgroundColor: "#ffd64f" };
    } else {
      return { backgroundColor: "#d1edff" };
    }
  };

  return (
    <View>
      <Text>Filter by {filterTitle}:</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[appStyles.filterButton, filterStyle(item)]}
            onPress={() => {
              updateFilter(item);
            }}
          >
            <Text>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FilterList;
