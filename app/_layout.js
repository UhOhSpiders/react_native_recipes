import { Stack } from "expo-router";
import FavouriteButton from "./components/FavouriteButton";
import { Text, View } from "react-native"
import Login from "./screens/Login";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)"   options={{
              title: "Delicious Recipes",
              headerStyle: { backgroundColor: "#0AA996" },
              headerShadowVisible: true,
            }}/>
        
    </Stack>

  )}



export default Layout;