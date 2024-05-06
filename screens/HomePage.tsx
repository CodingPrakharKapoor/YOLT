import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homePage}>
      <Text style={styles.helloPrakharLooking}>{`Hello, Prakhar.
Looking for a bus?`}</Text>
      <View style={[styles.homePageChild, styles.homePageChildPosition]} />
      <Image
        style={[styles.icons8Search241, styles.homePageChildPosition]}
        contentFit="cover"
        source={require("../assets/icons8search24-1.png")}
      />
      <View style={styles.icons8MenuSquared481Parent}>
        <Pressable
          style={[styles.icons8MenuSquared481, styles.icons8Layout]}
          onPress={() => navigation.navigate("Oops")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icons8menusquared48-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icons8User241, styles.icons8Layout]}
          onPress={() => navigation.navigate("IPhone1313Pro")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icons8user24-1.png")}
          />
        </Pressable>
        <Image
          style={styles.icons8Search243}
          contentFit="cover"
          source={require("../assets/icons8search24-3.png")}
        />
      </View>
      <Image
        style={styles.istockphoto1268299100612x612Icon}
        contentFit="cover"
        source={require("../assets/istockphoto1268299100612x612-1.png")}
      />
      <View style={styles.homePageItem} />
      <Text style={[styles.from, styles.fromLayout]}>From</Text>
      <Text style={[styles.to, styles.toLayout]}>To</Text>
      <Text style={[styles.passenger, styles.toTypo]}>Passenger</Text>
      <Text style={[styles.date, styles.toTypo]}>Date</Text>
      <Text style={[styles.time, styles.toTypo]}>Time</Text>
      <View style={[styles.homePageInner, styles.homeChildLayout1]} />
      <View style={[styles.lineView, styles.homeChildLayout1]} />
      <View style={[styles.homePageChild1, styles.homeChildLayout1]} />
      <View style={[styles.homePageChild2, styles.homeChildLayout]} />
      <View style={[styles.homePageChild3, styles.homeChildLayout]} />
      <Text style={[styles.mathura, styles.mathuraLayout]}>Mathura</Text>
      <Text style={[styles.noida, styles.noidaTypo]}>Noida</Text>
      <Text style={[styles.text, styles.amTypo]}>2024/1/1</Text>
      <Text style={[styles.am, styles.amTypo]}>6.30 AM</Text>
      <Text style={[styles.people, styles.noidaTypo]}>2 people</Text>
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
      <View style={styles.homePageChild4} />
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
        style={[styles.icons8Clock241, styles.mathuraLayout]}
        contentFit="cover"
        source={require("../assets/icons8clock24-1.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Search")}
      />
      <Text style={[styles.searchNow, styles.fromLayout]}>Search Now</Text>
      <View style={[styles.homePageChild5, styles.homeChildLayout1]} />
      <Image
        style={[styles.whatsappImage20240413At1, styles.toLayout]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePageChildPosition: {
    display: "none",
    position: "absolute",
  },
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
  homeChildLayout1: {
    height: 1,
    borderTopWidth: 1,
    position: "absolute",
  },
  homeChildLayout: {
    width: 95,
    top: 636,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    position: "absolute",
  },
  mathuraLayout: {
    height: 27,
    position: "absolute",
  },
  noidaTypo: {
    width: 163,
    height: 27,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    left: 56,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.size_lg,
    top: 605,
    width: 163,
    height: 27,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  icons8Position: {
    left: 30,
    position: "absolute",
  },
  helloPrakharLooking: {
    top: 126,
    left: 25,
    width: 339,
    height: 135,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  homePageChild: {
    top: 773,
    left: 33,
    backgroundColor: "rgba(105, 59, 184, 0.2)",
    width: 46,
    height: 46,
  },
  icons8Search241: {
    top: 783,
    left: 39,
    width: 45,
    height: 45,
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
    left: 299,
    top: 0,
  },
  icons8Search243: {
    top: 7,
    width: 47,
    height: 47,
    left: 0,
    position: "absolute",
  },
  icons8MenuSquared481Parent: {
    top: 781,
    left: 22,
    width: 347,
    height: 54,
    position: "absolute",
  },
  istockphoto1268299100612x612Icon: {
    top: 204,
    left: 43,
    width: 290,
    height: 157,
    position: "absolute",
  },
  homePageItem: {
    top: 351,
    left: 20,
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
    top: 363,
    width: 152,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    left: 56,
  },
  to: {
    top: 439,
    height: 35,
    left: 59,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  passenger: {
    top: 512,
    width: 172,
    height: 38,
    left: 59,
    position: "absolute",
  },
  date: {
    width: 130,
    height: 44,
    top: 578,
    left: 59,
    position: "absolute",
  },
  time: {
    top: 575,
    left: 232,
    width: 93,
    height: 50,
    position: "absolute",
  },
  homePageInner: {
    top: 427,
    width: 195,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 61,
  },
  lineView: {
    top: 500,
    width: 195,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 61,
  },
  homePageChild1: {
    top: 573,
    width: 195,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 59,
  },
  homePageChild2: {
    left: 56,
  },
  homePageChild3: {
    left: 231,
  },
  mathura: {
    top: 399,
    width: 98,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    height: 27,
    left: 61,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  noida: {
    top: 473,
  },
  text: {
    left: 56,
  },
  am: {
    left: 234,
  },
  people: {
    top: 542,
  },
  icons8Location481: {
    top: 368,
    width: 23,
    height: 23,
  },
  icons8Select301: {
    top: 445,
    left: 34,
    width: 16,
    height: 16,
    position: "absolute",
  },
  homePageChild4: {
    top: 393,
    left: 41,
    borderRightWidth: 1,
    width: 1,
    height: 52,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    position: "absolute",
  },
  icons8Users641: {
    top: 515,
    width: 22,
    height: 22,
  },
  icons8Calendar501: {
    top: 581,
    width: 24,
    height: 24,
  },
  icons8Clock241: {
    left: 201,
    width: 27,
    top: 578,
  },
  rectanglePressable: {
    top: 667,
    left: 79,
    borderRadius: Border.br_107xl,
    backgroundColor: Color.colorIndigo,
    width: 218,
    height: 61,
    position: "absolute",
  },
  searchNow: {
    top: 682,
    left: 122,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 136,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  homePageChild5: {
    top: 768,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    width: 391,
    height: 1,
    borderTopWidth: 1,
    left: 0,
  },
  whatsappImage20240413At1: {
    top: 31,
    left: 240,
    borderRadius: Border.br_xl,
    height: 84,
  },
  homePage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
