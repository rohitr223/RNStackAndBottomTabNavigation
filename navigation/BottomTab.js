import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { scale, moderateScale } from "react-native-size-matters";
// screens
import Home from "../screens/mainScreens/Home";
import Shop from "../screens/mainScreens/Shop";
import Wealth from "../screens/mainScreens/Wealth";
import History from "../screens/mainScreens/History";
import Account from "../screens/mainScreens/Account";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "purple",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            borderWidth: 0,
            bottom: moderateScale(30),
            marginHorizontal: moderateScale(10),
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
              style={[styles.tabBarButton,  focused ? { transform: [{ scale: 1.3 }], backgroundColor: "purple" } : {backgroundColor: "#EEE"}]}
              >
                <Image
                  source={require("../assets/icons/home.png")}
                  style={[
                    {
                      height: scale(25),
                      width: scale(25),
                      tintColor: color,
                    },
                    focused ? { transform: [{ scale: 1.3 }] } : null,
                  ]}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
              style={[styles.tabBarButton,  focused ? { transform: [{ scale: 1.3 }], backgroundColor: "purple" } : {backgroundColor: "#EEE"}]}
              >
                <Image
                  source={require("../assets/icons/store.png")}
                  style={[
                    {
                      height: scale(25),
                      width: scale(25),
                      tintColor: color,
                    },
                    focused ? { transform: [{ scale: 1.3 }] } : null,
                  ]}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Wealth"
          component={Wealth}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
              style={[styles.tabBarButton,  focused ? { transform: [{ scale: 1.3 }], backgroundColor: "purple" } : {backgroundColor: "#EEE"}]}
              >
                <Image
                  source={require("../assets/icons/wallet.png")}
                  style={[
                    {
                      height: scale(25),
                      width: scale(25),
                      tintColor: color,
                    },
                    focused ? { transform: [{ scale: 1.3 }] } : null,
                  ]}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
              style={[styles.tabBarButton,  focused ? { transform: [{ scale: 1.3 }], backgroundColor: "purple" } : {backgroundColor: "#EEE"}]}
              >
                <Image
                  source={require("../assets/icons/history.png")}
                  style={[
                    {
                      height: scale(25),
                      width: scale(25),
                      tintColor: color,
                    },
                    focused ? { transform: [{ scale: 1.3 }] } : null,
                  ]}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
              style={[styles.tabBarButton,  focused ? { transform: [{ scale: 1.3 }], backgroundColor: "purple" } : {backgroundColor: "#EEE"}]}
              >
                <Image
                  source={require("../assets/icons/account.png")}
                  style={[
                    {
                      height: scale(30),
                      width: scale(30),
                      tintColor: color,
                    },
                    focused ? { transform: [{ scale: 1.3 }] } : null,
                  ]}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
    tabBarButton:{
        height: scale(50),
        width: scale(50),
        borderRadius: moderateScale(30),
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: '20%',
    },
})