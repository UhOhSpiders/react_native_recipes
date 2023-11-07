import { Image, TouchableOpacity } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
