import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Text style={styles.login1}>LOGIN</Text>
      <View style={[styles.loginItem, styles.loginLayout]} />
      <View style={[styles.loginInner, styles.loginLayout]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("HomePage")}
      />
      <Text style={[styles.username, styles.pinTypo]}>Username</Text>
      <Text style={[styles.pin, styles.pinTypo]}>Pin</Text>
      <Text style={[styles.prakhargmailcom, styles.textTypo]}>prakhar</Text>
      <Text style={[styles.text, styles.textTypo]}>1234</Text>
      <Text style={[styles.login2, styles.text1Typo]}>Login</Text>
      <Pressable
        style={styles.loginChild1}
        onPress={() => navigation.navigate("HomePage")}
      />
      <Text style={[styles.loginWithGoogle, styles.googlePosition]}>
        Login with Google
      </Text>
      <Image
        style={[styles.icons8Google481, styles.googlePosition]}
        contentFit="cover"
        source={require("../assets/icons8google48-1.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("WelcomePage")}
      >
        <Text style={[styles.text1, styles.text1Typo]}>←</Text>
      </Pressable>
      <Image
        style={styles.whatsappImage20240413At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 54,
    width: 284,
    left: 53,
    borderColor: Color.colorSlateblue_100,
    borderRadius: Border.br_107xl,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  pinTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  googlePosition: {
    top: 763,
    position: "absolute",
  },
  loginChild: {
    top: 251,
    left: 26,
    borderColor: Color.colorWhite,
    width: 343,
    height: 460,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  login1: {
    top: 274,
    left: 152,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    width: 214,
    height: 91,
    textAlign: "left",
    color: Color.colorSlateblue_100,
    position: "absolute",
  },
  loginItem: {
    top: 373,
    backgroundColor: Color.colorSnow_300,
  },
  loginInner: {
    top: 483,
    backgroundColor: Color.colorWhite,
  },
  rectanglePressable: {
    top: 601,
    left: 102,
    backgroundColor: Color.colorIndigo,
    width: 186,
    height: 48,
    borderRadius: Border.br_107xl,
    position: "absolute",
  },
  username: {
    top: 338,
    left: 78,
    width: 147,
    height: 27,
  },
  pin: {
    top: 450,
    width: 134,
    height: 31,
    left: 73,
  },
  prakhargmailcom: {
    top: 390,
    width: 250,
    height: 34,
    left: 73,
  },
  text: {
    top: 504,
    left: 81,
    width: 207,
    height: 30,
  },
  login2: {
    top: 609,
    left: 130,
    color: Color.colorWhite,
    width: 136,
    height: 40,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  loginChild1: {
    top: 750,
    left: 50,
    width: 295,
    height: 52,
    borderColor: Color.colorSlateblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  loginWithGoogle: {
    left: -25,
    textAlign: "right",
    width: 310,
    height: 47,
    fontSize: FontSize.size_lg,
    top: 763,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  icons8Google481: {
    left: 89,
    width: 26,
    height: 26,
  },
  text1: {
    fontSize: FontSize.size_17xl,
    width: 73,
    height: 49,
    textAlign: "center",
    color: Color.colorSlateblue_100,
  },
  pressable: {
    left: 5,
    top: 43,
    position: "absolute",
  },
  whatsappImage20240413At1: {
    top: 22,
    left: 79,
    borderRadius: Border.br_xl,
    width: 231,
    height: 229,
    position: "absolute",
  },
  login: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
