// LandingPage.js
import React from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../../assets/images/logo.png";

const LandingPage = () => {
  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={Logo} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Button title="Click to Log in" onPress={onLoginPress} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LandingPage;
