
// import React, { Component } from 'react'; 
// import { View, Picker,Text } from 'react-native'; 
// import {  Textarea,Button, } from "native-base";
// import { Actions } from 'react-native-router-flux'


// const work  = () => {
  
//     Actions.life()
// };

 
// export default class Laptops extends Component { 
//     static navigationOptions = {  
//         title: "LAPTOP SERVICES",  
//         color:"white",  
//         headerStyle: {  
//             backgroundColor:'#4169e1'
//         },   
//         //header TintColor: '#0ff',  
//         headerTitleStyle: {  
//             fontWeight: 'bold',  
//             color:"white",  
//            flex:0.8,
//             fontSize:25,
//             textAlign:'center',
//             justifyContent:'center',
//            alignItems:'center'
           
//         },    
       
//     };

 
//   constructor() { 
//     super(); 
 
//     this.state = { 
//       textValue: '' ,
//       textValue1:''
//     } 
//     //The following line must be added to attach "state",  for non React methods 
//     this.fun_name = this.fun_name.bind(this); 
//     this.fun_sun = this.fun_sun.bind(this); 
//   } 
//   fun_name(value) { 
//     this.setState({ textValue: value }) 
//   } 
//   fun_sun(value) { 
//     this.setState({ textValue1: value }) 
//   } 
 
//   render() { 
//     return ( 
      
        
//       <View> 
         
//         <Picker selectedValue={this.state.textValue} onValueChange={this.fun_name}> 
//           <Picker.Item label="BRAND" value="1" /> 
//           <Picker.Item label="HP" value="2" /> 
//           <Picker.Item label="dell" value="3" /> 
//           <Picker.Item label="lenovo" value="4" /> 
//           <Picker.Item label="samsung" value="5" /> 
//         </Picker> 
       
        
       
//         <Picker selectedValue={this.state.textValue1} onValueChange={this.fun_sun}> 
//           <Picker.Item label="ISSUE TYPE" value="1" /> 
//           <Picker.Item label="hardware" value="2" /> 
//           <Picker.Item label="software" value="3" /> 
//           <Picker.Item label="keyboard" value="4" /> 
//           <Picker.Item label="speakers" value="5" /> 
//           <Picker.Item label="motherboard" value="6" /> 
//         </Picker> 
        
//         <Textarea rowSpan={5} bordered placeholder="Type Issue"  style={{borderColor:'#6495ed',marginTop:30,alignItems:'center',marginLeft:20,marginRight:20}} />


//         <Button full rounded
//                          style={{ marginTop: 30, marginLeft:20, marginRight: 20,backgroundColor:'#4169e1' }} onPress = { work }>
//                             <Text style={{ color: 'white',alignSelf:"center",fontSize:25,fontWeight:"bold"}}>NEXT</Text>
//                         </Button>
       
//       </View> 
    
//     ); 
//   } 
// }
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView, Alert, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button,Picker, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
 
const work = () => {
  

    Actions.life()
};


class Laptops extends Component {
   
    static navigationOptions = {  
        title: "REGISTER",  
        color:"white",  
        headerStyle: {  
            backgroundColor:'#4169e1'
        },   
        //header TintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
            color:"white",  
           flex:0.8,
            fontSize:25,
            textAlign:'center',
            justifyContent:'center',
           alignItems:'center'
           
        },    
       
    };
    constructor() { 
        super(); 
     
        this.state = { 
          textValue: '' ,
          textValue1: '' ,

        
        } 
        //The following line must be added to attach "state",  for non React methods 
        this.fun_name = this.fun_name.bind(this); 
        this.fun_sun = this.fun_sun.bind(this); 

      } 
      fun_name(value) { 
        this.setState({ textValue: value }) 
      } 
      fun_sun(value) { 
        this.setState({ textValue1: value }) 
      } 
    
     
  
    render() {
        return (
            <ScrollView style={styles.container}>
            <View >
            {/* <Image style={{marginTop:10}}resizeMode="contain" style={styles.logo} source={require('../images/sunkpo.jpg')} /> */}

               
                <Content>
                    <Form>
                 
                
        
            
                  <Label style={{marginLeft:2}}>Brand</Label>
         <Item regular picker  style={{borderColor:'#6495ed',marginTop:10}} >

         <Picker selectedValue={this.state.textValue} onValueChange={this.fun_name}> 
          <Picker.Item label="Dell" value="1" /> 
          <Picker.Item label="HP" value="2" /> 
          <Picker.Item label="Lenovo" value="2" /> 
          <Picker.Item label="Samsung" value="2" /> 
          <Picker.Item label="acer" value="2" /> 
          
        </Picker> 
                                </Item>
                                <Label style={{marginLeft:2}}>Issues</Label>
         <Item regular picker  style={{borderColor:'#6495ed',marginTop:10}} >

         <Picker selectedValue={this.state.textValue1} onValueChange={this.fun_sun}> 
          <Picker.Item label="keyboard" value="1" /> 
          <Picker.Item label="software" value="2" /> 
          <Picker.Item label="hardware" value="1" /> 
          <Picker.Item label="display" value="1" /> 
          <Picker.Item label="motherboard" value="1" /> 
          
        </Picker> 
                                </Item>





                                <Button full rounded
                         style={{ marginTop: 30,marginLeft:20, marginRight: 20,backgroundColor:'#4169e1' }} onPress ={work}>
                            <Text style={{ color: 'white',alignSelf:"center",fontSize:25,fontWeight:"bold" }}>NEXT</Text>
                        </Button>
                
                  </Form>
                </Content>
            </View>
            </ScrollView>
        );

    }
}
 
    export default Laptops;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        width: 30,
        height: 10,
       
    
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    text1: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 5
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text3: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: 'blue'
    },
    socialIcons: {
        width: 50,
        height: 50,
    },
    socialIconsFacebook: {
        width: 30,
        height: 30,
    },
    socialIconsGoogle: {
        width: 30,
        height: 30,
    },
    text4: {
        fontSize: 15,
        textAlign: 'right',
        marginTop: 5,
        marginBottom: 5,
        color: 'grey'
    },
    gridStyles:{
        margin: 15,
        marginTop:5, 
        backgroundColor: 'white', 
        borderRadius: 100
    }
})