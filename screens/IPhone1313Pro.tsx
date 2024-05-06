import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1313Pro = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1313Pro1}>
      <Text style={styles.yourInformation}>Your Information</Text>
      <Image
        style={styles.peopleWavingHandIllustratioIcon}
        contentFit="cover"
        source={require("../assets/peoplewavinghandillustrationconcept-5268329825-1.png")}
      />
      <View style={styles.iphone1313Pro1Child} />
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
      <Pressable
        style={styles.icons8MenuSquared482}
        onPress={() => navigation.navigate("TicketDetail")}
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
      <Text style={[styles.username, styles.nameTypo]}>Username</Text>
      <Pressable
        style={styles.iphone1313Pro1Item}
        onPress={() => navigation.navigate("WelcomePage")}
      />
      <Text style={styles.logOut}>LOG OUT</Text>
      <Text style={styles.prakhar}>prakhar</Text>
      <Text style={[styles.firstName, styles.nameTypo]}>First Name</Text>
      <Text style={styles.phoneNumber}>Phone number</Text>
      <Text style={[styles.prakhar1, styles.kapoorTypo]}>Prakhar</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>Last Name</Text>
      <Text style={[styles.kapoor, styles.kapoorTypo]}>Kapoor</Text>
      <Text style={styles.text}>9825631478</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    height: 37,
    width: 201,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 22,
    textAlign: "left",
    position: "absolute",
  },
  kapoorTypo: {
    height: 47,
    width: 341,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  yourInformation: {
    top: 60,
    left: 52,
    fontSize: FontSize.size_17xl,
    color: Color.colorSlateblue_100,
    width: 292,
    height: 91,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  peopleWavingHandIllustratioIcon: {
    top: 536,
    left: -6,
    width: 399,
    height: 265,
    position: "absolute",
  },
  iphone1313Pro1Child: {
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
  username: {
    top: 381,
  },
  iphone1313Pro1Item: {
    top: 471,
    left: 14,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorSlateblue_100,
    width: 349,
    height: 74,
    position: "absolute",
  },
  logOut: {
    top: 488,
    left: 106,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray_100,
    textAlign: "center",
    width: 160,
    height: 23,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  prakhar: {
    top: 418,
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
  firstName: {
    top: 148,
  },
  phoneNumber: {
    top: 296,
    width: 287,
    height: 65,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 22,
    textAlign: "left",
    position: "absolute",
  },
  prakhar1: {
    top: 188,
    left: 22,
    height: 47,
  },
  lastName: {
    top: 220,
  },
  kapoor: {
    top: 259,
    left: 27,
  },
  text: {
    top: 339,
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
  iphone1313Pro1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1313Pro;
