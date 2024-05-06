import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Prakhar = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.prakhar}>
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
      <Pressable
        style={styles.prakharChild}
        onPress={() => navigation.navigate("WelcomePage")}
      />
      <Text style={styles.logOut}>LOG OUT</Text>
      <View style={styles.prakharItem} />
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
      <Pressable
        style={styles.icons8MenuSquared482}
        onPress={() => navigation.navigate("Passengers")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8menusquared48-1.png")}
        />
      </Pressable>
      <Image
        style={styles.icons8User25}
        contentFit="cover"
        source={require("../assets/icons8user2-5.png")}
      />
      <Text style={[styles.homeAddress, styles.nameTypo]}>Home Address</Text>
      <Text style={styles.mathura}>Mathura</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={styles.phoneNumber}>Phone number</Text>
      <Text style={[styles.prakharKapoor, styles.prakharTypo]}>
        Prakhar Kapoor
      </Text>
      <Text style={[styles.username, styles.nameTypo]}>Username</Text>
      <Text style={[styles.prakhar1, styles.prakharTypo]}>prakhar</Text>
      <Text style={styles.text1}>9825631478</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pressablePosition: {
    left: -6,
    position: "absolute",
  },
  nameTypo: {
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
  prakharTypo: {
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
  information: {
    top: 24,
    left: 60,
    width: 292,
    height: 91,
    textAlign: "left",
    color: Color.colorSlateblue_100,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    width: 73,
    height: 49,
    textAlign: "center",
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
  prakharChild: {
    top: 452,
    left: 14,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorSlateblue_100,
    width: 349,
    height: 74,
    position: "absolute",
  },
  logOut: {
    top: 468,
    left: 106,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray_100,
    width: 160,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  prakharItem: {
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
  homeAddress: {
    top: 296,
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
  prakharKapoor: {
    top: 188,
  },
  username: {
    top: 88,
  },
  prakhar1: {
    top: 128,
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
  prakhar: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Prakhar;
