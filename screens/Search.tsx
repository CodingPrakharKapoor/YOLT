import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.search}>
      <View style={[styles.searchChild, styles.searchLayout]} />
      <Image
        style={[styles.whatsappImage20240413At1, styles.searchChild1Layout]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-3.png")}
      />
      <View style={[styles.searchItem, styles.searchLayout]} />
      <Text style={[styles.to, styles.toTypo]}>To</Text>
      <Text style={[styles.from, styles.toTypo]}>From</Text>
      <Text style={[styles.mathura, styles.noidaTypo]}>Mathura</Text>
      <Text style={[styles.noida, styles.noidaTypo]}>Noida</Text>
      <Image
        style={[styles.icons8DownArrow321, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8downarrow32-1.png")}
      />
      <Image
        style={[styles.icons8DownArrow322, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8downarrow32-1.png")}
      />
      <View style={[styles.searchInner, styles.searchInnerLayout]} />
      <View style={[styles.rectangleView, styles.searchInnerLayout]} />
      <Text style={[styles.sat1stJan, styles.seatsTypo]}>
        Sat, 1st Jan, 2024
      </Text>
      <Text style={[styles.seats, styles.seatsTypo]}>2 Seats</Text>
      <View style={[styles.searchChild1, styles.searchChildLayout]} />
      <Text style={[styles.bus3, styles.bus3Layout]}>BUS 3</Text>
      <Text style={[styles.ba123, styles.ba123Layout]}>BA123</Text>
      <Text style={[styles.am, styles.amTypo]}>{`06:30AM


`}</Text>
      <Text style={[styles.am1, styles.amTypo]}>{`06:50AM


`}</Text>
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Text style={[styles.pickupMathura, styles.dropLayout]}>{`Pickup
Mathura`}</Text>
      <Text style={[styles.dropNoida, styles.dropLayout]}>{`Drop
Noida`}</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={[styles.rs12000AmtContainer, styles.amtContainerLayout]}>
        <Text style={[styles.rs12000, styles.rs12000Typo]}>{`Rs. 120.00
`}</Text>
        <Text style={[styles.amt, styles.amtTypo]}>Amt</Text>
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.searchChild5Layout]}
        onPress={() => navigation.navigate("BusInfo")}
      />
      <Text style={[styles.bookNow, styles.bookTypo]}>Book Now</Text>
      <View style={[styles.searchChild2, styles.searchChildBg]} />
      <Text style={[styles.bus5, styles.bus5Position]}>BUS 5</Text>
      <Text style={[styles.ba163, styles.pickupTypo]}>BA163</Text>
      <Text style={[styles.am2, styles.am2Typo]}>{`06:40AM


`}</Text>
      <Text style={[styles.am3, styles.am2Typo]}>{`07:00AM


`}</Text>
      <View style={styles.searchChild3} />
      <Text style={[styles.pickupMathura1, styles.pickupTypo]}>{`Pickup
Mathura`}</Text>
      <Text style={[styles.dropNoida1, styles.dropLayout]}>{`Drop
Noida`}</Text>
      <View style={[styles.searchChild4, styles.lineViewLayout]} />
      <Text style={[styles.rs13000AmtContainer, styles.searchChild5Position]}>
        <Text style={styles.rs12000Typo}>{`Rs. 130.00
`}</Text>
        <Text style={styles.amtTypo}>Amt</Text>
      </Text>
      <View style={[styles.searchChild5, styles.searchChild5Position]} />
      <Text style={[styles.bookNow1, styles.bookTypo]}>Book Now</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.text, styles.amtTypo]}>←</Text>
      </Pressable>
      <View style={[styles.searchChild6, styles.searchChildBg]} />
      <Text style={[styles.bus9, styles.am4Position]}>BUS 9</Text>
      <Text style={[styles.ba233, styles.bus9Position]}>BA233</Text>
      <Text style={[styles.am4, styles.am4Position]}>{`06:45AM


`}</Text>
      <Text style={[styles.pickup, styles.pickupTypo]}>{`Pickup
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 64,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_sm,
    top: 110,
    position: "absolute",
  },
  searchChild1Layout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  toTypo: {
    height: 22,
    width: 84,
    fontSize: FontSize.size_lg,
    top: 120,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  noidaTypo: {
    height: 27,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    top: 142,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  icons8Layout: {
    height: 9,
    width: 9,
    top: 153,
    position: "absolute",
  },
  searchInnerLayout: {
    height: 31,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  seatsTypo: {
    height: 24,
    width: 240,
    color: Color.colorDimgray_200,
    top: 190,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  searchChildLayout: {
    height: 250,
    width: 361,
  },
  bus3Layout: {
    height: 33,
    top: 257,
  },
  ba123Layout: {
    width: 88,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xl,
  },
  amTypo: {
    height: 28,
    width: 88,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  dropLayout: {
    height: 55,
    width: 135,
    color: Color.colorGray_400,
    fontSize: FontSize.size_lg,
  },
  lineViewLayout: {
    height: 1,
    width: 363,
    borderTopWidth: 1,
    borderColor: Color.colorSilver_200,
    borderStyle: "solid",
    position: "absolute",
  },
  amtContainerLayout: {
    height: 52,
    width: 160,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  rs12000Typo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  amtTypo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  searchChild5Layout: {
    height: 43,
    width: 96,
    borderRadius: Border.br_mini,
  },
  bookTypo: {
    height: 34,
    width: 87,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  searchChildBg: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  bus5Position: {
    top: 525,
    height: 33,
  },
  pickupTypo: {
    left: 158,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  am2Typo: {
    left: 44,
    height: 28,
    width: 88,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  searchChild5Position: {
    top: 697,
    position: "absolute",
  },
  am4Position: {
    left: 41,
    textAlign: "left",
    position: "absolute",
  },
  bus9Position: {
    top: 782,
    height: 33,
  },
  searchChild: {
    width: 168,
    left: 19,
  },
  whatsappImage20240413At1: {
    top: 10,
    width: 85,
    height: 84,
    left: 279,
  },
  searchItem: {
    left: 197,
    width: 175,
  },
  to: {
    left: 211,
    color: "#868282",
  },
  from: {
    color: "#837f7f",
    left: 35,
  },
  mathura: {
    width: 98,
    left: 35,
  },
  noida: {
    left: 209,
    width: 163,
  },
  icons8DownArrow321: {
    left: 166,
  },
  icons8DownArrow322: {
    left: 352,
  },
  searchInner: {
    top: 187,
    width: 172,
    left: 15,
  },
  rectangleView: {
    top: 183,
    left: 203,
    width: 100,
  },
  sat1stJan: {
    left: 27,
  },
  seats: {
    left: 221,
  },
  searchChild1: {
    top: 236,
    left: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -3,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorSnow_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  bus3: {
    left: 43,
    width: 154,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    color: Color.colorSlateblue_100,
    textAlign: "left",
    position: "absolute",
  },
  ba123: {
    left: 159,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
    height: 33,
    top: 257,
  },
  am: {
    left: 45,
    height: 28,
    textAlign: "left",
    position: "absolute",
    top: 294,
  },
  am1: {
    top: 386,
    left: 45,
    height: 28,
    textAlign: "left",
    position: "absolute",
  },
  lineIcon: {
    top: 322,
    left: 90,
    maxWidth: "100%",
    height: 57,
    position: "absolute",
    overflow: "hidden",
  },
  pickupMathura: {
    top: 294,
    left: 159,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  dropNoida: {
    top: 363,
    left: 160,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  lineView: {
    top: 422,
    left: 15,
  },
  rs12000: {
    color: Color.colorSlateblue_100,
  },
  amt: {
    color: Color.colorGray_400,
  },
  rs12000AmtContainer: {
    left: 37,
    top: 429,
    position: "absolute",
  },
  rectanglePressable: {
    left: 269,
    backgroundColor: Color.colorIndigo,
    top: 429,
    position: "absolute",
  },
  bookNow: {
    top: 440,
    left: 280,
  },
  searchChild2: {
    top: 504,
    height: 250,
    width: 361,
    left: 15,
  },
  bus5: {
    left: 42,
    color: Color.colorGray_400,
    width: 154,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  ba163: {
    top: 525,
    height: 33,
    width: 88,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xl,
  },
  am2: {
    top: 562,
  },
  am3: {
    top: 654,
  },
  searchChild3: {
    top: 590,
    left: 88,
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    height: 58,
    position: "absolute",
  },
  pickupMathura1: {
    top: 562,
    height: 55,
    width: 135,
    color: Color.colorGray_400,
    fontSize: FontSize.size_lg,
  },
  dropNoida1: {
    top: 631,
    left: 159,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  searchChild4: {
    top: 690,
    left: 14,
  },
  rs13000AmtContainer: {
    left: 36,
    height: 52,
    width: 160,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    top: 697,
  },
  searchChild5: {
    left: 268,
    backgroundColor: "#b8b5bc",
    height: 43,
    width: 96,
    borderRadius: Border.br_mini,
  },
  bookNow1: {
    top: 708,
    left: 279,
  },
  text: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    width: 73,
    height: 49,
    color: Color.colorSlateblue_100,
  },
  pressable: {
    left: 4,
    top: 43,
    position: "absolute",
  },
  searchChild6: {
    top: 768,
    width: 353,
    height: 92,
    left: 19,
  },
  bus9: {
    color: "#7b757c",
    top: 782,
    height: 33,
    width: 154,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  ba233: {
    left: 158,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
    width: 88,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xl,
  },
  am4: {
    top: 818,
    height: 28,
    width: 88,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  pickup: {
    top: 816,
    width: 135,
    left: 158,
    color: Color.colorGray_400,
    height: 24,
    fontSize: FontSize.size_lg,
  },
  search: {
    backgroundColor: "#ebeaea",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Search;
