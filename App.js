import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export class Button1 extends Component{
 
  A(){
  alert("Playing Sound 1")
  }
 
  render() {
   return(
    
    <Button  color="purple"  title=" sound 1" onPress={this.A}></Button>
   );
  }
}

export class Button2 extends Component{
  
 B(){
  alert("Playing Sound 2")
  }

 
  render() {
   return(
    <Button color="green" title=" sound 2" onPress={this.B}></Button>
   );
  }
}

export class Button3 extends Component{
   C(){
  alert("Playing Sound 3")
  }

 
  render() {
   return(
    <Button color="blue" title=" sound 3" onPress={this.C}></Button>
   );
  }
}

export class Button4 extends Component{
    D(){
  alert("Playing Sound 4")
  }

 
  render() {
   return(
     <View style={{ marginTop:50}}>
      <Button color="red" title=" sound 4" onPress={()=>{alert("BeAlert")}}></Button>
      </View>
   );
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:200,marginLeft:90,width:"50%"}}>
        <Button1/>
        <Button2/>
        <Button3/>
        <Button4/>
      </View>
    );
  }
}