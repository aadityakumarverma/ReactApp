import React, { useState } from 'react';
import {Text,Button,View} from 'react-native';
import MyCustomButton from './Component/MyCustomButton'

//here props refer to properties
const SecondFun=(intent)=>{
  return(
    <View>
      <Text style={{fontSize:30}}>Props: {intent.name}</Text>
      
    </View>
  )
}


const App = () =>{
  
  const [getName,setName] = useState("aadi217");
  
  return(
    <View>
    <Text style={{fontSize: 40}}>Name : {getName}</Text>
    <Button title='Change Name' color="blue" onPress={()=>setName("Spectra217")}/>
    <SecondFun name={getName}/>
    </View>

  );
};


export default App;
