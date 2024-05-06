import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const WhatsAppImage20240413At = () => {
  return (
    <ImageBackground
      style={styles.whatsappImage20240413At1}
      resizeMode="cover"
      source={require("../assets/whatsappimage20240413at12553.png")}
    />
  );
};

const styles = StyleSheet.create({
  whatsappImage20240413At1: {
    borderRadius: Border.br_xl,
    width: 193,
    height: 194,
  },
});

export default WhatsAppImage20240413At;
