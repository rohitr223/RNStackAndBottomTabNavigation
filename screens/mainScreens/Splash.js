import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("BottomTab");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(35),
    fontWeight: "700",
  },
});
