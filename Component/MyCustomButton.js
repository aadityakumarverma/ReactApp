import {Text,View,Button} from 'react-native';


const MyCustomButton =()=>{
    let myVar="myVarVal";
    return(
        <View>
            
            <Button title='Custom Button' color="green" onPress={()=>{alert(myVar)}}/>
        </View>
    );
}

export default MyCustomButton;