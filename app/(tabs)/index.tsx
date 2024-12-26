import React from "react";
import {
  View, Text,Image,StyleSheet,ScrollView,TouchableOpacity,} from "react-native";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1540833024094388227/tob6L9cr_400x400.jpg",
          }}
          style={styles.logo}
        />
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.Lm66TcRRnnFlIO8dYELGxwHaFM?rs=1&pid=ImgDetMain",
          }} // Remplacez par l'URL réelle de l'image
          style={styles.shoeImage}
        />
        
        <Text style={styles.title}>NIKE HYPERCHASE</Text>
        <Text style={styles.subtitle}>Men's Basketball Shoes</Text>

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipiscing elit. Duis at
          malesuada enim, vitae porttitor elit.
        </Text>

        {/* Price */}
        <Text style={styles.price}>125$</Text>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginTop: 65,
  },
  logo: {
    width: 50,
    height: 20,
    resizeMode: "contain",
    marginBottom: 10,
  },
  shoeImage: {
    width: 300,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D5EFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginVertical: 10,
    lineHeight: 20,
  },
  colorOptions: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2D5EFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default App;
