import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default class Login extends React.Component {
render() {
return (
<View style={styles.container}>
<View style={styles.judul}>
<Text style={styles.judul}> "E-INVENTORY" </Text>
</View>

<Image
style={styles.gambar}
source={require("./undiksha.png")}
resizeMode="contain"
    />
<View style={styles.vInput}>
<View style={styles.itemInput2}>
<Text>Username</Text>
<TextInput
style={styles.txtInput}
keyboardType='default'
onChangeText ={
                      (txtUsername) =>this.setState({Username:txtUsername})
                    }
                  />
</View>
<View style={styles.itemInput}>
<Text>Password</Text>
<TextInput
style={styles.txtInput}
keyboardType='default'
onChangeText ={
                      (txtPassword) =>this.setState({Password:txtPassword})
                    }
                  />
</View>
</View>
<View style={styles.vButton}>
<Button
color="orange"
onPress={() =>this.props.navigation.navigate('Menu')}
title="LOG IN"
accessibilityLabel="LOG IN"
                    />
</View>
</View>
 );
 }
}
const styles = StyleSheet.create({
container: {
backgroundColor: '#00ffff',
flex: 1
      },
vHeader: {
alignItems:'center',
justifyContent:'center',
marginTop:20,
marginBottom:50,
      },
 judul: {
  alignItems:'center',
  justifyContent:'center',
  marginTop:20,
  fontSize: 40,
    color: 'red',
    marginBottom:20,
   },
txtHeader: {
fontSize:30,
color:'black'
      },
vInput:{
flex:2,
backgroundColor:'#00ffff'
  },
itemInput :{
flexDirection:'row',
marginTop:10,
marginLeft:43
  },
  itemInput2 :{
flexDirection:'row',
marginTop:10,
marginLeft:43
  },
txtInput:{
width:200,
height:30,
borderColor :'#000',
backgroundColor:'#fff',
borderWidth:1,
marginLeft:20
  },
vButton: {
width:200,
height:40,
marginTop:20,
marginBottom:100,
marginLeft:80,
marginRight:100,
  },
gambar: {
height:150,
width:150,
marginBottom:50,
marginLeft:100,
marginRight:100,
  },
});
