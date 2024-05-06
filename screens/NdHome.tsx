import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const NdHome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ndHome}>
      <View style={styles.ndHomeChild} />
      <Text style={styles.helloPrakharLooking}>{`Hello, Prakhar.
Looking for a bus?`}</Text>
      <Pressable
        style={styles.icons8MenuSquared481Parent}
        onPress={() => navigation.navigate("IPhone1313Pro")}
      >
        <Pressable
          style={[styles.icons8MenuSquared481, styles.icons8Layout]}
          onPress={() => navigation.navigate("TicketDetail")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icons8menusquared48-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.icons8User241, styles.icons8Layout]}
          contentFit="cover"
          source={require("../assets/icons8user24-1.png")}
        />
        <Image
          style={styles.icons8Search243}
          contentFit="cover"
          source={require("../assets/icons8search24-3.png")}
        />
      </Pressable>
      <Image
        style={styles.istockphoto1268299100612x612Icon}
        contentFit="cover"
        source={require("../assets/istockphoto1268299100612x612-1.png")}
      />
      <View style={styles.ndHomeItem} />
      <Text style={[styles.from, styles.fromLayout]}>From</Text>
      <Text style={[styles.to, styles.toLayout]}>To</Text>
      <Text style={[styles.passenger, styles.toTypo]}>Passenger</Text>
      <Text style={[styles.date, styles.datePosition]}>Date</Text>
      <Text style={[styles.time, styles.toTypo]}>Time</Text>
      <View style={[styles.ndHomeInner, styles.homeChildLayout1]} />
      <View style={[styles.lineView, styles.homeChildLayout1]} />
      <View style={[styles.ndHomeChild1, styles.homeChildLayout1]} />
      <View style={[styles.ndHomeChild2, styles.homeChildLayout]} />
      <View style={[styles.ndHomeChild3, styles.homeChildLayout]} />
      <Image
        style={[styles.icons8Location481, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8location48-1.png")}
      />
      <Image
        style={styles.icons8Select301}
        contentFit="cover"
        source={require("../assets/icons8select30-1.png")}
      />
      <View style={styles.ndHomeChild4} />
      <Image
        style={[styles.icons8Users641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8users64-1.png")}
      />
      <Image
        style={[styles.icons8Calendar501, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8calendar50-1.png")}
      />
      <Image
        style={[styles.icons8Clock241, styles.datePosition]}
        contentFit="cover"
        source={require("../assets/icons8clock24-1.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Success")}
      />
      <Text style={[styles.searchNow, styles.fromLayout]}>Search Now</Text>
      <View style={[styles.ndHomeChild5, styles.homeChildLayout1]} />
      <Image
        style={[styles.whatsappImage20240413At1, styles.toLayout]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icons8Layout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  fromLayout: {
    height: 40,
    position: "absolute",
  },
  toLayout: {
    width: 85,
    position: "absolute",
  },
  toTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  datePosition: {
    top: 563,
    position: "absolute",
  },
  homeChildLayout1: {
    height: 1,
    borderTopWidth: 1,
    position: "absolute",
  },
  homeChildLayout: {
    width: 95,
    top: 621,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    position: "absolute",
  },
  icons8Position: {
    left: 26,
    position: "absolute",
  },
  ndHomeChild: {
    top: 43,
    width: 274,
    height: 74,
    left: 57,
    position: "absolute",
    overflow: "hidden",
  },
  helloPrakharLooking: {
    top: 111,
    left: 21,
    fontSize: FontSize.size_xl,
    width: 339,
    height: 135,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8MenuSquared481: {
    left: 149,
    top: 1,
  },
  icons8User241: {
    top: 0,
    left: 299,
  },
  icons8Search243: {
    top: 7,
    width: 47,
    height: 47,
    left: 0,
    position: "absolute",
  },
  icons8MenuSquared481Parent: {
    top: 766,
    left: 18,
    width: 347,
    height: 54,
    position: "absolute",
  },
  istockphoto1268299100612x612Icon: {
    top: 189,
    left: 39,
    width: 290,
    height: 157,
    position: "absolute",
  },
  ndHomeItem: {
    top: 336,
    left: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_15xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 349,
    height: 298,
    position: "absolute",
  },
  from: {
    top: 348,
    width: 152,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    left: 52,
  },
  to: {
    top: 424,
    height: 35,
    left: 55,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  passenger: {
    top: 497,
    width: 172,
    height: 38,
    left: 55,
    position: "absolute",
  },
  date: {
    width: 130,
    height: 44,
    left: 55,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  time: {
    top: 560,
    left: 228,
    width: 93,
    height: 50,
    position: "absolute",
  },
  ndHomeInner: {
    top: 412,
    width: 195,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 57,
  },
  lineView: {
    top: 485,
    width: 195,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 57,
  },
  ndHomeChild1: {
    top: 558,
    width: 195,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 55,
  },
  ndHomeChild2: {
    left: 52,
  },
  ndHomeChild3: {
    left: 227,
  },
  icons8Location481: {
    top: 353,
    width: 23,
    height: 23,
  },
  icons8Select301: {
    top: 430,
    left: 30,
    width: 16,
    height: 16,
    position: "absolute",
  },
  ndHomeChild4: {
    top: 378,
    left: 37,
    borderRightWidth: 1,
    width: 1,
    height: 52,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    position: "absolute",
  },
  icons8Users641: {
    top: 500,
    width: 22,
    height: 22,
  },
  icons8Calendar501: {
    top: 566,
    width: 24,
    height: 24,
  },
  icons8Clock241: {
    left: 197,
    width: 27,
    height: 27,
  },
  rectanglePressable: {
    top: 652,
    left: 75,
    borderRadius: Border.br_107xl,
    backgroundColor: Color.colorIndigo,
    width: 218,
    height: 61,
    position: "absolute",
  },
  searchNow: {
    top: 667,
    left: 118,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 136,
  },
  ndHomeChild5: {
    top: 753,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    width: 391,
    height: 1,
    borderTopWidth: 1,
    left: 0,
  },
  whatsappImage20240413At1: {
    top: 14,
    left: 134,
    borderRadius: Border.br_xl,
    height: 84,
  },
  ndHome: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default NdHome;
