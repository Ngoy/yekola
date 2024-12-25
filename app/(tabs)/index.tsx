import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.main}> Listes des produits</Text>

      <View style={styles.pictureBox}>
        <Image
          style={styles.picture}
          source={{
            uri: "https://i.pinimg.com/736x/e2/cb/29/e2cb29cd11f0ea5513b4dc0cc9842087.jpg",
          }}
        />
      </View>

      <View style={styles.box}>
        <View style={styles.item1}> </View>
        <View style={styles.item2}></View>
        <View style={styles.item3}> </View>
        <View style={styles.item4}></View>
      </View>

      <View style={styles.box}>
        <View style={styles.item1}> </View>
        <View style={styles.item2}></View>
        <View style={styles.item3}> </View>
        <View style={styles.item4}></View>
      </View>

      <View style={styles.box}>
        <View style={styles.item1}> </View>
        <View style={styles.item2}></View>
        <View style={styles.item3}> </View>
        <View style={styles.item4}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C41C57",
    padding: 10,
  },
  box: {
    backgroundColor: "white",
    height: 400,
    width: "auto",
    margin: 10,
    // padding: 20,
    // marginRight : 20,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item1: {
    backgroundColor: "blue",
    height: 100,
    width: 50,
  },

  item2: {
    backgroundColor: "red",
    height: 100,
    width: 50,
  },
  item3: {
    backgroundColor: "yellow",
    height: 100,
    width: 50,
  },
  item4: {
    backgroundColor: "green",
    height: 100,
    width: 50,
  },
  main: {
    backgroundColor: "white",
    fontWeight: 900,
    fontSize: 30,
    textAlign: "center",
    color: "blue",
    textTransform: "capitalize",
  },
  pictureBox: {
    backgroundColor: "blue",
    width: "auto",
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },

  picture: {
    // width: 150,
    // height: 150,
    width: "auto",
    height: "100%",
    resizeMode: "stretch",
  },
});

export default App;