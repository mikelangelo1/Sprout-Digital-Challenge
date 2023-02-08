import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconContainer from '../components/IconContainer';
import SignupInfo from '../components/SignupInfo';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../auth/AuthProvider';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, googleLogin } = useContext(AuthContext);

  return (
    <View>
      <View style={styles.upper}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <TouchableOpacity>
            <IconContainer iconName='arrow-left' />
          </TouchableOpacity>
          
          <Text style={styles.titleText}> Login </Text>
        </View>

        <View>
          <Text style={styles.infoText}> Log in with the following option.</Text>
          <View>
            <TouchableOpacity style={styles.IconContainer} onPress={googleLogin}>
              <Icon name='logo-google' size={30} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.middle}>
        <SignupInfo 
            infoTitle='' 
            placeholder='Email' 
            autoComplete='email' 
            value={email}
            onChangeText={userEmail => setEmail(userEmail)}
          />
            
          <SignupInfo 
            infoTitle='' 
            placeholder='Password' 
            autoComplete='password'
            value={password}
            onChangeText={userPassword => setPassword(userPassword)}
          />
      </View>

      <View style={styles.lower}>
        <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
          <Text style={styles.buttonText}> Log in </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  upper: {
    backgroundColor: "#E5E4E2",
    height: SCREENHEIGHT / 3.5,
    width: SCREENWIDTH,
    padding: 20,
  },

  middle: {
    backgroundColor: "#E5E4E2",
    height: SCREENHEIGHT - SCREENHEIGHT / 3.5 - SCREENHEIGHT / 2.5,
    width: SCREENWIDTH,
    padding: 20,
  },

  lower: {
    backgroundColor: "#E5E4E2",
    height: SCREENHEIGHT / 2.5,
    width: SCREENWIDTH,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontFamily: "AlongSansExtraBold",
    marginLeft: 10,
    fontSize: 30,
    color: "#FF0099",
  },

  infoText: {
    fontFamily: "AlongSansMedium",
    fontSize: 18,
    color: "#FF0099",
    marginTop: 50,
  },

  IconContainer: {
    backgroundColor: "#FF0099",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 20,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "gray",
  },

  button: {
    backgroundColor: "#FF0099",
    width: 0.7 * SCREENWIDTH,
    height: 0.07 * SCREENHEIGHT,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "row",
  },

  buttonText: {
    fontFamily: "AlongSansExtraBold",
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },

  loginText: {
    fontFamily: "AlongSansMedium",
    fontSize: 15,
    color: "white",
    marginTop: 20,
  },
})