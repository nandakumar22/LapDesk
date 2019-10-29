import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Content, List, ListItem, Thumbnail, Icon, Left, Body } from 'native-base'



const logout = () =>{
  
    Actions.login();
};
const CAT = () =>{

  
    Actions.PASS();
};
class Menu extends Component {
    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{flex:1,justifyContent:'center',alignItmems:'center'}}> 
                <Image source={require('../images/menulog.png')} style={{width: 150, height: 150,alignItems:'center',alignSelf:'center'}}/>
              <Text style={{color:'#fff',fontSize:15,marginTop:-12}}>Profile</Text>
             </View>
                <View style={{ flex: 2 }}>
                    <Content>
                        <List>
                        <ListItem icon onPress={CAT}>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Body>
                                    <Text>
                                    Change Password
                         </Text>
                                </Body>
                                
                            </ListItem>
                            
                        
                            <ListItem icon onPress={logout}>
                                <Left>
                                    <Icon name="log-out" />
                                </Left>
                                <Body>
                                    <Text>
                                        Logout
                         </Text>
                                </Body>

                            </ListItem>

                            

                        



                        </List>
                    </Content>
                </View>
            </View>
        )


    }

}
export default Menu;
