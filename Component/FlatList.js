import React from "react";
import { View, Text, FlatList } from 'react-native';

const App = () => {
  const arrData = [
    {id:1,name:"Aaditya"},
    {id:2,name:"Saurabh"},
    {id:3,name:"Ramya"},
    {id:4,name:"Jaya"},
    {id:5,name:"Mehnaj"},
    {id:6,name:"Krishna"},
    
  ]

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Simple List by using FlatList:</Text>
      <FlatList
      data={arrData}
      renderItem={({item})=>
        <View style={{marginHorizontal:10}}>
          <Text style={{fontSize:30,backgroundColor:"blue",margin:5}}>{item.name}</Text>
          </View>
      }
      />
    </View>
  )
}

export default App;