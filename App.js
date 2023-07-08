import React from 'react';
import {Text,Button,View} from 'react-native';
import MyCustomButton from './Component/MyCustomButton'



const App = () =>{
  function Abc(msg,sec)
  {
    alert(msg+sec)
  }
  return(
    <View>
    <Text style={{fontSize: 40}}>Aaditya Verma</Text>
    <Button title='btn2' onPress={Abc}/>
    <Button title='btn2' onPress={()=>Abc("Btn2","hi")}/>
    </View>
  );
};


export default App;