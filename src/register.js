import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView, Alert, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button,Picker, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
 
const upo = () => {
  

    Actions.login()
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
        
        } 
        //The following line must be added to attach "state",  for non React methods 
        this.fun_name = this.fun_name.bind(this); 

      } 
      fun_name(value) { 
        this.setState({ textValue: value }) 
      } 
    
     
  
    render() {
        return (
            <ScrollView style={styles.container}>
            <View>
            {/* <Image style={{marginTop:10}}resizeMode="contain" style={styles.logo} source={require('../images/sunkpo.jpg')} /> */}

               
                <Content>
                    <Form>
                 
                    <Label style={{marginLeft:2,marginTop:10}}>User Name</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:8}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Password</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                 <Item>
         </Item>   
         <Label style={{marginLeft:2}}>Confirm Password</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>

                  <Label style={{marginLeft:2}}>First Name</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
        
                  <Label style={{marginLeft:2}}>Last Name</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
        
            
                  <Label style={{marginLeft:2}}>Gender</Label>
         <Item regular picker  style={{borderColor:'#6495ed',marginTop:10}} >

         <Picker selectedValue={this.state.textValue} onValueChange={this.fun_name}> 
          <Picker.Item label="MALE" value="1" /> 
          <Picker.Item label="FEMALE" value="2" /> 
          
        </Picker> 
                                </Item>

                                <Button full rounded
                         style={{ marginTop: 30,marginLeft:20, marginRight: 20,backgroundColor:'#4169e1' }} onPress = {upo }>
                            <Text style={{ color: 'white',alignSelf:"center",fontSize:25,fontWeight:"bold" }}>SIGN-UP</Text>
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