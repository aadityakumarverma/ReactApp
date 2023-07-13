import React, { useState } from 'react';
import {Text,Button,View} from 'react-native';
import MyCustomButton from './Component/MyCustomButton'



const App = () =>{
  let data="passedVariable";
  const [name,setName] = useState("aadi217");
  function myFunction()
  {
    alert(name)
  }
  return(
    <View>
    <Text style={{fontSize: 40}}>Name : {name}</Text>
    <MyCustomButton/>
    <Button title='MyButton' color="red" onPress={()=>myFunction()}/>
    <Button title='NewButton' color="blue" onPress={()=>setName("Spectra217")}/>
    </View>
  );
};


export default App;




