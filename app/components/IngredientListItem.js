import {Text, View } from 'react-native'

const IngredientListItem = ({item}) => {
  return (
    <Text>{item.name} {item.amount} {item.unit}</Text>
  )
}

export default IngredientListItem