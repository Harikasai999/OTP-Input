//This is an example code to make a Star Rating Bar //
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard
} from 'react-native';
import {Input} from 'native-base';
//import all the components we are going to use.

export default class StarRating extends Component<{}> {
  constructor() {
    super();
    this.state = {
     firstInput:'',
     secondInput:'',
     thirdInput:'',
     forthInput:'',

    };
  }
  onChangeTextFirst = (text) => {
    var format = /[!@#$%^&*()_+\-=\[\]{};‘:“\\|,.<>\/?]/;
    if(isNaN(text)){

    }else if(text.match(format)){
     // alert("jhjgf")
   }else{
      this.setState({
      firstInput:text
    },()=>{
       if(this.state.firstInput.length === 1){
      this.second._root.focus()
    }
    })
    }    
  }
 onChangeTextSecond = (text) => {
   var format = /[!@#$%^&*()_+\-=\[\]{};‘:“\\|,.<>\/?]/;
  if(isNaN(text)){

    }else if(text.match(format)){
     // alert("jhjgf")
   }else{
    this.setState({
      secondInput:text
    },()=>{
       if(this.state.secondInput.length === 1){
      this.third._root.focus()
    }else if(this.state.secondInput.length === 0){
      this.first._root.focus()
    }
    })
  }
  } 
  onChangeTextThird = (text) => {
     var format = /[!@#$%^&*()_+\-=\[\]{};‘:“\\|,.<>\/?]/;
    if(isNaN(text)){

    }else if(text.match(format)){
     // alert("jhjgf")
   }else{
    this.setState({
      thirdInput:text
    },()=>{
       if(this.state.thirdInput.length === 1){
      this.forth._root.focus()
    }else if(this.state.thirdInput.length === 0){
      this.second._root.focus()
    }
    })
  }
  }  
  onChangeTextForth = (text) => {
     var format = /[!@#$%^&*()_+\-=\[\]{};‘:“\\|,.<>\/?]/;
    if(isNaN(text)){

    }else if(text.match(format)){
     // alert("jhjgf")
   }else{
    this.setState({
      forthInput:text
    },()=>{
       if(this.state.forthInput.length === 1){
      Keyboard.dismiss()
    }else if(this.state.forthInput.length === 0){
      this.third._root.focus()
    }
    })
  }
  }
  render() {
    
    return (
      <View style={styles.container}>

        
         <View style={styles.inputMainView}>
         <View style={styles.firstInputView}>

                <Input
                      ref={c => (this.first = c)}
                      style={styles.inputBorderView}
                      // ref="firstInput"
                      secureTextEntry
                      onChangeText={this.onChangeTextFirst.bind(this)}                    
                      keyboardType="numeric"
                      value={this.state.firstInput}
                      contextMenuHidden
                    />
                   
          </View> 
           <View style={styles.inputView}>

           <Input
                      ref={c => (this.second = c)}
                      style={styles.inputBorderView}          
                      secureTextEntry
                      onChangeText={this.onChangeTextSecond.bind(this)}                    
                      keyboardType="numeric"
                      value={this.state.secondInput}
                      contextMenuHidden
                    />
                   
          </View>
           <View style={styles.inputView}>

           <Input
                      ref={c => (this.third = c)}
                      style={styles.inputBorderView}          
                      secureTextEntry
                      onChangeText={this.onChangeTextThird.bind(this)}                    
                      keyboardType="numeric"
                      value={this.state.thirdInput}
                      contextMenuHidden
                    />
                   
          </View> 
            <View style={styles.inputView}>

           <Input
                      ref={c => (this.forth = c)}
                      style={styles.inputBorderView}          
                      secureTextEntry
                      onChangeText={this.onChangeTextForth.bind(this)}                    
                      keyboardType="numeric"
                      value={this.state.forthInput}
                      contextMenuHidden
                    />
                   
          </View>
          </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  inputBorderView:{
    // height:50,
    // width:50,
    // backgroundColor:"pink",
    textAlign:'center',
    borderBottomWidth:1,
    borderColor:"grey"
  },

  inputView:{
    width:30, 
    height:40, 
    marginLeft:15, 
    // backgroundColor:'pink'
  },
  firstInputView:{
    width:30, 
    height:40, 
    // backgroundColor:'yellow'
  },

  inputMainView:{flex:1, flexDirection:'row'}
});
