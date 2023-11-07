import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  card: {
    flex: 1,
    padding: 10,
    margin: 2,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  cardHeader: {
    fontWeight: "bold",
    width:200,
    margin:15
  },
  cardDetailText: {
    padding: 2,
    paddingHorizontal: 7,
    textAlign: "center",
    backgroundColor: "#fff3d1",
    borderRadius: 20,
    marginHorizontal: 5,
    borderColor: "#cccccc",
    borderWidth: 1,
  },
  cardDetailIcon: {
    marginRight: 5,
  },
  filterButton: {
    padding: 7,
    margin: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d7dce0",
  },
  button: {
    height: 50,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff3d1",
    borderRadius: 20,
    margin: 3,
    borderColor: "#cccccc",
    borderWidth: 1,
  },
  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  favouriteButton:{
    padding: 5,
    margin:4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  }
});

export default appStyles;
