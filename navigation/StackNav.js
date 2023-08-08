import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScanToPay from "../screens/subScreens/ScanToPay";
import Splash from "../screens/mainScreens/Splash";
import BottomTab from '../navigation/BottomTab';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash}options={{headerShown: false}}/>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown: false}}/>
        <Stack.Screen name="ScanToPay" component={ScanToPay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
