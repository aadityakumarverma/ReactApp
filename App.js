import React from "react";
import { View, Text, FlatList } from 'react-native';

const App = () => {
  const arrData = [
    "Aadi","Anu","Under100"
  ]

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Simple List by using FlatList:</Text>
      <FlatList
      data={arrData}
      renderItem={({item})=>
        <View style={{marginHorizontal:10}}>
          <Text>{item}</Text>
          </View>
      }
      />
    </View>
  )
}

export default App;