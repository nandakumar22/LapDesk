
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground, Alert, Image,ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';


const signIn = () => {
  

    Actions.dashB()
};
const Uphere = () => {
    Actions.register()
};


class Login extends Component {
  render() {
    return (
        <ImageBackground source={require('../images/logbg.jpg')} style={{width: '100%', height: '100%'}}>
<ScrollView>
        <View style={styles.container}>
          
            
           
            <Content>
                <Form style={{marginTop:40}}>
                <Item floatingLabel>
          <Label>E-mail Id</Label>
          <Input />
        </Item>    
      
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input secureTextEntry={true} />
        </Item>
     
        
                    <Button full rounded
                        style={{ marginTop: 65, marginLeft: 55, marginRight: 55,backgroundColor:'#4169e1'}} onPress ={signIn}>
                        <Text style={{ color: 'white',fontSize:20,fontWeight:'bold' }}>Login</Text>
                    </Button>
                  
                    
                    <Text style={{textAlign:'center',marginTop:10}}>Already have an account? <Text  style={{color:'white',fontSize:20}} onPress ={Uphere}>SignUphere</Text></Text>
                </Form>
            </Content>
          
        </View>
        </ScrollView>
        </ImageBackground>

    );
  }}
  export default Login;
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
        borderColor: 'red'

    },
})