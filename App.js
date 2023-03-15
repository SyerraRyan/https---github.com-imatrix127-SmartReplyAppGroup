import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity} from "react-native";



export default function App() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  return (

    <View style={styles.container}>

     <StatusBar style="auto" />
     <View style={{marginTop:80,marginLeft:30}}>
      <Text style = {styles.mainText}>Hello! Welcome back! <Image style={styles.tinyLogo} source={require('./assets/Wave.png')} /></Text>
      <Text style = {styles.subText}>Hello again, We missed you!</Text>
     </View>

      <View style={styles.email}>
      
        <Text style={styles.textBoxHeader}>Email Address</Text>
          <View style={styles.inputView}>
            

            <TextInput

              style={styles.TextInput}
              placeholder="Enter Your Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}

            /> 

          </View> 
      </View>

      <Text style={styles.textBoxHeader}>Password</Text>
      <View style={styles.inputView}>

        <TextInput

          style={styles.TextInput}
          placeholder="Enter Your Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}

        /> 

      </View> 
      <View style={styles.checkboxContainer}>
        {/*<CheckBox
          value={isSelected}
          onValueChange={setSelection}
  style={styles.checkbox}/> */}

        <Text style={{marginLeft:50}}>Remember Me</Text>
        <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      </View>

      

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 

      </TouchableOpacity> 
        <View style={styles.checkboxContainer}>
          <View style={styles.greyLine}/>
          <Text style={styles.or}>Or Login With</Text>
          <View style={styles.greyLine}/>

        </View>
    </View> 
    

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: "#ddd",

  },
  greyLine:{
    marginTop: 40,
          marginLeft: 20,
          borderBottomWidth: StyleSheet.hairlineWidth,
          hairlineWidth:2,
          width: 100,
          height: 0,
          color: "#CCC0C0",
  },
  or:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,
    marginLeft:20,
    marginTop:30,
    color: "#000000",
  },

  image: {

    marginBottom: 40,

  },
  mainText:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 36,
    color: '#000000',

  },
  subText:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 20,
    color: '#A8A2A2',

  },

  inputView: {
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 20,
    marginLeft: 30,
    alignItems: "center",

  },


  TextInput: {

    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,

  },


  forgot_button: {

    height: 30,
    marginBottom: 30,
    color: '#FF0000',
    marginLeft: 80,

  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },


  loginBtn: {

    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#188F79",
    marginLeft: 30,
    marginTop:-20,

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  textBoxHeader:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 20,
    color: "#000000",
    marginLeft: 30,

  },
  email:{
    marginTop: 80,

  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  }

});
