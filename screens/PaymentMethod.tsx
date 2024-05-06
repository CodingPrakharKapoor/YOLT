import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PaymentMethod = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.paymentMethod}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Receipt")}
      >
        <Text style={styles.text}>←</Text>
      </Pressable>
      <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
      <View style={styles.paymentMethodChild} />
      <Text style={styles.totalPaymentRsContainer}>
        <Text style={styles.totalPayment}>{`Total Payment:
`}</Text>
        <Text style={styles.paymentTypo}>Rs. 240.00</Text>
      </Text>
      <View style={styles.paymentMethodItem} />
      <Text style={styles.pleaseSelectOne}>
        please select one of the payment method below
      </Text>
      <Text style={styles.paymentMethod1}>Payment Method</Text>
      <View style={[styles.paymentMethodInner, styles.rectangleViewLayout]} />
      <Text
        style={[styles.creditCard, styles.creditCardTypo]}
      >{`Credit Card           `}</Text>
      <Pressable
        style={[styles.select, styles.selectPosition]}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.select1}>SELECT</Text>
      </Pressable>
      <Image
        style={[styles.icons8DownArrow323, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8downarrow32-3.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.icons8Mastercard481, styles.visa1IconPosition]}
        contentFit="cover"
        source={require("../assets/icons8mastercard48-1.png")}
      />
      <Image
        style={[styles.icons8CreditCard481, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8creditcard48-1.png")}
      />
      <Image
        style={[styles.visa1Icon, styles.visa1IconPosition]}
        contentFit="cover"
        source={require("../assets/visa-1.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.bankTransfer, styles.creditCardTypo]}>
        Bank Transfer
      </Text>
      <Image
        style={[styles.icons8DownArrow324, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8downarrow32-3.png")}
      />
      <View style={[styles.paymentMethodChild1, styles.lineViewLayout]} />
      <Image
        style={styles.icons8GoogleWallet481}
        contentFit="cover"
        source={require("../assets/icons8googlewallet48-1.png")}
      />
      <Image
        style={[styles.icons8BankCards481, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8bankcards48-1.png")}
      />
      <Pressable
        style={[styles.select2, styles.selectPosition]}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.select1}>SELECT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    color: Color.colorSlateblue_100,
  },
  rectangleViewLayout: {
    height: 114,
    width: 357,
    borderRadius: Border.br_lg,
    left: 14,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  creditCardTypo: {
    left: 32,
    height: 36,
    fontSize: FontSize.size_5xl,
    color: Color.colorDimgray_200,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  selectPosition: {
    left: 272,
    position: "absolute",
  },
  icons8Layout: {
    height: 9,
    width: 9,
    left: 342,
    position: "absolute",
  },
  lineViewLayout: {
    width: 358,
    borderColor: Color.colorSilver_100,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 14,
    position: "absolute",
  },
  visa1IconPosition: {
    top: 430,
    position: "absolute",
  },
  icons8Position: {
    left: 87,
    position: "absolute",
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
  payment: {
    width: 394,
    height: 70,
    left: 11,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    top: 21,
    position: "absolute",
  },
  paymentMethodChild: {
    top: 95,
    borderRadius: Border.br_5xl,
    width: 365,
    height: 176,
    backgroundColor: Color.colorWhite,
    left: 11,
    position: "absolute",
  },
  totalPayment: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  totalPaymentRsContainer: {
    top: 114,
    width: 356,
    height: 97,
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  paymentMethodItem: {
    top: 198,
    borderColor: Color.colorDarkgray_100,
    width: 361,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 14,
    position: "absolute",
  },
  pleaseSelectOne: {
    top: 211,
    left: 33,
    width: 338,
    height: 102,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  paymentMethod1: {
    top: 313,
    color: Color.colorBlack,
    width: 230,
    height: 73,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    left: 30,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  paymentMethodInner: {
    top: 365,
  },
  creditCard: {
    top: 370,
    width: 151,
    height: 36,
  },
  select1: {
    fontFamily: FontFamily.nunitoRegular,
    width: 95,
    height: 31,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorSlateblue_100,
  },
  select: {
    top: 375,
  },
  icons8DownArrow323: {
    top: 382,
  },
  lineView: {
    top: 422,
  },
  icons8Mastercard481: {
    left: 36,
    width: 36,
    height: 36,
  },
  icons8CreditCard481: {
    top: 432,
    width: 34,
    height: 34,
  },
  visa1Icon: {
    left: 136,
    width: 38,
    height: 38,
  },
  rectangleView: {
    top: 499,
  },
  bankTransfer: {
    top: 504,
    width: 188,
    height: 36,
  },
  icons8DownArrow324: {
    top: 516,
  },
  paymentMethodChild1: {
    top: 556,
  },
  icons8GoogleWallet481: {
    top: 568,
    left: 44,
    width: 28,
    height: 28,
    position: "absolute",
  },
  icons8BankCards481: {
    top: 566,
    width: 32,
    height: 32,
  },
  select2: {
    top: 512,
  },
  paymentMethod: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PaymentMethod;
