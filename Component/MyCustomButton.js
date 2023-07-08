import {Text,View,Button} from 'react-native';

const MyCustomButton =()=>{
    return(
        <View>
            <Button title='Custom Button' onPress={()=>{alert("Custom Button Pressed")}}/>
        </View>
    );
}

export default MyCustomButton;