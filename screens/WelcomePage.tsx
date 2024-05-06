import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.welcomePage}>
      <Text style={[styles.welcomeYoltIsContainer, styles.loginFlexBox]}>
        <Text style={styles.loginTypo}>{`Welcome!

`}</Text>
        <Text
          style={styles.yoltIsA}
        >{`YOLT is a online booking service for bus transportation. 
Login or Sign Up now to use this service.`}</Text>
      </Text>
      <Pressable
        style={[styles.welcomePageChild, styles.welcomeLayout]}
        onPress={() => navigation.navigate("LoginAsk")}
      />
      <Pressable
        style={[styles.welcomePageItem, styles.welcomeLayout]}
        onPress={() => navigation.navigate("Signup")}
      />
      <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      <Text style={[styles.signup, styles.loginTypo]}>SIGNUP</Text>
      <Image
        style={styles.whatsappImage20240413At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  welcomeLayout: {
    height: 40,
    width: 141,
    borderWidth: 1,
    borderColor: Color.colorSlateblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorIndigo,
    borderRadius: Border.br_14xl,
    top: 663,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  yoltIsA: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.nunitoRegular,
  },
  welcomeYoltIsContainer: {
    top: 502,
    left: 64,
    color: Color.colorBlack,
    width: 262,
    height: 181,
  },
  welcomePageChild: {
    left: 20,
  },
  welcomePageItem: {
    left: 231,
  },
  login: {
    top: 672,
    left: 40,
    color: Color.colorGray_100,
    width: 107,
    height: 23,
    textAlign: "center",
    position: "absolute",
  },
  signup: {
    top: 671,
    left: 247,
    color: Color.colorGray_200,
    width: 108,
    height: 19,
    textAlign: "center",
    position: "absolute",
  },
  whatsappImage20240413At1: {
    top: 135,
    left: 71,
    borderRadius: Border.br_xl,
    width: 247,
    height: 257,
    position: "absolute",
  },
  welcomePage: {
    backgroundColor: Color.colorSnow_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default WelcomePage;
