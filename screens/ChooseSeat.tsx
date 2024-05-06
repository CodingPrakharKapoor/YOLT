import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ChooseSeat = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chooseSeat}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("BusInfo")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>←</Text>
      </Pressable>
      <Text style={[styles.chooseSeat1, styles.bookNowTypo]}>Choose Seat</Text>
      <View style={[styles.chooseSeatChild, styles.chooseChildLayout8]} />
      <View style={[styles.chooseSeatItem, styles.chooseChildLayout8]} />
      <View style={[styles.chooseSeatInner, styles.chooseChildLayout7]} />
      <View style={[styles.rectangleView, styles.chooseChildLayout7]} />
      <View style={[styles.chooseSeatChild1, styles.chooseChildLayout6]} />
      <View style={[styles.chooseSeatChild2, styles.chooseChildLayout6]} />
      <View style={[styles.chooseSeatChild3, styles.chooseChildLayout5]} />
      <View style={[styles.chooseSeatChild4, styles.chooseChildLayout5]} />
      <View style={[styles.chooseSeatChild5, styles.chooseChildLayout4]} />
      <View style={[styles.chooseSeatChild6, styles.chooseChildLayout4]} />
      <View style={[styles.chooseSeatChild7, styles.chooseChildLayout3]} />
      <View style={[styles.chooseSeatChild8, styles.chooseChildLayout3]} />
      <View style={[styles.chooseSeatChild9, styles.chooseChildLayout2]} />
      <View style={[styles.chooseSeatChild10, styles.chooseChildLayout8]} />
      <View style={[styles.chooseSeatChild11, styles.chooseChildBorder]} />
      <View style={[styles.chooseSeatChild12, styles.chooseChildLayout2]} />
      <View style={styles.chooseSeatChild13} />
      <View style={[styles.chooseSeatChild14, styles.chooseChildLayout8]} />
      <View style={[styles.chooseSeatChild15, styles.chooseChildLayout8]} />
      <View style={[styles.chooseSeatChild16, styles.chooseChildLayout7]} />
      <View style={[styles.chooseSeatChild17, styles.chooseChildLayout7]} />
      <View style={[styles.chooseSeatChild18, styles.chooseChildLayout6]} />
      <View style={[styles.chooseSeatChild19, styles.chooseChildLayout6]} />
      <View style={[styles.chooseSeatChild20, styles.chooseChildBg]} />
      <View style={[styles.chooseSeatChild21, styles.chooseChildBg]} />
      <View style={[styles.chooseSeatChild22, styles.chooseChildBg]} />
      <View style={[styles.chooseSeatChild23, styles.chooseChildLayout4]} />
      <View style={[styles.chooseSeatChild24, styles.chooseChildLayout4]} />
      <View style={[styles.chooseSeatChild25, styles.chooseChildLayout]} />
      <View style={[styles.chooseSeatChild26, styles.chooseChildLayout]} />
      <View style={[styles.chooseSeatChild27, styles.chooseChildLayout2]} />
      <View style={[styles.chooseSeatChild28, styles.chooseChildLayout2]} />
      <Text style={[styles.reserved, styles.reservedTypo]}>Reserved</Text>
      <Text style={[styles.available, styles.reservedTypo]}>Available</Text>
      <Text style={[styles.selectedSeat, styles.reservedTypo]}>
        Selected Seat
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Receipt")}
      />
      <Text style={[styles.bookNow, styles.bookNowTypo]}>Book Now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.colorSlateblue_100,
  },
  bookNowTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  chooseChildLayout8: {
    height: 38,
    width: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseChildLayout7: {
    top: 191,
    backgroundColor: Color.colorSilver_100,
    height: 38,
    width: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseChildLayout6: {
    top: 262,
    height: 38,
    width: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseChildLayout5: {
    top: 333,
    backgroundColor: Color.colorSilver_100,
    height: 38,
    width: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseChildLayout4: {
    top: 396,
    height: 38,
    width: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseChildLayout3: {
    top: 467,
    backgroundColor: Color.colorSilver_100,
    height: 38,
    width: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseChildLayout2: {
    top: 530,
    height: 38,
    width: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseChildBorder: {
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
  },
  chooseChildBg: {
    backgroundColor: Color.colorSlateblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseChildLayout: {
    top: 459,
    height: 38,
    width: 40,
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  reservedTypo: {
    height: 40,
    width: 125,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_lg,
    top: 671,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_17xl,
    width: 73,
    height: 49,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorSlateblue_100,
  },
  pressable: {
    left: 0,
    top: 21,
    position: "absolute",
  },
  chooseSeat1: {
    left: 11,
    fontSize: FontSize.size_11xl,
    width: 394,
    height: 70,
    textAlign: "center",
    color: Color.colorSlateblue_100,
    top: 21,
  },
  chooseSeatChild: {
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    left: 40,
    top: 120,
    width: 40,
    backgroundColor: Color.colorWhite,
  },
  chooseSeatItem: {
    left: 104,
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    top: 120,
    width: 40,
    backgroundColor: Color.colorWhite,
  },
  chooseSeatInner: {
    backgroundColor: Color.colorSilver_100,
    left: 40,
  },
  rectangleView: {
    backgroundColor: Color.colorSilver_100,
    left: 104,
  },
  chooseSeatChild1: {
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    left: 40,
    backgroundColor: Color.colorWhite,
  },
  chooseSeatChild2: {
    left: 104,
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  chooseSeatChild3: {
    left: 40,
  },
  chooseSeatChild4: {
    left: 104,
  },
  chooseSeatChild5: {
    backgroundColor: Color.colorSilver_100,
    left: 40,
  },
  chooseSeatChild6: {
    backgroundColor: Color.colorSilver_100,
    left: 104,
  },
  chooseSeatChild7: {
    left: 40,
  },
  chooseSeatChild8: {
    left: 104,
  },
  chooseSeatChild9: {
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    left: 40,
    backgroundColor: Color.colorWhite,
  },
  chooseSeatChild10: {
    top: 583,
    left: 310,
    backgroundColor: Color.colorSilver_100,
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
  },
  chooseSeatChild11: {
    top: 674,
    left: 22,
    width: 18,
    height: 17,
    backgroundColor: Color.colorSilver_100,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    position: "absolute",
  },
  chooseSeatChild12: {
    left: 104,
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  chooseSeatChild13: {
    left: 132,
    width: 20,
    height: 19,
    top: 671,
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  chooseSeatChild14: {
    left: 246,
    backgroundColor: Color.colorSilver_100,
    top: 120,
    width: 40,
  },
  chooseSeatChild15: {
    left: 310,
    backgroundColor: Color.colorSilver_100,
    top: 120,
    width: 40,
  },
  chooseSeatChild16: {
    left: 246,
    backgroundColor: Color.colorSilver_100,
  },
  chooseSeatChild17: {
    left: 310,
    backgroundColor: Color.colorSilver_100,
  },
  chooseSeatChild18: {
    left: 246,
    backgroundColor: Color.colorSilver_100,
  },
  chooseSeatChild19: {
    left: 310,
    backgroundColor: Color.colorSilver_100,
  },
  chooseSeatChild20: {
    top: 325,
    backgroundColor: Color.colorSlateblue_100,
    height: 38,
    width: 40,
    left: 246,
  },
  chooseSeatChild21: {
    top: 325,
    backgroundColor: Color.colorSlateblue_100,
    height: 38,
    width: 40,
    left: 310,
  },
  chooseSeatChild22: {
    top: 676,
    width: 14,
    height: 13,
    left: 246,
  },
  chooseSeatChild23: {
    left: 246,
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  chooseSeatChild24: {
    left: 310,
    borderWidth: 5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  chooseSeatChild25: {
    left: 246,
  },
  chooseSeatChild26: {
    left: 310,
  },
  chooseSeatChild27: {
    left: 246,
    backgroundColor: Color.colorSilver_100,
  },
  chooseSeatChild28: {
    left: 310,
    backgroundColor: Color.colorSilver_100,
  },
  reserved: {
    left: 20,
  },
  available: {
    left: 129,
  },
  selectedSeat: {
    left: 260,
  },
  rectanglePressable: {
    top: 755,
    left: 34,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorIndigo,
    width: 322,
    height: 57,
    position: "absolute",
  },
  bookNow: {
    top: 767,
    left: 138,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "left",
    width: 292,
    height: 34,
  },
  chooseSeat: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ChooseSeat;
