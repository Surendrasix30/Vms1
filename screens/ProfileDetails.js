'use strict'
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';



class ProfileDetails extends Component {
  render(){
    return (
      <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="camera"
                      onPress={() => this.props.navigation.navigate('Camera')}
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
              Profile
            </Text>
          </View>
          <View style = {styles.container}>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your First Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleFirstName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your Last Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleLastName}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your Phone Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePhoneNumber}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your Email Address"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmailAddress}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your Country"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleCountry}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your City"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleCity}/>
            </View>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('ProfileForms')}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    textAlign: 'center',
    margin: 10,
    height: 40,
    borderRadius: 10,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height: 40,
 },
 submitButtonText:{
    color: 'white',
    textAlign: 'center',
 }
});

export default ProfileDetails;