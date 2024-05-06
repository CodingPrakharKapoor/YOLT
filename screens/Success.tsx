import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Success = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.success}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("TicketDetail")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>←</Text>
      </Pressable>
      <Image
        style={styles.passengersWaitingBusCityBuIcon}
        contentFit="cover"
        source={require("../assets/passengerswaitingbuscitybusstopvectorcitypublictransportinfrastructurecitizentouriststransportationflat154770640-1.png")}
      />
      <Text style={[styles.youHaveBooked, styles.viewTicketTypo]}>
        You have booked your bus seat.
      </Text>
      <Pressable
        style={styles.successChild}
        onPress={() => navigation.navigate("TicketDetail")}
      />
      <Text style={[styles.viewTicket, styles.viewTicketTypo]}>
        VIEW TICKET
      </Text>
      <Text style={[styles.enjoyYourBus, styles.textFlexBox]}>
        Enjoy your bus ride with us. Thank you!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.colorSlateblue_100,
  },
  viewTicketTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 73,
    height: 49,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
  },
  pressable: {
    left: 4,
    top: 43,
    position: "absolute",
  },
  passengersWaitingBusCityBuIcon: {
    top: 144,
    left: 1,
    width: 386,
    height: 174,
    position: "absolute",
  },
  youHaveBooked: {
    top: 370,
    left: 47,
    width: 295,
    height: 145,
    color: Color.colorSlateblue_100,
    fontWeight: "700",
    fontSize: FontSize.size_17xl,
  },
  successChild: {
    top: 536,
    left: 35,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorSlateblue_100,
    width: 322,
    height: 76,
    position: "absolute",
  },
  viewTicket: {
    top: 549,
    left: 84,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray_100,
    width: 215,
    height: 88,
  },
  enjoyYourBus: {
    top: 479,
    left: 21,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nunitoRegular,
    width: 346,
    height: 121,
    position: "absolute",
  },
  success: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Success;
