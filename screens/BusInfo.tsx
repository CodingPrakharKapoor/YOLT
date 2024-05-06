import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BusInfo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.busInfo}>
      <View style={styles.busInfoChild} />
      <Text style={[styles.bus3, styles.bus3Layout]}>BUS 3</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={[styles.text, styles.textTypo]}>←</Text>
      </Pressable>
      <View style={styles.busInfoItem} />
      <Text style={[styles.storageSpace, styles.onTimeTypo]}>
        Storage Space
      </Text>
      <Image
        style={styles.icons8StorageBox501}
        contentFit="cover"
        source={require("../assets/icons8storagebox50-1.png")}
      />
      <Image
        style={styles.icons8Clock242}
        contentFit="cover"
        source={require("../assets/icons8clock24-2.png")}
      />
      <Image
        style={[styles.icons8AircraftSeatMiddle50, styles.sat1stJanPosition]}
        contentFit="cover"
        source={require("../assets/icons8aircraftseatmiddle50-1.png")}
      />
      <Text style={[styles.sat1stJan, styles.sat1stJanPosition]}>
        Sat, 1st Jan, 2024
      </Text>
      <View style={styles.busInfoInner} />
      <Text style={styles.busNoBa123}>Bus no. BA123</Text>
      <Text style={[styles.mathura, styles.noidaTypo]}>Mathura</Text>
      <Text style={[styles.noida, styles.noidaTypo]}>Noida</Text>
      <Text style={[styles.am, styles.amLayout]}>
        <Text style={styles.am1}>{`06:30AM
`}</Text>
        <Text style={styles.text1}>{`

`}</Text>
      </Text>
      <Text style={[styles.am2, styles.amLayout]}>{`10:50AM


`}</Text>
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-71.png")}
      />
      <Image
        style={[styles.icons8Select301, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8select30-1.png")}
      />
      <Image
        style={[styles.icons8Select302, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8select30-1.png")}
      />
      <Text style={[styles.availableSeats, styles.availableSeatsLayout]}>
        Available Seats
      </Text>
      <Text style={[styles.seatsAvailable, styles.bookNowTypo]}>
        12 seats available
      </Text>
      <Text
        style={[styles.seatArrangement, styles.availableSeatsLayout]}
      >{`2*2 Seat Arrangement
`}</Text>
      <Text style={[styles.facility, styles.amLayout]}>Facility</Text>
      <Text style={[styles.comfortSeats, styles.onTimeTypo]}>
        Comfort Seats
      </Text>
      <Text style={[styles.onTime, styles.onTimeTypo]}>On Time</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.rs24000, styles.bus3Typo]}>
        <Text style={styles.text2}>{`2 * 120.00
`}</Text>
        <Text style={styles.rs240001}>Rs. 240.00</Text>
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.bus3Layout]}
        onPress={() => navigation.navigate("ChooseSeat")}
      />
      <Text style={[styles.bookNow, styles.bookNowTypo]}>Book Now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bus3Layout: {
    height: 43,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  onTimeTypo: {
    height: 17,
    width: 146,
    fontSize: FontSize.size_mini,
    left: 71,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  sat1stJanPosition: {
    height: 24,
    left: 32,
    position: "absolute",
  },
  noidaTypo: {
    height: 55,
    width: 135,
    top: 362,
    color: Color.colorSlateblue_100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  amLayout: {
    height: 28,
    textAlign: "left",
    position: "absolute",
  },
  icons8Layout: {
    height: 16,
    width: 16,
    top: 398,
    position: "absolute",
  },
  availableSeatsLayout: {
    height: 42,
    textAlign: "left",
    position: "absolute",
  },
  bookNowTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  bus3Typo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  busInfoChild: {
    top: 216,
    left: 91,
    borderRadius: 19,
    width: 209,
    height: 38,
    backgroundColor: Color.colorIndigo,
    position: "absolute",
  },
  bus3: {
    top: 220,
    left: 162,
    fontSize: FontSize.size_5xl,
    color: "#fefeff",
    width: 177,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  text: {
    fontSize: FontSize.size_17xl,
    color: Color.colorIndigo,
    textAlign: "center",
    width: 73,
    height: 49,
  },
  pressable: {
    left: -5,
    top: 0,
    position: "absolute",
  },
  busInfoItem: {
    top: 263,
    left: 17,
    borderRadius: 23,
    backgroundColor: Color.colorSnow_200,
    width: 357,
    height: 517,
    position: "absolute",
  },
  storageSpace: {
    top: 663,
    color: "#484848",
  },
  icons8StorageBox501: {
    top: 661,
    width: 21,
    height: 21,
    left: 32,
    position: "absolute",
  },
  icons8Clock242: {
    top: 625,
    width: 20,
    height: 20,
    left: 32,
    position: "absolute",
  },
  icons8AircraftSeatMiddle50: {
    width: 24,
    top: 585,
  },
  sat1stJan: {
    top: 276,
    color: Color.colorDimgray_200,
    width: 240,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  busInfoInner: {
    top: 307,
    left: 9,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 374,
    height: 147,
    position: "absolute",
  },
  busNoBa123: {
    top: 313,
    left: 120,
    color: "#4f4d4d",
    width: 152,
    height: 33,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  mathura: {
    left: 32,
  },
  noida: {
    left: 260,
  },
  am1: {
    color: Color.colorDimgray_100,
  },
  text1: {
    color: Color.colorBlack,
  },
  am: {
    width: 88,
    top: 394,
    height: 28,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    left: 32,
  },
  am2: {
    color: Color.colorDimgray_100,
    width: 88,
    top: 394,
    height: 28,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    left: 260,
  },
  lineIcon: {
    top: 406,
    left: 151,
    maxHeight: "100%",
    width: 77,
    position: "absolute",
  },
  icons8Select301: {
    left: 133,
  },
  icons8Select302: {
    left: 231,
  },
  availableSeats: {
    top: 475,
    width: 184,
    left: 28,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  seatsAvailable: {
    top: 503,
    color: "#4e4b4b",
    height: 36,
    left: 28,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    width: 177,
  },
  seatArrangement: {
    top: 507,
    left: 223,
    fontSize: FontSize.size_sm,
    color: "#535151",
    width: 150,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  facility: {
    top: 557,
    width: 112,
    left: 28,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  comfortSeats: {
    color: "#444",
    top: 585,
  },
  onTime: {
    top: 624,
    color: "#403f3f",
  },
  rectangleView: {
    top: 762,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 82,
    position: "absolute",
  },
  text2: {
    color: "#666565",
    fontSize: FontSize.size_lg,
  },
  rs240001: {
    color: Color.colorSlateblue_100,
    fontSize: FontSize.size_xl,
  },
  rs24000: {
    top: 776,
    left: 19,
    height: 40,
    width: 177,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePressable: {
    top: 781,
    left: 245,
    borderRadius: Border.br_mini,
    width: 132,
    backgroundColor: Color.colorIndigo,
  },
  bookNow: {
    top: 790,
    left: 276,
    color: Color.colorWhite,
    width: 87,
    height: 34,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  busInfo: {
    backgroundColor: "#f1f0f0",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default BusInfo;
