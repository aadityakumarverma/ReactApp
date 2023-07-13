import React, { useState } from 'react';
import {Text,Button,View,StyleSheet} from 'react-native';
import MyCustomButton from './Component/MyCustomButton'
import ExternalStyles from './externalStyles'

const SecondFun=(props)=>{
  let str=props.name;
  let ageValue=props.age;
  return(
    <View>
      <Text style={{fontSize:30}}>Props: str</Text>
    </View>
  )
}


const App = () =>{
  
  const [getName,setName] = useState("aadi217");
  
  return(
    <View>
    <Text >Inline style</Text>
    <Text style={InternalStyles.textStyle}>Name : {getName}</Text>
    <Button title='Change Name' color="blue" onPress={()=>setName("Spectra217")}/>
    <SecondFun name={getName} age="15"/>
    </View>

  );
};


export default App;

const InternalStyles=StyleSheet.create({
  textStyle:{
    color:'red',
    fontSize:30
  }

})