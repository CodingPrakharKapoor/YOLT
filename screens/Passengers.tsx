import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Passengers = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.passengers}>
      <View style={styles.passengersChild} />
      <Image
        style={styles.icons8Search25}
        contentFit="cover"
        source={require("../assets/icons8search2-5.png")}
      />
      <Image
        style={[styles.icons8MenuSquared482, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8menusquared48-1.png")}
      />
      <Pressable
        style={[styles.icons8User25, styles.icons8Position]}
        onPress={() => navigation.navigate("Prakhar")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8user2-5.png")}
        />
      </Pressable>
      <View style={styles.passengersItem} />
      <View style={[styles.passengersInner, styles.passengersChildLayout1]} />
      <View style={[styles.rectangleView, styles.passengersChildLayout1]} />
      <View style={[styles.passengersChild1, styles.passengersChildLayout1]} />
      <View style={[styles.passengersChild2, styles.passengersChildLayout1]} />
      <View style={[styles.passengersChild3, styles.passengersChildLayout1]} />
      <Text style={styles.passengerDetails}>PASSENGER DETAILS</Text>
      <View style={[styles.passengersChild4, styles.passengersChildLayout1]} />
      <Text style={[styles.prakhargmailcom, styles.prakhargmailcomTypo]}>
        akshat
      </Text>
      <Text style={[styles.prakhargmailcom1, styles.prakhargmailcomTypo]}>
        yash
      </Text>
      <Text style={[styles.prakhargmailcom2, styles.prakhargmailcomTypo]}>
        ayush
      </Text>
      <Text style={[styles.prakhargmailcom3, styles.prakhargmailcomTypo]}>
        rahul
      </Text>
      <Text style={[styles.prakhargmailcom4, styles.prakhargmailcomTypo]}>
        hello_hi
      </Text>
      <Text style={[styles.prakhargmailcom5, styles.prakhargmailcomTypo]}>
        meow
      </Text>
      <Image
        style={styles.whatsappImage20240413At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-3.png")}
      />
      <View style={[styles.passengersChild5, styles.passengersChildLayout]} />
      <View style={[styles.passengersChild6, styles.passengersChildLayout]} />
      <View style={[styles.passengersChild7, styles.passengersChildLayout]} />
      <View style={[styles.passengersChild8, styles.passengersChildLayout]} />
      <View style={[styles.passengersChild9, styles.passengersChildLayout]} />
      <View style={[styles.passengersChild10, styles.passengersChildLayout]} />
      <Pressable
        style={[styles.moreInfo, styles.morePosition]}
        onPress={() => navigation.navigate("Akshat")}
      >
        <Text style={styles.moreTypo}>More info</Text>
      </Pressable>
      <Text style={[styles.moreInfo2, styles.moreTypo]}>More info</Text>
      <Text style={[styles.moreInfo3, styles.moreTypo]}>More info</Text>
      <Text style={[styles.moreInfo4, styles.moreTypo]}>More info</Text>
      <Text style={[styles.moreInfo5, styles.moreTypo]}>More info</Text>
      <Text style={[styles.moreInfo6, styles.moreTypo]}>More info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icons8Position: {
    top: 781,
    position: "absolute",
  },
  passengersChildLayout1: {
    height: 54,
    width: 305,
    borderColor: Color.colorSlateblue_100,
    borderRadius: Border.br_107xl,
    left: 50,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  prakhargmailcomTypo: {
    height: 34,
    width: 250,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    left: 73,
    textAlign: "left",
    position: "absolute",
  },
  passengersChildLayout: {
    height: 42,
    width: 135,
    backgroundColor: Color.colorIndigo,
    left: 212,
    borderRadius: Border.br_107xl,
    position: "absolute",
  },
  morePosition: {
    left: 212,
    position: "absolute",
  },
  moreTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 40,
    width: 136,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
  },
  passengersChild: {
    top: 122,
    left: 26,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorWhite,
    width: 343,
    height: 589,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  icons8Search25: {
    top: 788,
    left: 20,
    width: 49,
    height: 41,
    position: "absolute",
  },
  icons8MenuSquared482: {
    left: 171,
    width: 48,
    height: 48,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8User25: {
    left: 321,
    width: 46,
    height: 46,
  },
  passengersItem: {
    top: 768,
    left: 0,
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  passengersInner: {
    top: 280,
  },
  rectangleView: {
    top: 350,
  },
  passengersChild1: {
    top: 140,
  },
  passengersChild2: {
    top: 420,
  },
  passengersChild3: {
    top: 490,
  },
  passengerDetails: {
    top: 28,
    left: 9,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorSlateblue_100,
    width: 287,
    height: 91,
    textAlign: "left",
    position: "absolute",
  },
  passengersChild4: {
    top: 210,
  },
  prakhargmailcom: {
    top: 156,
  },
  prakhargmailcom1: {
    top: 225,
  },
  prakhargmailcom2: {
    top: 295,
  },
  prakhargmailcom3: {
    top: 365,
  },
  prakhargmailcom4: {
    top: 435,
  },
  prakhargmailcom5: {
    top: 505,
  },
  whatsappImage20240413At1: {
    top: 20,
    left: 295,
    borderRadius: Border.br_xl,
    width: 85,
    height: 84,
    position: "absolute",
  },
  passengersChild5: {
    top: 147,
  },
  passengersChild6: {
    top: 216,
  },
  passengersChild7: {
    top: 286,
  },
  passengersChild8: {
    top: 356,
  },
  passengersChild9: {
    top: 426,
  },
  passengersChild10: {
    top: 496,
  },
  moreInfo: {
    top: 151,
  },
  moreInfo2: {
    top: 221,
    left: 212,
    position: "absolute",
  },
  moreInfo3: {
    top: 291,
    left: 212,
    position: "absolute",
  },
  moreInfo4: {
    top: 361,
    left: 212,
    position: "absolute",
  },
  moreInfo5: {
    top: 431,
    left: 212,
    position: "absolute",
  },
  moreInfo6: {
    top: 501,
    left: 212,
    position: "absolute",
  },
  passengers: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Passengers;
