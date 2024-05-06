import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Receipt = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.receipt}>
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.navigate("ChooseSeat")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>←</Text>
      </Pressable>
      <Text style={[styles.completeBooking, styles.totalTypo]}>
        Complete Booking
      </Text>
      <View style={[styles.receiptChild, styles.receiptLayout]} />
      <View style={[styles.receiptItem, styles.receiptLayout]} />
      <Text style={[styles.ticketBusNo, styles.ticketFlexBox]}>{`Ticket:
Bus No:
Seat No.:`}</Text>
      <Text style={[styles.seatsBa1238, styles.ticketFlexBox]}>{`2 Seats
BA123
8 & 9`}</Text>
      <Text style={[styles.total, styles.ticketFlexBox]}>Total:</Text>
      <Text style={[styles.rs24000, styles.ticketFlexBox]}>RS. 240.00</Text>
      <Text style={[styles.perTicketIs, styles.ticketFlexBox]}>
        Per ticket is Rs.120.00
      </Text>
      <Pressable
        style={styles.receiptInner}
        onPress={() => navigation.navigate("PaymentMethod")}
      />
      <Text style={[styles.continueToPayment, styles.ticketFlexBox]}>
        Continue to payment
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pressablePosition: {
    top: 21,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.colorSlateblue_100,
  },
  totalTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  receiptLayout: {
    width: 359,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  ticketFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_17xl,
    width: 73,
    height: 49,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  pressable: {
    left: 0,
  },
  completeBooking: {
    width: 394,
    height: 70,
    fontSize: FontSize.size_11xl,
    left: 11,
    textAlign: "center",
    color: Color.colorSlateblue_100,
    top: 21,
    position: "absolute",
  },
  receiptChild: {
    top: 91,
    left: 15,
    height: 211,
  },
  receiptItem: {
    top: 323,
    height: 85,
    left: 11,
  },
  ticketBusNo: {
    top: 136,
    width: 196,
    height: 66,
    color: Color.colorBlack,
    textAlign: "left",
    left: 35,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  seatsBa1238: {
    top: 139,
    left: 231,
    color: "#565353",
    width: 135,
    height: 132,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  total: {
    top: 346,
    width: 156,
    height: 50,
    color: Color.colorBlack,
    textAlign: "left",
    left: 35,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  rs24000: {
    top: 348,
    left: 195,
    width: 163,
    height: 56,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    color: Color.colorSlateblue_100,
    textAlign: "left",
  },
  perTicketIs: {
    top: 422,
    left: 30,
    fontSize: FontSize.size_lg,
    fontWeight: "300",
    fontFamily: FontFamily.nunitoLight,
    width: 336,
    height: 54,
    color: Color.colorBlack,
    textAlign: "left",
  },
  receiptInner: {
    top: 708,
    left: 37,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorIndigo,
    width: 322,
    height: 57,
    position: "absolute",
  },
  continueToPayment: {
    top: 720,
    left: 82,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    width: 292,
    height: 34,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  receipt: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Receipt;
