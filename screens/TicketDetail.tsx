import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const TicketDetail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ticketDetail}>
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
      <View style={styles.ticketDetailChild} />
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
      <Text style={styles.yourTicket}>Your Ticket</Text>
      <Text style={styles.yourTicket}>Your Ticket</Text>
      <View style={[styles.ticketDetailItem, styles.ticketPosition]} />
      <View style={[styles.ticketDetailInner, styles.ticketDetailInnerBg]} />
      <Pressable
        style={[styles.rectanglePressable, styles.ticketDetailInnerBg]}
        onPress={() => navigation.navigate("Map1")}
      />
      <Text style={styles.trackBus}>TRACK BUS</Text>
      <Text style={styles.sat1stJan}>Sat, 1st Jan, 2024, 6.30AM</Text>
      <Text style={styles.prakhar}>Prakhar</Text>
      <Text style={[styles.seatsSeatNo, styles.ba123Typo]}>{`2 seats 
Seat No. 8 & 9`}</Text>
      <Text style={[styles.ba123, styles.ba123Typo]}>BA123</Text>
      <Image
        style={styles.paid1Icon}
        contentFit="cover"
        source={require("../assets/paid-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 48,
    width: 48,
    top: 781,
    position: "absolute",
  },
  ticketPosition: {
    width: 349,
    top: 126,
    left: 20,
  },
  ticketDetailInnerBg: {
    backgroundColor: Color.colorSlateblue_100,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  ba123Typo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 321,
  },
  ticketDetailChild: {
    top: 768,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    position: "absolute",
  },
  icons8Search25: {
    top: 788,
    width: 49,
    height: 41,
    left: 20,
    position: "absolute",
  },
  icons8MenuSquared49: {
    left: 171,
  },
  yourTicket: {
    top: 48,
    left: 98,
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    width: 242,
    height: 78,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  ticketDetailItem: {
    backgroundColor: Color.colorWhite,
    height: 316,
    borderRadius: Border.br_lg,
    width: 349,
    top: 126,
    position: "absolute",
  },
  ticketDetailInner: {
    height: 74,
    width: 349,
    top: 126,
    left: 20,
    backgroundColor: Color.colorSlateblue_100,
  },
  rectanglePressable: {
    top: 346,
    width: 322,
    height: 76,
    left: 35,
  },
  trackBus: {
    top: 359,
    left: 84,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray_100,
    textAlign: "center",
    width: 215,
    height: 88,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  sat1stJan: {
    top: 151,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorWhite,
    width: 266,
    height: 24,
    left: 38,
    textAlign: "left",
    position: "absolute",
  },
  prakhar: {
    color: Color.colorSlateblue_100,
    width: 204,
    height: 64,
    fontSize: FontSize.size_5xl,
    top: 217,
    left: 38,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  seatsSeatNo: {
    top: 257,
    width: 222,
    height: 62,
    left: 35,
  },
  ba123: {
    left: 261,
    width: 157,
    height: 52,
    top: 217,
    color: Color.colorDimgray_100,
  },
  paid1Icon: {
    top: 269,
    left: 274,
    width: 60,
    height: 60,
    position: "absolute",
  },
  ticketDetail: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default TicketDetail;
