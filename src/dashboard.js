import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'

import { Container, Content, Form, Item, Input, Label, Button, Grid, Col, Picker, DatePicker } from 'native-base';
const lap= () => {
  
    Actions.service()
};
class Dashboard extends Component {

    static navigationOptions = {  
        title: "DASHBOARD",  
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
    
    render() {
        return (
           
         <ScrollView style={styles.container}>
               <Grid>
           <Col size={60}>
           <TouchableOpacity activeOpacity = { .5 } onPress={lap}>
        <Image resizeMode="contain"  style={styles.ind}  source={require('../images/laptop.png')} />
        </TouchableOpacity>
        <Text style={{fontSize:15,fontWeight:"bold",marginTop:0,marginLeft:60,}}>Laptop</Text>


        </Col >
        <Col size={60}>
        <Image resizeMode="contain"  style={styles.branch}  source={require('../images/desk.png')} />
        <Text style={{fontSize:15,fontWeight:"bold",marginTop:-4,marginLeft:60,}}>Desktop</Text>
        </Col>
        </Grid>
       <Grid>
        <Col size={60}>
        <Image resizeMode="contain"  style={styles.book}  source={require('../images/sapre.png')} /> 
        <Text style={{fontSize:15,fontWeight:"bold",marginTop:0,marginLeft:60,}}>Spare Parts</Text>
        </Col>

        <Col size={60}>
        <TouchableOpacity activeOpacity = { .5 } >
    
        <Image resizeMode="contain"  style={styles.graph}  source={require('../images/software.png')} /> 
        </TouchableOpacity>
        <Text style={{fontSize:15,fontWeight:"bold",marginTop:0,marginLeft:60,}}>Software Instalation </Text>
        </Col>
        </Grid> 
       

         </ScrollView>
       );

    }
}
export default Dashboard;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: 'white',
        
    },

    book: {
        width: 140,
        height: 140,
        marginStart:20,
        marginTop:30,
        flex:1      
    },

    multy: {
        width: 140,
        height: 140,
        marginStart:20,
        marginBottom:10,
        marginTop:30,
        flex:1       
    },
    ind: {
        width: 140,
        height: 140,
        marginStart:20,
        marginBottom:10,
        marginTop:20,
        flex:1
              
    },
    branch: {
        width: 150,
        height: 150,
        marginStart:20,
        marginBottom:10,
        marginTop:20,
        flex:1
    },
    graph: {
        width: 150,
        height: 150,
marginTop:30,
marginStart:20,
      
    },
})