import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Signup = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signup}>
      <View style={styles.signupChild} />
      <View style={[styles.signupItem, styles.signupLayout]} />
      <View style={[styles.signupInner, styles.signupLayout]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("HomePage")}
      />
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Text style={[styles.pin, styles.pinTypo]}>Pin</Text>
      <Text style={[styles.prakhar, styles.prakharTypo]}>prakhar</Text>
      <Text style={[styles.text, styles.textTypo]}>1234</Text>
      <View style={[styles.rectangleView, styles.signupLayout]} />
      <View style={[styles.signupChild1, styles.signupLayout]} />
      <Text style={[styles.fullName, styles.usernameTypo]}>Full Name</Text>
      <Text style={[styles.phoneNumber, styles.pinTypo]}>Phone number</Text>
      <Text style={[styles.prakharKapoor, styles.prakharTypo]}>
        Prakhar Kapoor
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>9825631478</Text>
      <Text style={[styles.signUp, styles.text2Typo]}>Sign up</Text>
      <Text style={styles.signup1}>SIGNUP</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("WelcomePage")}
      >
        <Text style={[styles.text2, styles.text2Typo]}>←</Text>
      </Pressable>
      <Image
        style={styles.whatsappImage20240413At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signupLayout: {
    height: 54,
    width: 284,
    borderColor: Color.colorSlateblue_100,
    left: 53,
    borderRadius: Border.br_107xl,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  usernameTypo: {
    height: 27,
    width: 147,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    left: 78,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  pinTypo: {
    left: 73,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  prakharTypo: {
    height: 34,
    width: 250,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    left: 73,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    height: 30,
    width: 207,
    left: 81,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text2Typo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  signupChild: {
    top: 170,
    left: 23,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorWhite,
    width: 343,
    height: 661,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  signupItem: {
    top: 513,
    backgroundColor: Color.colorSnow_300,
    width: 284,
    borderColor: Color.colorSlateblue_100,
    left: 53,
  },
  signupInner: {
    top: 623,
    width: 284,
    borderColor: Color.colorSlateblue_100,
    left: 53,
    backgroundColor: Color.colorWhite,
  },
  rectanglePressable: {
    top: 736,
    left: 102,
    backgroundColor: Color.colorIndigo,
    width: 186,
    height: 48,
    borderRadius: Border.br_107xl,
    position: "absolute",
  },
  username: {
    top: 478,
  },
  pin: {
    top: 590,
    width: 134,
    height: 31,
  },
  prakhar: {
    top: 530,
  },
  text: {
    top: 640,
  },
  rectangleView: {
    top: 288,
    backgroundColor: Color.colorSnow_300,
    width: 284,
    borderColor: Color.colorSlateblue_100,
    left: 53,
  },
  signupChild1: {
    top: 398,
    width: 284,
    borderColor: Color.colorSlateblue_100,
    left: 53,
    backgroundColor: Color.colorWhite,
  },
  fullName: {
    top: 253,
  },
  phoneNumber: {
    top: 359,
    width: 210,
    height: 45,
  },
  prakharKapoor: {
    top: 305,
  },
  text1: {
    top: 419,
  },
  signUp: {
    top: 744,
    left: 130,
    color: Color.colorWhite,
    width: 136,
    height: 40,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  signup1: {
    top: 205,
    left: 138,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    width: 214,
    height: 91,
    color: Color.colorSlateblue_100,
    textAlign: "left",
    position: "absolute",
  },
  text2: {
    fontSize: FontSize.size_17xl,
    width: 73,
    height: 52,
    color: Color.colorSlateblue_100,
  },
  pressable: {
    left: 4,
    top: 41,
    position: "absolute",
  },
  whatsappImage20240413At1: {
    top: 13,
    left: 109,
    borderRadius: Border.br_xl,
    width: 171,
    height: 173,
    position: "absolute",
  },
  signup: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Signup;
