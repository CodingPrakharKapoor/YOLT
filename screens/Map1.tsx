import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Map1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.map}>
      <View style={[styles.mapChild, styles.mapChildPosition]} />
      <Image
        style={styles.icons8Search25}
        contentFit="cover"
        source={require("../assets/icons8search2-5.png")}
      />
      <Pressable
        style={[styles.icons8MenuSquared482, styles.icons8Position]}
        onPress={() => navigation.navigate("TicketDetail")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8menusquared48-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.icons8User25, styles.icons8Position]}
        onPress={() => navigation.navigate("IPhone1313Pro")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8user2-5.png")}
        />
      </Pressable>
      <Image
        style={[styles.whatsappImage20240413At2, styles.mapChildPosition]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240413-at-2249-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapChildPosition: {
    left: 0,
    position: "absolute",
  },
  icons8Position: {
    top: 781,
    position: "absolute",
  },
  mapChild: {
    top: 768,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 391,
    height: 1,
  },
  icons8Search25: {
    top: 788,
    left: 20,
    width: 49,
    height: 41,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8MenuSquared482: {
    left: 171,
    width: 48,
    height: 48,
  },
  icons8User25: {
    left: 321,
    width: 46,
    height: 46,
  },
  whatsappImage20240413At2: {
    top: -66,
    width: 390,
    height: 834,
  },
  map: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Map1;
