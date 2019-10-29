
import React, { Component } from 'react'; 
import { View, Picker,Text } from 'react-native'; 
import {  Textarea,Button,Label,Item,Input } from "native-base";
import { Actions } from 'react-native-router-flux'



 
class Adders extends Component {
    static navigationOptions = {  
        title: "ADDERS DETAILS",  
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
      
        
      <View> 
   
   <Label style={{marginLeft:10,marginTop:10}}>Adders</Label>
            
        <Textarea rowSpan={5} bordered placeholder="Type Adders"  style={{borderColor:'#6495ed',marginTop:10,alignItems:'center',marginLeft:20,marginRight:20}} />


        <Label style={{marginLeft:10,marginTop:20,}}>Mobile Number</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10,marginLeft:20, marginRight: 20}} >
                   <Input placeholder='' />
                  </Item>

        <Button full rounded
                         style={{ marginTop: 30, marginLeft:20, marginRight: 20,backgroundColor:'#4169e1' }}>
                            <Text style={{ color: 'white',alignSelf:"center",fontSize:25,fontWeight:"bold"}}>SUBMIT</Text>
                        </Button>
       
      </View> 
    
    ); 
  } 
}
export default Adders;
