import React, { useState } from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';


const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showData, setShowData] = useState(false);
  const [securePass,setSecurePass]=useState(true);
  const [btnTitle,setBtnTitle]=useState("Show Password");



  return (
    <View>
      <Text style={IntStyles.tvStyle}>Name: </Text>
      <TextInput value={name} style={IntStyles.etStyle} placeholder='Enter your name'
        onChangeText={(inputName) => { setName(inputName) }} />

      <Text style={IntStyles.tvStyle}>Email: </Text>
      <TextInput value={email} style={IntStyles.etStyle} placeholder='Enter your email'
        onChangeText={(inputEmail) => { setEmail(inputEmail) }} />

      <Text style={IntStyles.tvStyle}>Password: </Text>
      <TextInput value={password} secureTextEntry={securePass} style={IntStyles.etStyle} placeholder='Enter your password'
        onChangeText={(inputPassword) => { setPassword(inputPassword) }} />

      <Button title='Clear Form'
        onPress={() => {
          setShowData(false)
          setEmail("");
          setPassword("");
          setName("");
        }
        } />

      <Button title='Submit'
        onPress={() => {
          setShowData(true);
        }
        } />
        <Button title={btnTitle}
         onPress={()=>{
          if(securePass)
          {
            setBtnTitle("Hide Password");
            setSecurePass(false);
          }
          else
          {
            setBtnTitle("Show Password");
            setSecurePass(true);
          }
          
          
         }}/>
      <View>
        <View>
          {
            showData?
            <View>
            <Text style={IntStyles.tvStyle}>Name: {name}</Text>
            <Text style={IntStyles.tvStyle}>Email: {email}</Text>
            <Text style={IntStyles.tvStyle}>Password: {password}</Text>
            </View>
            :null
          }
        </View>
      </View>
    </View>

  );
};


export default App;

const IntStyles = StyleSheet.create(
  {
    tvStyle: {
      fontSize: 20,
      color: "black",
      marginHorizontal: 3,
      paddingHorizontal: 5,
      paddingVertical: 2
    },
    etStyle: {
      fontSize: 20,
      color: "blue",
      borderColor: "gray",
      borderWidth: 2,
      borderRadius: 5,
      marginHorizontal: 5,
      paddingHorizontal: 5,
      paddingVertical: 2
    },
  }
)

