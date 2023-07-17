import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const arrData = [
    {id:1,name:"Spectra"},
    {id:2,name:"Saurabh"},
    {id:3,name:"Ramya"},
    {id:4,name:"Jaya"},
    {id:5,name:"Mehnaj"},
    {id:6,name:"Krishna"},
    {id:7,name:"Anu"},

    {id:11,name:"Spectra"},
    {id:21,name:"Saurabh"},
    {id:31,name:"Ramya"},
    {id:41,name:"Jaya"},
    {id:51,name:"Mehnaj"},
    {id:61,name:"Krishna"},
    {id:71,name:"Anu"},

    {id:12,name:"Spectra"},
    {id:22,name:"Saurabh"},
    {id:32,name:"Ramya"},
    {id:42,name:"Jaya"},
    {id:52,name:"Mehnaj"},
    {id:62,name:"Spectra"},
    {id:72,name:"Anu"}
  ]

  return (
    <View>
      <Text style={{fontSize:50}}>Simple List by using MapFunction:</Text>
     <ScrollView>
     {
      arrData.map((item)=><Text style={styles.tvItem}>Name: {item.name}</Text>)
     }
     </ScrollView>
      
    </View>
  )
}

export default App;

const styles=StyleSheet.create(
  {tvItem:{
    fontSize:30,
    margin:5,
    backgroundColor:"blue",
    padding:5,
    color:"white"
  }
  
}
)