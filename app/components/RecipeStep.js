import { View, Text } from 'react-native'

const RecipeStep = ({item}) => {
  return (
    <View>
    <Text style={{paddingTop:20}}>{item.number}.   {item.step}</Text>
    </View>
  )
}

export default RecipeStep