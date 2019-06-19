import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import startMainTabs from '../mainTabs/startMainTabs'; 

class LocationScreen extends Component{

    handleOnPress = () =>{
        startMainTabs();

    }

    render(){

        return(
            <View>
                <Text> Locations Screen </Text>
                <Button title="View" onPress={this.handleOnPress}/>
            </View>
        );
    }
}

export default LocationScreen;