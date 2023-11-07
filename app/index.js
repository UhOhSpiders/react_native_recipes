import { Redirect, useRouter } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";

const Home = () => {
  const hasUser = false;

  const Router = useRouter();
  const Stack = createNativeStackNavigator();

  return (
    <>{hasUser ? <Redirect href="/search" /> : <Redirect href="/favourites" />}</>
  );
};

export default Home;
