import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginAsk = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginAsk}>
      <Pressable
        style={styles.loginAskChild}
        onPress={() => navigation.navigate("Login")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LoginBus")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </Pressable>
      <Text style={[styles.loginAsPassenger, styles.loginTypo]}>{`LOGIN AS 
PASSENGER`}</Text>
      <Text style={[styles.loginAsBus, styles.loginTypo]}>
        LOGIN AS BUS FACULTY
      </Text>
      <Image
        style={styles.whatsappImage20240413At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-2.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("WelcomePage")}
      >
        <Text style={styles.text}>←</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  loginAskChild: {
    top: 526,
    left: 134,
    backgroundColor: Color.colorIndigo,
    borderStyle: "solid",
    borderColor: Color.colorSlateblue_100,
    borderWidth: 1,
    width: 141,
    height: 66,
    borderRadius: Border.br_14xl,
    position: "absolute",
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_14xl,
    width: "100%",
  },
  wrapper: {
    left: 122,
    top: 607,
    width: 176,
    height: 86,
    position: "absolute",
  },
  loginAsPassenger: {
    top: 534,
    left: 150,
    color: Color.colorGray_100,
    width: 107,
    height: 23,
    textAlign: "center",
  },
  loginAsBus: {
    top: 626,
    left: 145,
    color: Color.colorGray_200,
    width: 137,
    height: 20,
    textAlign: "center",
  },
  whatsappImage20240413At1: {
    top: 135,
    left: 71,
    borderRadius: Border.br_xl,
    width: 247,
    height: 257,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorSlateblue_100,
    width: 73,
    height: 49,
    textAlign: "center",
  },
  pressable: {
    left: 5,
    top: 43,
    position: "absolute",
  },
  loginAsk: {
    backgroundColor: Color.colorSnow_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginAsk;
