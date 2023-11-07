import {Text, View } from 'react-native'
import CheckBox from 'expo-checkbox'
import appStyles from '../styles/appStyles'
import { useState } from 'react'

const IngredientListItem = ({item}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const strikeThrough = {textDecorationLine:"line-through", color:"grey"}

  return (
    <>
    <View style={appStyles.ingredientListItem}>
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
    <Text style={[appStyles.ingredientListText, toggleCheckBox ? strikeThrough : null]}>{item.name} - {item.amount} {item.unit}</Text>
    </View>
    </>
  )
}

export default IngredientListItem