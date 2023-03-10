import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import React from 'react';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SignupInfo = ({ infoTitle, placeholder, autoComplete, value, ...rest }) => {
  return (
    <View style={{ marginTop: 10, marginVertical: 30 }}>
      <Text style={styles.text}> {infoTitle} </Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        autoComplete={autoComplete}
        value={value}
        secureTextEntry={infoTitle === 'Password' ? true : false}
        autoCapitalize='none'
        {...rest}
      />
    </View>
  )
}

export default SignupInfo

const styles = StyleSheet.create({
    text: {
        fontFamily: 'AlongSansSemiBold',
        fontSize: 16,
        color: 'black',
    },

    input: {
        borderColor: '#FF0099',
        borderWidth: 1.5,
        width: 0.9 * SCREENWIDTH,
        height: 0.08 * SCREENHEIGHT,
        padding: 10,
        color: '#FF0099',
        fontFamily: 'AlongSansSemiBold',
        fontSize: 15,
        backgroundColor: 'white',
        borderRadius: 5,
    
    }
})