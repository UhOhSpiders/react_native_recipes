import { View, Text } from 'react-native'

const RecipeStep = ({item}) => {
  return (
    <View>
    <Text style={{paddingVertical:10}}><Text style={{fontWeight:'bold'}}>{item.number}.</Text> {item.step}</Text>
    </View>
  )
}

export default RecipeStep