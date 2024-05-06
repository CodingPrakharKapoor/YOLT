import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Payment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.payment}>
      <View style={[styles.paymentChild, styles.lineViewPosition]} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("PaymentMethod")}
      >
        <Text style={styles.text}>←</Text>
      </Pressable>
      <Text style={[styles.payment1, styles.rs24000Typo]}>Payment</Text>
      <View style={styles.paymentItem} />
      <View style={styles.paymentInner} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={styles.paymentChild1} />
      <View style={[styles.paymentChild2, styles.rectangleViewLayout]} />
      <Image
        style={styles.visa2Icon}
        contentFit="cover"
        source={require("../assets/visa-2.png")}
      />
      <Text style={[styles.cardNumber, styles.cardTypo]}>Card Number</Text>
      <Text style={[styles.cardHolder, styles.cardTypo]}>Card Holder</Text>
      <Text style={styles.vcc}>VCC</Text>
      <Text style={[styles.validUntil, styles.cardTypo]}>Valid Until</Text>
      <View style={[styles.paymentChild3, styles.paymentPosition]} />
      <Text style={[styles.totalPaymentRsContainer, styles.paymentFlexBox]}>
        <Text style={styles.totalPayment}>{`Total Payment:
`}</Text>
        <Text style={styles.rs24000Typo}>Rs. 240.00</Text>
      </Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <Text style={[styles.pleaseFillThe, styles.pleaseFillThePosition]}>
        please fill the with valid information.
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>12345698</Text>
      <Text style={[styles.prakhar, styles.text4Typo]}>Prakhar</Text>
      <Text style={[styles.text2, styles.textTypo]}>12</Text>
      <Text style={[styles.text3, styles.textTypo]}>2025</Text>
      <Text style={[styles.text4, styles.text4Typo]}>5699</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.pleaseFillThePosition]}
        onPress={() => navigation.navigate("Success")}
      />
      <Text style={[styles.payment2, styles.paymentFlexBox]}>{`Payment
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lineViewPosition: {
    left: 14,
    position: "absolute",
  },
  rs24000Typo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    color: Color.colorSlateblue_100,
  },
  rectangleViewLayout: {
    width: 144,
    top: 412,
    height: 42,
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_400,
  },
  cardTypo: {
    height: 36,
    width: 254,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  paymentPosition: {
    left: 11,
    position: "absolute",
  },
  paymentFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  pleaseFillThePosition: {
    left: 33,
    position: "absolute",
  },
  textTypo: {
    height: 32,
    width: 153,
    color: Color.colorGray_400,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  text4Typo: {
    left: 55,
    height: 32,
    width: 153,
    color: Color.colorGray_400,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  paymentChild: {
    top: 251,
    borderRadius: 31,
    backgroundColor: "#fffefe",
    width: 362,
    height: 453,
  },
  text: {
    fontSize: FontSize.size_17xl,
    width: 73,
    height: 49,
    textAlign: "center",
    color: Color.colorSlateblue_100,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  pressable: {
    left: 0,
    top: 21,
    position: "absolute",
  },
  payment1: {
    width: 394,
    height: 70,
    left: 11,
    position: "absolute",
    textAlign: "center",
    top: 21,
  },
  paymentItem: {
    top: 311,
    height: 43,
    width: 315,
    borderRadius: Border.br_mini,
    left: 35,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_400,
  },
  paymentInner: {
    top: 516,
    height: 42,
    width: 315,
    borderRadius: Border.br_mini,
    left: 35,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_400,
  },
  rectangleView: {
    left: 35,
    width: 144,
    top: 412,
  },
  paymentChild1: {
    top: 619,
    width: 171,
    height: 46,
    borderRadius: Border.br_mini,
    left: 35,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_400,
  },
  paymentChild2: {
    left: 206,
  },
  visa2Icon: {
    top: 317,
    left: 52,
    width: 38,
    height: 31,
    position: "absolute",
  },
  cardNumber: {
    top: 281,
    left: -1,
  },
  cardHolder: {
    top: 488,
    left: -8,
  },
  vcc: {
    top: 592,
    left: -51,
    height: 35,
    width: 254,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  validUntil: {
    top: 383,
    left: -21,
  },
  paymentChild3: {
    top: 63,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    width: 365,
    height: 176,
  },
  totalPayment: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  totalPaymentRsContainer: {
    top: 82,
    left: 30,
    width: 356,
    height: 97,
  },
  lineView: {
    top: 166,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderTopWidth: 1,
    width: 361,
    height: 1,
  },
  pleaseFillThe: {
    top: 179,
    color: Color.colorDimgray_200,
    width: 338,
    height: 102,
    fontSize: FontSize.size_lg,
    left: 33,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  text1: {
    top: 320,
    left: 118,
  },
  prakhar: {
    top: 526,
  },
  text2: {
    top: 422,
    left: 50,
  },
  text3: {
    top: 420,
    left: 224,
  },
  text4: {
    top: 633,
  },
  rectanglePressable: {
    top: 743,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorIndigo,
    width: 322,
    height: 57,
  },
  payment2: {
    top: 755,
    left: 135,
    color: Color.colorWhite,
    width: 292,
    height: 34,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  payment: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_400,
  },
});

export default Payment;
