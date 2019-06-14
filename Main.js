import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import Header from "./Header";
import { ScrollView } from 'react-native-gesture-handler';


export default class Main extends React.Component {

  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"E-INVENTORY \n Aplikasi Daftar Inventaris"} />

      <ScrollView>

      <View style={styles.judul}>
      <Text style={styles.judul}> MENU UTAMA </Text>
      </View>
      <Image
      style={styles.gambar}
      source={require("./undiksha.png")}
      resizeMode="contain"
       />

      <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('upload') }>
                    <Text style={styles.buttonText}>Upload Barang</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('') }>
                    <Text style={styles.buttonText}>Daftar Barang</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('') }>
                    <Text style={styles.buttonText}>Kategori Barang</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Login') }>
                    <Text style={styles.buttonText}>Bantuan</Text>
                </TouchableHighlight>


            </View>
            </ScrollView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#00ffff',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
   
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },


  button2Style: {
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: "orange",
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 5,
  },
  judul: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    fontSize: 40,
    color: 'red',
    marginBottom:20,
     },
  gambar: {
  height:150,
width:150,
marginBottom:50,
marginLeft:100,
marginRight:100,
  },
});
