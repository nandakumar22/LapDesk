
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView,Alert, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Grid, Col } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const sss= () => {
    Actions.login()
  };
//   const ccc = () => {
//     Actions.lgg()
//   };
class Forgot extends Component {
 
    static navigationOptions = {  
        title: "Change Password",  
        color:'white',
        TextColor:'white',

        headerStyle: {  
            backgroundColor:'#4169e1',
            
          
            TextColor:'white',
            color:'white',
          

        },   
        //header TintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',   
            TextColor:'white',
            color:'white',
           flex:1,
            fontSize:20,
            textAlign:'center',
            justifyContent:'center',
           alignItems:'center'
           
        },    
       
    }; 
    render() {
        return (
            <View style={styles.container}>
<ScrollView >
           
             
             
               {/* {/ <Image resizeMode="contain" style={styles.logo} source={require('../images/dg.jpeg')} />  /} */}

                <Content>
                   
                    <Form>
                        <Item stackedLabel last>
                            {/* <Label style={{ color: 'black' }}>Email </Label> */}
                            <Input placeholder="Enter your email" secureTextEntry={true} style={{ opacity: 1,color: 'black',fontSize:18 }} />
                        </Item>
                        <Text>  </Text>
                        <Item stackedLabel last>
                            {/* <Label style={{ color: 'black' }}> Password</Label> */}
                            <Input placeholder="New Password" maxLength={12} keyboardType='numeric' style={{ opacity: 1,color: 'black', fontSize: 16, paddingBottom: 1 }} onChangeText={value => { this.setState({ phoneNumber: value }) }} />
                        </Item> 
                        <Item stackedLabel last>
                            {/* <Label style={{ color: 'black' }}>Conform Password</Label> */}
                            <Input placeholder="Conform Password" maxLength={12} keyboardType='numeric' style={{ opacity: 1,color: 'black', fontSize: 16, paddingBottom: 1 }} onChangeText={value => { this.setState({ phoneNumber: value }) }} />
                        </Item> 
                        
                        <Button full rounded
                            style={{ marginTop: 15, marginLeft: 10, marginRight: 10 ,backgroundColor:'#4169e1'}} onPress = {sss}>
                            <Text style={{ color: 'black',fontSize:20  }}>Submit</Text>
                        </Button>
                       
                        
                    </Form>
                  
                </Content>
            
            </ScrollView>
            </View>
        );
    }
}
export default Forgot;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor:"#59cbbd",
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 2,
        marginBottom: 2,
        alignSelf:"center"
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
        fontWeight:"bold"
    },
    text1: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#4682b4',
        marginBottom: 40,
        

    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontWeight:"bold"
    

    },
    text3: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: "#4682b4"
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
        color: 'white'
    },
  
})