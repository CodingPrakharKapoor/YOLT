import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Akshat = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.akshat}>
      <Text style={styles.information}> Information</Text>
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.navigate("Passengers")}
      >
        <Text style={styles.text}>←</Text>
      </Pressable>
      <Image
        style={[
          styles.peopleWavingHandIllustratioIcon,
          styles.pressablePosition,
        ]}
        contentFit="cover"
        source={require("../assets/peoplewavinghandillustrationconcept-5268329825-1.png")}
      />
      <View style={styles.akshatChild} />
      <Pressable
        style={styles.icons8Search25}
        onPress={() => navigation.navigate("Passengers")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8search2-5.png")}
        />
      </Pressable>
      <Image
        style={styles.icons8MenuSquared482}
        contentFit="cover"
        source={require("../assets/icons8menusquared48-1.png")}
      />
      <Pressable
        style={styles.icons8User25}
        onPress={() => navigation.navigate("Prakhar")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8user2-5.png")}
        />
      </Pressable>
      <Text style={[styles.pickUpLocation, styles.locationTypo]}>
        Pick up Location
      </Text>
      <Image
        style={styles.whatsappImage20240413At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-1255-3.png")}
      />
      <Text style={styles.mathura}>Mathura</Text>
      <Text style={[styles.name, styles.locationTypo]}>Name</Text>
      <Text style={styles.phoneNumber}>Phone number</Text>
      <Text style={[styles.akshatSrivastava, styles.akshatTypo]}>
        Akshat Srivastava
      </Text>
      <Text style={[styles.username, styles.locationTypo]}>Username</Text>
      <Text style={[styles.akshat1, styles.akshatTypo]}>akshat</Text>
      <Text style={[styles.dropLocation, styles.locationTypo]}>
        Drop Location
      </Text>
      <Text style={[styles.noida, styles.noneTypo]}>Noida</Text>
      <Text style={[styles.disability, styles.locationTypo]}>Disability</Text>
      <Text style={[styles.none, styles.noneTypo]}>None</Text>
      <Text style={styles.text1}>9825631478</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pressablePosition: {
    left: -6,
    position: "absolute",
  },
  locationTypo: {
    height: 37,
    width: 201,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    left: 22,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  akshatTypo: {
    height: 47,
    width: 341,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: 22,
    textAlign: "left",
    position: "absolute",
  },
  noneTypo: {
    left: 26,
    height: 47,
    width: 341,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  information: {
    top: 24,
    left: 32,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    width: 292,
    height: 91,
    textAlign: "left",
    color: Color.colorSlateblue_100,
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  text: {
    textAlign: "center",
    width: 73,
    height: 49,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    color: Color.colorSlateblue_100,
    fontSize: FontSize.size_17xl,
  },
  pressable: {
    top: 25,
  },
  peopleWavingHandIllustratioIcon: {
    top: 536,
    width: 399,
    height: 265,
  },
  akshatChild: {
    top: 768,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Search25: {
    left: 20,
    top: 788,
    width: 49,
    height: 41,
    position: "absolute",
  },
  icons8MenuSquared482: {
    left: 171,
    width: 48,
    height: 48,
    top: 781,
    position: "absolute",
  },
  icons8User25: {
    left: 321,
    width: 46,
    height: 46,
    top: 781,
    position: "absolute",
  },
  pickUpLocation: {
    top: 296,
  },
  whatsappImage20240413At1: {
    top: 20,
    left: 295,
    borderRadius: Border.br_xl,
    width: 85,
    height: 84,
    position: "absolute",
  },
  mathura: {
    top: 334,
    width: 341,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: 22,
    height: 48,
    textAlign: "left",
    position: "absolute",
  },
  name: {
    top: 153,
  },
  phoneNumber: {
    top: 223,
    width: 287,
    height: 65,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    left: 22,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  akshatSrivastava: {
    top: 188,
  },
  username: {
    top: 88,
  },
  akshat1: {
    top: 128,
  },
  dropLocation: {
    top: 361,
  },
  noida: {
    top: 399,
  },
  disability: {
    top: 421,
  },
  none: {
    top: 459,
  },
  text1: {
    top: 266,
    width: 284,
    height: 42,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: 22,
    textAlign: "left",
    position: "absolute",
  },
  akshat: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Akshat;
