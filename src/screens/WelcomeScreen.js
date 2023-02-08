import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/adaptive-icon.png")}
            style={styles.imageIcon}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              {
                fontFamily: "AlongSansSemiBold",
                fontSize: 36,
                alignItems: "center",
                justifyContent: "center",
                top: 40,
              },
            ]}
          >
            Welcome
            {"\n"}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text
              style={[
                styles.text,
                {
                  fontFamily: "AlongSansExtraBold",
                  fontSize: 18,
                  color: "#FF0099",
                  top: 0,
                  alignSelf: "center",
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.button1}
          >
            <Text
              style={[
                styles.text,
                {
                  fontFamily: "AlongSansSemiBold",
                  fontSize: 16,
                  color: "white",
                  top: 0,
                  alignSelf: "center",
                },
              ]}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    height: SCREENHEIGHT,
    width: SCREENWIDTH,
  },

  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  imageIcon: {
    height: "45%",
    width: "45%",
  },

  textContainer: {
    height: SCREENHEIGHT,
    width: SCREENWIDTH,
    top: SCREENHEIGHT - SCREENHEIGHT / 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  text: {
    fontFamily: "pd-ebi",
    fontSize: 38,
    color: "#FF0099",
    alignSelf: "center",
    top: 20,
  },

  button1: {
    backgroundColor: "#FF0099",
    width: "80%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    top: 70,
  },

  button: {
    margin: 9,
    backgroundColor: "white",
    width: "80%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    top: 70,
  },
});
