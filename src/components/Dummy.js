import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class Dummy extends React.Component {

  state={
    value:'',
    places:[]
  }

  handleOnChange = (e) =>{

    this.setState({
      value: e
    })
  }

  addPlaces = (e) => {
    if(this.state.places.trim === " "){
      return;
    }

    this.setState((prevState) => {
      return{
        places: prevState.places.concat(prevState.value)
      };
    });

    this.setState({value:''})

  }

  render() {

    console.log("homepage calleld");

    const placesOutput = this.state.places.map((place, i) => {
      return(
        <Text key={i}> {place} </Text>
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}> 
          <TextInput 
          style={styles.placeInput}
          value={this.state.value}
          onChangeText={this.handleOnChange}/>

          <Button 
          style={styles.placeButton}
          title="Add"
          onPress={this.addPlaces}/>
          
        </View>
        <View>
          {placesOutput}
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  placeInput:{
    width:"70%"
  },
  placeButton:{
    width:"30%"
  }
});
