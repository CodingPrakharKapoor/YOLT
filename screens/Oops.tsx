import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Oops = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.oops}>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("IPhone1313Pro")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8user24-1.png")}
        />
      </Pressable>
      <View style={[styles.oopsChild, styles.oopsChildPosition]} />
      <Pressable
        style={styles.icons8Search25}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8search2-5.png")}
        />
      </Pressable>
      <Image
        style={[styles.icons8MenuSquared49, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/icons8menusquared4-9.png")}
      />
      <Text style={[styles.yourTicket, styles.oops1Typo]}>Your Ticket</Text>
      <Image
        style={[
          styles.f4719794387od1bdiezqvn7gbpyoIcon,
          styles.oopsChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/360-f-471979438-7od1bdiezqvn7gbpyo3nc4tnmbdd2qmo-1.png")}
      />
      <Text style={[styles.oops1, styles.oops1Clr]}>Oops!</Text>
      <Text
        style={[styles.youDontHave, styles.oops1Clr]}
      >{`You don’t have any ticket yet. please book first. `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    width: 48,
    top: 781,
    height: 48,
    position: "absolute",
  },
  oopsChildPosition: {
    left: 0,
    position: "absolute",
  },
  oops1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_17xl,
  },
  oops1Clr: {
    color: Color.colorSlateblue_100,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 321,
    height: 48,
  },
  oopsChild: {
    top: 768,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 391,
    height: 1,
  },
  icons8Search25: {
    left: 20,
    top: 788,
    width: 49,
    height: 41,
    position: "absolute",
  },
  icons8MenuSquared49: {
    left: 171,
    height: 48,
  },
  yourTicket: {
    top: 48,
    left: 98,
    color: Color.colorBlack,
    width: 242,
    height: 78,
    position: "absolute",
  },
  f4719794387od1bdiezqvn7gbpyoIcon: {
    top: 114,
    width: 390,
    height: 283,
  },
  oops1: {
    top: 430,
    left: 133,
    width: 212,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_17xl,
    height: 48,
  },
  youDontHave: {
    top: 488,
    left: 45,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    textAlign: "center",
    width: 290,
    height: 136,
  },
  oops: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Oops;
