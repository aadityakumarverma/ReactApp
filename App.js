import React from 'react';
import {Text,Button,View} from 'react-native';

const App = () =>{
  return(
    <View>
      <MyButton/>
    <Text style={{fontSize: 40}}>Anu</Text>
    
    </View>
  );
};

const MyButton =() =>{
  return(
    <View>
      <Text style={{fontSize:30}}>Aaditya</Text>
    <Button title='Anu' onPress={()=>{alert("is Under 100")}} />
    </View>
  );
};

export default App;