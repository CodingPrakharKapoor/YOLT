import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OpeningScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.openingScreen}>
      <Pressable
        style={styles.openingScreenChild}
        onPress={() => navigation.navigate("WelcomePage")}
      />
      <Text style={styles.getStarted}>Get Started</Text>
      <Image
        style={styles.whatsappImage20240413At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  openingScreenChild: {
    top: 676,
    left: 87,
    borderRadius: 70,
    backgroundColor: Color.colorIndigo,
    width: 216,
    height: 48,
    position: "absolute",
  },
  getStarted: {
    top: 687,
    left: 134,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 149,
    height: 26,
    position: "absolute",
  },
  whatsappImage20240413At1: {
    top: 152,
    left: 44,
    borderRadius: Border.br_xl,
    width: 303,
    height: 305,
    position: "absolute",
  },
  openingScreen: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default OpeningScreen;
