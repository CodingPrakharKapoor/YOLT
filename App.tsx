const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OpeningScreen from "./screens/OpeningScreen";
import HomePage from "./screens/HomePage";
import WelcomePage from "./screens/WelcomePage";
import LoginAsk from "./screens/LoginAsk";
import Login from "./screens/Login";
import LoginBus from "./screens/LoginBus";
import Signup from "./screens/Signup";
import Search from "./screens/Search";
import BusInfo from "./screens/BusInfo";
import ChooseSeat from "./screens/ChooseSeat";
import Receipt from "./screens/Receipt";
import PaymentMethod from "./screens/PaymentMethod";
import Payment from "./screens/Payment";
import Success from "./screens/Success";
import NdHome from "./screens/NdHome";
import TicketDetail from "./screens/TicketDetail";
import Oops from "./screens/Oops";
import IPhone1313Pro from "./screens/IPhone1313Pro";
import Map1 from "./screens/Map1";
import Akshat from "./screens/Akshat";
import Prakhar from "./screens/Prakhar";
import Passengers from "./screens/Passengers";
import WhatsAppImage20240413At from "./components/WhatsAppImage20240413At";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Light": require("./assets/fonts/Nunito-Light.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="OpeningScreen"
              component={OpeningScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginAsk"
              component={LoginAsk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginBus"
              component={LoginBus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusInfo"
              component={BusInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseSeat"
              component={ChooseSeat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Receipt"
              component={Receipt}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NdHome"
              component={NdHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TicketDetail"
              component={TicketDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Oops"
              component={Oops}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro"
              component={IPhone1313Pro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map1"
              component={Map1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Akshat"
              component={Akshat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Prakhar"
              component={Prakhar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Passengers"
              component={Passengers}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
